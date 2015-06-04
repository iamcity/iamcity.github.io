define(function () {
	return function (actionEl, projectRef) {
		actionEl.find('[data-action-enroll]').on('click', function (evt) {
			var actionRef = actionEl.data('actionRef');
			var action = actionRef.val();
			evt.preventDefault();
			action.enrolled = action.enrolled || [];
			action.enrolled.push(app.authData);
			app.firebase.child(
				projectRef.key() + '/actions/' + actionRef.key()).update(action, function () {
					window.location.reload();
				}
			);
		});
	}
});
