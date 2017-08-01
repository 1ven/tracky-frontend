import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const resolve = (...str) => path.resolve(process.cwd(), ...str);

export default {
  entry: resolve("./src/index.tsx"),
  output: {
    path: resolve("./static"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: resolve("./src"),
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
      // TODO: Move to `development.js`
      /**
       * Provides ability to debug 3rd-party libraries.
       */
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("./src/index.html"),
      hash: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [resolve("./src"), "node_modules"]
  }
};
