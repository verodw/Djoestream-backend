require('dotenv').config();
const {User} = require('../../models');
const {Op, where} = require('sequelize');
const {v4: uuidv4} = require('uuid');
const {ResponseError} = require('../error/response.error')
const { createUserSchema, loginUserSchema } = require('../joi/user.schema');
const { userRepository } = require('../repository/user.repository');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const {validate} = require('../helper/validation.helper');

const existByUsername = async (username) => {
    const user = await userRepository.findOneByUsername(username);
    if (user) {
        throw new ResponseError(409, "Username already exist")
    }
}

const existByEmail = async (email) => {
    const user = await userRepository.findOneByEmail(email);
    if (user) {
        throw new ResponseError(409, "Email already exist")
    }
}

const register = async (request) => {
    const user = validate(createUserSchema, request);

    await existByUsername(user.username);
    await existByEmail (user.email);

    user.id = uuidv4();
    user.password = user.password 
    
    const createdUser = await userRepository.create(user);
    return await userRepository.findOneInactiveById(createdUser.id);

}

const login = async (request) => {
    const loginRequest = validate(loginUserSchema, request);

    const user = await userRepository.findOneByEmail(loginRequest.email);

    if (!user) {
        throw new ResponseError(401, "Email or password is incorrect");
    }

    const isPasswordValid = bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, "Email or password is incorrect");
    }

    const token = jwt.sign({
        "id": user.id,
        "email": user.email,
        "role": user.role,
        "username": user.username
    }, process.env.SECRET, {expiresIn: '24h'});

    return token;
}

const get = async (userId) => {
    const user = await userRepository.findOneById(userId);
    if (!user) {
        throw new ResponseError(404, "User not found");
    }

    return user;
}

const logout = async (userId) => {
    const user = await userRepository.findOneById(userId);
    if (!user) {
        throw new ResponseError(404, "User not found");
    }

    user.token = null;
    user.updated_at = Date.now();
    user.save();
}

module.exports = {
    register,
    login,
    logout,
    get,
}