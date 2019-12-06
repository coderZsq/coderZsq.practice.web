const Koa = require('koa')
const app = new Koa()

app.use(function (ctx, next) {
  console.log(ctx.url)
  console.log(ctx.method)
  console.log(ctx.query)
  console.log(ctx.querystring)
})

app.listen(3000)