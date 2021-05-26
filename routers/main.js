const express = require('express');
const router = express.Router();
const home = require('./home');
const services = require('./services');
const admin = require('./admin');
router.use('/admin',admin)
router.use('/services',services)
router.use('/',home);
module.exports = router;