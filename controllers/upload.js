const path = require('path');
const Resize = require('../Resize');

// // @desc    Get all photos
// // @route   GET /api/v1/photos
// // @access  Public
// exports.getPhotos = (req, res, next) => {
//     res.status(200).json({ success: true, msg: 'Show all photos' });    
// };

// // @desc    Get single photo
// // @route   GET /api/v1/photos/:id
// // @access  Public
// exports.getPhoto = (req, res, next) => {
//     res.status(200).json({ success: true, msg: `Get photo ${req.params.id}` });

// };

// @desc    Upload new photo
// @route   POST /upload/post
// @access  Private
exports.uploadPhoto = (req, res, next) => {
    const __parent__dirname = path.normalize(path.join(__dirname, '/..')); //go up a directory level
    const imagePath = path.join(__parent__dirname, '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    const filename = fileUpload.save(req.file.buffer);
    
    return res.status(200).json({ title: req.body.title, name: filename });
    // res.status(200).json({ success: true, msg: 'Upload new photo' });

};
