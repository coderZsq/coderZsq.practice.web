let http = require('http');

http
  .createServer(function (req, res) {
    console.log(req);
    res.end('Hello world');
  })
  .listen(8082);
