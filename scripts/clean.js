const fs = require('fs')
const path = require('path')

const rmdir = (d) => {
  if (!d.endsWith('/build/')) {
    console.log('invaild path:' + d)
    return
  }

  fs.rm(path.resolve(__dirname, d), {recursive: true, force: true}, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

const findProjectBuilds = () => {
  const data = fs.readFileSync(
    path.resolve(__dirname, '../pnpm-workspace.yaml'),
    'utf-8'
  )
  const dirs = []
  let re = "'(.+)(/*')"
  let arr = data
    .match(new RegExp(re, 'g'))
    .map((v) => v.replaceAll("'", '').replace('*', ''))
  arr.forEach((v) => {
    if (v.endsWith('/')) {
      let files = fs.readdirSync(path.resolve(__dirname, '../' + v))
      files.forEach((f) => {
        let p = '../' + v + f
        if (fs.lstatSync(path.resolve(__dirname, p)).isDirectory()) {
          dirs.push(p + '/build/')
        }
      })
    } else {
      let p = '../' + v
      if (fs.lstatSync(path.resolve(__dirname, p)).isDirectory()) {
        dirs.push(p + '/build/')
      }
    }
  })
  return dirs
}

function main() {
  let dirs = findProjectBuilds()
  console.log(dirs)
  dirs.forEach((v) => {
    rmdir(v)
  })
}

main()
