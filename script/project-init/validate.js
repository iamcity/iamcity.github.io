define(['jquery'], function ($) {
	return function (form) {
		var validationsToRun = 0;
		var validationsRan = 0;
		var defer = $.Deferred();
		var data = { failures: [] };
		form.find('[data-validate]').each(function (index, element) {
			var el = $(element);
			var validation = el.data('validate').split(' ');
			$.each(validation, function (index, validationFunction) {
				addValidation();
				// require('validate/' + validationFunction)(el, defer, validationRan);
				require(['validate/' + validationFunction], function (thing) {
					thing(el, defer, data, validationRan);
				});
			});
		});

		function addValidation () {
			validationsToRun += 1;
		}

		function validationRan () {
			validationsRan += 1;
			if (validationsRan === validationsToRun) {
				if (data.failures.length > 0) {
					defer.reject(data);
				} else {
					defer.resolve(data);
				}
			}
		}

		return defer;
	}
});
