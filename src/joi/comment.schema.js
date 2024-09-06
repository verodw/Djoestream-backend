const Joi = require('joi');

const createCommentSchema = Joi.object({
    userId: Joi.string().required(),
    videoId: Joi.string().required(),
    content: Joi.string().min(1).max(1000).required(),
    content: Joi.string().min(1).max(1000).required(), 
    // createdAt: Joi.date().iso().default(() => new Date(), 'current date and time'), 
  })


const updateCommentSchema = Joi.object({
    content: Joi.string().min(1).max(1000), 
    // updatedAt: Joi.date().iso().default(() => new Date(), 'current date and time'),
});

module.exports = {
    createCommentSchema,
    updateCommentSchema
}