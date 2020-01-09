const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer(function (req, res) {
  // if (req.url == '/favicon.ico') {
  //   return
  // }

  let { pathname, query } = url.parse(req.url, true)
  if (pathname == '/favicon.ico') {
    return
  }

  if (pathname == '/square') {
    fs.readFile('./src/square.html', 'utf8', function (err, data) {
      if (err) {
        console.log(err)
        return
      }
      res.end(data)
    })
  } else if (pathname == '/circle') {
    fs.readFile('./src/circle.html', 'utf8', function (err, data) {
      if (err) {
        console.log(err)
        return
      }
      res.end(data)
    })
  }

  /**
   * 凡是资源文件, 都会自动发送请求, 我们需要对这些资源文件作出处理
   * 资源文件 html, css, js, img
   * 如果有很多资源文件: 因为这些资源文件会自动带着路径来作为请求的路径
   * 一般这些请求的路径就是我们资源文件所在的路径, 所以如果很多资源文件
   * 我们可以把请求路径作为读取文件的路径即可
   */
})

server.listen(3000, '127.0.0.1')