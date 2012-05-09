function msgReceived(msg){
  $clientCounter.html(msg.clients);
}

$(document).ready(function () {
  $clientCounter = $("#client_count")

  var socket = io.connect();
  socket.on('connect', function() {
	socket.on('message', function(msg) { msgReceived(msg) });
  });
});
