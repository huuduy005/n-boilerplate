/**
 * Module dependencies.
 */
const express = require('express');
const cors = require('cors');
const body = require('body-parser');
const path = require('path');
const logger = require('morgan');
const rootRouter = require('./routes');

/**
 * Main app.
 */
const app = express();

/**
 * Middleware
 */
app.use(cors());
app.use(body.json());
app.use(body.urlencoded({extended: true}));
app.use(logger('dev'));

/* Static resources */
app.use('/public', express.static(path.join(process.cwd(), 'public')));

/* Router */
app.use('/', rootRouter);

module.exports = app;
