const path = require('path')
const fs = require('fs')
const shell = require('shelljs')
const ip = require('ip')

const md5Zip = (zip) => {
  const ret = shell.exec('md5 ' + zip)
  let arr = ret.split('=')
  let md5_zip = arr[arr.length - 1].trim()
  shell.echo(md5_zip)
  return md5_zip
}

const deployZip = () => {
  const pwd = shell.pwd()

  if (!shell.test('-e', pwd + '/package.json')) {
    shell.echo('shell cmd must exec from package root dir with package.json')
    shell.echo('pwd:' + pwd)
    return false
  }

  if (!shell.test('-e', pwd + '/build')) {
    shell.echo('package is not build...')
    return
  }

  const data = fs.readFileSync(
    path.resolve(process.cwd(), 'package.json'),
    'utf-8'
  )

  var json = JSON.parse(data)
  var name = json['name']
    .replaceAll('@', '')
    .replaceAll('/', '_')
    .replaceAll('-', '_')
  var octo = json['octo']
  var assets = null
  if (octo !== null && octo !== undefined) {
    assets = octo['assets']
  }

  shell.cd('build')

  shell.mkdir('-p', 'output')
  shell.cd('output')

  var from = path.resolve(__dirname, './mode/octo')
  shell.cp('-r', from, pwd + '/build/output/framework')

  if (assets !== null && assets !== undefined) {
    var assets_path = path.resolve(pwd + '', assets)
    shell.cp('-r', assets_path, pwd + '/build/output/assets')
  }

  shell.cp(pwd + '/build/app.js', pwd + '/build/output/app.js')
  var mani = fs.readFileSync(pwd + '/build/output/framework/manifest.json')
  var mfJson = JSON.parse(mani)
  mfJson['bundle'] = name
  if (octo !== null && octo !== undefined) {
    delete octo['assets']
    mfJson['config'] = octo
  }
  fs.writeFileSync('manifest.json', JSON.stringify(mfJson))

  shell.exec('zip -r octo_app.zip assets app.js manifest.json')
  var zip_name = name + '.zip'
  shell.mv('octo_app.zip', zip_name)

  shell.cd('framework')
  shell.exec(
    'zip -r framework.zip assets library framework.js octo.js manifest.json'
  )

  shell.cp(
    '-r',
    pwd + '/build/output/framework/framework.zip',
    pwd + '/build/output/framework.zip'
  )
  shell.cd('..')

  //md5 app
  let md5_app = md5Zip(pwd + '/build/output/' + name + '.zip')
  //md5 framework
  let md5_framework = md5Zip(pwd + '/build/output/framework.zip')
  let address = 'http://' + ip.address()
  //构建JSON
  let obj = {
    ret: 1,
    data: {
      bundle: name,
      mode: 0,
      url: address + ':54322/output/' + name + '.zip',
      md5: md5_app,
      framework: {
        fv: mfJson['fv'],
        ev: mfJson['ev'],
        url: address + ':54322/output/framework.zip',
        md5: md5_framework,
      },
      config: mfJson['config'],
    },
  }

  fs.writeFileSync('mock.json', JSON.stringify(obj, null, 2))

  shell.rm('-rf', pwd + '/build/output/assets')
  shell.rm('-rf', pwd + '/build/output/manifest.json')
  shell.rm('-rf', pwd + '/build/output/app.js')
  shell.rm('-rf', pwd + '/build/output/framework')

  shell.cd('..')
  shell.cd('..')
}

class DeployZipPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('DeployZipPlugin', (stats) => {
      deployZip()
    })
  }
}

module.exports = DeployZipPlugin
