const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  // render home page, check if user has session if not create
  home: (req,res) =>{
    if(!req.session){
      req.session = [];
      console.log(req.session);
      res.render("home")
    }else{
      console.log(req.session)
       res.render('home');
     }
  },
  // render login page
  login: function(req, res) {
    res.render('login')
  },
  //render users landing page with objectives
  landing: function(req, res) {
    res.render("landing");
  },
  //render users profile
  profile: (req, res) => {
    res.render('profile')
  },
  //render page to create new objective
  create: function(req, res) {
    res.render("create");
  },
  //post req to handle users input
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
  // create a new user, import into users table and redirect to login
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
  },
  // check if users email exisits, if exisits check if password matches, if matches save user data in sessions
  confirmLogin: (req,res) => {
    knex('users')
      .where('email', req.body.email)
      .then( (x) => {
        let users = x[0]
        console.log(users);
        console.log(req.body);
        console.log(req.session);
        if (users.password == req.body.password) {
          req.session.users_id = users.id;
          req.session.save(() => res.redirect('/landing'))
        } res.redirect("login");
      })
  }
}
