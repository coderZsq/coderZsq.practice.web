const http = require('http');
const url = require('url');
const qs = require('querystring');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === '/login') {
    if (req.method === 'POST') {
      // 拿到body中的数据
      req.setEncoding('utf-8');
      req.on('data', (data) => {
        const { username, password } = JSON.parse(data);
        console.log(username, password);
      })
      res.end('Hello World');
    }
  }
});

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器请求成功~');
});
