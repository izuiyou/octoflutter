import {MethodChannel} from '@octoflutter/flutter'

const httpChannel = new MethodChannel('example.plugins/router')

export class RouterPlugin {
  static open = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (kIsWeb) {
        window.open(url)
        resolve()
      } else {
        httpChannel
          .invokeMethod('open', url)
          .then(() => resolve())
          .catch((e) => reject(e))
      }
    })
  }
}
