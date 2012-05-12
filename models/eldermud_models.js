(function() {
	// This trick here let's us figure out if we're being used as a "CommonJS"
	// module or just in a script tag This allows for a module that works on the
	// server as well as the client
	var server = false, models;
	if (typeof exports !== 'undefined') {
		var _ = require('underscore')._;
		var Backbone = require('backbone');

		models = exports;
		server = true;
	} else {
		models = this.models = {};
	}

	// The ApplicationModel that holds the entire state
	models.AppModel = Backbone.Model.extend({
		initialize : function(args) {
			if (!args || !args.io || !args.map || !args.players) {
				throw "InvalidConstructorArgs";
			}
			this.players.on('add', function(player) {
				player.get('socket').send("Hello, Welcome to ElderMud!");
			});
			this.players.on('change:room', function(room) {

			});
		}
	});

	// The map of the world
	models.Map = Backbone.Model.extend({
		initialize : function() {
			this.rooms = new models.RoomCollection();
		}
	});

	// A Player model
	models.Player = Backbone.Model.extend({
		initialize : function(args) {
			if (!args || !args.room) {
				throw "InvalidConstrutorArgs";
			}
		}
	});
	models.PlayerCollection = Backbone.Collection.extend({
		model : models.Player
	});

	// A Room model
	models.Room = Backbone.Model.extend({
		initialize : function(args) {
			if (!args || !args.title || !args.description) {
				throw "InvalidConstructorArgs";
			}
		}
	});
	models.RoomCollection = Backbone.Collection.extend({
		model : models.Room
	});
})()