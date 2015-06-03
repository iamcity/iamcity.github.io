define(['jquery'], function ($) {
	return function (form) {
		var valid = true;
		form.find('[data-required]').each(function (index, element) {
			$(element).closest('.form-group').removeClass('has-error');
			if ($(element).val() === '') {
				valid = false;
				$(element).closest('.form-group').addClass('has-error');
			}
		});

		return valid;
	}
});
