// @desc    Get all photos
// @route   GET /api/v1/photos
// @access  Public
exports.getPhotos = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all photos' });    
};

// @desc    Get single photo
// @route   GET /api/v1/photos/:id
// @access  Public
exports.getPhoto = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get photo ${req.params.id}` });

};

// @desc    Create new photo
// @route   POST /api/v1/photos
// @access  Private
exports.createPhoto = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new photo' });

};

// @desc    Update photo
// @route   PUT /api/v1/photos/:id
// @access  Private
exports.updatePhoto = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update photo ${req.params.id}` });

};

// @desc    Delete photo
// @route   DELETE /api/v1/photos/:id
// @access  Private
exports.deletePhoto = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete photo ${req.params.id}` });

};