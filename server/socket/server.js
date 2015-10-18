var socketio = require('socket.io');

module.exports = (function(server) {
  var io = {
    server: this.listen(server),
    sockets: []
  };

  io.server.on('connection', function(socket) {
    io.sockets.push(socket);

    socket.on('echo', function(message) {
      socket.emit('echo', message);
    });

    socket.on('disconnect', function() {
      io.sockets.splice(io.sockets.indexOf(socket), 1);
    });
  });

  return io;
}).bind(socketio);