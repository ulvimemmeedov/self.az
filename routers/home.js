const express = require('express');
const router = express.Router();
const mail = require('../controllers/mail');

router.get('/home',(req,res,next)=>{
    res.render('index');
})
.get('/about',(req,res,next)=>{
    res.render('about');
})
.get('/contact',(req,res,next)=>{
    res.render('contact');
})
.get('/career',(req,res,next)=>{
    res.render('career');
})
.get('/portfolio',(req,res,next)=>{
    res.render('portfolio');
})
.get('/services',(req,res,next)=>{
    res.render('services');
})
.get('/blog',(req,res,next)=>{
    res.render('blog');
})
.post('/contact',mail)
.get('/*',(req,res)=>{
    res.redirect('/home')
})
module.exports = router;