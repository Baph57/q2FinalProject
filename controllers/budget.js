const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  //render users profile
  profile: (req, res) => {
    knex('budget').where("user_id", req.session.users_id).then((results)=>{
      res.render('profile', {money:results})
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
    knex('budget').where('user', )
    res.render('comparison');
  },

  //a new user inputs data
  createData:(req,res)=>{
    knex('budget').insert(req.body,{
      user_id: req.session.users_id
    }).then(
      res.redirect("/profile")
    )
  }
}
