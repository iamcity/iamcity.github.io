require(['jquery', 'project-init/validate', 'app'], function ($, validate, app) {

	var form = $("[data-project-init-form]");
	var projectRef = app.firebase;
	var defaultMessage = 'This field cannot be left blank';

	if (app && app.authData && app.authData.facebook) {
		$("#projectOwner").val(app.authData.facebook.displayName);
		$("[data-project-owner-missing-alert]").remove();
	}

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
			var location = data.location ? data.location : {}
			var p = {
				name: form.find("[name=projectName]").val(),
				description: form.find("[name=projectDescription]").val(),
				location: location
			};

			p.user = app.authData;
			var pref = projectRef.push(p);
			location.href = "/project.html?key=" + pref.key();
		});
	});
});
