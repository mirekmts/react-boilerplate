/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const path = require("path");

const resolve = dir => path.join(__dirname, "..", dir);

module.exports = (production, cssType, ExtractSASS) => {
  const styleLoader = {
    loader: "style-loader",
    options: {
      sourceMap: !production,
    },
  };

  const sassLoader = {
    loader: "sass-loader",
    options: {
      ...((cssType === "sass") ? {
        indentedSyntax: cssType === "sass",
        data: "@import \"src/sass/variables\"",
      } : {}),

      sourceMap: !production,
    },
  };


  const config = [
    ...((!production) ? [styleLoader] : []),
    {
      loader: "css-loader",
      options: {
        localIdentName: "[name]__[local]__[hash:base64:5]",
        modules: true,
        sourceMap: !production,
      },
    }, {
      loader: "postcss-loader",
      options: {
        sourceMap: !production,
      },
    },
    {
      loader: "resolve-url-loader",
      options: {
        root: resolve("assets"),
        sourceMap: !production,
        silent: true,
      },
    },
    ...((cssType === "sass" || cssType === "scss") ? [sassLoader] : []),
  ];

  if (production) {
    return ExtractSASS.extract({
      fallback: "style-loader",
      use: config,
    });
  }

  return config;
};