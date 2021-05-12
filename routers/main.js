const express = require('express');
const router = express.Router();
const home = require('./home');
const services = require('./services');
router.use('/',home);
// router.use('/services',services)
module.exports = router;