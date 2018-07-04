'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

module.exports = merge(baseWebpackConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'), // since we use CopyWebpackPlugin.
        clientLogLevel: 'warning',
        historyApiFallback: false,
        hot: true,
        compress: true,
        host: HOST || 'localhost',
        port: PORT || '4000',
        open: false,
        overlay: {warnings: true, errors: true},
        quiet: false, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: false
        },
        proxy: [{
            context: ["/auth", "/api"],
            target: "http://localhost:9090",
        }]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.node_ENV': JSON.stringify("development")}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // 复制静态文件
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: './static',
                ignore: ['.*']
            }
        ])
    ],
    devtool: 'cheap-module-eval-source-map',
});
