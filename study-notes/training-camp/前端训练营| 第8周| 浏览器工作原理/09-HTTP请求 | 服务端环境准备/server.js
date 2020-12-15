const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk); // 视频有误, 需删除toString,保持字节数组.
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body: ', body);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hello World\n');
  });
}).listen(8088);

console.log('server started');