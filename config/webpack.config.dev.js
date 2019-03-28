const path = require('path');

const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: [{
                    loader: '@angular-devkit/build-optimizer/webpack-loader',
                    options: {
                        sourceMap: true,
                        skipCodeGeneration: false
                    }
                }, '@ngtools/webpack']
            },
            {
                test: /\.js$/,
                use: [{
                    loader: '@angular-devkit/build-optimizer/webpack-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    devServer: {
        port: 4201, // 测试服务器端口
        host: '127.0.0.1', // 测试服务器IP
        historyApiFallback: true, // 缓存?
        watchOptions: {
          ignored: /node_modules/ // 忽略
        }
    },
    plugins: [
        new DefinePlugin({
            __ENVDATA__: JSON.stringify({
                'isDevServer': true,
                'enableProdMode': false
            })
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: true
            },
            minify: false
        })
    ]
});
