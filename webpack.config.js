const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = { 
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: { 
    path: path.resolve('dist'), 
    filename: 'index_bundle.js'
  }, 
  module: { 
    rules: [ 
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/,
        use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]},
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      { test: /\.css$/, use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }, 
  plugins: [HtmlWebpackPluginConfig, new MiniCssExtractPlugin({filename: 'style.css'})]
}