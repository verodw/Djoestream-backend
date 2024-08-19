const commentController = require('../controller/comment.controller.js');
const commentRouter = require('express').Router();

commentRouter.post('/', commentController.createComment);
commentRouter.put('/:id', commentController.updateComment);
commentRouter.delete('/:id', commentController.deleteCommentById);

module.exports = {
    commentRouter
}