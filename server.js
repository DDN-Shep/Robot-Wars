var http = require('http'),
    express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config')[env],
    app = express(),
    server = exports.server = http.Server(app);

/*
  Initialise socket server
  
  This will broadcast robot movements across an arena.
*/
var io = exports.io = require('./server/socket/server')(server);

/*
  Make the client directory public, to freely distribute static files
*/
app.use(express.static(config.path.client));

/*
  Start web server
*/
server.listen(config.port, config.ip, function() {
  var addr = server.address();

  console.log('Robot Wars server listening at', addr.address + ':' + addr.port);
});
