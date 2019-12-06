const express = require('express')
const app = express()

/**
 * 1. 普通中间件: 使用use作为处理方式的就是普通中间件
 * 2. 路由中间件: 使用get或者post或者其它方式请求的就是路由中间件
 */
app.use('/about.html', function (req, res) { })

app.use('/contract.html', function (req, res) { })

app.get('/index.html', function (req, res) { })
app.post('/index.html', function (req, res) { })

app.get('/home.html', function (req, res) { })

app.listen(3000)