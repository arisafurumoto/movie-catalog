const path = require( 'path' );
const webpack = require( "webpack" );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'dist' ),
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
              sourceMap: true, modules: true,
              localIdentName: '[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
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
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    hot: true,
    host: 'localhost',
    port: 3000,
    contentBase: path.join( __dirname, "dist" ),
    historyApiFallback: true
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
