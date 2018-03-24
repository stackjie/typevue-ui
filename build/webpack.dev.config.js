const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig ,{
  mode: 'development',
  entry: resolve('examples/main.ts'),
  output: {
    filename: 'main.js'
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/index.html',
      inject: true
    })
  ]
});
