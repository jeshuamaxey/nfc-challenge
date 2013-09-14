var settings = {
	//Game Variables
	"timeLimit" : 15, //in seconds - see below for extra details
	"showMap" : true, //set to false if not
	"countUp" : false, //set to true to count up
	// Images - filename only (not file path)
	"defaultImage" : "", //doesn't work yet
	"successImage" : "",
	"failImage" : "",
	// Images - filename only (not file path)
	"successMessage" : "",
	"failMessage" : "",
	"targetPosition" : { //default is shoreditch grind
		"latitude" : 51.525877,
		"longitude" : -0.088181
	}
}

exports.get = function(request, response) {
	response.send(settings);
}

exports.update = function(data) {
	var newSettings = data.body;
	settings = {
		"timeLimit" : newSettings.timeLimit || settings.timeLimit,
		"showMap" : newSettings.showMap || settings.showMap,
		"countUp" : newSettings.countUp || settings.countUp,
		"defaultImage" : newSettings.defaultImage || settings.defaultImage,
		"successImage" : newSettings.successImage || settings.successImage,
		"failImage" : newSettings.failImage || settings.failImage,
		"successMessage" : newSettings.successMessage || settings.successMessage,
		"failMessage" : newSettings.failMessage || settings.failMessage,
		"targetPosition" : newSettings.targetPosition || settings.targetPosition
	}
	//console.log(settings);
}