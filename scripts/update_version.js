const fs = require('fs')
const path = require('path')

const findPackageJsons = () => {
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
          let ps = p + '/package.json'
          if (fs.lstatSync(path.resolve(__dirname, ps)).isFile()) {
            dirs.push(ps)
          }
        }
      })
    } else {
      let p = '../' + v
      if (fs.lstatSync(path.resolve(__dirname, p)).isDirectory()) {
        let ps = p + '/package.json'
        if (fs.lstatSync(path.resolve(__dirname, ps)).isFile()) {
          dirs.push(ps)
        }
      }
    }
  })
  return dirs
}

const modJson = (p, v) => {
  var pkgJsonData = fs.readFileSync(p)
  var pkgJson = JSON.parse(pkgJsonData)
  pkgJson['version'] = v
  fs.writeFileSync(p, JSON.stringify(pkgJson, null, 2))
}

const updateTemplate = (v) => {
  var p = path.resolve(__dirname, '../bin/cli/template/package.json')
  var pkgJsonData = fs.readFileSync(p)
  var pkgJson = JSON.parse(pkgJsonData)
  pkgJson['dependencies']['@octoflutter/dartsdk'] = v
  pkgJson['dependencies']['@octoflutter/flutter'] = v
  fs.writeFileSync(p, JSON.stringify(pkgJson, null, 2))
}

const main = () => {
  if (process.argv.length !== 3) {
    console.log('miss version')
    return
  }
  let dirs = findPackageJsons()
  console.log(dirs)
  const argv = process.argv[2]
  console.log('update to ' + argv)
  dirs.forEach((p) => {
    modJson(path.resolve(__dirname, p), argv)
  })
  updateTemplate(argv)
}

main()
