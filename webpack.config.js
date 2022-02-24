const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Output Management',

    }),

  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

module: {

	rules: [

	{

		test: /\.css$/i,

		use: ['style-loader', 'css-loader'],

	},

],

},
};