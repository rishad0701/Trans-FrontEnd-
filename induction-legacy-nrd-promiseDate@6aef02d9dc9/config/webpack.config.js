const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = dir => path.join(__dirname, '../', dir);

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: resolve('client/index.html'),
  favicon: resolve('client/assets/icons/favicon.ico'),
  inject: 'body',
  filename: 'index.html',
});

module.exports = {
  devServer: {
    static: {
      directory: resolve('dist'),
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
  },
  devtool: 'source-map',
  entry: [
    resolve('client/index.js'),
    resolve('client/robots.txt'),
    resolve(path.join('config', 'config.js')),
  ],
  externals: {
    config: 'config',
  },
  output: {
    filename: isDev ? '[name].js' : '[name].[fullhash].js',
    path: resolve('dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    alias: {
      _client: resolve('client'),
      _assets: resolve('client/assets/'),
      _styles: resolve('client/styles/'),
      _utils: resolve('client/utils/'),
      _api: resolve('client/api/'),
      _hooks: resolve('client/hooks/'),
      _components: resolve('client/components/'),
      _store: resolve('client/store/'),
      _actions: resolve('client/store/actions/'),
      _reducers: resolve('client/store/reducers/'),
      _thunks: resolve('client/store/thunks/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolve('client')],
      },
      {
        test: /\.css$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(woff(2)|ttf|eot|otf)(\?v=\d+\.\d+\.\d+])?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'icons/[name][ext]',
        },
      },
      {
        test: /\.txt$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /config.js/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
        include: [resolve('config')],
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  performance: {
    hints: false,
  },
};
