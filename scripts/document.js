const fs = require('fs')
const path = require('path')
const spawn = require('cross-spawn')

const cpWebAsset = () => {
  getDirFiles(
    path.resolve(__dirname, '../bin/cli/scripts/mode/html/assets')
  ).forEach((v) => {
    fs.cp(
      v,
      v.replace(
        path.resolve(__dirname, '../bin/cli/scripts/mode/html'),
        path.resolve(__dirname, './doc')
      ),
      (err) => {
        if (err) {
          console.error(err)
        }
      }
    )
  })
}

getDirFiles = (dir) => {
  let result = []
  let files = fs.readdirSync(dir, {withFileTypes: true})
  files.forEach((file) => {
    const filepath = path.join(dir, file.name)
    if (file.isFile()) {
      result.push(filepath)
    } else if (file.isDirectory()) {
      result.push(...getDirFiles(filepath))
    }
  })
  return result
}

const cpAppAsset = () => {
  getDirFiles(
    path.resolve(__dirname, '../example/demo-appbundle/assets')
  ).forEach((v) => {
    fs.cp(
      v,
      v.replace(
        path.resolve(__dirname, '../example/demo-appbundle'),
        path.resolve(__dirname, './doc')
      ),
      (err) => {
        if (err) {
          console.error(err)
        }
      }
    )
  })
}

const cpAppJs = () => {
  const files = ['app.js', 'framework.js', 'index.html', 'libs.js']
  files.forEach((v) => {
    fs.cpSync(
      path.resolve(__dirname, '../example/demo-appbundle/build/' + v),
      path.resolve(__dirname, './doc/' + v)
    )
  })
}

function checkFile() {
  if (
    fs.existsSync(
      path.resolve(__dirname, '../example/demo-appbundle/build/app.js')
    )
  ) {
    cpAppJs()
    process.exit(0)
  }
}

const checkApp = () => {
  if (
    fs.existsSync(
      path.resolve(__dirname, '../example/demo-appbundle/build')
    )
  ) {
    fs.rmSync(path.join(__dirname, '../example/demo-appbundle/build'), {
      recursive: true,
      force: true,
    })
  }
  const result = spawn.spawn('pnpm', ['ddoc'], {
    cwd: path.resolve(__dirname, '../example/demo-appbundle'),
  })
  result.stdout.on('data', (s) => {
    checkFile()
  })
}

function main() {
  if (fs.existsSync(path.resolve(__dirname, 'doc'))) {
    fs.rmSync(path.join(__dirname, 'doc'), {recursive: true, force: true})
    fs.mkdir(path.join(__dirname, 'doc'), (err) => {
      if (err) {
        console.error(err)
        return
      }
      cpWebAsset()
      cpAppAsset()
      checkApp()
    })
  } else {
    fs.mkdir(path.join(__dirname, 'doc'), (err) => {
      if (err) {
        console.error(err)
        return
      }
      cpWebAsset()
      cpAppAsset()
      checkApp()
    })
  }
}

main()
