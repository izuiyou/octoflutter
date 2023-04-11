const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const config = require('./webpack.config')
var http = require('http')

const clientCompiler = webpack(config)

if (!fs.existsSync(path.resolve(process.cwd(), './package.json'))) {
  console.log('cmd must exec from package root dir')
  return
}

function publicAssets(assets) {
  switch (process.env.RENDER_MODE) {
    case 'html':
      return [
        {
          directory: path.resolve(__dirname, './mode/html/assets'),
          publicPath: '/assets/',
        },
        {
          directory: path.resolve(process.cwd(), assets),
          publicPath: '/assets/',
        },
      ]
    default:
      return [
        {
          directory: path.resolve(__dirname, './mode/canvaskit/assets'),
          publicPath: '/assets/',
        },
        {
          directory: path.resolve(__dirname, './mode/canvaskit/canvaskit'),
          publicPath: '/canvaskit/',
        },
        {
          directory: path.resolve(process.cwd(), assets),
          publicPath: '/assets/',
        },
      ]
  }
}

fs.readFile('package.json', 'utf-8', function (err, data) {
  if (err) {
    throw err
  }

  var json = JSON.parse(data)
  var octo = json['octo']
  var assets = ''
  if (octo !== null && octo !== undefined) {
    assets = octo['assets']
  }

  const webpackPort = process.env.BUILD_FOR_MOBILE === 'true' ? 54320 : 54321

  const devServer = new WebpackDevServer(
    {
      compress: true,
      host: 'localhost',
      port: webpackPort,
      server: 'http',
      open:
        process.env.BUILD_FOR_MOBILE !== 'true' &&
        process.env.NODE_ENV !== 'production',
      historyApiFallback: true,
      hot: process.env.W2DISK !== 'true',
      devMiddleware: {
        writeToDisk: process.env.W2DISK === 'true',
      },
      static: publicAssets(assets),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
    clientCompiler
  )

  const kill = (port, callback) => {
    const {exec} = require('child_process')
    const cmd = `dnetstat -ano|findstr ${port}`
    exec(cmd, (error, stdout, stderr) => {
      if (!error && stdout) {
        let pid = null
        stdout
          .trim()
          .split(/[\n|\r]/)
          .forEach((item) => {
            if (item.indexOf('LISTEN') !== -1 && !pid) {
              pid = item.split(/\s+/).pop()
            }
          })
        if (!pid) {
          callback && callback()
        } else {
          console.log(`kill port:${port},pid:${pid}`)
          exec(`taskkill /pid ${pid} -t -f`, (error, stdout) => {
            callback && callback()
          })
        }
      } else {
        callback && callback()
      }
    })
  }

  kill(webpackPort, () => {
    devServer.start().catch((err) => {
      console.log(err)
    })
  })

  var write = process.env.W2DISK === 'true'

  if (write) {
    const createServer = (port) => {
      let server = http.createServer(function (request, response) {
        var filePath = '.' + request.url
        if (filePath == './') filePath = './index.html'

        var dir = path.resolve(process.cwd(), './build/')
        filePath = path.resolve(dir, filePath)

        var extname = path.extname(filePath)
        var contentType = 'text/html'
        switch (extname) {
          case '.js':
            contentType = 'text/javascript'
            break
          case '.css':
            contentType = 'text/css'
            break
          case '.json':
            contentType = 'application/json'
            break
          case '.png':
            contentType = 'image/png'
            break
          case '.jpg':
            contentType = 'image/jpg'
            break
          case '.wav':
            contentType = 'audio/wav'
            break
        }

        fs.readFile(filePath, function (error, content) {
          if (error) {
            console.log(
              'readFile error:' +
                filePath +
                ' code:' +
                error.code +
                ' msg:' +
                error.message
            )

            response.writeHead(500)
            response.end('Sorry, check error: ' + error.code)
          } else {
            console.log('readFile success:' + filePath)
            response.writeHead(200, {'Content-Type': contentType})
            response.end(content, 'utf-8')
          }
        })
      })

      server.on('error', (err) => {
        console.log(err)
      })

      server.listen(port)
    }

    let port = 54322
    kill(port, () => {
      createServer(port)
    })
  }
})
