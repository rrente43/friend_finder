var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 8080;
//creates json application
var jsonParser =bodyParser.json()
 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// app.use(express.static("app/public"));


require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});