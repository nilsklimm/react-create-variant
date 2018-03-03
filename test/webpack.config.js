const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = (env) => {
  const devtool = env && env.production && 'inline-source-map';

  return {
    entry: path.resolve(APP_DIR, 'index.js'),
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: BUILD_DIR,
      port: 9000,
      compress: true,
      historyApiFallback: true,
    },
    devtool,
    plugins: [new HtmlWebpackPlugin({
      template: path.resolve(APP_DIR, 'index.html'),
    })],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          loader: 'babel-loader',
        },
      ],
    },
  };
};
