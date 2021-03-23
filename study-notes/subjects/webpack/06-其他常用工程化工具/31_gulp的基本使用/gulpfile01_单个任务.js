const gulp = require('gulp');

// 定义任务
// $ npx gulp foo
const foo = (cb) => {
  console.log('foo');
  cb();
};

// gulp4之前, 定义任务的方式
// $ npx gulp bar
gulp.task('bar', (cb) => {
  console.log('bar');
  cb();
});

// 是不是任务
const abc = (cb) => {
  cb();
};

module.exports = {
  foo,
};

// 默认任务
// $ npx gulp
module.exports.default = (cb) => {
  console.log('default task');
  cb();
};
