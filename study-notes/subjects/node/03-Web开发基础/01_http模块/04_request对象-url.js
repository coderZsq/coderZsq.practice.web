const http = require('http');
const url = require('url');
const qs = require('querystring');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // if (req.url === '/login') {
  //   res.end('欢迎回来~');
  // } else if (req.url === '/users') {
  //   res.end('用户列表~');
  // } else {
  //   res.end('错误请求, 检查~');
  // }

  // /login?username=sq&password=123
  const { pathname, query } = url.parse(req.url);
  if (pathname === '/login') {
    console.log(query);
    console.log(qs.parse(query));
    const { username, password } = qs.parse(query);
    console.log(username, password);
    res.end('请求结果');
  }

  // console.log(req.url);
  // res.end('请求结果~');
});

// 启动服务器, 并且指定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log('服务器请求成功~');
});
