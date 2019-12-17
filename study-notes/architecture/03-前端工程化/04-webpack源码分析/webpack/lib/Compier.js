const { SyncHook } = require('tapable')
const path = require('path')
const fs = require('fs')
const esprima = require('esprima')
const estraverse = require('estraverse')
const escodegen = require('escodegen')
const ejs = require('ejs')

class Compier {
  constructor(options) {
    this.options = options
    this.hooks = {
      entryOption: new SyncHook(['config'])
    }
    let plugins = this.options.plugins
    if (plugins && plugins.length > 0) {
      plugins.forEach(plugin => {
        plugin.apply()
      })
    }
  }
  run() {
    // 1.获取对应的入口路径,来解析
    let { entry, output: { path: dist, filename } } = this.options
    let root = process.cwd()
    let entryPath = path.join(root, entry)
    let entryId
    let modules = {}
    // 解析路径
    parseModule(entryPath, true)
    console.log(modules)
    // 渲染
    let bundle = ejs.compile(fs.readFileSync(path.join(__dirname, 'main.ejs'), 'utf8'))({
      modules, entryId
    })
    fs.writeFileSync(path.join(dist, filename), bundle)
    function parseModule(modulePath, isFirst) {
      // 获取到对应的路径对应的内容,然后把路径中的内容包含require的路径部分, 我们需要给对应的路径加上./ src
      // D:day10/webpackTest D:day10/webpackTest/src/index.js
      let source = fs.readFileSync(modulePath, 'utf8')
      let parentPath = path.relative(root, modulePath)//src/index.js
      // 设置一个函数用来解析source,把其中的require中的路径加一个./src
      let result = parse(source, path.dirname(parentPath))
      modules['./' + parentPath] = result.source
      if (isFirst) { entryId = './' + parentPath }
      let requires = result.requires
      if (requires && requires.length > 0) {
        requires.forEach(require => parseModule(path.join(root, require)))
      }
    }
    // 设置一个函数用来处理parse
    function parse(source, parentPath) {
      // 设置转化为ast
      let ast = esprima.parse(source)
      let requires = []

      estraverse.replace(ast, {
        enter(node) {
          // 判断如果符合条件,我们就替换
          if (node.type == 'CallExpression' && node.callee.name == 'require') {
            let name = node.arguments[0].value
            name += (name.lastIndexOf('.') > 0) ? '' : '.js'
            let moduleId = './' + path.join(parentPath, name)//./src/a.js
            requires.push(moduleId)

            node.arguments = [{ type: 'Literal', value: moduleId }]
            return node
          }
        }
      })
      source = escodegen.generate(ast)
      return { requires, source }
    }
  }
}

module.exports = Compier