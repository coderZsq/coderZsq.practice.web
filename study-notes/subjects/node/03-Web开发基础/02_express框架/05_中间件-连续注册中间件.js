const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('common middleware 01');
  next();
});

app.get('/home', (req, res, next) => {
  console.log('home path and method middleware 01');
  next();
});

app.get('/home', (req, res, next) => {
  console.log('home path and method middleware 02');
  next();
}, (req, res, next) => {
  console.log('home path and method middleware 03');
  next();
}, (req, res, next) => {
  console.log('home path and method middleware 04');
  res.end('home page');
});

app.listen(8000, () => {
  console.log('express初体验服务器启动成功~');
});