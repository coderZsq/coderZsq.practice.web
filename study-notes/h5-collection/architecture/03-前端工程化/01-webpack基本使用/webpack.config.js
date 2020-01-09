const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpckPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
// const cssTextPlugin = new ExtractTextWebpackPlugin({ filename: 'css/index.css', disable: true })
// const lessTestPlugin = new ExtractTextWebpackPlugin({ filename: 'css/index.less', disable: true })
const cssTextPlugin = new ExtractTextWebpackPlugin({ filename: 'css/index.css' })
const lessTestPlugin = new ExtractTextWebpackPlugin({ filename: 'css/index.less' })
// const MiniTextPlugin = require('mini-css-extract-plugin')
const PurifyPlugin = require('purifycss-webpack')
const glob = require('glob')

module.exports = {
  entry: './src/index.js', // 入口文件
  // entry: ['./src/index.js', './src/a.js'],
  // entry: {
  //   index: './src/index.js',
  //   a: './src/a.js'
  // },
  output: { // 最好使用绝对路径
    path: path.join(__dirname, 'dist'),
    // filename: 'dist.[hash:8].js'
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      // 设置规则匹配loader
      // 处理css
      {
        test: /\.css$/,
        // use: [
        //   { loader: 'style-loader' },
        //   { loader: 'css-loader' }
        // ]
        // use: ExtractTextWebpackPlugin.extract({
        use: cssTextPlugin.extract({
          // fallback: 'style-loader',
          use: [
            // { loader: 'style-loader' },
            // MiniTextPlugin.loader,
            { loader: 'css-loader' },
            { loader: 'postcss-loader' }
          ]
        })
      },
      {
        test: /\.less$/,
        // use: [
        //   { loader: 'style-loader' }, 
        //   { loader: 'css-loader' },
        //   { loader: 'less-loader' }
        // ]
        // use: ExtractTextWebpackPlugin.extract({
        use: lessTestPlugin.extract({
          // fallback: 'style-loader',
          use: [
            // { loader: 'style-loader' },
            // MiniTextPlugin.loader,
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'less-loader' }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg|woff)$/,
        use: [
          { loader: 'url-loader', options: { limit: 10 * 10, outputPath: 'images' } }
        ]
      }
    ]
  },
  plugins: [
    // 注意一般我们需要把清除的插件放在html插件之前
    new CleanWebpckPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html', // 表示参考的模板
      filename: 'index.html',  // 表示导出文件的名称
      title: 'Castie!'
      // chunks: ['index']
      // minify: {
      //   removeAttributeQuotes: true, // 去掉html文件中的引号
      //   collapseWhitespace: true // 对html文件进行压缩
      // }
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html', // 表示参考的模板
    //   filename: 'a.html',  // 表示导出文件的名称
    //   chunks: ['a']
    // })
    // new ExtractTextWebpackPlugin({
    //   filename: 'css/index.css' // 表示我们最终的css文件放置的位置
    // })
    cssTextPlugin,
    lessTestPlugin,
    // new MiniTextPlugin({ filename: 'css/index.css' })
    // 设置清除多余的样式我们需要把这个插件设置的对象放置在html以及extract插件之后
    new PurifyPlugin({
      paths: glob.sync(path.resolve('./src/*.html'))
    })
  ],
  devServer: {
    contentBase: 'dist', // 表示我们参考的内容的基础目录
    open: true
  }
}