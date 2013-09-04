//create a global config object
var config = config || {};

//Game Variables
config.timeLimit = 15; //in seconds - see below for extra details
config.showMap = true; //set to false if not
config.countUp = false; //set to true to count up

// Images
config.defaultImage = "";
config.successImage = "";
config.failImage = "";

/*
* changing the time the user has to complete the challenge
*
* in the text file called 'Procfile' simply change the number
* at the end of the command to the number of seconds you'd
* like the time limit to be. This is so the server knows
* how long the user has. This is in addition to changing the
* variable at the top of this config file
*/

// get this working so client and server side read from one variable
exports.timeLimit = config.timeLimit;
