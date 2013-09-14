var app = app || {};

app.clientInfo = ls.getObject("clientInfo");

app.main = function() {
	//request settings from the server
	$.ajax({
		url : "/settings/get"
	}).done(function(data) {
		app.config = data;
	});
	//ask the server whether the client is in time
	$.ajax({
		url : "/api/arrived/"+ app.clientInfo.id,
		statusCode: {
			//can't get this to work. function is called regardless
		    //500: app.serverError()
		}
	}).done(function(data) {
		if(data.inTime) {
			app.inTime();
		} else {
			app.notInTime();
		}
	});
};

app.inTime = function() {
	$('#headline').html("You Made It "+app.clientInfo.username+"!");
	$('#message').html("Congratulations! Show this screen to the spotty teen at the till and claim your free cookie");
	$('img#outcome').attr("src", "img/success.jpg");
	// only change image to the config one if the variable has been editted
	if (app.config.successImage.length) {
		$('img#outcome').attr("src", app.config.successImage);
	}
	// only change message to the config one if the variable has been editted
	if (app.config.successMessage.length) {
		$('#message').html(app.config.successMessage);
	}
}

app.notInTime = function() {
	$('#headline').html("Too slow "+app.clientInfo.username+"!");
	$('#message').html("Bad luck! You can try again tomorrow for your free cookie");
	$('img#outcome').attr("src", "img/fail.png");
	// only change image to the config one if the variable has been editted
	if (app.config.failImage.length) {
		$('img#outcome').attr("src", app.config.failImage);
	}
	// only change message to the config one if the variable has been editted
	if (app.config.failMessage.length) {
		$('#message').html(app.config.failMessage);
	}
}

app.serverError = function() {
	alert("whoops")
}

/*
* must be last
*/
$(document).ready(app.main);