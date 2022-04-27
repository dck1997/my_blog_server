var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var articleRouter = require('./routes/article');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*',function ( req, res, next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Content-Type, Content-Length, Authorization')
    res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE.OPTIONS')
    res.header('X-Powered-By','3.2.1')
    req.method == "OPTIONS" ? res.send(200) : next()
})

// app.all('*',function(req,res,mnext){
//     res.json('未登入')
// })
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/article', articleRouter);

module.exports = app;
