const jwt = require('jsonwebtoken');
const { ResponseError } = require('../error/response.error');
require('dotenv').config();
const userRepository = require('../repository/user.repository')
const {User} = require('../../models/user')
const {Op, where} = require('sequelize');


const verifyToken = (req, res, next) => {
  // Get token dari header
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    throw new ResponseError(403,"Token is required");
  }

    // Verifikasi token
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid access token' });
    }

    const user = userRepository.findOneById(decoded.id);
    if (!user) {
        return res.status(401).json({message: 'User not found'});
    }

    // decoded user
    req.user = decoded;
    next();
  });
};

module.exports = {
    verifyToken
}



