const {commentRepository} = require('../repository/comment.repository');
const {Comment} = require('../../models/comment');
const {Op, where} = require('sequelize');
const {v4: uuidv4} = require('uuid');
const {ResponseError} = require('../error/response.error')
const { createCommentSchema, updateCommentSchema, getCommentValidation } = require('../joi/comment.schema');
const {validate} = require('../joi/joi.validate');
const comment = require('../../models/comment');

const create = async (request) => {
    const comment = validate(createCommentSchema, request);
    await existByCommentId(comment.id);
    comment.id = uuidv4();

    const createdComment = await commentRepository.create(comment);
    return await commentRepository.findOneInactiveById(createdComment.id)
};


const update = async (commentId, updateData) => {
    const validatedUpdatedComment = validate(updateCommentSchema, updateData);

    const comment = await commentRepository.findById(commentId);
    
    if(!comment) {
        throw new ResponseError('Comment not found');
    }
    await commentRepository.updateCommentById(comment, validatedUpdatedComment);
    comment.update_at = Date.now();
    await comment.save();
    return comment;
};

const remove = async (userId, commentId) => {
    commentId = validate(getCommentValidation, commentId);
    commentId = await checkCommentMustExist(userId,commentId);

    const comment = await get(userId,commentId);

    if (!comment) {
        throw new ResponseError('Comment not found');
    }
    await comment.remove();
    return { success: true };
}

module.exports = {
    create,
    update,
    remove,
};