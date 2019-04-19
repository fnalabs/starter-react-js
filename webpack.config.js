const path = require('path')

const Dotenv = require('dotenv-webpack')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const isDev = process.env.NODE_ENV === 'development'

module.exports = [
  // client-side config
  {
    mode: process.env.NODE_ENV,
    entry: './src/client/index.jsx',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/client'),
      publicPath: ''
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js.?$/,
          include: /src/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      new Dotenv()
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'src/assets'),
        path.resolve(__dirname, 'src/assets/components'),
        'node_modules'
      ],
      extensions: ['.jsx', '.js', '.json']
    },
    devtool: isDev ? 'inline-source-map' : 'nosources-source-map',
    watch: false
  },
  // server-side config
  {
    mode: process.env.NODE_ENV,
    entry: './src/server/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist/server')
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js.?$/,
          include: /src/,
          exclude: /node_modules/,
          use: ['babel-loader']
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
                  autoprefixer({ browsers: ['last 2 versions'] }),
                  cssnano({ preset: 'default' })
                ]
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src/assets'),
        path.resolve(__dirname, 'src/assets/components'),
        'node_modules'
      ],
      extensions: ['.jsx', '.js', '.json']
    },
    watch: false
  }
]
