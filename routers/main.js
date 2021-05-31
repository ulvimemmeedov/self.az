const express = require('express');
const router = express.Router();
const home = require('./home');
const services =  require('./services')
const admin = require('./admin');
const blog = require('./blog');

router.use('/admin',admin)
router.use('/services',services)
router.use('/blog',blog)
router.use('/',home);

module.exports = router;
