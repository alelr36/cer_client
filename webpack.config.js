var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
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
        loader: 'react-hot!babel'
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
      api: 'src/api',
      actions: 'src/actions',
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
    })
  ],
  node: {
    dns: 'empty',
    net: 'empty'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  }
};
