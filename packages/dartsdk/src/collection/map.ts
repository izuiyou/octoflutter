import {isNullOrUndefined} from '../dartsdk'

export const map4Dart = (map?: Map<any, any>) => {
  if (!isNullOrUndefined(map)) {
    const keys = []
    const values = []
    map.forEach((v, k) => {
      keys.push(k)
      values.push(v)
    })
    return N.jsToDartMap(keys, values)
  }
  return null
}

export const mapFromDart = (map: any): Map<any, any> => {
  if (!isNullOrUndefined(map)) {
    const keys = N.octoMapKeys(map)
    const values = N.octoMapValues(map)
    const jsMap = new Map()
    for (let i = 0; i < keys.length; i++) {
      jsMap.set(keys[i], values[i])
    }
    return jsMap
  }
  return null
}
