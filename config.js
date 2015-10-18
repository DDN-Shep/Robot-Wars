var path = require('path');

module.exports = {
  development: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 4994,
    path: {
      client: path.join(__dirname, 'client'),
      views: path.join(__dirname, 'server/views')
    }
  },
  test: {
    ip: '0.0.0.0',
    port: 9449,
    path: {
      client: path.join(__dirname, 'client'),
      views: path.join(__dirname, 'server/views')
    }
  }
};