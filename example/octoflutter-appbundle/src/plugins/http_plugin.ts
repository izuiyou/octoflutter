import {isNullOrUndefined, print} from '@octoflutter/dartsdk'
import {MethodChannel} from '@octoflutter/flutter'

const httpChannel = new MethodChannel('example.plugins/http')

export class HttpPlugin {
  static createParams(url: string, params: any): any {
    const map = {
      url: url,
      params: isNullOrUndefined(params) ? '' : JSON.stringify(params),
    }
    print(map)
    return map
  }

  static get = (url: string, params?: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      httpChannel
        .invokeMethod('get', this.createParams(url, params))
        .then((v) => resolve(v))
        .catch((e) => reject(e))
    })
  }

  static post = (url: string, params?: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      httpChannel
        .invokeMethod('post', this.createParams(url, params))
        .then((v) => resolve(v))
        .catch((e) => reject(e))
    })
  }
}
