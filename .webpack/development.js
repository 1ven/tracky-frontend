export default {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    stats: {
      children: false,
      chunks: false,
      hash: false,
      version: false,
      assets: false
    },
    historyApiFallback: true
  }
};
