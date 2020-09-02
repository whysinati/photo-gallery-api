const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

// Route files
const photos = require('./routes/photos');
const uploadRouter = require('./routes/upload');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Add Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public' )));

app.set('view engine', 'ejs');

//Homepage route
app.get('/', async function (req, res) {
    await res.render('index');
});

app.use('/upload', uploadRouter);

//Mount routers
app.use('/api/v1/photos', photos);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`)
); 