var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (req, res) {
  var pathName = url.parse(req.url).pathname
  console.log("Request for: " + pathName + " received.")

  fs.readFile(pathName.substr(1), function (err, data) {
    if (err) {
      console.log(err)
      res.writeHead(404, { 'Content-Type': 'text/html' })
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data.toString())
    }
    res.end()
  })
}).listen(8888)
