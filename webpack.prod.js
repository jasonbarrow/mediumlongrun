// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(import.meta.dirname, "public"), to: "." },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
