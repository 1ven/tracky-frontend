/**
 * Copyright (c) 2017, Ivan Mironchik
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

export default {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    stats: {
      children: false,
      chunks: false,
      hash: false,
      version: false,
      assets: false
    }
  }
};
