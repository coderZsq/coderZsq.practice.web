const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url)
    var path =  __dirname +  '/test.html';
    var html = fs.readFileSync(path);
    response.writeHead(200, {
        'Content-Type': 'text/html'        
    })
    response.end(html)
}).listen(8888);

console.log('server listening on 8888')