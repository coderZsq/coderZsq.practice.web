// 设置对应的用来处理把不同的路由的函数
const fs = require('../model/fs.js')
const formidable = require('formidable')
const sd = require('silly-datetime')
const fs2 = require('fs')
// 1. 设置处理首页路由
exports.showIndex = function (req, res, next) {
  // 设置使用ejs渲染文件
  /**
   * 分析: 我们可以最终获取到数据, 但是渲染的时候没有值
   * 因为当我们渲染的时候, 获取数据是通过异步来获取的, 那个时候, 数据可能还没有获取到
   * 我们就进行渲染, 所以报错
   * 解决: 我们只需要在获取数据之后来进行渲染, 我们可以使用回调
   * 就是当触发某些条件后我们做事情
   * res.render('index.ejs', { albums: fs.getAlbum() })
   */
  // 调用函数, 在回调中做对应的渲染
  fs.getAlbum(function (err, filePaths) {
    if (err) {
      next()
      return
    }
    res.render('index.ejs', { albums: filePaths })
  })
}

// 2. 设置处理显示图片的路由
exports.showImage = function (req, res, next) {
  let albumName = req.params.albumName
  fs.getImages(albumName, function (err, imagePaths) {
    if (err) {
      next()
      return
    }
    res.render('album.ejs', { albumname: albumName, images: imagePaths })
  })
}

// 3. 设置处理显示上传的路由
exports.showUp = function (req, res, next) {
  fs.getAlbum(function (err, albums) {
    if (err) {
      next()
      return
    }
    res.render('up.ejs', { albums: albums })
  })
}

// 4. 设置处理点击上传后的路由
exports.showDoPost = function (req, res, next) {
  let form = new formidable.IncomingForm()
  // 4.1 设置图片上传的路径
  form.uploadDir = './uploads'
  form.parse(req, function (err, fields, files) {
    /**
     * fileds: 表示域, 一般input相关的我们使用它来处理
     * files一般表示文件我们需要使用来处理
     * 
     * 我们处理图片上传的时候, 我们想要使用自己的规则来定义图片名称保证图片名称的唯一性
     * 规则: 当前时间然后加上一个随机数字来组成
     */
    // 4.2 使用新的规则来设定对应的名称 
    let dataString = sd.format(new Date(), 'YYYYMMDDHHmmss')
    let randomNum = parseInt(Math.random() * 99999) + 10000
    let newName = './uploads' + '/uploads' + dataString + randomNum + '.jpg'
    let oldName = './' + files.tupian.path
    fs2.rename(oldName, newName, function (err) {
      if (err) {
        next()
        return
      }
    })
  })
}

// 5. 处理错误路由
exports.showError = function (req, res) {
  res.render('err.ejs')
}