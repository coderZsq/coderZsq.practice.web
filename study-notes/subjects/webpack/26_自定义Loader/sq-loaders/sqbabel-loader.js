const babel = require('@babel/core');
const { getOptions } = require('loader-utils');

module.exports = function (content) {
  // 0. 设置为异步的loader
  const callback = this.async();
  // 1. 获取传入的参数
  const options = getOptions(this);
  // 2. 对源代码进行转化
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });
};
