const babel = require('babel-core')
const types = require('babel-types')

let code = 'const result = 1000 * 60 * 60 * 24'

let visitor = {
  BinaryExpression(path) {
    let node = path.node
    if (!isNaN(node.left.value) && !isNaN(node.right.value)) {
      let result = eval(node.left.value + node.operator + node.right.value)
      result = types.numericLiteral(result)
      path.replaceWith(result)
    }
    if (path.parentPath.node.type == 'BinaryExpression') {
      visitor.BinaryExpression.call(null, path.parentPath)
    }
  }
}

let result = babel.transform(code, {
  plugins: [{ visitor }]
})

console.log(result.code)