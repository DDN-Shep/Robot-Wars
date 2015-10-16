var socketio = require('socket.io');

module.exports = (function(server) {
  var io = this.listen(server),
      sockets = [];

  io.on('connection', function(socket) {
    sockets.push(socket);

    socket.on('disconnect', function() {
      sockets.splice(sockets.indexOf(socket), 1);
    });
  });
  
  return this;
}).bind(socketio);