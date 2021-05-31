const posts = require('../models/post');
const BlogController = {};
var rawname = require('../uploadhelper');

BlogController.all = async (req,res,next) => {
    const find = await posts.find({})
    res.render('blog',{find})
}
BlogController.one = async (req,res,next) => {
    const {title,date} = req.params;
    const find  = await posts.find({title:title,date:date})
    res.render('single-blog',{find})
}
BlogController.create = async (req,res,next)=>{
    const {title,content} = req.body;
    const post = await posts.create({
        title,
        image:rawname.rawname,
        content
    });
    res.redirect('/admin')
  }
BlogController.delete = async (req,res,next) =>{
    const id = req.params.id;
    const deleteditem = await posts.deleteOne({_id:id})
    res.redirect('/admin')
}
module.exports = BlogController;