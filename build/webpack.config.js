/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const webpack = require("webpack");
const path = require("path");
const chalk = require("chalk");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const packageJSON = require("../package.json");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const monitor = process.env.MONITOR || false;
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const resolve = dir => path.join(__dirname, "..", dir);
const production = process.env.NODE_ENV === "production";

const moduleResolves = require("./resolves.js");
const cssLoaders = require("./cssLoaders.js");

const ExtractSASSConfig = {
  filename: "style.[hash].css",
};
const ExtractSASS = new ExtractTextPlugin(ExtractSASSConfig);

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;
const url = `http://${host === "0.0.0.0" ? "localhost" : host}:${port}`;

module.exports = {
  mode: production ? "production" : "development",

  entry: {
    app: "./src/index.js",

    ...(!production ? {
      vendor: [
        "webpack/hot/only-dev-server",
        `webpack-dev-server/client?http://${host}:${port}`,
      ],
    } : {}),
  },

  output: {
    path: resolve("dist"),
    filename: production ? "[name].[chunkhash].js" : "[name].[hash].js",
  },

  performance: {
    hints: false,
  },

  devServer: production ?
    {} :
    {
      hot: true,
      overlay: true,
      quiet: true,
      historyApiFallback: true,
      contentBase: `${__dirname}/../public`,
    },


  ...(production ? {
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  } : {}),

  devtool: production ? "#none" : "#cheap-module-eval-source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.sass$/,
        use: cssLoaders(production, "sass", ExtractSASS),
      },
      {
        test: /\.scss$/,
        use: cssLoaders(production, "scss", ExtractSASS),
      },
      {
        test: /\.css$/,
        use: cssLoaders(production, "css", ExtractSASS),
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8000,
            name: "images/[name]__[hash].[ext]",
          },
        }],
      },
    ],
  },

  ...moduleResolves,

  plugins: [
    new webpack.DefinePlugin({
      "process.env.VERSION": JSON.stringify(packageJSON.version),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: resolve("src/pug/index.pug"),
    }),

    ...production ?
      [
        new FaviconsWebpackPlugin(resolve("assets/favicon.png")),
        ExtractSASS,
        new CopyWebpackPlugin([
          { context: "./public", from: "**/*", to: "./" },
        ]),
      ] :
      [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`You application is running on ${chalk.blue(url)}`],
          },
        }),
      ],

    ...monitor ? [new BundleAnalyzerPlugin()] : [],
  ],
};