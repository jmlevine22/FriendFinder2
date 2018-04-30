var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var PORT =  process.env.PORT || 8085;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var api = require("./routing/apiRoutes.js");

require("./routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
	console.log("Server listening on port " + PORT); 
});
