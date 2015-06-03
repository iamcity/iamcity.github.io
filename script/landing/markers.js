define(['landing/map'], function (map) {
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(-25.363882,131.044922),
		map: map,
		title: 'Hello World!'
	});
});
