const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isProduction = true;

module.exports = {
  mode: 'production',
  externals: {
    lodash: '_',
    dayjs: 'dayjs',
  },
  plugins: [
    // 生产环境
    new CleanWebpackPlugin({}),
  ],
};
