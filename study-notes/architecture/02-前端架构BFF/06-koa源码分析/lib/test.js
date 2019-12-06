const Koa = require('./koa.js')
const app = new Koa()

app.use(function (ctx, next) {
  console.log(1)
  next()
})

app.use(function (ctx, next) {
  console.log(2)
})

app.listen(3000)