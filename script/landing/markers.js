define(['landing/map', 'text!/data/activities.json'], function (map, activities) {
	activities = JSON.parse(activities).activities;
	for (activity in activities) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(
				activities[activity].location.latitude, activities[activity].location.longitude
			),
			map: map,
			title: [activities[activity].user.name, activities[activity].action.label].join(': ')
		});
	}
});
