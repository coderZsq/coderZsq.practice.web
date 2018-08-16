const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);
    var html_path = __dirname + '/test.html';
    var img_path = __dirname + '/test.jpg';
    const html = fs.readFileSync(html_path, 'utf8')
    const img = fs.readFileSync(img_path)
    if (request.url === '/') {
        response.writeHead(200, {
             'Content-Type': 'text/html',
             'Connection' : 'close'
        })
        response.end(html);
    } else {
        response.writeHead(200, {
            'Content-Type': 'image/jpg', 
            'Connection': 'close'
        })
        response.end(img);
    }
}).listen(8888);

console.log('server listening on 8888')
