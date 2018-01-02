const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    version: '^0.5.0',
    type: 'app',
    extractCSS: true,
    uglifyJS: true,
    webpack: {
        entry: {
            index: './src/index/index.js',
            dashboard: './src/dashboard/index.js',
            login: './src/login/index.js',
        },
        plugins: [
            'EXTENDS',
            new HtmlWebpackPlugin({ filename: 'index.html', hash: true, template: './src/index/index.html', chunks: ['index'] }),
            new HtmlWebpackPlugin({ filename: 'dashboard.html', hash: true, template: './src/dashboard/index.html', chunks: ['dashboard'] }),
            new HtmlWebpackPlugin({ filename: 'login.html', hash: true, template: './src/login/index.html', chunks: ['login'] }),
        ],
    },
};
