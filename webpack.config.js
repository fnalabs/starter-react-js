const path = require('path')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const Dotenv = require('dotenv-webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = [
  // client-side config
  {
    name: '- Web App',
    bail: !isDev,
    stats: {
      all: false,
      assets: true,
      builtAt: true,
      timings: true
    },
    mode: process.env.NODE_ENV,
    entry: './src/client/index.jsx',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/client'),
      pathinfo: false,
      publicPath: ''
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js.?$/,
          include: /src/,
          exclude: /node_modules/,
          use: 'babel-loader?cacheDirectory'
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            ie8: false,
            keep_classnames: false,
            keep_fnames: false,
            mangle: true,
            module: false,
            nameCache: null,
            safari10: true,
            sourceMap: true,
            topLevel: false,
            warnings: false
          }
        })
      ]
    },
    plugins: [
      new Dotenv(),
      new ManifestPlugin()
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'src/assets'),
        path.resolve(__dirname, 'src/assets/components'),
        'node_modules'
      ],
      extensions: ['.jsx', '.js', '.json']
    },
    devtool: isDev ? 'cheap-module-eval-source-map' : 'nosources-source-map',
    watch: isDev
  },
  // server-side config
  {
    name: '- SSR',
    bail: !isDev,
    stats: {
      all: false,
      assets: true,
      builtAt: true,
      timings: true
    },
    mode: process.env.NODE_ENV,
    entry: './src/server/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist/server'),
      pathinfo: false
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js.?$/,
          include: /src/,
          exclude: /node_modules/,
          use: 'babel-loader?cacheDirectory'
        }, {
          test: /\.scss$/,
          use: [
            'isomorphic-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer(),
                  cssnano({ preset: 'default' })
                ]
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            ie8: false,
            keep_classnames: false,
            keep_fnames: false,
            mangle: true,
            module: false,
            nameCache: null,
            safari10: false,
            sourceMap: true,
            topLevel: false,
            warnings: false
          }
        })
      ]
    },
    plugins: [
      new NodemonPlugin({
        script: './bin/start'
      })
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'src/assets'),
        path.resolve(__dirname, 'src/assets/components'),
        'node_modules'
      ],
      extensions: ['.jsx', '.js', '.json']
    },
    watch: isDev
  }
]
