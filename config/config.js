module.exports = {
	constants : {
		CMD_ATTACK : 1,
		CMD_EAST : 2,
		CMD_WEST : 3,
		CMD_NORTH : 4,
		CMD_SOUTH : 5,
		CMD_NORTHEAST : 6,
		CMD_NORTHWEST : 7,
		CMD_SOUTHEAST : 8,
		CMD_SOUTHWEST : 9
	},
	aliases : {
		1 : [ 'attack' ],
		2 : [ 'east' ],
		3 : [ 'west' ],
		4 : [ 'north' ],
		5 : [ 'south' ],
		6 : [ 'northeast', 'ne' ],
		7 : [ 'northwest', 'nw' ],
		8 : [ 'southeast', 'se' ],
		9 : [ 'southwest', 'sw' ]
	}
};