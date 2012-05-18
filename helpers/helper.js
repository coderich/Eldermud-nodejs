var config = require('../config/config.js');
var Walk = require('../models/actions/Walk');
var Talk = require('../models/actions/Talk');

module.exports = {
	getCommand : function(word) {
		word = word.toLowerCase();
		var aliases = config.aliases;

		for ( var cmd in aliases) {
			for ( var i = 0; i < aliases[cmd].length; i++) {
				if (aliases[cmd][i] === word) {
					return cmd;
				}
			}
		}

		return false;
	},
	getAction : function(cmd, player) {
		switch (cmd) {
		case config.constants.CMD_NORTH:
			return new Walk({
				player : player,
				direction : 'north'
			});
		case config.constants.CMD_SOUTH:
			return new Walk({
				player : player,
				direction : 'south'
			});
		case config.constants.CMD_EAST:
			return new Walk({
				player : player,
				direction : 'east'
			});
		case config.constants.CMD_WEST:
			return new Walk({
				player : player,
				direction : 'west'
			});
		case config.constants.CMD_NORTHEAST:
			return new Walk({
				player : player,
				direction : 'northeast'
			});
		case config.constants.CMD_NORTHWEST:
			return new Walk({
				player : player,
				direction : 'northwest'
			});
		case config.constants.CMD_SOUTHEAST:
			return new Walk({
				player : player,
				direction : 'southeast'
			});
		case config.constants.CMD_SOUTHWEST:
			return new Walk({
				player : player,
				direction : 'southwest'
			});
		case config.constants.CMD_UP:
			return new Walk({
				player : player,
				direction : 'up'
			});
		case config.constants.CMD_DOWN:
			return new Walk({
				player : player,
				direction : 'down'
			});
		default:
			return new Talk();
		}
	}
};