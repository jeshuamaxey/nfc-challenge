$("form").submit(updateConfiguration);

function updateConfiguration(e) {
	//stop page redirection
	e.preventDefault();
	console.log(99);
	//POST
	var settings = {'one':1}
	$.post('/settings/update/', settings, function() {
		console.log("POST MADE")
	});
}