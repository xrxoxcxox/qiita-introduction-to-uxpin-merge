const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: ["*", ".ts", ".tsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        loader: ["babel-loader", "ts-loader"],
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
};
