define(function () {
	var Module = {
		foo: 'bar',
		start: function () {
			console.assert(this.foo === 'bar');
			require(['./dependency'], function (dependency) {
				console.assert(this === Module, '`this` should be bound to `Module`');
				console.assert(this.foo === 'bar', '`this.foo` should equal "bar"');
			}.bind(this));
		}
	};
	Module.start();
});
