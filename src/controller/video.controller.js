const videoService = require ('../service/video.service');
const multer = require('multer');
const {ResponseError} = require('../error/response.error');
const storage = multer.memoryStorage();

const upload = multer({
    storage:storage,
    
})

exports.uploadVideo = async (req, res) => {
    try {
        const result = await videoService.uploadVideo(req.file);
        res.send
    }
}