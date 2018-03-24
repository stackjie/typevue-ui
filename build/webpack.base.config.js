const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.less'],
    alias: {
      'packages': resolve('packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue|tsx?)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('packages'), resolve('examples'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('packages'), resolve('examples'), resolve('test')],
        options: {
          ts: {
            loader: 'ts-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('packages'), resolve('examples'), resolve('test')]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: [resolve('packages'), resolve('examples'), resolve('test')],
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.css|.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader',
        include: [resolve('packages'), resolve('examples'), resolve('examples')],
      }
    ]
  }
};
