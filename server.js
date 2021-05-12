const express = require('express');
const app = express();
const router = require('./routers/main');
const path = require('path');
const dotenv = require('dotenv').config()
const conn = require('./helpers/db');
connection = new conn;

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/',router);
app.listen(process.env.PORT||2000,console.log('app runing :',process.env.PORT));