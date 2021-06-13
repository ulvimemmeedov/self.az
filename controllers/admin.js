const mongoose = require("mongoose");
const passport = require("passport");
const Admin = require("../models/admin");
const posts = require('../models/post');
const webPackage = require('../models/webServices');
const smmPackage = require('../models/smmServices');
const otherPackage = require('../models/otherServices');
const hostingPackage = require('../models/hostingServices');
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var weball = [];
var smmall = [];
var otherall = [];
var hostingall = [];
var adminall = [];
var adminController = {};

adminController.home = async function(req, res) {
       const post = await posts.find();

        res.render("admin",{post});
  };
  adminController.package = async function(req, res) {
    const web = await webPackage.find({});
    weball = web;
    const smm = await smmPackage.find({});
    smmall = smm;
    const other = await otherPackage.find({});
    otherall = other;
    const hosting = await hostingPackage.find({});
    hostingall = hosting;
    res.render("adminPackage",{weball,smmall,otherall,hostingall});
};
adminController.settings = async function(req, res) {
  const admin = await Admin.find({});
  adminall = admin;
  res.render("adminSettings",{adminall});
};
adminController.doRegister = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({
      email,
    });
    if (admin) {
      return res.status(400).json({
        msg: "İstifadəçi Artıq Mövcuddur",
      });
    }

    admin = new Admin({
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);

    await admin.save();

    const payload = {
      admin: {
        id: admin.id,
      },
    };

    jwt.sign(
      payload,
      "randomString",
      {
        expiresIn: 10000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).cookie('token', token).json('Uğurla Qeydiyyatdan Keçdiniz');
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Yadda saxlama xətası");
  }
};
adminController.login = function(req, res) {
    res.render('login',      {
      message: "giriş edin"
    });
  };
adminController.doLogin = async function (req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({
      email
    });
    if (!admin)
      return res.status(400).render('login',{
        message: "İstifadəçi mövcud deyil"
      });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).render('login',{
        message: "Səhv Parol!"
      });

    const payload = {
      admin: {
        id: admin.id
      }
    };
    jwt.sign(
      payload,
      "randomString",
      {
        expiresIn: 3600
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).cookie("token",token).redirect('/admin');
      }
    );
  } catch (e) {
    console.error(e);
    res.status(500).render('login',
      {
      message: "Server Error"
    });
  }
};

adminController.logout = function(req, res) {
  req.logout();
  res.redirect('/admin/login');
};

module.exports = adminController;