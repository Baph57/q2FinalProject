const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
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
  profile: function(req, res) {
    res.render("profile");
  },
  register: function(req, res) {
    res.render("register");
  }
}
