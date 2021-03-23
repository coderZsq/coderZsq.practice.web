const { src, dest, watch } = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const terser = require('gulp-terser');

const jsTask = () => {
  // 从src中读取文件, 输出到dist文件夹中
  return (
    src('./src/**/*.js')
      .pipe(babel({ presets: ['@babel/preset-env'] }))
      // .pipe(uglify())
      .pipe(terser({ mangle: { toplevel: true } }))
      .pipe(dest('./dist'))
  );
};

watch('./src/**/*.js', jsTask);

module.exports = {
  jsTask,
};
