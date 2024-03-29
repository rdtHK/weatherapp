var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body",
});

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('css/[contenthash]-main.css');

module.exports = {
  entry: [
    "./app/index.js"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "js/[hash]-bundle.js",
    publicPath: '/'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        loader: extractCSS.extract(["css?sourceMap"])
      },
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(["css?sourceMap", "sass?sourceMap"])
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          "file?name=img/[hash]-[name].[ext]",
          "image-webpack"
        ]
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/i,
        loader: "file?name=fonts/[hash]-[name].[ext]"
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractCSS
  ]
};
