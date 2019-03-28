const path = require('path');

const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new DefinePlugin({
            'isDevServer': 'false'
        }),
    ],
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: [{
                    loader: '@angular-devkit/build-optimizer/webpack-loader',
                    options: {
                        sourceMap: false,
                        skipCodeGeneration: true
                    }
                }, '@ngtools/webpack']
            },
            {
                test: /\.js$/,
                use: [{
                    loader: '@angular-devkit/build-optimizer/webpack-loader',
                    options: {
                        sourceMap: false
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: false,
                parallel: true,
                cache: path.resolve(__dirname, 'webpack-cache/uglify-cache'),
                uglifyOptions: {
                    compress: {
                        pure_getters: true,
                        passes: 2
                    },
                    output: {
                        ascii_only: true,
                        comments: false
                    }
                }
            })
        ],
        splitChunks: {
            chunks: 'all'
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
                isDevServer: false
            },
            minify: true
        })
    ]
});
