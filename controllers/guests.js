const knex = require('../db/knex.js');

module.exports = {
  // render home page, check if user has session if not create
  home: (req, res) => {
    // console.log("starter session",req.session);
    if (!req.session) {
      req.session = {};
      res.render("home")
    } else if (req.session.users_id) {
      // console.log("This console log",req.session.users_id);
      knex('budget').where("user_id", req.session.users_id).then((results) => {
        res.render('profile', {
          money: results
        })
      })
    } else {
      // console.log("Else", req.session)
      res.render('home');
    }
  },
  // render login page
  login: function(req, res) {
    res.render('login')
  },
  // renders new user reg. page
  register: function(req, res) {
    res.render("register");
  },
  // create a new user, import into users table and redirect to login
  newRegister: (req, res) => {
    console.log(req.body);
    if (req.body.password === req.body.confirm_password) {
      knex('users').insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(() => {
        res.redirect("/login")
      })
    } else {
      console.log("Password doesnt match");
    }
  },
  register2: (req, res) => {
    res.render('register2')
  },
  // check if users email exisits, if exisits check if password matches, if matches save user data in sessions
  confirmLogin: (req, res) => {
    knex('users')
      .where('email', req.body.email)
      .then(x => {
        let users = x[0]
        if (users.password == req.body.password) {
          req.session.users_id = users.id;
          // console.log(req.session);
          knex('budget')
            .where('user_id', req.session.users_id)
            .then(x => {
              req.session.save(() => {
                  if (x.Monthly_Income <= 0) {
                    res.render('register2')
                  } else {
                    res.render("profile", {
                      money: x
                    })
                  })
                //   .where("user_id", req.session.users_id)
                // .then((x) => {req.session.data = x })
                //this didn't work cause y was undefined
              }
              else {
                res.render("login")
              };
            })
        }
      })
  },
  // deletes user session and returns user to login screen
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/login');
  },
  bumper: (req, res) => {
    knex('budget').then(x => {
      res.render('bumper', {
        x: x
      })
    })

    // .where("user_id", req.session.users_id)
    // .then((y) =>{req.session.save(() => res.render("bumper", { results: y }))
    // })
  }
}
