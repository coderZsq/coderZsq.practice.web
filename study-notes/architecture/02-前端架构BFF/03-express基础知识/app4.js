const express = require('express')
const app = express()

// 如果我们使用use方法来处理中间件, 我们只需要设置基础路由匹配即可
app.use('/admin', function (req, res) {
  res.send('/admin')
})

// app.use('/', function (req, res) {
//   res.send('/')
// })

// 当使用use方法匹配所有的路径的时候, 我们可以省略路径
app.use(function (req, res) {
  res.send('/')
})

app.listen(3000)