var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var usersRouter=require('./routes/users')
var pictureRouter=require('./picture')
var app = express();
app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/users',usersRouter)
app.use('/',pictureRouter)
module.exports = app;
