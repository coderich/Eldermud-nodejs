module.exports = {
	createServer : function() {
		// Modules
		var server = require('express').createServer();

		// Routes
		server.get('/*.(js|css)', function(req, res) {
			res.sendfile('./public' + req.url);
		});

		server.get('/', function(req, res) {
			res.sendfile('./views/index.html');
		});

		// Return...
		return server;
	}
};