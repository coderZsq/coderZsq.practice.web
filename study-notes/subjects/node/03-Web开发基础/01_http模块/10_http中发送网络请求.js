const http = require('http');

// http发送get请求
// http.get('http://localhost:8888', (res) => {
//   res.on('data', (data) => {
//     console.log(data.toString());
//   });

//   res.on('end', () => {
//     console.log('获取到了所有的结果');
//   });
// });

// http发送post请求
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8888
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  });

  res.on('end', () => {
    console.log('获取到了所有的结果');
  });
});

req.end();