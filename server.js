'use strict';
var express=require('express');
var app=express();
var path=require('path');
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, 'views'));
app.set('port',process.env.PORT||8080);

var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var passport=require('passport');
var flash=require('connect-flash');


var questions=require('./config/questions.js');

//Middleware's
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'polling',
    resave: false,
    saveUninitialized: false
}));
require('./config/passportmin.js')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routesmin.js')(app,passport);

app.listen(app.get('port'));
