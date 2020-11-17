const express = require('express');

const app = express();

app.get('/products/:id', (req, res, next) => {
  console.log(req.params);
  // req.params => 在数据库中查询真实的商品数据
  res.end('商品的详情数据~');
});

app.get('/login', (req, res, next) => {
  console.log(req.query);
  res.end('用户登录成功~');
});

app.listen(8000, () => {
  console.log('普通中间件服务器启动成功~');
});