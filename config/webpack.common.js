const webpack = require('webpack');
const helpers = require('./helpers');

// const AssetsPlugin = require('assets-webpack-plugin');
// const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ngcWebpack = require('ngc-webpack');

const AOT = process.env.BUILD_AOT || helpers.hasNpmFlag('aot');
const METADATA = {
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
  isProd = options.env === 'production';
  return {
    /**
     * 入口文件
     */
    entry: {
      'polyfills': './src/polyfills.browser.ts',
      'main': AOT ? './src/main.browser.aot.ts' : './src/main.browser.ts'
    },
    /**
     * 指定处理这些文件
     */
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [helpers.root('src'), helpers.root('node_modules')],
    },
    module: {
      /**
       * 各种打包规则
       * 主要为项目涉及到代码文件类型的打包
       * 以及适配angular的loader
       */
      rules: [
        {
          test: /\.ts$/,
          use: [
            { loader: 'ng-router-loader', options: { loader: 'async-import', genDir: 'compiled', aot: AOT } },
            { loader: 'awesome-typescript-loader', options: { configFileName: 'tsconfig.webpack.json', useCache: !isProd } },
            { loader: 'angular2-template-loader' }
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        { test: /\.css$/, use: ['to-string-loader', 'css-loader'], exclude: [helpers.root('src', 'styles')] },
        { test: /\.scss$/, use: ['to-string-loader', 'css-loader', 'sass-loader'], exclude: [helpers.root('src', 'styles')] },
        { test: /\.html$/, use: 'raw-loader', exclude: [helpers.root('src/index.html')] },
        { test: /\.(jpg|png|gif)$/, use: 'file-loader' },
        { test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/, use: 'file-loader' }
      ],
    },
    /**
     * 改善webpack打包行为的一系列插件
     * 具体用法可以到webpack文档找到对应名字的插件
     */
    plugins: [
      new CheckerPlugin(),
      new CommonsChunkPlugin({
        name: 'polyfills',
        chunks: ['polyfills']
      }),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('src'), // location of your src
        {}
      ),
      /**
       * 将assets目录不做处理直接复制到输出目录下
       */
      new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' }
      ]),
      new ScriptExtHtmlWebpackPlugin({
        sync: /polyfill|vendor/,
        defaultAttribute: 'async',
        preload: [/polyfill|vendor|main/],
        prefetch: [/chunk/]
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'body'
      }),
      new LoaderOptionsPlugin({}),
      new ngcWebpack.NgcWebpackPlugin({
        disabled: !AOT,
        tsConfig: helpers.root('tsconfig.webpack.json')
      }),
      new InlineManifestWebpackPlugin(),
    ],
    /**
     * 配置node行为
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
