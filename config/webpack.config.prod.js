const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const devConfig = {
  entry: "./src/index.js", //Entry
  mode: "production",
  output: { // Output config
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    libraryTarget: "umd", // Use npm, used from node_modules
    library: "react-auto-layout", // Lib name
    libraryExport: "default" // For working with ES6(ES2015) module system、CommonJS and AMD
  }
  // externals: { // Use external react components
  //   react: {
  //     root: "React",
  //     commonjs2: "react",
  //     commonjs: "react",
  //     amd: "react"
  //   },
  //   "react-dom": {
  //     root: "ReactDOM",
  //     commonjs2: "react-dom",
  //     commonjs: "react-dom",
  //     amd: "react-dom"
  //   }
  // }
};

module.exports = merge(devConfig, baseConfig);
