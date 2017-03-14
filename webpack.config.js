const path = require('path');
const webpack = require('webpack');

module.exports = {
	devServer: {
		contentBase: './dist',
		hot: true
	},
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	module: {
		loaders: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot-loader!babel-loader'}
		]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
}
