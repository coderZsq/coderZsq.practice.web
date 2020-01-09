const express = require('express')
const app = express()

// 我们在express中路由如果匹配到后, 不会继续往下匹配
// 如果我们想要继续匹配, 我们需要借助一个方法next
app.get('/', function (req, res, next) {
  console.log(1)
  next()
  console.log(3)
  res.send()
})

app.get('/', function (req, res, next) {
  console.log(2)
  next()
})

app.listen(3000)