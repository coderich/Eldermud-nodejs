var _ = require('underscore')._;
var Backbone = require('backbone');
var Room = require('./Room');

module.exports = Backbone.Collection.extend({
	model : Room
});