var chai = require('chai'),
    mocha = require('mocha'),
    should = chai.should();

var io = require('socket.io-client'),
    config = require('../config')[process.env.NODE_ENV = 'test'];

describe('socket server', function() {

  var app,
      url = 'http://' + config.ip + ':' + config.port,
      options = {
        transports: ['websocket'],
        'force new connection': true
      };

  beforeEach(function(done) {
    app = require('../server').io;

    done();
  });

  it('connect', function(done) {
    var client = io.connect(url, options);

    client.once('connect', function() {
      client.disconnect();
      done();
    });
  });

  it('echo', function(done) {
    var client = io.connect(url, options),
        expect = 'Socket io echo test';

    client.once('connect', function() {
      client.once('echo', function(message) {
        message.should.equal(expect);

        client.disconnect();
        done();
      });

      client.emit('echo', expect);
    });
  });

});