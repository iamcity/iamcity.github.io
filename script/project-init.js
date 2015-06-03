require(['jquery', 'project-init/validate'], function ($, validate) {
    var FIREBASE_URL = "https://incandescent-inferno-2819.firebaseio.com/";
    var form = $("[data-project-init-form]");

	form.on('submit', function (evt) {
		evt.preventDefault();

		var validation = validate(form);

		form.find('.has-error').removeClass('has-error');

		validation.fail(function (data) {
			$.each(data.failures, function (index, el) {
				el.closest('.form-group').addClass('has-error');
			})
		});

		validation.done(function (data) {
			var p = {
			    name: form.find("[name=projectName]").val(),
			    description: form.find("[name=projectDescription]").val(),
			    location: {
			    	latitude: form.find("[name=projectLatitude]").val(),
			    	longitude: form.find("[name=projectLongitude]").val()
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
