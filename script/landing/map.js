define(['async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false'], function() {
	var map;
	var mapOptions = {
	    center: { lat:52.354174, lng:4.908720},
	    zoom: 12
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	return map;
});
