const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);
    
    if (request.url === '/') {
        var path = __dirname + '/test.html';
        const html = fs.readFileSync(path, 'utf8')
        response.writeHead(200, {
            'Content-Type': 'text/html',
            // 'Content-Security-Policy': 'default-src http: https:'
            // 'Content-Security-Policy': 'default-src \'self\'
            // 'Content-Security-Policy': 'default-src \'self\' https://cdn.bootcss.com/'
            // 'Content-Security-Policy': 'default-src \'self\'; form-action \'self\''
            // 'Content-Security-Policy': 'script-src \'self\'; form-action \'self\''
            // 'Content-Security-Policy': 'script-src \'self\'; form-action \'self\'; report-uri /report'
            // 'Content-Security-Policy-Report-Only': 'script-src \'self\'; form-action \'self\'; report-uri /report'
        })
        response.end(html);
    } else {
        response.writeHead(200, {
            'Content-Type': 'application/javascript'
        })
        response.end('console.log("loaded script")')
    }

}).listen(8888);

console.log('server listening on 8888')
