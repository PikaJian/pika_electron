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
  devtool: "source-map",

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
    new webpack.optimize.CommonsChunkPlugin({name : 'vendors', filename : 'vendors.js'}),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};