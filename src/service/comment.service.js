const {commentRepository} = require('../repository/comment.repository');
const {Comment} = require('../../models/comment');
const {Op, where} = require('sequelize');
const {v4: uuidv4} = require('uuid');
const {ResponseError} = require('../error/response.error')
const { createCommentSchema, updateCommentSchema } = require('../joi/comment.schema');