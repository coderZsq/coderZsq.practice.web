const fs = require('fs')

fs.open('./abc.txt', (err, fd) => {
  if (err) {
    console.log(err)
    return
  }

  // 通过描述符去获取文件的信息
  fs.fstat(fd, (err, info) => {
    console.log(info)
  })
})