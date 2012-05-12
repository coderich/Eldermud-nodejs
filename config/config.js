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
	aliases[CMD_ATTACK] = [ 'attack' ];
	aliases[CMD_NORTH] = [ 'north' ];
	aliases[CMD_SOUTH] = [ 'south' ];
	aliases[CMD_EAST] = [ 'east' ];
	aliases[CMD_WEST] = [ 'west' ];
	aliases[CMD_NORTHEAST] = [ 'northeast', 'ne' ];
	aliases[CMD_NORTHWEST] = [ 'northwest', 'nw' ];
	aliases[CMD_SOUTHEAST] = [ 'southeast', 'se' ];
	aliases[CMD_SOUTHWEST] = [ 'southwest', 'sw' ];

	exports.constants = constants;
	exports.aliases = aliases;
})()