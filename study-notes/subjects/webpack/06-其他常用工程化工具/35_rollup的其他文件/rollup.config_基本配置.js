export default {
  input: './src/main.js',
  output: [
    {
      format: 'umd',
      name: 'sqUtils',
      file: 'dist/sq.umd.js',
    },
    {
      format: 'cjs',
      file: 'dist/sq.commonjs.js',
    },
    {
      format: 'amd',
      file: 'dist/sq.amd.js',
    },
    {
      format: 'es',
      file: 'dist/sq.es.js',
    },
    {
      format: 'iife',
      name: 'sqUtils',
      file: 'dist/sq.browser.js',
    },
  ],
};
