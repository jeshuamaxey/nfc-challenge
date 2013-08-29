var express = require("express");
var http = require("http");
var url  = require("url");
//var colors = require('colors');
var api = require('./routes/api');
var app = express();

var port = process.env.PORT || 8080;

app.configure(function () {
  app.use(express.bodyParser());
});

// Set the public directory to /public
app.use(express.static(__dirname + '/public'));

/*
* API routes
*/
app.get("/api", api.api);
app.get("/api/client_instance", api.clientInstance);
app.get("/api/arrived/:id", api.arrived);
app.get("/api/stats", api.stats);

//not sure this does anything yet
app.post("/api/username/:username", api.username);

/*
*
* INDEX PAGE DOESN'T LOAD WITH THIS - GET SOMEONE TO HAVE A LOOK

app.get("/*", function(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404!");
});
*/

/*
* fire it up!
*/
app.listen(port, function() {
	console.log('Server listening on port ' + port);
});