var app = app || {};

app.clientInfo = ls.getObject("clientInfo");

app.main = function() {
	console.log("app.main() called");
	$.ajax({
		url : "/api/arrived/"+ app.clientInfo.id
	}).done(function(data) {
		console.log(data);
		if(data.inTime) {
			$('#headline').html("You Made It "+app.clientInfo.username+"!");
			$('#message').html("Congratulations! Show this screen to the spotty teen at the till and claim your free cookie");
			$('img').attr("src", "img/success.jpg")
		} else {
			$('#headline').html("Too slow "+app.clientInfo.username+"!");
			$('#message').html("Bad luck! You can try again tomorrow for your free cookie");
			$('img').attr("src", "img/fail.jpg")
		}
	});
};

/*
* must be last
*/
$(document).ready(app.main);