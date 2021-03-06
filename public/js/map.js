/*

var myOptions = {
   zoom: 8,
   center: new google.maps.LatLng(51.49, -0.12),
   mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map"), myOptions);

*/

/****/

var map;

function initializeMap() {
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

			var marker = new google.maps.Marker({
	      position: pos,
	      map: map,
	      title: 'You are here'
		  });

		  //if(config.targetPosition) {
		  	var marker = new google.maps.Marker({
		      position: new google.maps.LatLng(config.targetPosition.latitude,
		      																config.targetPosition.longitude),
		      map: map,
		      title: 'Get here quick'
			  });
		  //}

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

//this line is not needed. Map is loaded when username is submitted
//google.maps.event.addDomListener(window, 'load', initializeMap);