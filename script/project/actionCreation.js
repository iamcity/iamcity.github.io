define(['jquery', 'validate/required'], function ($) {

	return function (form, projectRef) {
		var project = projectRef.val();
		form.on('submit', function (evt) {
			evt.preventDefault();
			project.actions = project.actions || [];
			project.actions.push({
				title: form.find('[name=title]').val(),
				description: form.find('[name=description]').val()
			});
			app.firebase.child(projectRef.key()).update(project, function () {
				window.location.reload();
			});
		});
	}
});
