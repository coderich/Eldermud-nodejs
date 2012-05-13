var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	initialize : function(args) {
		if (!args || !args.socket) {
			throw "Player InvalidConstrutorArgs";
		}
		this.on('change:room', function(room) {
		});
	}
});