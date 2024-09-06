const commentService = require('../service/comment.service');

const createComment = async (req, res, next) => {
    try {
        const commentData = req.body;
        console.log(commentData);
        // const commentResponse = await commentService.create(commentData);
        res.status(201).json(commentResponse);
    } catch (error) {
        next(error);
    }
}

const getCommentById = async (req, res, next) => {
    try  {
        const request  = req.body;
        const loginResponse = await loginService.
        res.status()
    } catch (error) {
        next(error);
    }
}

const deletedCommentById = async (req, res, next) => {
    try {
        const commentId = req.comment.id;
        const deleteResponse = await commentService.deleted(commentId);
        res.status(200).json(deleteResponse);
    } catch (error) {
        next(error);
    }
}

const updateComment = async (req, res, next) => {
    try {
        const commentId = req.params.id;
        const {text} = body.req;
        const updatedComment = await commentService.findByIdAndUpdate(commentId,{ text },{ new: true });
        res.status(200).json(updatedComment);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createComment,
    getCommentById,
    deletedCommentById,
    updateComment
}