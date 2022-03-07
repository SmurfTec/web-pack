const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/i,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: { publicPath: '' },
          // },
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    filename: 'bundle.js',
    clean: true,
  },
  devtool: 'inline-source-map',

  //* Plugin
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: './public/index.html',
      inject: 'body',
    }),
  ],
};
