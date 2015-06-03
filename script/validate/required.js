define(function () {
	return function (el, defer, data, callback) {
		if (el.val() === '') data.failures.push(el);
		callback();
	}
});
