const eslint = require( 'eslint' );
const webpack = require( 'webpack' );
const convert = require( 'koa-connect' );
const history = require( 'connect-history-api-fallback' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ScriptExtHtmlWebpackPlugin = require( 'script-ext-html-webpack-plugin' );
const path = require( 'path' );
const commonPaths = require( './paths' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

const shortHands = {
  components: path.resolve( __dirname, '../src/js/components' ),
  router: path.resolve( __dirname, '../src/js/router' ),
  hoc: path.resolve( __dirname, '../src/js/hoc' ),
  views: path.resolve( __dirname, '../src/js/views' ),
  utils: path.resolve( __dirname, '../src/js/utils' ),
  constants: path.resolve( __dirname, '../src/js/constants' ),
  scss: path.resolve( __dirname, '../src/scss' )
};

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          formatter: eslint.CLIEngine.getFormatter( 'stylish' ),
          emitWarning: 'production' !== process.env.NODE_ENV,
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ],
  },
  serve: {
    add: app => {
      app.use( convert( history() ) );
    },
    content: commonPaths.entryPath,
    dev: {
      publicPath: commonPaths.outputPath,
    },
    open: true,
  },
  resolve: {
    modules: [ 'src', 'node_modules' ],
    extensions: [ '*', '.js', '.jsx', '.css', '.scss' ],
    alias: shortHands,
    mainFiles: [ 'index' ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin( {
      template: commonPaths.templatePath,
    } ),
    new ScriptExtHtmlWebpackPlugin( {
      defaultAttribute: 'async',
    } ),
    new CopyWebpackPlugin( [
      { from: commonPaths.assetsPath, to: 'assets' }
    ] )
  ],
};
