define(['landing/map', 'text!/data/activities.json'], function (map, activities) {
    activities = JSON.parse(activities).activities;
    for (activity in activities) {
	var icon = {
            url: activities[activity].icon.file, //url
	    scaledSize: new google.maps.Size(activities[activity].icon.size, activities[activity].icon.size) //size
            //new google.maps.Size(activities[activity].icon.width, activities[activity].icon.height), //size
            //new google.maps.Point(0,0), //origin
            //new google.maps.Point(anchor_left, anchor_top) //anchor
	    //url: "../res/sit_marron.png", // url
	    //scaledSize: new google.maps.Size(50, 50), // scaled size
	    //origin: new google.maps.Point(0,0), // origin
	    //anchor: new google.maps.Point(0, 0) // anchor
	};
	var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(
		activities[activity].location.latitude, activities[activity].location.longitude
	    ),
	    icon: icon,
	    map: map,
	    title: [activities[activity].user.name, activities[activity].action.label].join(': ')
	    
	});
    }
});
