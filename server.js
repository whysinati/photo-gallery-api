const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

// Route files
const photos = require('./routes/photos');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Add Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
//Mount routers
app.use('/api/v1/photos', photos);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`)
); 