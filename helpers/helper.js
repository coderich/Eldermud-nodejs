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
	getAction : function(cmd, extra) {
		switch (cmd) {
			case config.constants.CMD_NORTH:
				return new Walk({direction: 'north'});
			case config.constants.CMD_SOUTH:
				return new Walk({direction: 'south'});
			case config.constants.CMD_EAST:
				return new Walk({direction: 'east'});
			case config.constants.CMD_WEST:
				return new Walk({direction: 'west'});
			case config.constants.CMD_NORTHEAST:
				return new Walk({direction: 'northeast'});
			case config.constants.CMD_NORTHWEST:
				return new Walk({direction: 'northwest'});
			case config.constants.CMD_SOUTHEAST:
				return new Walk({direction: 'southeast'});
			case config.constants.CMD_SOUTHWEST:
				return new Walk({direction: 'southwest'});
			case config.constants.CMD_UP:
				return new Walk({direction: 'up'});
			case config.constants.CMD_DOWN:
				return new Walk({direction: 'down'});
			default:
				return new Talk();
		}
	}
};