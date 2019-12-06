const http = require('http')
const url = require('url')

let routers = [{
  path: '*',
  method: '*',
  handler() {

  }
}]

function Application() {

}

Application.prototype.get = function (path, handler) {
  routers.push({
    path,
    method: 'get',
    handler
  })
}

Application.prototype.listen = function () {
  let server = http.createServer(function (req, res) {
    let { pathname } = url.parse(req.url, true)
    for (let i = 0; i < routers.length; i++) {
      let { path, method, handler } = routers[i];
      if (path == pathname && req.method.toLowerCase() == method) {
        return handler(req, res)
      }
    }
    routers[0].handler(req, res)
  })
  server.listen(...arguments)
}

module.exports = Application