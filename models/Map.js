var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	initialize : function(args) {
		for (var id in args.room) {
			for (var p in args.room[id].exits) {
				args.room[id].exits[p] = args.room[args.room[id].exits[p]];
			}
		}
	}
});