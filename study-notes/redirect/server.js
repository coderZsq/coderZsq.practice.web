const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);

    if (request.url === '/') {
      // response.writeHead(302, {
      response.writeHead(301, {
        'Content-Type' : 'text/html',
        'Location' : '/new'
      })
      response.end('')
    }

    if (request.url === '/new') {
      response.writeHead(302, {
        'Content-Type': 'text/html',
      })
      response.end('<div>this is content</div>');
    }

}).listen(8888);

console.log('server listening on 8888')
