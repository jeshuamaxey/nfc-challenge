$("form").submit(updateConfiguration);

function updateConfiguration(e) {
	//stop page redirection
	e.preventDefault();

	var settings = getSettings();

	$.post('/settings/update/', settings, function() {
		console.log("POST MADE")
	});
}

function getSettings() {
	var settings = {
		"timeLimit" : $("#time-limit").val() || null,
		"showMap" : $("#show-map").val() || null,
		"targetPosition" : { //default is shoreditch grind
			"latitude" : $("#latitude").val() || null,
			"longitude" : $("#longitude").val() || null
		},
		"countUp" : $("#count-up").val() || null,
		"successImage" : $("#success-image").val() || null,
		"failImage" : $("#fail-image").val() || null,
		"successMessage" : $("#success-message").val() || null,
		"failMessage" : $("#fail-message").val() || null
	};
	return settings;
}