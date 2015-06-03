define(['async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false'], function() {
	var map;
	var mapOptions = {
		center: { lat: 52.3165773, lng: 4.944633},
		zoom: 10
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	return map;
});
