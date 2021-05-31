const mongoose = require("mongoose");
const passport = require("passport");
const Admin = require("../models/admin");
const posts = require('../models/post');
const webPackage = require('../models/webServices');
const smmPackage = require('../models/smmServices');
const otherPackage = require('../models/otherServices');
var weball = [];
var smmall = [];
var otherall = [];
var adminController = {};

adminController.home = async function(req, res) {
       const post = await posts.find();

        res.render("admin",{post})
  };
  adminController.package = async function(req, res) {
    const web = await webPackage.find({});
    weball = web;
    const smm = await smmPackage.find({});
    smmall = smm;
    const other = await otherPackage.find({});
    otherall = other;
    res.render("adminPackage",{weball,smmall,otherall});
};
adminController.settings = function(req, res) {
  res.render("adminSettings")
};
adminController.doRegister = async function(req, res) {
    const {username,password} = req.body;
  await Admin.register(new Admin({username}),password, function(err, user) {
    if (err) {
      return res.json(err);
    }
 Admin.register
    passport.authenticate('local')(req, res, function () {
      res.redirect('/admin/settings');
    });
  });
};
adminController.login = function(req, res) {
    res.render('login');
  };
adminController.doLogin = function(req, res) {
try {
  passport.authenticate('local')(req, res, function () {
    res.status(200).redirect('/admin');
  });
} catch (error) {
  res.send(error)
}

};

adminController.logout = function(req, res) {
  req.logout();
  res.redirect('/admin/login');
};

module.exports = adminController;