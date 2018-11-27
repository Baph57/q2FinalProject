const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  home: (req,res) =>{
    res.render('home');
  },
  login: function(req, res) {
    knex('users')
      .where('email', req.body.email)
      .then((x) => {
        let users = x[0]
        if (users.password == req.body.password) {
          req.sessions.users_id = users.id;
          req.session.save(() => res.redirect('/landing'))
        } res.redirect("login");
      })
  },
  landing: function(req, res) {
    res.render("landing");
  },
  profile: (req, res) => {
    knex('users')
    .where()
  },
  create: function(req, res) {
    res.render("create");
  },
  newCreate: (req, res) => {
    //post request that handles user input
  },
  delete: function(req, res) {
      res.render("delete");
    },
  edit: function(req, res) {
    res.render("edit");
  },
  register: function(req, res) {
    res.render("register");
  },
  newRegister: (req,res) => {
    if(req.body.password === req.body.confirm_password){
      knex('users').insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        points: 0,
        challenges_completed: 0,
        challenges_attempted:0
      }).then(()=>{
        res.redirect("/login")
      })
    }else{
      console.log("Password doesnt match");
    }
  }
}
