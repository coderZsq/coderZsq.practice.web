const express = require('express')
const app = express()

app.use(function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-type,name')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.header('Access-Control-Max-Age', 1728000) // 预请求缓存20天
  if (req.url == '/test') {
    res.send('express test')
  }
})

// app.get('/test', function (req, res) {
//   res.send('express test')
// })

app.listen(3000)