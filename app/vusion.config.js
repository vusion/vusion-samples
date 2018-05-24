const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    version: '>=0.6.0',
    type: 'app',
    staticPath: './static',
    docs: false,
    uglifyJS: true,
    extractCSS: true,
    sourceMap: false,
    libraryPath: './src/components',
    webpack: {
        entry: {
            // babel-polyfill 与 whatwg-fetch 为了兼容低版本浏览器
            // 而且在这里必须添加，相当于一个 import，否则 Dll 不知道要引入此包
            bundle: ['babel-polyfill', 'whatwg-fetch', './src/views/index.js'],
        },
        resolve: {
            alias: {
                vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js'),
                'vue-router$': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.esm.js'),
                '@': path.resolve(__dirname, 'src'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                hash: true,
                inject: true,
                chunks: ['bundle'],
                template: './src/views/index.html',
            }),
            new webpack.DllReferencePlugin({
                manifest: require('./dll/vendor.manifest.json'),
                context: path.resolve(__dirname, 'dll'),
            }),
            new AddAssetHtmlPlugin({
                filepath: path.resolve(__dirname, 'dll/vendor.js'),
                hash: true,
                includeSourcemap: false,
            }),
        ],
    },
};
