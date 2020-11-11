const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 设置状态码
  // 方式一: 直接给属性赋值
  // res.statusCode = 400;
  // 方式二: 和Head一起设置
  res.writeHead(503);

  // 响应结果
  res.write('响应结果一');
  res.end('Hello World');
});

// 启动服务器, 并且指定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log('服务器请求成功~');
});
