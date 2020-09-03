const express = require('express');
const path = require('path');
//const { uploadPhoto } = require('../controllers/upload');

const uploadRouter = express.Router();
const upload = require('../middleware/uploader');
const Resize = require('../Resize');
const photos = require('../Photos.js');

// uploadRouter.get('/home', async function (req, res) {
//   await res.render('index');
// }); // homepage- "IMAGE Upload" form at localhost/upload/home

uploadRouter.get('/home', (req, res) => {
  //const pic2 = req.;
  // console.log(pic2);
  const pic = '/images/a7b63fb3-3bb4-4fb5-89e0-39317d6ff629.png'
  res.render('index', { pic: pic });
}); // homepage- "IMAGE Upload" form at localhost/upload/home

// Gets All Photos
uploadRouter.get('/', (req, res) => res.json(photos)); 
// at localhost/upload

// //attach the method
// uploadRouter
//   .route('/post')
//   .post(upload.single('image'), uploadPhoto);

// Upload New Photo
uploadRouter.post('/post', upload.single('image'), async (req, res) => {
    // const imagePath = path.join(__dirname, '/public/images'); //no longer the right directory level
  const __parent__dirname = path.normalize(path.join(__dirname, '/..')); //go up a directory level
  const imagePath = path.join(__parent__dirname, '/public/images');
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({error: 'Please provide an image'});
  }
  const filename = await fileUpload.save(req.file.buffer);
  
  return res.status(200).json({ title: req.body.title, name: filename, category: req.body.category, description: req.body.description });
});

module.exports = uploadRouter;