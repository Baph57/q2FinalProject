//Update the name of the controller below and rename the file.
const budget = require("../controllers/budget.js")
const guests = require('../controllers/guests.js')

module.exports = function(app){

  //guest routes
  app.get('/', guests.home);
  app.get('/login', guests.login);
  app.get('/register', guests.register);
  app.post('/newRegister', guests.newRegister);
  app.post('/confirmLogin', guests.confirmLogin);
  app.get('/logout', guests.logout);

  //budget routes

  app.get('/profile', budget.profile); //id req.param needed?
  app.get('/options', budget.options);
  app.post('/editData', budget.editData);
  app.get('/compare',budget.compare);

  // app.use(auth)
};
var auth = (req, res, next) => {
  if (!req.session.docs_id) {
    res.redirect("/");
  } else {
    next();
  }
};
