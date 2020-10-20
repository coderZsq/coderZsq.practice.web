const fs = require('fs')

// 1. 文件写入
const content = '你好啊, 李银河'

fs.writeFile('./abc.txt', content, { flag: 'a' }, err => {
  console.log(err)
})

// 2. 文件读取
fs.readFile('./abc.txt', { encoding: 'utf-8' }, (err, data) => {
  console.log(data)
})