const Koa = require('koa')
const app = new Koa()

app.use(async function (ctx, next) {
  console.log(1)
  await next()
  console.log(5)
})

app.use(async function (ctx, next) {
  console.log(2)
  await next()
  console.log(4)
})

app.use(async function (ctx, next) {
  console.log(3)
})

app.listen(3000)