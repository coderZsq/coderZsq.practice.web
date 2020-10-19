// 加载过程是同步
require('./bar');
require('./foo');

console.log('main中的代码被执行');