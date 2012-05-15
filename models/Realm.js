var _ = require('underscore')._;
var Backbone = require('backbone');

var Map = require('./Map');
var PlayerCollection = require('./PlayerCollection');

module.exports = Backbone.Model.extend({
	defaults : {
		players : new PlayerCollection()
	},
	initialize : function(args) {
		if (args && args.map) {
			map = new Map(args.map);
		}
	}
});