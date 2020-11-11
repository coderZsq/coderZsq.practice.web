const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      const fileWriter = fs.createWriteStream('./foo.png', { flags: 'a+' });
      // req.pipe(fileWriter);

      req.on('data', (data) => {
        // console.log(data);
        // fileWriter.write(data);
      });

      req.on('end', () => {
        console.log('文件上传成功~');
        res.end('文件上传成功');
      });
    }
  }
});

server.listen(8000, () => {
  console.log('文件上传服务器开启成功~');
});