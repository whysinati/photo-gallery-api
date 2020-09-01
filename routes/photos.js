const express = require('express');
const { //use destructuring to bring in each controller method here
    getPhotos,
    getPhoto,
    createPhoto,
    updatePhoto,
    deletePhoto
} = require('../controllers/photos');

const router = express.Router();

//attach the methods
router
    .route('/')
    .get(getPhotos)
    .post(createPhoto);

router
    .route('/:id')
    .get(getPhoto)
    .put(updatePhoto)
    .delete(deletePhoto);

module.exports = router;