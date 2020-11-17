const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer();

app.use(upload.any());

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('用户登录成功');
});

app.listen(8000, () => {
  console.log('form-data解析服务器启动成功');
});