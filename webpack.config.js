const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    'app': './src/main.ts'
  },

  output: {
    path: '/home/pikachien/pika_electron/angular-twitter/dist',
    filename: 'main.bundle.js'
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
    })
  ],
  devServer: {
    historyApiFallback: true, // 404将会重定向至index.html
    port: 8888 // 端口号
  }
};
