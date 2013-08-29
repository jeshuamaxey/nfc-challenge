exports.api = function(request, response) {
	response.send("API is running");
};

exports.clientInstance = function(request, response) {
  response.send(newClientInstance());
};

exports.arrived = function(request, response) {
	//learn to do a proper api with request parameters etc.
	var id = request.params.id;
	response.send({
		id: id,
		inTime: inTime(id)
	});
};

exports.stats = function(request, response) {
	var stats = {
		"number of games in progress": clients.length
	};
  response.send(stats);
};

exports.username = function(request, response) {
	var username = request.params.username;
  response.send(stats);
};

/*
*	game variables
*/

var game = {
	timeLimit: 15000 //in ms
};

clients = []; //screw data bases arrays ftw

/*
*	helper functions
*/

function newClientInstance() {
	var id = generateUniqueKey();
	//need to consider issues of client being in different timezone to server
	var now = new Date().getTime();
	//store record of client locally to server
	client = {
		'id' : id,
		'idLastSet': now,
		'username': ""
	};
	clients.push(client);
	//console.log("A new player joined the game".inverse);
	return client;
}

function generateUniqueKey() {
	//eventually I'll come up with a better way to do this
	return clients.length;
}

function inTime(id) {
	var now = new Date().getTime();
	console.log("ID: " + id);
	var elapsed = now - clients[id].idLastSet;
	return elapsed < game.timeLimit ? true : false;
}