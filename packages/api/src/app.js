const { urlencoded } = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const messages = require('./messages');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(
  urlencoded({
    extended: false,
  })
);

app.use('/messages', messages);

module.exports = app;
