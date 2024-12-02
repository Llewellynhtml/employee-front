const webpack = require('webpack'); 

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add ProvidePlugin to ensure process is available globally
      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new webpack.ProvidePlugin({
          process: require.resolve('process/browser'), // Explicitly polyfill `process` for the browser
        }),
      ];

      // Add fallbacks for the necessary Node.js core modules
      webpackConfig.resolve.fallback = {
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        process: require.resolve('process/browser'),
        vm: require.resolve('vm-browserify'), // Fallback for vm module
      };

      // Explicitly add '.js' extension to resolve issues with ES module imports
      webpackConfig.resolve.extensions = [
        '.mjs', '.js', '.json', '.wasm',
      ];

      return webpackConfig;
    },
  },
};
