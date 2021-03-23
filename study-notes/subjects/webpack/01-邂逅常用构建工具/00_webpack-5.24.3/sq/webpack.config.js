const path = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	context: path.resolve(__dirname, "."),
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./build")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader"
			}
		]
	}
};
