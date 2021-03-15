const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');

const schema = require('../sq-schema/loader01-schema.json');

// NormalLoader
// 异步Loader: this.async()
module.exports = function (content) {
  console.log(content, '哈哈哈, 这是我的loader01');

  // 获取传入的参数:
  const options = getOptions(this);
  console.log('传入的参数是: ' + options);

  validate(schema, options, {
    name: 'sq-loader01',
  });

  const callback = this.async();

  setTimeout(() => {
    callback(null, content);
  }, 2000);
};

// 同步Loader
// module.exports = function (content) {
//   console.log(content, '哈哈哈, 这是我的loader01');

//   setTimeout(() => {
//     this.callback(null, content);
//   }, 2000);

//   // 同步的loader, 两种方法返回数据
//   // return content;
//   // this.callback(null, content);
// };

// PitchLoader
module.exports.pitch = function () {
  console.log('loader pitch 01');
};
