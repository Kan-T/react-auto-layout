const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js"); // 引用公共的配置

const devConfig = {
  entry: "./samples/index.js", // Entry file
  mode: "development", // develop mode
  output: {
    filename: "samples.bundle.js", // Output file
    path: path.resolve(__dirname, "../samples") // Output dir
  },
  devServer: { // webpack-dev-server config
    contentBase: path.join(__dirname, "../samples"),
    compress: true,
    port: 9000, // 端口9000
    open: true // 自动打开浏览器
  }
};

module.exports = merge(devConfig, baseConfig);
