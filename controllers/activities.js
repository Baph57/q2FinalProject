const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  // render home page, check if user has session if not create
  home: (req,res) =>{
    // console.log("starter session",req.session);
    if(!req.session){
      req.session = {};
      res.render("home")
    }else if (req.session.users_id) {
      // console.log("This console log",req.session.users_id);
      res.render('profile')
    }else{
      // console.log("Else", req.session)
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
    knex('budget').where("user_id", req.session.users_id).then((results)=>{
      res.render('profile', {money:results})
    })
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
        password: req.body.password
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
        console.log(users.password);
        console.log(req.body.password);

        if (users.password == req.body.password) {
          req.session.users_id = users.id;
          // console.log(req.session);
          knex('budget')
            .where(req.session.users_id == budget.user_id)
            .then((x) => {req.session.data = x })
            .then((y) =>{
              req.session.save(() => res.render("profile", { results: y }))
            });
        } else{
          res.render("login")
        };
      })
  },
  options:(req,res)=>{
    knex("budget").where("user_id", req.session.users_id).then((data)=>{
      console.log(data[0]);
      res.render('options', {money: data[0]})
    })
  },
  editData: (req,res) =>{
    console.log(req.body);
    knex('budget').where('user_id', req.session.users_id).update(req.body).then(
      res.render('profile')
    )
  },
  compare:(req,res)=> {
    res.render('compairson');
  }
}
