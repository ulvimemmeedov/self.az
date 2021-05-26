const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')
const check = require('../middleware/auth');
router.get('/',adminController.home);
router.get('/package',adminController.package);
router.get('/addpackage',adminController.newPackage);
router.get('/login',adminController.login);
router.post('/login',adminController.doLogin);
router.post('/register',adminController.doRegister);
router.get('/logout',adminController.logout);

module.exports= router;