const mongoose = require("mongoose");
const passport = require("passport");
const Admin = require("../models/admin");

var adminController = {};

adminController.home = function(req, res) {
        res.render("admin")
  };
  adminController.package = function(req, res) {
    res.render("adminPackage")
};
adminController.newPackage = function(req, res) {
  res.render("newPackage")
};
adminController.doRegister = function(req, res) {
    const {username,password} = req.body;
  Admin.register(new Admin({username}),password, function(err, user) {
    if (err) {
      return res.json();
    }
Admin.register
    passport.authenticate('local')(req, res, function () {
      res.redirect('/admin');
    });
  });
};
adminController.login = function(req, res) {
    res.send('hello');
  };
adminController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/admin');
  });
};

adminController.logout = function(req, res) {
  req.logout();
  res.redirect('/admin/login');
};

module.exports = adminController;