/*
* local storage api emulation for storing objects
* is abstracts the stringfication/parsing process
*/

var ls = ls || {}; //my localStorage namespace

ls.setObject = function(key, obj) {
	var string = JSON.stringify(obj);
	localStorage.setItem(key, string);
};

ls.getObject = function(key) {
	var string = localStorage.getItem(key);
	var obj = JSON.parse(string);
	if(obj === null)
		console.warn("The object "+ key +" couldn't be found in local storage");
	return obj;
};