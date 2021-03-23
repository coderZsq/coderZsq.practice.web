const express = require('express');
const app = express();

app.get('/moment', (req, res, next) => {
  res.end('Hello CORS');
});

app.listen(8888, () => {
  console.log('服务已经开启在8888端口上');
});
