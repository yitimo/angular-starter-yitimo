const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
    entry: {
        polyfills: path.resolve(__dirname, '..', 'src/polyfills.ts'), // 依赖项入口，与主入口拆分打包
        main: path.resolve(__dirname, '..', 'src/main.ts') // 应用主入口
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出到目录
        filename: '[name].[chunkhash].bundle.js', // 输出文件名规则
        sourceMapFilename: '[file].map', // 输出map文件规则
        chunkFilename: '[name].[chunkhash].chunk.js' // 输出分片文件规则
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['to-string-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
                exclude: [path.resolve(__dirname, './src/index.html')]
            },
            {
                test: /\.(jpg|png|gif|pdf|eot|woff2?|svg|ttf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' }]),
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule'
        }),
        new MiniCssExtractPlugin({ filename: '[name]-[hash].css', chunkFilename: '[name]-[chunkhash].css' })
    ],
    node: {
        global: true,
        crypto: 'empty',
        process: false,
        module: false,
        clearImmediate: false,
        setImmediate: false,
        fs: 'empty'
    }
}
