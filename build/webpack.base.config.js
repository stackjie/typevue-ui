const path = require('path');
const webpack = require('webpack');

function resolve (dir) {
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
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('packages'), resolve('examples'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(ts|vue)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        include: [resolve('packages'), resolve('test')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('packages'), resolve('examples'), resolve('test')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('packages'), resolve('examples'), resolve('test')],
      },
      {
        test: /\.ts$/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true // Disable type checking to run it in fork
          },
        }],
        include: [resolve('packages'), resolve('examples'), resolve('test')]
      },
      {
        test: /\.css|.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader',
        include: [resolve('packages'), resolve('examples'), resolve('examples')],
      }
    ]
  }
};
