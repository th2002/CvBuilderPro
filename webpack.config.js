const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
    api: './src/API/api.ts',
    homeController: './src/controllers/servicesController/home.ts',
    postCvController: './src/controllers/cvController/postCvController.ts',
    cvDetail: './src/controllers/servicesController/cv_detail.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/form.html',
      template: 'src/pages/form.html',
      chunks: ['cvDetail'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/home.html',
      template: 'src/pages/home.html',
      chunks: ['homeController'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/add_form.html',
      template: 'src/pages/add_form.html',
      chunks: ['postCvController']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
};