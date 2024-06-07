const uploadController = require('express').Router();

const multer = require('multer');
const { verifyToken } = require('../middlewares/verifyToken');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  fileName: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});

const upload = multer({
  storage: storage,
});

// look in req.body.image
uploadController.post(
  '/image',
  verifyToken,
  upload.single('image'),
  (req, res) => {
    try {
      return res.status(201).json({ msg: 'successfully upload image' });
    } catch (error) {
      console.error(error);
    }
  }
);

module.exports = uploadController;
