/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const path = require("path");

const resolve = dir => path.join(__dirname, "..", dir);

module.exports = {
  resolve: {
    alias: {
      assets: resolve("assets"),
    },
    modules: [
      resolve("src/js"),
      resolve("src/sass"),
      "node_modules",
    ],
  },
};