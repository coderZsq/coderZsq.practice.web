const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk.toString());
  }).on('end', () => {
    body = body.join('');
    console.log('body: ', body);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`
<html maaa=a >
<head>
  <style>
    body div #myid {
      width: 100px;
      background-color: #ff5000;
    }
    body div img {
      width: 30px;
    }
  </style>
</head>
<body>
  <div>
    <img id="myid"/>
    <img/>
  </div>
</body>
</html>
    `);
  });
}).listen(8088);

console.log('server started');