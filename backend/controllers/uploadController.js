const uploadController = require('express').Router()

const multer = require('multer');
const {verifyToken} = require('../middlewares/verifyToken');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"public/images")
    }
})