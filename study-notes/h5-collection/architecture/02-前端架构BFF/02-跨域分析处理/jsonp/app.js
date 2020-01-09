const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
  let { pathname, query } = url.parse(req.url, true)
  if (pathname == '/jsonp') {
    res.end(`${query.callback}(500)`)
  }
})

server.listen(3000, '127.0.0.1')