const express = require('express');

// exxpress其实是一个函数: createApplication
// 返回app
const app = express();

// 监听默认路径
app.get('/', (req, res, next) => {
  res.end('Hello Express');
});

app.post('/', (req, res, next) => {
  res.end('Hello POST Express');
});

app.post('/login', (req, res, next) => {
  res.end('Welcome Back!');
});

// 开启监听
app.listen(8000, () => {
  console.log('express初体验服务器启动成功~');
});