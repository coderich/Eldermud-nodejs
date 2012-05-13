var _ = require('underscore')._;
var Backbone = require('backbone');
var Player = require('./Player');

module.exports = Backbone.Collection.extend({
	model : Player
});