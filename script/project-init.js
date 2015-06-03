require(['jquery', 'landing/project-init'], function ($) {
	var form = $('[data-project-init-form]');

	form.on('submit', function (evt) {
		evt.preventDefault();

		var address = form.find('[name=projectAddress]')

		var request = $.ajax({
			url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address.val()
		});

		request.done(function (data) {
			form.find('[name=projectLatitude]').val(data.results[0].geometry.location.lat);
			form.find('[name=projectLongitude]').val(data.results[0].geometry.location.lng);
		})
	});
});
