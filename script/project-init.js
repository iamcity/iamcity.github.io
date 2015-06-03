require(['jquery'], function ($) {
    var FIREBASE_URL = "https://incandescent-inferno-2819.firebaseio.com/";
    var form = $("[data-project-init-form]");

	form.on('submit', function (evt) {
		evt.preventDefault();

		var address = form.find('[name=projectAddress]')

		var request = $.ajax({
			url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address.val()
		});

		request.done(function (data) {
			var p = {
			    name: form.find("[name=projectName]").val(),
			    description: form.find("[name=projectDescription]").val(),
			    location: {
			    	latitude: data.results[0].geometry.location.lat,
			    	longitude: data.results[0].geometry.location.lng
			    }
			};

			var ref = new Firebase( FIREBASE_URL );
			ref.authAnonymously(function(error, authData) {
			    if (error) {
			        // console.log("Login Failed!", error);
			    } else {
			        // console.log("Authenticated successfully with payload:", authData);

			        var projectRef = new Firebase( FIREBASE_URL + "/web/data/projects" );
			        projectRef.push(p);
			    }
			});
		})
	});
});
