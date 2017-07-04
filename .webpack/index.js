import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const resolve = (...str) => path.resolve(process.cwd(), ...str);

export default {
  entry: resolve("./src/index.tsx"),
  output: {
    path: resolve("./static"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: resolve("./src"),
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("./src/index.html")
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
