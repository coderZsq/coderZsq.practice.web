/**
 * require: 导入包的过程的分析: 会把对应的文件作为id, 然后获取到对应文件中的内容
 * 使用一个function函数包含起来, 最后使用eval来执行这个函数
 */
const a = require('./a.js')

let msg = 'msg'
let showInfo = function () {
  console.log('info')
}

// 如果想要在外部使用, 我们需要使用对应方式来暴露文件
exports.msg = msg
exports.showInfo = showInfo

// module.exports = "Castie!"
/*
  module.exports = {

  }
*/