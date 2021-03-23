const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "js/bundle.js",
    // 必须是一个绝对路径
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: 'img/[name].[hash:6][ext]'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: [
          //     ['@babel/preset-env', {
          //       // targets: ['chrome 88']
          //     }]
          //   ]
          //   // plugins: [
          //   //   '@babel/plugin-transform-arrow-functions',
          //   //   '@babel/plugin-transform-block-scoping'
          //   // ]
          // }
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        // 本质上是依赖于typescript (typescript compiler)
        // use: 'ts-loader'
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "coderZsq webpack",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
