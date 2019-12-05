const express = require('express')
const app = express()
const router = require('./controller/')

// 设置使用ejs渲染
app.set('view engine', 'ejs')
app.use(express.static('./public'))
// 在一个程序中我们可以设置多个静态路由
app.use(express.static('./uploads'))
// 处理首页
app.get('/', router.showIndex)
// 处理具体的显示图片的路由
app.get('/:albumName', router.showImage)
// 处理上传的路由
app.get('/up', router.showUp)
// 处理点击上传后的路由
app.post('/up', router.showDoPost)
// 处理错误路由, 错误路由放在最下面
app.use(router.showError)

app.listen(3000)