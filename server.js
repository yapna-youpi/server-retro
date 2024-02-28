//imports
var express    = require("express");
var bodyParser = require("body-parser");
var apiRouter  = require("./apiRouter").router;

//instantiate server                
var server = express();

//body-parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//configure routes
server.get("/", function (req, res) {
  res.setHeader("Content-type", "text/html");
  res.status(200).send("<h1>Bonjour sur mon serveur http</h1>");
});

//launch server
server.listen(8080, function () {
  console.log("serveur bien demarrer en ecoute");
});
