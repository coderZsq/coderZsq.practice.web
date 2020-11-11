const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      req.setEncoding('binary');

      let body = '';
      const totalBoundary = req.headers['content-type'].split(';')[1];
      const boundary = totalBoundary.split('=')[1];
      // console.log(boundary)

      req.on('data', (data) => {
        body += data
      });

      req.on('end', () => {
        // console.log(body); 
        // 处理body
        // 1. 获取image/png的位置
        const payload = qs.parse(body, '\r\n', ': ');
        const type = payload['Content-Type'];

        // 2. 开始在image/png的位置进行截取
        const typeIndex = body.indexOf(type);
        const typeLength = type.length;
        let imageData = body.substring(typeIndex + typeLength);

        // 3. 将中间的两个空格去掉
        imageData = imageData.replace(/^\s\s*/, '');

        // 4. 将最后的boundary去掉
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`));

        fs.writeFile('./foo.png', imageData, 'binary', (err) => {
          res.end('文件上传成功');
        });

      });
    }
  }
});

server.listen(8000, () => {
  console.log('文件上传服务器开启成功~');
});