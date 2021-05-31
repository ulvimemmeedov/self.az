const express = require('express');
const router = express.Router();
const WebServices = require('../controllers/webServices');
const SmmServices = require('../controllers/smmService');
const OtherServices = require('../controllers/otherServices');
const {CheckLogin} = require('../middleware/auth');


// web
router.get('/web',WebServices.All)
.post('/web/create',CheckLogin,WebServices.Create)
.post('/web/delete/:id',CheckLogin,WebServices.Delete);
// smm
router.get('/smm',SmmServices.All)
.post('/smm/create',CheckLogin,SmmServices.Create)
.post('/smm/delete/:id',CheckLogin,SmmServices.Delete);
// other
router.get('/other',OtherServices.All)
.post('/other/create',CheckLogin,OtherServices.Create)
.post('/other/delete/:id',CheckLogin,OtherServices.Delete)

module.exports= router;