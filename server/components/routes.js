// Each folder represents a component, in this case users.
// It doesn't mean that it represents each table in the DB, this depends of the software requirements.
// The component-based architecture was chosen, to have a more intuitive order to change a requirement.
//If I need to change something, I open every folder and files involved with that change, It takes more time.

const express = require("express");

const app = express();

//app.use(require('./user/UserRoutes'))

module.exports = app;
