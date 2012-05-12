var config = require('./config.js');

module.exports = {
	getCommand : function(word) {
		var aliases = config.aliases;

		for (var cmd in aliases) {
			for ( var i = 0; i < aliases[cmd].length; i++) {
				if (aliases[cmd][i].match(word)) {
					return cmd;
				}
			}
		}

		return false;
	}
};