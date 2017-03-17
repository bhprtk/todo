const path = require('path');
const webpack = require('webpack');

module.exports = {
	devServer: {
		contentBase: './dist',
		hot: true
	},
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	module: {
		loaders: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot-loader!babel-loader'},
			{test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
			{ test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
			 // all below are for bootstrap
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
			{test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
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
