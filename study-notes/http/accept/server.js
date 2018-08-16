const http = require('http');
const fs = require('fs');
const zlib = require('zlib')

http.createServer(function (request, response) {
    console.log('request come', request.url);
    var path = __dirname + '/test.html';
    const html = fs.readFileSync(path)
    response.writeHead(200, {
          'Content-Type': 'text/html',
        //   'X-Content-Type-Options' : 'nosniff'
          'Content-Encoding' : 'gzip'
    })
    response.end(zlib.gzipSync(html));
}).listen(8888);

console.log('server listening on 8888')
