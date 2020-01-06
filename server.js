// Required Items 
var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

// experess app 
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController");

app.use(routes);

// Start our server so that it can begin listening 
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
