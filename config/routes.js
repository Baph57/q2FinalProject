//Update the name of the controller below and rename the file.
const budget = require("../controllers/budget.js")
const guests = require('../controllers/guests.js')

module.exports = function(app){

  //guest routes
  app.get('/', guests.home);
  app.get('/login', guests.login);
  app.get('/logout', guests.logout);
  app.get('/register', guests.register);
  app.get('/register2', guests.register2);
  app.post('/newRegister', guests.newRegister);
  app.post('/confirmLogin', guests.confirmLogin);

  //budget routes

  app.get('/profile', budget.profile); //id req.param needed?
  app.get('/options', budget.options);
  app.get('/compare',budget.compare);
  app.post('/editData', budget.editData);
  app.post('/register2Post', budget.createData)

  // app.use(auth)
};
var auth = (req, res, next) => {
  if (!req.session.docs_id) {
    res.redirect("/");
  } else {
    next();
  }
};
