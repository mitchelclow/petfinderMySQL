// htmlroutes.js offers a set of routes for sending users to the correct pages
var path = require("path");

// Routes
module.exports = function(app) {

  // Loading index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/index.html"));
  });

  // Loading ifound.html
  app.get("/ifound", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/ifound.html"));
  });

  // Loading ilost.html
  app.get("/ilost", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/ilost.html"));
  });

  // Loading foundDisplay.html
  app.get("/foundDisplay", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/foundDisplay.html"));
  });

  // Loading lostDisplay.html
  app.get("/lostDisplay", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/lostDisplay.html"));
  });

  // Loading adopt.html
  app.get("/adopt", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/adopt.html"));
  });

  // Loading contact.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/contact.html"));
  });

  // Loading signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/adopt.html"));
  });

  // Loading signin.html
  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/signup.html"));
  });

  // Loading dashboard.html which is letting users know they are logged in
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/signin.html"));
  });


};
