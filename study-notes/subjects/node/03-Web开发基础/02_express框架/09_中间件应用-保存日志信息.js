const fs = require('fs');

const express = require('express');
const morgan = require('morgan');

const app = express();

const writerStream = fs.createWriteStream('./logs/access.log', {
  flags: 'a+'
});

app.use(morgan('combined', { stream: writerStream }));

app.get('/home', (req, res, next) => {
  res.end('Hello World');
});

app.listen(8000, () => {
  console.log('express初体验服务器启动成功');
});