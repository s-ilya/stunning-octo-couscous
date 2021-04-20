const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ mode } = {}) => ({
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts(x){0,1}$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
  },
  mode,
  target: "web"
});