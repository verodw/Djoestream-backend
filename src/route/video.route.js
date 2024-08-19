const multer = require('multer');
const videoController = require('../controller/video.controller.js');
const videoRouter = require('express').Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

videoRouter.post('/upload', upload.single('video'), videoController.uploadVideo)
videoRouter.get('/videos/:filename', videoController.getVideo);
videoRouter.get('/videos/:id', videoController.getVideoById);
videoRouter.delete('/videos/:id', videoController.delete);

module.exports = {
    videoRouter
}