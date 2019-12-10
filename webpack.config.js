const path = require('path')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const PWAManifestPlugin = require('webpack-pwa-manifest')
const TerserPlugin = require('terser-webpack-plugin')
const { InjectManifest } = require('workbox-webpack-plugin')

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
      filename: '[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'dist/client'),
      pathinfo: false,
      publicPath: ''
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
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
          test: /\.m?jsx?$/,
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
      new CleanWebpackPlugin(),
      new Dotenv(),
      new ManifestPlugin({
        fileName: '../server/manifest.json'
      }),
      new PWAManifestPlugin({
        name: 'Example React App',
        short_name: 'Example',
        description: 'Starter Kit for React PWAs',
        orientation: 'any',
        background_color: '#ffffff',
        theme_color: '#3367D6',
        inject: false
      }),
      new InjectManifest({
        dontCacheBustURLsMatching: /\.\w{8}\./,
        precacheManifestFilename: 'era-manifest.[manifestHash].js',
        swSrc: './src/client/sw.js'
      })
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'src/assets'),
        path.resolve(__dirname, 'src/assets/components'),
        'node_modules'
      ],
      extensions: ['.js', '.jsx', '.json', '.mjs']
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
          test: /\.m?jsx?$/,
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
        script: './bin/start',
        watch: './dist/server'
      })
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'src/assets'),
        path.resolve(__dirname, 'src/assets/components'),
        'node_modules'
      ],
      extensions: ['.js', '.jsx', '.json', '.mjs']
    },
    watch: isDev
  }
]
