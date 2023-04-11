#!/usr/bin/env node
'use strict'
const spawn = require('cross-spawn')
const path = require('path')
const fs = require('fs')
const program = require('commander')
const packageMod = require('./package.json')

program.version(packageMod.version, '-v, --version')
program.helpOption('-h, --help').addHelpCommand(false)

program
  .command('dev')
  .description('build develop enviroment')
  .action(function () {
    const nodeArgs = []
    const result = spawn.sync(
      process.execPath,
      nodeArgs.concat(path.resolve(__dirname, './scripts/index.js')),
      {stdio: 'inherit'}
    )
    if (result.signal) {
      if (result.signal === 'SIGKILL') {
        console.log(
          'The build failed because the process exited too early. ' +
            'This probably means the system ran out of memory or someone called ' +
            '`kill -9` on the process.'
        )
      } else if (result.signal === 'SIGTERM') {
        console.log(
          'The build failed because the process exited too early. ' +
            'Someone might have called `kill` or `killall`, or the system could ' +
            'be shutting down.'
        )
      }
      process.exit(1)
    }
    process.exit(result.status)
  })

program
  .command('create <app>')
  .description('create a template app')
  .action(function (app) {
    var from = path.resolve(__dirname, './template')
    var to = path.resolve(process.cwd(), './' + app)

    if (fs.existsSync(to)) {
      console.log('package:' + app + ' is exist ...')
      return
    }

    fs.cpSync(from, to, {recursive: true, force: true})

    let pkgFilePath = path.join(to, 'package.json')
    if (!fs.existsSync(pkgFilePath)) {
      console.log('package.json for' + app + ' is not exist ...')
      return
    }

    var pkgJsonData = fs.readFileSync(pkgFilePath)
    var pkgJson = JSON.parse(pkgJsonData)
    pkgJson['name'] = app
    fs.writeFileSync(pkgFilePath, JSON.stringify(pkgJson, null, 2))
  })

program.parse(process.argv)
