import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

console.log(process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === 'production';
const plugins = [
  commonjs(),
  resolve(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  babel({
    babelHelpers: 'bundled',
  }),
  postcss(),
  vue(),
];

if (isProduction) {
  plugins.push(terser());
} else {
  const devPlugins = [
    serve({
      // open: true, // 是否打开浏览器
      port: 8080, // 监听哪一个端口
      contentBase: '.', // 服务哪一个文件夹
    }),
    livereload(),
  ];
  plugins.push();
}

export default {
  input: './src/main.js',
  output: {
    format: 'umd',
    name: 'sqUtils',
    file: 'dist/sq.umd.js',
    globals: {
      lodash: '_',
    },
  },
  external: ['lodash'],
  plugins,
};
