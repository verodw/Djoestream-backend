const {Comment, User} = require('../../models');


const findOneById = async (commentId) => {
    return await Comment.findOne({
        where: {id: commentId}
    })

}

const findOneByUserId = async (userId, commentId) =>{
    return await User.findOne({
        where: {
            userId: userId,
            id: commentId
        },
        attributes: ['id', 'userId', 'content', 'createdAt', 'updatedAt'],
        include: [{
            model: User,
            attributes: ['username', 'email'] 
        }]
    });
}

const create = async (comment) => {
    return await Comment.create(comment);
}



module.exports = {
    findOneById,
    findOneByUserId,
    create
}