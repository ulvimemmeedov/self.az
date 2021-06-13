const express = require('express');
const app = express();
const router = require('./routers/main');
const path = require('path');
const dotenv = require('dotenv').config()
const conn = require('./helpers/db');
const helmet = require('helmet');
connection = new conn;
app.set('views', path.join(__dirname, '/views'))
.set('view engine', 'ejs')
.use(helmet())
.use(express.static(__dirname + '/public'))
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use('/',router)
.listen(process.env.PORT||2000,console.log('app runing :',process.env.PORT));