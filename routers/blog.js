const express = require('express');
const router = express.Router();
const blogs = require('../controllers/blog');
const { upload } = require('../uploadhelper');
const {CheckLogin} = require('../middleware/auth');

router.get('/',blogs.all)
.get('/:title/:date',blogs.one)
.post('/create',CheckLogin,upload.single('image'),blogs.create)
.post('/delete/:id',CheckLogin,blogs.delete);

module.exports = router;