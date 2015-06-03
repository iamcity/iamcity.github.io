require(['jquery', 'project-init/validate', 'app'], function ($, validate, app) {

    var form = $("[data-project-init-form]");
    var projectRef = app.firebase.child("projects");
    var defaultMessage = 'This field cannot be left blank';

	form.on('submit', function (evt) {
		evt.preventDefault();

		var validation = validate(form);

		form.find('.has-error').removeClass('has-error');
		form.find('.glyphicon-remove').removeClass('glyphicon-remove');
		form.find('[data-feedback-text]').html('');

		validation.fail(function (data) {
			$.each(data.failures, function (index, el) {
				var formGroup = el.closest('.form-group');
				formGroup.addClass('has-error');
				formGroup.find('[data-validation-feedback]').addClass('glyphicon-remove');
				formGroup.find('[data-feedback-text]').html(el.data('invalidMessage') || defaultMessage);
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
