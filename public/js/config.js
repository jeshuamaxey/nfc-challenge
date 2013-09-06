//create a global config object
var config = {
	//Game Variables
	"timeLimit" : 15, //in seconds - see below for extra details
	"showMap" : true, //set to false if not
	"countUp" : false, //set to true to count up
	// Images - filename only (not file path)
	"defaultImage" : "",
	"successImage" : "",
	"failImage" : ""
};

/*
* changing the time the user has to complete the challenge
*
* in the text file called 'Procfile' simply change the number
* at the end of the command to the number of seconds you'd
* like the time limit to be. This is so the server knows
* how long the user has. This is IN ADDITION TO changing the
* variable at the top of this config file
*/