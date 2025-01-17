const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const sourceMapLoaderPath = require.resolve('source-map-loader');

const cfg = ({ srcDir = path.resolve(__dirname, '../dist'), snPath = path.resolve(__dirname, 'placeholder') }) => {
  const config = {
    mode: 'development',
    entry: path.resolve(__dirname, './sn.js'),
    devtool: 'source-map',
    output: {
      path: path.resolve(srcDir, 'temp'),
      filename: '[name].js',
    },
    resolve: {
      alias: {
        snDefinition: snPath,
      },
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: sourceMapLoaderPath,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(srcDir, 'eRender.html'),
        filename: 'eRender.html',
        inject: 'head',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(srcDir, 'eDev.html'),
        filename: 'eDev.html',
        inject: 'head',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };

  return config;
};

module.exports = cfg;
