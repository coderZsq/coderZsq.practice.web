const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const captchaSvg = require('svg-captcha')

const app = express()
app.use(cookieParser())
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
  let session = sessions[req.cookies.sessionId];
  if (session && session.user) {
    // 获取请求的参数
    let { content } = req.body
    comments.push({
      ...defaultscomments,
      username: session.user.username,
      content: content
    })
    res.json({ code: 0 })
  } else {
    res.json({ code: 1, error: '用户没有登录' });
  }
})

let users = [
  { username: 'admin', password: '123', balance: 1000 },
  { username: 'lisi', password: '1', balance: 1000 }
]

// 设置一个方法用来处理对应的用户名验证
function getUser(body) {
  for (let i = 0; i < users.length; i++) {
    if (body.username == users[i].username && body.password == users[i].password) {
      return users[i];
    }
  }
}

let sessions = {};

// 处理登录请求
app.post('/login', function (req, res) {
  let body = req.body;
  let user = getUser(body);
  if (user) {
    // 表示登录成功
    let sessionId = 'session-' + new Date() + Math.random() * 1000;
    // 设置cookie
    res.cookie('sessionId', sessionId);
    sessions[sessionId] = { user };
    res.cookie('token', 'token_' + sessionId);
    res.json({ code: 0 })
  } else {
    // 用户名密码错误
    res.json({ code: 1, error: '用户名密码错误' });
  }
})

// 处理对应的getuser
app.get('/getuser', function (req, res) {
  let session = sessions[req.cookies.sessionId];
  if (session && session.user) {
    let user = session.user;
    res.json({ code: 0, user })
  } else {
    res.json({ code: 1, error: '用户没有登录' })
  }
})

// 处理对应的验证码
app.get('/captcha', function (req, res) {
  let session = sessions[req.cookies.sessionId];
  if (session) {
    var captcha = captchaSvg.create();
    session.captcha = captcha.text; // text表示对应的文字
    res.json({ code: 0, data: captcha.data }); // 表示具体生成图片数据
  } else {
    res.json({ code: 1, error: '用户没有登录' });
  }
})

// 设置处理对应的转账请求
app.post('/transfer', function (req, res) {
  // 验证referer
  let referer = req.headers['referer'];
  if (/^https?:\/\/localhost:3000/.test(referer)) {
    // 判断是否登录
    let session = sessions[req.cookies.sessionId];
    if (session && session.user) {
      // 表示登录
      let { target, amount, captcha } = req.body;
      if (captcha == session.captcha) {
        // 进行转账
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == session.user.username) {
            // 表示当前用户
            session.user.balance -= amount;
          } else if (users[i].username == target) {
            users[i].balance += amount;
          }
        }
        res.json({ code: 0 });
      } else {
        res.json({ code: 1, error: '验证码不正确' });
      }
    } else {
      // 没有登录
      res.json({ code: 1, error: '请登录' });
    }
  } else {
    res.json({ code: 1, error: 'refer不能匹配' });
  }
})

// 处理对应的请求路径
app.listen(3000)