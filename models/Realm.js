var _ = require('underscore')._;
var Backbone = require('backbone');

var Map = require('./Map');
var PlayerCollection = require('./PlayerCollection');

module.exports = Backbone.Model.extend({
	defaults : {
		map : new Map(),
		players : new PlayerCollection()
	},
	initialize : function(args) {
		if (args && args.map) {
			this.model.map = new Map(args.map);
		}
	}
});