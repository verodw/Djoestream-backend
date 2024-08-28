const Joi = require('joi');

const createUserSchema = Joi.object({
    username: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(4).max(255).required(),
})

const loginUserSchema = Joi.object({
    username: Joi.string().min(2).max(100).required(),
    password: Joi.string().min(4).max(255).required(),
})

module.exports = {
    createUserSchema,
    loginUserSchema
}