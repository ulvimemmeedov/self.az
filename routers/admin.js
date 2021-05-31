const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')
const {CheckLogin,CheckLogout} = require('../middleware/auth');

router.get('/',CheckLogin,adminController.home);
router.get('/package',CheckLogin,adminController.package);
router.get('/login',CheckLogout,adminController.login);
router.get('/settings',CheckLogin,adminController.settings);
router.post('/login',adminController.doLogin);
router.post('/register',CheckLogin,adminController.doRegister);
router.get('/logout',CheckLogin,adminController.logout);

module.exports= router;