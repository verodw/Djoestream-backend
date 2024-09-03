const {User} = require ('../../models/user');

const findOneById = async (userId) => {
    return await User.findOne({
        where: {id: userId },
        attributes: ['id', 'email', 'username', 'password']
    });
}

const findOneByEmail = async (email) => {
    return await User.findOne({
        where: {email : email},
        attributes: ['id', 'email', 'username', 'password']        
    })
}

const findOneByUsername = async (username) => {
    return await User.findOne({
        where: {username: username},
        attributes: ['id', 'username']
    })
}

const create = async (user) =>{
    return await User.create(user);
}


module.exports = {
    findOneById,
    findOneByEmail,
    findOneByUsername,
    create
}