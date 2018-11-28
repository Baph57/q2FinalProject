//Update the name of the controller below and rename the file.
const activities = require("../controllers/activities.js")
module.exports = function(app){
  app.get('/', activities.home);
  app.get('/login', activities.login);
  app.get('/register', activities.register);
  app.get('/landing', activities.landing);
  app.get('/profile', activities.profile); //id req.param needed?
  app.get('/create', activities.create);
  app.get('/delete:id', activities.delete);
  app.get('/edit:id', activities.edit);
  app.get('/options', activities.options)
  app.get('/compare',activities.compare)
  app.post('/newRegister', activities.newRegister);
  app.post('/confirmLogin', activities.confirmLogin)

  // app.use(auth)
};
var auth = (req, res, next) => {
  if (!req.session.docs_id) {
    res.redirect("/");
  } else {
    next();
  }
};
