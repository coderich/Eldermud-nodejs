var config = require('../config/config.js');

module.exports = {
	getCommand : function(word) {
		word = word.tolowercase();
		var aliases = config.aliases;

		for ( var cmd in aliases) {
			for ( var i = 0; i < aliases[cmd].length; i++) {
				if (aliases[cmd][i] === word) {
					return cmd;
				}
			}
		}

		return false;
	}
};