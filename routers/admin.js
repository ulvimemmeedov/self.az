const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')
const { check} = require("express-validator");
const CheckLogin = require('../middleware/auth');
const Log = require('../middleware/log');
router.get('/',CheckLogin,adminController.home);
router.get('/package',CheckLogin,adminController.package);
router.get('/login',Log,adminController.login);
router.get('/settings',CheckLogin,adminController.settings);
router.post('/login',[
    check("email", "Xahiş edirəm etibarlı bir e-poçt daxil edin").isEmail(),
    check("password", "Xahiş edirəm etibarlı bir parol daxil edin").isLength({
      min: 6
    })
  ],adminController.doLogin);
router.post('/register',[
    check("email", "Xahiş edirəm etibarlı bir e-poçt daxil edin").isEmail(),
    check("password", "Xahiş edirəm etibarlı bir parol daxil edin").isLength({
        min: 6
    })
 ],adminController.doRegister);
router.get('/register',adminController.doRegister);

module.exports= router;