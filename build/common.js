/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const packagejson = require( "../package.json" );

const path = require( "path" );
const webpack = require( "webpack" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

function resolve( dir ) {
  return path.join( __dirname, "..", dir );
}

const iP = process.env.NODE_ENV === "production";

const HtmlWebpackPluginConfig = {
  filename: "index.html",
  template: "src/index.html",
  title: packagejson.config.title || "Your app title",
};

module.exports = {
  iP,
  config: {
    entry: [
      "./src/index.js",
    ],

    output: {
      path: path.join( __dirname, "../dist" ),
      filename: "script.[hash].js",
    },

    resolve: {
      alias: {
        "@": resolve( "src" ),
      },
    },

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              name: "[md5:hash:base64:6].[ext]",
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],

    plugins: [
      new HtmlWebpackPlugin( HtmlWebpackPluginConfig ),
      new webpack.DefinePlugin( {
        "process.env.VERSION": JSON.stringify( packagejson.version ),
      } ),
    ],
  },
};
