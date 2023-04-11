const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const html = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const DeployZipPlugin = require('./deploy-zip-plugin.js')

const paths = {
  entry: path.resolve(process.cwd(), './src/index.ts'),
  output: path.resolve(process.cwd(), './build'),
}

const deferredLibs = () => {
  const libs = []

  switch (process.env.RENDER_MODE) {
    case 'html':
      {
        let rawdata = fs.readFileSync(
          path.resolve(__dirname, './mode/html/deferred_libraries.json')
        )
        let data = JSON.parse(rawdata)
        let deferred_libraries = data['deferredPartUris']
        deferred_libraries.forEach((it) => {
          libs.push(path.resolve(__dirname, './mode/html/' + it))
        })
      }
      break
    default:
      {
        let rawdata = fs.readFileSync(
          path.resolve(__dirname, './mode/canvaskit/deferred_libraries.json')
        )
        let data = JSON.parse(rawdata)
        let deferred_libraries = data['deferredPartUris']
        deferred_libraries.forEach((it) => {
          libs.push(path.resolve(__dirname, './mode/canvaskit/' + it))
        })
      }
      break
  }

  return libs
}

const template = () => {
  switch (process.env.RENDER_MODE) {
    case 'html':
      return './mode/html/index.html'
    default:
      return './mode/canvaskit/index.html'
  }
}

const framework = () => {
  switch (process.env.RENDER_MODE) {
    case 'html':
      return './mode/html/main.dart.js'
    default:
      return './mode/canvaskit/main.dart.js'
  }
}

const plugins_holder = {
  dev: [
    new html({
      template: path.resolve(__dirname, template()),
      chunks: ['framework'],
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
  ],
  pdt: [
    new html({
      template: path.resolve(__dirname, template()),
      chunks: ['framework'],
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
    new DeployZipPlugin(),
  ],
}

module.exports = {
  entry: {
    framework: path.resolve(__dirname, framework()),
    libs: deferredLibs(),
    app: paths.entry,
  },
  output: {
    path: paths.output,
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          output: {ascii_only: true, comments: false},
        },
        extractComments: false,
      }),
    ],
  },
  target:
    process.env.BUILD_FOR_MOBILE !== 'true' &&
    process.env.NODE_ENV !== 'production'
      ? 'web'
      : 'node',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          require.resolve('ts-loader'),
          {
            loader: require.resolve('./octoflutter-app-loader'),
            options: {
              buildForMobile: process.env.BUILD_FOR_MOBILE === 'true',
              buildInHtml: process.env.RENDER_MODE === 'html',
              entry: paths.entry,
            },
          },
        ],
      },
    ],
  },
  plugins:
    process.env.NODE_ENV === 'production'
      ? plugins_holder.pdt
      : plugins_holder.dev,
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
