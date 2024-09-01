const {User} = require ('../../models/user');

const findOneById = async (userId) => {
    return await User.findOne({
        where: {id: userId },
        attributes: ['id', 'email', 'username', 'password']
    });
}

const create = async (user) =>{
    return await User.create(user);
}



module.exports = {
    findOneById,
    create,

}