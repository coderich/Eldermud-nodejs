var _ = require('underscore')._;
var Backbone = require('backbone');
var RoomCollection = require('./RoomCollection');

module.exports = Backbone.Model.extend({
	initialize : function(args) {
		if (args && args.rooms) {
			this.set('rooms', new RoomCollection(args.rooms));
		}
	}
});