(function() {
	var constants = {
		CMD_ATTACK : 1,
		CMD_NORTH : 2,
		CMD_SOUTH : 3,
		CMD_EAST : 4,
		CMD_WEST : 5,
		CMD_NORTHEAST : 6,
		CMD_NORTHWEST : 7,
		CMD_SOUTHEAST : 8,
		CMD_SOUTHWEST : 9
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

	exports.constants = constants;
	exports.aliases = aliases;
})()