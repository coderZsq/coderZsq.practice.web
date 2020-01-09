// import { flatten, join } from 'lodash'
// import flatten from 'lodash/flatten'
// import join from 'lodash/join'

const babel = require('babel-core')
const types = require('babel-types')

let visitor = {
  ImportDeclaration(path) {
    let node = path.node
    let specifiers = node.specifiers
    if (!types.isImportDefaultSpecifier(specifiers[0])) {
      // 如果不是默认导入, 我们需要创建自己的Declaration
      let newImports = specifiers.map(specifier => (
        types.importDeclaration([types.importDefaultSpecifier(specifier.local)], types.stringLiteral(`${node.source.value}/${specifier.local.name}`))
      ))

      path.replaceWithMultiple(newImports)
    }
  }
}

let code = `import { flatten, join } from 'lodash'`

let result = babel.transform(code, {
  plugins: [{ visitor }]
})

module.exports = function () {
  return visitor
}

console.log(result.code)