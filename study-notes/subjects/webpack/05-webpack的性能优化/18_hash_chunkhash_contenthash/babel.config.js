const presets = [['@babel/preset-env'], ['@babel/preset-react']];

const plugins = [];

const isProduction = process.env.NODE_ENV === 'production';

// React HMR -> 模块的热替换 必然是在开发时才有效果
if (!isProduction) {
  plugins.push(['react-refresh/babel']);
} else {
}

module.exports = {
  presets,
  plugins,
};
