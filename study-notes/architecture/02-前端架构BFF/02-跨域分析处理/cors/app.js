const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
  // res.setHeader('Access-Control-Allow-Origin', 'null')
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342')

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,name')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Max-Age', 1728000) // 预请求缓存20天
  if (req.method.toUpperCase() == 'OPTIONS') {
    res.end()
  }

  let { pathname, query } = url.parse(req.url, true)
  if (pathname == '/test') {
    res.end('test')
  }
})

server.listen(3000, '127.0.0.1')