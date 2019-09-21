const path = require( 'path' );
const webpack = require( "webpack" );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'public' ),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: [ /node_modules/ ],
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve( __dirname, 'node_modules' )
        ],
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: [
          path.resolve( __dirname, 'node_modules' )
        ],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader', options: {
              localIdentName: '[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader', options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [ 'src', 'node_modules' ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    } ),
    new CopyPlugin( [
      { from: 'src/assets', to: 'assets' },
    ]),
    new webpack.HotModuleReplacementPlugin()
  ]
}
