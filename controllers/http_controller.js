module.exports = {
	createServer : function() {
		// Modules
		var server = require('express').createServer();
		var jade = require('jade');

		// Config
		server.set('view engine', 'jade');
		server.set('view options', {
			layout : false
		});

		// Routes
		server.get('/*.(js|css)', function(req, res) {
			res.sendfile('../public' + req.url);
		});
		server.get('/', function(req, res) {
			res.render('eldermud_view');
		});

		// Start server
		server.listen(8080);

		// Return...
		return server;
	}
};