var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: [/node_modules/]
      },
      {
        test: /\.jsx$/,
        loader: 'eslint',
        exclude: [/node_modules/]
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      actions: 'src/actions',
      api: 'src/api',
      components: 'src/components',
      containers: 'src/containers',
      constants: 'src/constants',
      reducers: 'src/reducers',
      sagas: 'src/sagas',
      utils: 'src/utils'
    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'admin.html'
    })
  ],
  node: {
    dns: 'empty',
    net: 'empty'
  },
  output: {
    path: __dirname + '/dist',
    // publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true
  }
};
