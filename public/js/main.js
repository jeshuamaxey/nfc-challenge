var app = app || {}; //global app namespace

app.timeLimit = config.timeLimit; //in seconds
app.now = new Date().getTime();
app.localData = {};

app.main = function() {
	app.setID();
	app.setupEventHandlers();
};

app.setupEventHandlers = function() {
		$("#username").keypress(function(e) {
		if(e.which == 13) {
			app.processUsername();
		}
	});
};

app.processUsername = function() {
	//app.clientInfo.username = $('#username').val().toLowerCase();
	app.clientInfo.username = $('#username').val().toLowerCase();
	$('#promptUsername').fadeOut();
	$('#name').html(" "+app.clientInfo.username).fadeIn();
	//store name locally to be retreived later when they reach the finish
	ls.setObject("clientInfo", app.clientInfo);
	//send username back to server for storage
	$.post("/api/username/", app.clientInfo);
	//show map according to config vars
	if(config.showMap) {
		app.showMap();
	}
};

app.setID = function() {
	//if app.clientInfoExists, create a new instance & allow challenge
	if (ls.getObject("clientInfo") === null) {
		app.allowChallenge();
	}
	//if app.clientInfoExists, check they last played yesterday (mimicked) else disallow challenge
	else {
		//retrieve client info data
		app.clientInfo = ls.getObject("clientInfo"); // = JSON.parse(localStorage.getItem("clientInfo"));
		//determine number of days since last played
		var timeElapsed = new Date().getTime() - app.clientInfo.idLastSet;
		var days = timeElapsed/(1000*10); //timeElapsed/(1000*60*60*24); //converts to days
		if(days < 1) {
			app.disallowChallenge();
		} else {
			app.allowChallenge();
		}
	}
};

app.getID = function() {
	$.ajax({ //get a unique client id
		url : "/api/unique_id"
	}).done(function(data) {
		return data.id;
	});
};

app.getClientInstance = function() {
	return $.ajax({ //get a unique client instance
		url : "/api/client_instance"
	});
};

app.disallowChallenge = function() {
	console.log("challenge disallowed");
};

app.allowChallenge = function() {
	console.log("challenge allowed");
	/*
	* clietInfo obj in local storage needs to be set to null because api returns a promise
	* so old id is acted upon causing the app track wrong progress
	*/
	ls.setObject("clientInfo", null);
	//create client data and store
	var clientInstance = app.getClientInstance();
	console.log("new clientinstance from api");
	console.log(clientInstance);
	//see this stackoverflow ans from rsp for details on promises
	// http://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success
	clientInstance.success(function (data) {
		app.clientInfo = data;
		ls.setObject("clientInfo", data);
		console.log("data from returned promise of clientInstance API call:");
		console.log(data);
	});
	//set coutdown running
	$('#game').fadeIn();
	//request settings from the server
	$.ajax({
		url : "/settings/get"
	}).done(function(data) {
		var clock = $('#countdown').FlipClock(data.timeLimit/1000, {
		'countdown': true,
		'clockFace': 'MinuteCounter'
	});
	});
};

app.showMap = function() {
	$("#map").show();
	initializeMap();
};

/*
* must be last
*/
$(document).ready(app.main);