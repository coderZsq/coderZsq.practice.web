const express = require('express');

const app = express();

// 自己编写的json解析
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) => {
//       const info = JSON.parse(data.toString());
//       req.body = info;
//     });

//     req.on('end', () => {
//       next();
//     });
//   } else {
//     next();
//   }
// });

// 使用express提供给我们的body解析
// body-parser: express3.x 内置express框架
// body-parser: express4.x 被分离出去
// body-parser类似功能: express4.16.x 内置成函数
app.use(express.json());
// extended
// true: 那么对urlencoded进行解析时, 它使用的是第三方库: qs
// false: 那么对urlencoded进行解析时, 它使用的是Node内置模块: queryString
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('coderZsq, Welcome Back~');
});

app.post('/products', (req, res, next) => {
  console.log(req.body);
  res.end('Upload Product Info Success~');
});

app.listen(8000, () => {
  console.log('express初体验服务器启动成功~');
});