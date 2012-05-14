var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults : {
		map : new Map(),
		players : new PlayerCollection()
	}
});