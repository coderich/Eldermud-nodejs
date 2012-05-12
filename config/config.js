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
	aliases[constants.CMD_ATTACK] = [ 'attack' ];
	aliases[constants.CMD_NORTH] = [ 'north' ];
	aliases[constants.CMD_SOUTH] = [ 'south' ];
	aliases[constants.CMD_EAST] = [ 'east' ];
	aliases[constants.CMD_WEST] = [ 'west' ];
	aliases[constants.CMD_NORTHEAST] = [ 'northeast', 'ne' ];
	aliases[constants.CMD_NORTHWEST] = [ 'northwest', 'nw' ];
	aliases[constants.CMD_SOUTHEAST] = [ 'southeast', 'se' ];
	aliases[constants.CMD_SOUTHWEST] = [ 'southwest', 'sw' ];

	exports.constants = constants;
	exports.aliases = aliases;
})()