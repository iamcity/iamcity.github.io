define(['jquery'], function ($) {
	var template = $('[data-project-action-template]');
	return function (list, actions) {
		actions.forEach(function (actionRef) {
			var html = template.clone();
			var action = actionRef.val();
			html.find('[data-action-title]').html(action.title);
			html.find('[data-action-description]').html(action.description);
			html.data('actionRef', actionRef);
			list.append(html);
		});
	}
});
