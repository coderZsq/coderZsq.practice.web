const express = require('express')
const app = express()

// 我们处理路由的时候, 如果路由非常相近, 我们可以借助next方法
app.get('/:username/:password', function (req, res, next) {
  next()
  res.send('user')
})

app.get('/admin/pwd', function (req, res) {
  res.send('admin')
})

/**
 * 如果路由非常多的时候, 我们一般先处理静态路由, 然后处理其他路由
 * 静态路由是固定的, 如果想处理其他路由, 静态路由就会被阻断, 执行不到
 */

app.listen(3000)