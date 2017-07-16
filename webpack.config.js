var path = require('path');

const PATHS = {
  root: path.resolve(__dirname, ''),
  build: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src')
}

module.exports = {
  entry: `${PATHS.src}/js`,
  resolve: {
    modules: [
      path.resolve(`${PATHS.src}/js`),
      path.resolve('./node_modules')
    ]
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.build
  },
  devServer: {
    contentBase: PATHS.root,
    compress: true,
    port: 8888
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    {
      test: /\.sass$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          modules: true,
          sourceMap: true,
          localIdentName: '[local]___[hash:base64:5]',
        }
      }, {
        loader: "sass-loader"
      }]
    }]
  }
};