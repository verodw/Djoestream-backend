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

const updateCommentByCommentId = async (commentId, newContent) => {
    const comment = await Comment.findOne({
        where: {id: commentId}
    });

    comment.content = newContent;
    await comment.save();
    return comment;
}

const deleteCommentById = async (commentId) => {
    const comment = await Comment.findOne({
        where: { id: commentId }
    });
    await comment.destroy();
    return true
}

module.exports = {
    findOneById,
    findOneByUserId,
    create,
    updateCommentByCommentId,
    deleteCommentById
}
