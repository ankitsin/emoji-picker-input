const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'emoji-input-picker.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre', // run before the build process
        test: /(\.js$|\.jsx$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true,
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ],
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=[name]_[hash:6].[ext]' },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    }),
  ],
  devServer: {
    stats: { chunks: false },
    contentBase: './src',
    hot: true,
    port: 6060,
  },
};
