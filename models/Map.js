var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	initialize : function(args) {
		if (typeof (args.rooms) !== 'undefined') {
			for ( var id in args.rooms) {
				for ( var p in args.rooms[id].exits) {
					args.rooms[id].exits[p] = args.rooms[args.rooms[id].exits[p]];
				}
			}
		}
	}
});