const fs = require('fs')

fs.readFile(__dirname + '/1.txt', 'utf8', function (err, data) {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
  /**
   * 当我们使用路径的时候, 通过require导包的时候, 因为导包的原理
   * 原来的路径可能出错, 所以我们需要重新设置路径
   * 一般我们不要一层一层去设置, 因为容易出错而且麻烦
   * 我们一般借助第三方的node.js自带的__dirname
   * __dirname表示当前文件所在的目录
   */
})