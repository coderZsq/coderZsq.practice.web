const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    var html = fs.readFileSync('test.html')
    response.writeHead(200, {
        'Content-Type': 'text/html'        
    })
    response.end(html)
}).listen(8888);