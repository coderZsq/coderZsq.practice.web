const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);
    var path = __dirname + '/test.html';

    if (request.url === '/') {
        const html = fs.readFileSync(path, 'utf8')
        response.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        response.end(html);
    }

    if (request.url === '/script.js') {
        const etag = request.headers['if-none-match'];
        if (etag === '777') {
            response.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=20000000, no-cache',
                // 'Cache-Control': 'max-age=20000000, no-store',
                'Last-Modified': '123',
                'Etag': '777'
           })
           response.end('');
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/javascript',
                // 'Cache-Control': 'max-age=200',
                'Cache-Control': 'max-age=20000000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            })
            response.end('console.log("script loaded twice")');
        }
    }
}).listen(8888);

console.log('server listening on 8888')
