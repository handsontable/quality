const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '/index.js',
  output: {
    path: path.resolve(__dirname, 'webpack_dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'webpack_dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Build with webpack</title>
      </head>
      <body>
          <div id="example1"></div>
          <script src="./index.js"></script>
      </body>
      </html>
    `
  })],
};
