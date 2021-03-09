const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'coderzsq_utils.js',
    // AMD/CommonJS/浏览器
    // CommonJS: 社区规范的CommonJS, 这个里面是没有module对象
    // CommonJS2: Node实现的CommonJS, 这个里面是有modele对象, module.exports
    libraryTarget: 'umd',
    library: 'coderZsqUtils',
    globalObject: 'this',
  },
};
