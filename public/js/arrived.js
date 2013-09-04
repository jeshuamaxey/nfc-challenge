var app = app || {};

app.clientInfo = ls.getObject("clientInfo");

app.main = function() {
	$.ajax({
		url : "/api/arrived/"+ app.clientInfo.id
	}).done(function(data) {
		console.log(data);
		if(data.inTime) {
			$('#headline').html("You Made It "+app.clientInfo.username+"!");
			$('#message').html("Congratulations! Show this screen to the spotty teen at the till and claim your free cookie");
			$('img#outcome').attr("src", "img/success.jpg");
			// only change image to the config one if the variable has been editted
			if (config.successImg.length) {
				$('img#outcome').attr("src", "img/"+config.successImg);
			}
		} else {
			$('#headline').html("Too slow "+app.clientInfo.username+"!");
			$('#message').html("Bad luck! You can try again tomorrow for your free cookie");
			$('img#outcome').attr("src", "img/fail.jpg");
			// only change image to the config one if the variable has been editted
			if (config.failImg.length) {
				$('img#outcome').attr("src", "img/"+config.failImg);
			}
		}
	});
};

/*
* must be last
*/
$(document).ready(app.main);