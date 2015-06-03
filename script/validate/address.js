define(['jquery'], function ($) {
	return function (el, defer, validationData, callback) {
		if (el.val()) {
			var request = $.ajax({
				url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + el.val()
			});
			request.done(function (data) {
				if (data.results.length > 0) {
					validationData.location = {
						latitude: data.results[0].geometry.location.lat,
						longitude: data.results[0].geometry.location.lng
					};
				} else {
					validationData.failures.push(el);
				}
			});
			request.fail(function () {
				validationData.failures.push(el);
			});
			request.always(function () {
				callback();
			});
		} else {
			callback();
		}
	}
});
