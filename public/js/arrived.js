var app = app || {};

app.clientInfo = ls.getObject("clientInfo");

app.main = function() {
	console.log("app.main() called");
	$.ajax({
		url : "/api/arrived/"+ app.clientInfo.id
	}).done(function(data) {
		console.log(data);
		if(data.inTime) {
			$('#message').html("You Made It "+app.clientInfo.username+"!");
		} else {
			$('#message').html("Too slow "+app.clientInfo.username+"!");
		}
	});
};

/*
* must be last
*/
$(document).ready(app.main);