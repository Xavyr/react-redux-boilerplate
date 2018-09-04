const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ["absolute/path/a", "absolute/path/b"]
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'url-loader'
        ]
      }
    ]
  },

  // Dev tools are provided by webpack
  // Source maps help map errors to original react code
  devtool: 'cheap-module-eval-source-map',

  // Configuration for webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      "/api*": "http://localhost:3000"
    }
  },
};