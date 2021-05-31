const express = require('express');
const app = express();
const router = require('./routers/main');
const services = require('./routers/services')
const path = require('path');
const dotenv = require('dotenv').config()
const conn = require('./helpers/db');
const helmet = require('helmet');
connection = new conn;
const flash = require('express-flash');
const passport = require('passport');
const Admin = require('./models/admin');
var LocalStrategy = require('passport-local').Strategy;
app.use(flash());
app.use(require('express-session')({
   secret: "secret key",
   resave: false,
   saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(helmet());
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',router);


app.listen(process.env.PORT||2000,console.log('app runing :',process.env.PORT));