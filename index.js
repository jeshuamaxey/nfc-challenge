var express = require("express");
var http = require("http");
var url  = require("url");
var api = require('./routes/api');
var settings = require('./routes/settings');
var app = express();

var port = process.env.PORT || 8080;

/*
*	game variables
* /

var game = {
	timeLimit: process.argv[2]*1000 || 15000 //in ms
};

*/

//console.log(game.timeLimit);

app.configure(function () {
  app.use(express.bodyParser());
});

// Set the public directory to /public
app.use(express.static(__dirname + '/public'));

/*
* API routes
*/

/*
* GETs
*/
//displays API status
app.get("/api", api.api);
//return a client instance to the app
app.get("/api/client_instance", api.clientInstance);
//tells the sever that client has arrived - returns true/false depending on whether they're in time
app.get("/api/arrived/:id", api.arrived);
//returns stats and info stored on the server (in JSON)
app.get("/api/stats", api.stats);

/*
* POSTs
*/
//handles the storage of usernams on the server when the user hits enter on the app
app.post("/api/username/", api.username);
//handles settings updates
app.post("/settings/update/", settings.update);

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