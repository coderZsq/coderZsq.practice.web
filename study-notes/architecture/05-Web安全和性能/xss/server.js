const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 处理静态资源
app.use(express.static('./public'))

// 设置数据
const goods = {
  'book': [{ name: '人性的弱点' }, { name: '遥远的救世主' }],
  'electronic': [{ name: 'iphone' }, { name: 'ipad' }]
}

app.get('/good', function (req, res) {
  // 接收请求参数
  let { category } = req.query
  res.header('Content-Type', 'text/html;charset=utf8')
  let currentGoods = goods[category]
  let detail = ''
  if (currentGoods) {
    detail = currentGoods.map(good => `<li>${good.name}</li>`).join('')
    res.send(`
      <h1>${category}</h1>
      <ul>${detail}</ul>
    `)
  } else {
    detail = '没有对应的产品'
    res.send(`
      <h1>${category}</h1>
      <ul>${detail}</ul>
    `)
  }
})

// 设置处理对应的路径
let defaultscomments = { time: new Date().toLocaleString(), avatar: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576562819&di=3d47509f0b75218e3bc788bf544811b4&src=http://b-ssl.duitang.com/uploads/item/201612/15/20161215143734_N5Bjm.jpeg' }
let comments = [{ username: 'zhangsan', content: '天气很热', ...defaultscomments }, { username: 'lisi', content: '天气很热', ...defaultscomments }]

app.get('/api/comments', function (req, res) {
  res.json({ code: 0, comments })
})

// 处理post请求
app.post('/api/comments', function (req, res) {
  // 获取请求的参数
  let { content } = req.body
  comments.push({
    ...defaultscomments,
    content
  })
  res.json({ code: 0 })
})

// 处理对应的请求路径
app.listen(3000)