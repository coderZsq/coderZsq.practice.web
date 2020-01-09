const express = require('express')
const app = express()

// 设置使用ejs渲染
app.set('view engine', 'ejs')

// 1. 处理路由的时候, 我们需要对不同的请求做不同的处理
app.get('/test', function (req, res) {
  res.send('express test')
})

// 2. 我们可以给路由中设置参数
app.get('/github/:username', function (req, res) {
  console.log(req.params.username)
  res.send('success')
})

// 3. 处理静态资源
app.use(express.static('./public'))

// 4. express处理后台渲染
app.get('/ejsTest', function (req, res) {
  res.render('index.ejs', { username: 'Castie!' })
})

app.listen(3000)