// 需求: 把箭头函数转化成普通函数
/**
 * let sum = (a, b) => a + b
 * let sum = function (a, b) { a + b }
 */
const babel = require('babel-core') // 用来转化代码为语法树, 以及对代码进行设置
const types = require('babel-types') // 一般用来判断语法树中的接待或者路径的类型, 以及生成对应的节点

let code = 'let sum = (a, b) => a + b'
let visitor = {
  // 获取到对应的节点路径, 一旦设置的路径和节点路径一致, 我们就调用处理
  ArrowFunctionExpression(path) {
    let node = path.node
    let params = node.params
    let blockStatement = types.blockStatement([types.returnStatement(node.body)])
    let fun = types.functionExpression(null, params, blockStatement, false, false)
    path.replaceWith(fun)
  }
}

// 使用babel先把code转化成语法树, 然后使用后面的插件来处理语法树
let result = babel.transform(code, {
  plugins: [{ visitor }]
})

console.log(result.code)
