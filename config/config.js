(function() {
	var constants = {
		CMD_ATTACK : 1,
		CMD_NORTH : 'n',
		CMD_SOUTH : 's',
		CMD_EAST : 'e',
		CMD_WEST : 'w',
		CMD_NORTHEAST : 'ne',
		CMD_NORTHWEST : 'nw',
		CMD_SOUTHEAST : 'se',
		CMD_SOUTHWEST : 'sw',
		CMD_UP : 'u',
		CMD_DOWN : 'd'
	};

	var aliases = new Object();
	aliases[constants.CMD_ATTACK] = [ 'a', 'at', 'att', 'atta', 'attac', 'attack' ];
	aliases[constants.CMD_NORTH] = [ 'n', 'north' ];
	aliases[constants.CMD_SOUTH] = [ 's', 'south' ];
	aliases[constants.CMD_EAST] = [ 'e', 'east' ];
	aliases[constants.CMD_WEST] = [ 'w', 'west' ];
	aliases[constants.CMD_NORTHEAST] = [ 'ne', 'northe', 'northea', 'northeas', 'northeast' ];
	aliases[constants.CMD_NORTHWEST] = [ 'nw', 'northw', 'northwe', 'northwes', 'northwest' ];
	aliases[constants.CMD_SOUTHEAST] = [ 'se', 'southe', 'southea', 'southeas', 'southeast' ];
	aliases[constants.CMD_SOUTHWEST] = [ 'sw', 'southw', 'southwe', 'southwes', 'southwest' ];
	aliases[constants.CMD_UP] = [ 'u', 'up' ];
	aliases[constants.CMD_DOWN] = [ 'd', 'dow', 'down' ];

	exports.constants = constants;
	exports.aliases = aliases;
})()