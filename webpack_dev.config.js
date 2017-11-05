const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const nodeModulesDir = path.resolve(__dirname, '/node_modules');
const DLL_VENDORS = [
  '@angular/animations',
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/forms',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/platform-server',
  '@angular/router',
  'core-js',
  'rxjs',
  'zone.js'
]
module.exports = {
  entry: {
    'app': './src/main.ts',
    vendors: [...DLL_VENDORS] // And other vendors
  },
  devtool: "cheap-module-eval-source-map",
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: './src/tsconfig.json'
            }
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.(css|html|htm)$/,
        use: 'raw-loader'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      // 指定index.html的模板文件路径
      template: path.resolve(__dirname, './dist/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({name : 'vendors', filename : 'vendors.js'}),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  devServer: {
    historyApiFallback: true, // 404将会重定向至index.html
    port: 8888 // 端口号
  }
};
