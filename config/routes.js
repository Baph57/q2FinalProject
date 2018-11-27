//Update the name of the controller below and rename the file.
const activities = require("../controllers/activities.js")
module.exports = function(app){

  app.get('/', activities.login);

}
