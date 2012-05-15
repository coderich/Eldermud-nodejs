var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	/*
	initialize : function(args) {
		if (args && args.rooms) {
			var rooms = this.get('rooms');

			for ( var id in args.rooms) {
				for ( var p in args.rooms[id].exits) {
					rooms[id]['exits'][p] = args.rooms[args.rooms[id].exits[p]];
					// this.get('rooms')[id].get('exits')[p] =
					// args.rooms[args.rooms[id].exits[p]];
				}
			}
		}
	}
	*/
});