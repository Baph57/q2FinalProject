//Update the name of the controller below and rename the file.
const activities = require("../controllers/activities.js")
module.exports = function(app){
  app.get('/', activities.home);
  app.get('/login', activities.login);
  app.get('/register', activities.register);
  app.get('/landing:id', activities.landing);
  app.get('/profile', activities.profile); //id req.param needed?
  app.get('/create', activities.create);
  app.get('/delete:id', activities.delete);
  app.get('/edit:id', activities.edit);
  app.post('/newRegister', activities.newRegister)
}
