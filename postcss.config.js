/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postCSSNested = require("postcss-nested");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    postCSSNested,
    autoprefixer(),
  ],
};