console.log('main');

require('./aaa');
require('./bbb');

// 最终的目的都是让他们两个指向同一个对象
// exports = { name: 'coderZsq' };
// module.exports = exports;

// module.exports = {};
// exports = module.exports;

// let obj = { name: 'sq' };
// let info = obj;

// let info = { neme: 'sq' };
// let obj = info;

// module.exports = exports