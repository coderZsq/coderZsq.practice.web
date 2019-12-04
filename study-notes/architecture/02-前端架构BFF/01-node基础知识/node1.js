const http = require('http')

const server = http.createServer(function (req, res) {
  // res.setHeader('Content-Type', 'text/html;charset=utf8')
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
  res.end('<h1>hello world</h1>')
})

server.listen(3000, '127.0.0.1')