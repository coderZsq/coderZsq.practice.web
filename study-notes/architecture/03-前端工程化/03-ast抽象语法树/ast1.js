// https://astexplorer.net/

const esprima = require('esprima')
const estraverse = require('estraverse')
const escodegen = require('escodegen')

let code = 'function ast () {}';
let ast = esprima.parse(code)
estraverse.traverse(ast, {
  enter(node) {
    console.log('enter', node.type)
    if (node.type == 'Identifier') {
      node.name += '_enter'
    }
  },
  leave(node) {
    console.log('leave', node.type)
    if (node.type == 'Identifier') {
      node.name += '_leave'
    }
  }
})

console.log(escodegen.generate(ast))