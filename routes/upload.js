const express = require('express');
const path = require('path');

const uploadRouter = express.Router();
const upload = require('../middleware/uploader');
const Resize = require('../Resize');

uploadRouter.get('/', async function (req, res) {
  await res.render('index');
});

uploadRouter.post('/post', upload.single('image'), async function (req, res) {
    // const imagePath = path.join(__dirname, '/public/images'); //no longer the right directory level
  const __parent__dirname = path.normalize(path.join(__dirname, '/..')); //go up a directory level
  const imagePath = path.join(__parent__dirname, '/public/images');
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({error: 'Please provide an image'});
  }
  const filename = await fileUpload.save(req.file.buffer);
  
  return res.status(200).json({ title: req.body.title, name: filename });
});

module.exports = uploadRouter;