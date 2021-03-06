'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const vueLoaderConfig = require('./vue-loader.conf.js');

// 获取绝对路径
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    context: resolve('/'),
    entry: {
        main: './src/main.js'
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('static')],
                options: {
                    formatter: require('eslint-friendly-formatter'), // 将eslint的错误信息显示在终端上
                    emitWarning: true
                }
            },
            {
                test: /\.vue$/,
                include: [resolve('src'), resolve('static')],
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.css$/,
                include: [resolve('src'), resolve('static'), resolve('./node_modules/iview/dist/styles/iview.css')],
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'vue-style-loader'
                })
            },
            {
                test: /\.less$/,
                include: [resolve('src'), resolve('static')],
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'less-loader'],
                    fallback: 'vue-style-loader'
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('static'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'assets/images/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'assets/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        // 提取css文件
        new ExtractTextPlugin({
            filename: 'assets/css/base.css',
            allChunks: true
        })
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
