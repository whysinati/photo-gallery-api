const path = require('path');
const Resize = require('../Resize');
const photos = require('../Photos');

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
exports.uploadPhoto = async (req, res, next) => {
    const __parent__dirname = path.normalize(path.join(__dirname, '/..')); //go up a directory level
    const imagePath = path.join(__parent__dirname, '/public/images');
    const fileUpload = new Resize(imagePath);

    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    const newPhoto = {
        id: filename.split('.')[0],
        name: filename,
        title: req.body.title,
        origname: req.file.originalname,
        description: req.body.description
    }
    //console.log('newPhoto: ', newPhoto);
    photos.push(newPhoto);
    
    // return res.status(200).json({ title: req.body.title, name: filename, category: req.body.category, description: req.body.description });
    res.redirect('./home');
};
