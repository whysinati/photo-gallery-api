const express = require('express');
const { uploadPhoto } = require('../controllers/upload');

const uploadRouter = express.Router();
const upload = require('../middleware/uploader');
const photos = require('../Photos.js');

// uploadRouter.get('/home', async function (req, res) {
//   await res.render('index');
// }); // homepage- "IMAGE Upload" form at localhost/upload/home

uploadRouter.get('/home', (req, res) => {
  //const pic2 = req.;
  // console.log(pic2);
  const pic = '/images/a7b63fb3-3bb4-4fb5-89e0-39317d6ff629.png'
  res.render('index', { pic: pic, photos: photos });
}); // homepage- "IMAGE Upload" form at localhost/upload/home

// Gets All Photos
uploadRouter.get('/', (req, res) => res.json(photos)); 
// at localhost/upload

//attach the controller method
uploadRouter
  .route('/post')
  .post(upload.single('image'), uploadPhoto);

module.exports = uploadRouter;