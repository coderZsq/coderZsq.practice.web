// 用来处理数据的增删改查
// 1. 获取数据
// 分析: 就是获取某一个文件夹下所有的文件夹

const fs = require('fs')

exports.getAlbum = function (callback) {
  // 2. 读取文件, 获取对应的文件夹下面所有的文件夹
  fs.readdir('./uploads', function (err, files) {
    if (err) {
      callback(err, null)
      return
    }
    let filePaths = [];
    (function iterator(i) {
      // 3.3 设置终止条件
      if (i == files.length) {
        callback(err, filePaths)
        return filePaths
      }

      let fileName = files[i]
      // 3. 判断是否是一个文件夹
      fs.stat('./uploads/' + fileName, function (err, status) {
        // 3.1 如果是一个文件夹我们可以使用一个数组来记录
        if (status.isDirectory()) {
          filePaths.push(fileName)
        }
        // 3.2 检测完毕后, 让对应的iterator函数递归执行
        iterator(i + 1)
      })
    })(0)
  })
}

exports.getImages = function (albumName, callback) {
  fs.readdir('./uploads/' + albumName, function (err, files) {
    if (err) {
      callback(err, null)
      return
    }
    let imagePaths = [];
    (function iterator(i) {
      if (i == files.length) {
        callback(err, imagePaths)
        return
      }
      let imagePath = files[i]
      fs.stat('./uploads/' + albumName + '/' + imagePath, function (err, status) {
        if (status.isFile()) {
          imagePaths.push(imagePath)
        }
        iterator(i + 1)
      })
    })(0)
  })
}