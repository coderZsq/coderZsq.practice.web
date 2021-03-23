import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

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
  plugins: [
    commonjs(),
    // resolve(),
    babel({
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
