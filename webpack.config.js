const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js', 
  output: {
    filename: 'app.bundle.js', 
    path: path.resolve(__dirname, 'build'), 
  },
  mode: 'development', 
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "constants": require.resolve("constants-browserify"),
      "path": require.resolve("path-browserify"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,
      "process": require.resolve("process/browser"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "zlib": require.resolve("browserify-zlib"),
      "os": require.resolve("os-browserify/browser"),  
      "net": require.resolve("net-browserify"),        
      "tls": require.resolve("tls-browserify"),
      "https": require.resolve("https-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "http": require.resolve("stream-http"),
      "timers": require.resolve("timers-browserify"),
      "vm": require.resolve("vm-browserify"),
      "child_process": false,
      "nock": false
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  stats: {
    errorDetails: true
  },
  externals: {
    'async_hooks': 'commonjs async_hooks',
     '@mapbox/node-pre-gyp': 'commonjs @mapbox/node-pre-gyp'
  },
  ignoreWarnings: [
    {
      module: /node_modules\/(bcrypt|express|sequelize)/,
      message: /Critical dependency: the request of a dependency is an expression/
    }
  ],
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /node_modules\/(bcrypt|express|sequelize)/,
      contextRegExp: /node_modules/
    })
  ]
};
