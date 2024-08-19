const commentService = require('../service/comment.service');

const createComment = async (req, res, next) => {
    try {
        const commentData = req.body;
        const commentResponse = await commentService.create(commentData);
        res.status(201).json(commentResponse);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createComment,
    login,
    getUsers,
    getUserById,
    deletedUserById
}