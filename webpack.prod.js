const { merge } = require("webpack-merge");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');
const common = require("./webpack.common");

// (bytes) threshold for compression, url-loader plugins
const filesThreshold = 8196;

module.exports = (env, argv) => {
  const commonConfig = common(env, argv);

  const extendedConfig = {
    devtool: env.sourcemap || false, // option controls how source maps are generated (affects on build speed dramatically): https://v4.webpack.js.org/configuration/devtool/
    performance: {
      assetFilter: function assetFilter(assetFilename) {
        return !/(\.map$)|(fonts)|(images)/.test(assetFilename); // ignore these files from perfomance-hints
      },
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          // default webpack plugin for js-optimization which should be configured: https://v4.webpack.js.org/configuration/optimization/#optimizationminimizer
          // speedest alternative of UglifyJS (it improves minifying js files)
          test: /\.m?js(\?.*)?$/i,
          // exclude: /\.m?js(\?.*)?$/i, // uncomment if we don't need uglifying (for debug purpose)
          extractComments: false, // disable extracting comments to a different file
          terserOptions: {
            toplevel: true, // https://github.com/terser/terser#minify-options
            output: {
              comments: false, // remove comments from files
            },
            mangle: {
              safari10: true, // for preventing Safari 10/11 bugs in loop scoping and await
            },
            compress: { pure_funcs: ["console.info", "console.debug", "console.warn"] }, // remove this functions when their return values are not used
          },
        }),
        new CssMinimizerPlugin(), // it minifies css and optimize it with cssnano: https://cssnano.co/guides/optimisations
      ],
    },
    plugins: [
      // additional config for plugins is placed in webpack.common.js
      new CompressionPlugin({
        // optional: it creates gzipped (compressed) files in '[path].gz[query]'
        threshold: filesThreshold, // (bytes). Only assets bigger than this size are processed
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new WebpackAssetsManifest({
        // Options go here
      }),
    ],
  };

  return merge(commonConfig, extendedConfig);
};