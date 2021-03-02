// Package Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { handleError, handleSuccess } = require('./helper/util')
const cors = require('cors');
const compression = require('compression');
const flash = require('connect-flash');

const app = express();
require('dotenv').config();

// Middleware stack
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(flash());
// app.use(logRequest);


app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

  next();
});


const subRoute = require("./routes/sub");

/* Application Routes */

app.use('/api/v1/subscribe', subRoute);
app.get('/', (req, res) => handleSuccess(res, 200, 'Application is online', null))

// catch 404 and forward to error handler
app.use((req, res) => {
  // logger.logAPIResponse(req, res);
  handleError(res, 404, 'Page not found')
});
module.exports = app;
