require(['jquery', 'project-init/validate', 'app'], function ($, validate, app) {

    var form = $("[data-project-init-form]");
    var projectRef = app.firebase.child("projects");

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


		    
		    projectRef.push(p);                    
		});
	});
});
