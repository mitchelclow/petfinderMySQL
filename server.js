// Requiring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var sequelize = require('sequelize');
var moment = require('moment');
var env = require('dotenv').load();
var fileUpload = require('express-fileupload');
// Packages needed to handle authentication
var passport = require('passport');
var session = require('express-session');
// Package for handlebars
var exphbs = require('express-handlebars');

var port = process.env.PORT || 8080;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('./views'));
// Initialzing passport and the express-session and add them as middleware
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// For Handlebars
// app.set('views', './views')
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');

var db = require('./models');
// Requiring authentication route auth.js
var authRoute = require('./routing/auth')(app, passport);

require('./config/passport/passport.js')(passport, db.user);

app.use(fileUpload());


// Requiring API routes
var setUpApiRoutes = require('./routing/apiroutes');
// Requiring HTML routes
var setUpHtmlRoutes = require('./routing/htmlroutes');
setUpApiRoutes(app);
setUpHtmlRoutes(app);

// handling the upload
// getting the file from ifound.html
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/views', 'ifound.html'));
});

// app.get('/', function(req, res) {
// 	res.sendFile(path.join(__dirname, '/views', 'signup.html'));
// });
//
// app.get('/', function(req, res) {
// 	res.sendFile(path.join(__dirname, '/views', 'signin.html'));
// });
//
// app.get('/', function(req, res) {
// 	res.sendFile(path.join(__dirname, '/views', 'dashboard.html'));
// });

// placeholder for getting the file from ilost.html
app.post('/upload', function(req, res) {

});

// Development
// The sequelize property on db is the connection to the db
// The sync method that creates tables from the models
db.sequelize.sync().then(function(){
  require('./routing/apiroutes.js')(app, db);
 // After synching, the express server starts
  app.listen(port, function(){
    console.log("Server listening on " + port);
  });
});
