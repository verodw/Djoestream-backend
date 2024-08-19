const {userRouter} = require('./user.route');
const {commentRouter} = require('./comment.route');
const {videoRouter} = require('./video.route')

const express = require("express");
const router = express.Router();

// user
router.use('/api/v1/users', userRouter);

// address
router.use('/api/v1/comments', commentRouter);

//video 
router.use('/api/v1/videos', videoRouter)


module.exports = {
    router
};