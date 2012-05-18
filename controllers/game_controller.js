var config = require('../config/config');
// TODO - perhaps pass in config to helper?
var helper = require('../helpers/helper');
var realm = require('./data_controller').load();
var Player = require('../models/Player');

// Every time a player is added
realm.get('players').on('add', function(player) {
	player.on('change:room', function(model, room) {
		var socket = player.get('socket');
		var previousRoomId = player.previous('room').get('id');
		var newRoomId = room.get('id');

		socket.leave(previousRoomId);
		socket.join(newRoomId);

		module.exports.trigger('ioSocketToRooms', {
			socket : socket,
			rooms : [ previousRoomId ],
			msg : 'A player has just left the room'
		});

		module.exports.trigger('ioSocketToRooms', {
			socket : socket,
			rooms : [ newRoomId ],
			msg : 'A player has just entered the room'
		});

		module.exports.trigger('ioServerToSockets', {
			sockets : [ socket ],
			msg : "\n" + room.toString()
		});
	});

	module.exports.trigger('ioSocketToAll', {
		socket : player.get('socket'),
		msg : 'A new player has arrived!'
	});

	module.exports.trigger('ioServerToSockets', {
		sockets : [ player.get('socket') ],
		msg : player.get('room').toString()
	});
});

module.exports = {
	// IO Handling
	ioConnection : function(socket) {
		// Disconnect handler
		socket.on('disconnect', function() {
			module.exports.trigger('ioServerToAll', {
				msg : 'Someone has just disconnected...'
			});
		});

		// TODO - Authenticate
		var player = new Player({
			room : realm.get('map').get('rooms').get(1),
			socket : socket
		});
		socket.join(1);
		realm.get('players').add(player);

		// Message handler
		socket.on('message', function(msg) {
			var cmd = helper.getCommand(msg);
			var action = helper.getAction(cmd);
			var observables = action.getOpening(player, player);
			
			for (var i=0; i<observables.length; i++) {
				module.exports.trigger('ioServerToSockets', {
					sockets : [ this ],
					msg : observables[i].get('msg')
				});
			}

			/*
			switch (cmd) {
			case config.constants.CMD_NORTH:
			case config.constants.CMD_SOUTH:
			case config.constants.CMD_EAST:
			case config.constants.CMD_WEST:
			case config.constants.CMD_NORTHEAST:
			case config.constants.CMD_NORTHWEST:
			case config.constants.CMD_SOUTHEAST:
			case config.constants.CMD_SOUTHWEST:
			case config.constants.CMD_UP:
			case config.constants.CMD_DOWN:
				var newRoomId = player.get('room').get('exits')[cmd];

				if (typeof (newRoomId) !== 'undefined') {
					player.set({
						room : realm.get('map').get('rooms').get(newRoomId)
					});
				} else {
					module.exports.trigger('ioServerToSockets', {
						sockets : [ this ],
						msg : 'There is no exit in that direction!'
					});
				}

				break;
			default:
				module.exports.trigger('ioSocketToRooms', {
					socket : this,
					rooms : [ player.get('room').get('id') ],
					msg : 'Someone says: ' + msg
				});
				module.exports.trigger('ioServerToSockets', {
					sockets : [ this ],
					msg : 'You say: ' + msg
				});
				break;
			}
			*/
		});
	}
};

// Extend to be an event dispatcher
var _ = require('underscore')._;
var Backbone = require('backbone');
_.extend(module.exports, Backbone.Events);