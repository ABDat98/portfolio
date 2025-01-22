// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');  // Import the webpack module for HotModuleReplacementPlugin

module.exports = {
    mode: 'production', // or 'production'
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the dist folder before every build
  },
  stats: {
    children: true, // Enables more verbose output for child compilations
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Specify the directory for static files
    },
    open: true, // Automatically open the browser
    port: 8080, // Port for the dev server
    hot: true,  // Enable HMR

  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        }],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),  // Enable HMR

  ],
};
