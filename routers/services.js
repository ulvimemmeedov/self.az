const express = require('express');
const router = express.Router();
const Services = require('../controllers/services');

router.post('/',Services.Create);
module.exports= router;