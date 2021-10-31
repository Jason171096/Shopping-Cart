const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
    static: './dist',
    historyApiFallback: true,
    compress: true,
    port: 3001,
    open: true,
   },
 });