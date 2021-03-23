const webpack = require('webpack');
const config = require('./config/webpack.common')({
  production: true,
});

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats);
  }
});
