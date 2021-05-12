const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
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
module.exports = router;