const fs = require('fs')
const path = require('path')

class ApiData {
  name
  classes
  enums
  types
  constants
  functions

  constructor(name, classes, enums, types, constants, functions) {
    this.name = name
    this.classes = classes
    this.enums = enums
    this.types = types
    this.constants = constants
    this.functions = functions
  }
}

const findTypeOfExport = (target, sp) => {
  const source = fs.readFileSync(sp + '.ts').toString()
  let type = ''
  if (source.includes(target)) {
    const regexp = new RegExp('export(.*?)' + target + '(.*?)\\n', 'g')
    const matches = source.matchAll(regexp)
    if (matches !== null && matches !== undefined) {
      for (const match of matches) {
        if (match !== null && match !== undefined && match.length === 3) {
          type = `${match[1]}`.replace('abstract', '').trim()
          const m2 = `${match[2]}`

          if (m2 === '' || m2.startsWith('<') || m2.startsWith(' ')) {
            // console.log(
            //   target +
            //     '    t:' +
            //     type +
            //     '   m1:' +
            //     match[1] +
            //     '  m2:' +
            //     match[2] +
            //     ' m0:' +
            //     match[0]
            // )

            if ('const' === type) {
              //检查是不是函数
              const str = source.match(
                new RegExp('export(.*?)' + target + '(.*?)=(.*?)\\(', 'g')
              )
              if (str !== null && str !== undefined && str.length === 1) {
                const inner = `${str}`.split('=')[1]?.replace('(', '').trim()
                if (inner === '' || inner.startsWith('<')) {
                  type = 'function'
                }

                // console.log(`${str.length}  ${str} ${type}`)
              }
            }
            break
          }
        }
      }
    }
  }
  return type
}

const findAllExports = (name, parent, entrypoint) => {
  const source = fs.readFileSync(entrypoint).toString()
  const regexp = /export([\s\S]*?)from([\s\S]*?)'([\s\S]*?)'/g
  const matches = source.matchAll(regexp)
  const data = new ApiData(name, [], [], [], [], [])

  if (matches !== null && matches !== undefined) {
    for (const match of matches) {
      if (match !== null && match !== undefined && match.length === 4) {
        let str = `${match[1]}`
          .replace('{', '')
          .replace('}', '')
          .replaceAll('\n', '')
          .replaceAll(' ', '')
          .split(',')
        values = [...str].filter((v) => v !== '')

        const sp = path.resolve(parent, `${match[3]}`.trim())

        for (const v of values) {
          const t = findTypeOfExport(v, sp)
          if (t === '') {
            console.log('Can not find type of ' + v + ' in ' + sp)
          } else {
            switch (t) {
              case 'class':
                data.classes.push(v)
                break
              case 'enum':
                data.enums.push(v)
                break
              case 'type':
                data.types.push(v)
                break
              case 'const':
                if (!v.startsWith('octo')) {
                  data.constants.push(v)
                }
                break
              case 'function':
                data.functions.push(v)
                break
            }
          }
        }
      }
    }
  }
  return data
}

const findApiOfFile = (name, parent, subfile) => {
  const p = path.resolve(__dirname, parent)
  const data = findAllExports(name, p, path.resolve(p, subfile))
  // console.log(data)
  return data
}

const findAllApi = () => {
  const flutter = []
  flutter.push(
    findApiOfFile('animation', '../packages/flutter/lib/', 'animation.ts')
  )
  flutter.push(
    findApiOfFile('cupertino', '../packages/flutter/lib/', 'cupertino.ts')
  )
  flutter.push(
    findApiOfFile('foundation', '../packages/flutter/lib/', 'foundation.ts')
  )
  flutter.push(
    findApiOfFile('gestures', '../packages/flutter/lib/', 'gestures.ts')
  )
  flutter.push(
    findApiOfFile('material', '../packages/flutter/lib/', 'material.ts')
  )
  flutter.push(
    findApiOfFile('painting', '../packages/flutter/lib/', 'painting.ts')
  )
  flutter.push(
    findApiOfFile('rendering', '../packages/flutter/lib/', 'rendering.ts')
  )
  flutter.push(
    findApiOfFile('scheduler', '../packages/flutter/lib/', 'scheduler.ts')
  )
  flutter.push(
    findApiOfFile('services', '../packages/flutter/lib/', 'services.ts')
  )
  flutter.push(
    findApiOfFile('widgets', '../packages/flutter/lib/', 'widgets.ts')
  )

  const dartsdk = []
  dartsdk.push(
    findApiOfFile('dartsdk:async', '../packages/dartsdk/src/', 'async.ts')
  )
  //   dartsdk.push(
  //     findApiOfFile('dartsdk:collection', '../packages/dartsdk/src/', 'collection.ts')
  //   )
  dartsdk.push(
    findApiOfFile('dartsdk:core', '../packages/dartsdk/src/', 'core.ts')
  )
  dartsdk.push(findApiOfFile('dartsdk:ui', '../packages/dartsdk/src/', 'ui.ts'))
  dartsdk.push(
    findApiOfFile('dartsdk:math', '../packages/dartsdk/src/', 'vector_math.ts')
  )

  const octo = []
  octo.push(findApiOfFile('octo', '../packages/octo/src/', 'octo.ts'))

  const octopack = []
  octopack.push(findApiOfFile('flare', '../octopack/flare/', 'index.ts'))
  octopack.push(findApiOfFile('lottie', '../octopack/lottie/', 'index.ts'))
  octopack.push(findApiOfFile('photo', '../octopack/photo/', 'index.ts'))
  octopack.push(findApiOfFile('picker', '../octopack/picker/', 'index.ts'))
  octopack.push(findApiOfFile('refresh', '../octopack/refresh/', 'index.ts'))

  console.log(
    JSON.stringify({
      dartsdk: dartsdk,
      flutter: flutter,
      octo: octo,
      octopack: octopack,
    })
  )
}

findAllApi()
