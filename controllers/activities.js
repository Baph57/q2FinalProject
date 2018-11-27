const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  home: (req,res) =>{
    res.render('home');
  },
  login: function(req, res) {
    res.render("login");
  },
  landing: function(req, res) {
    res.render("landing");
  },
  profile: function(req, res) {
    res.render("profile");
  },
  create: function(req, res) {
    res.render("create");
  },
  delete: function(req, res) {
      res.render("delete");
    },
  edit: function(req, res) {
    res.render("edit");
  },
  register: function(req, res) {
    res.render("register");
  }
}
