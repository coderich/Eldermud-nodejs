var _ = require('underscore')._;
var Backbone = require('backbone');
var RoomCollection = require('./RoomCollection');

module.exports = Backbone.Model.extend({
	defaults : {
		rooms : new RoomCollection()
	},
	initialize : function(args) {
		this.rooms = new RoomCollection(args.rooms);
	}
});