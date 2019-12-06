class Koa {
  constructor() {
    this.middleware = []
  }
  use(fn) {
    this.middleware.push(fn)
  }
  listen(port) {
    let middleware = this.middleware
    require('http').createServer(function (req, res) {
      let ctx = { req, res };
      dispatch(0)
      function dispatch(idx) {
        middleware[idx](ctx, () => dispatch(idx + 1))
      }
    }).listen(port)
  }
}

module.exports = Koa