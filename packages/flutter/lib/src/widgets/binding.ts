import {AppLifecycleState} from '@octoflutter/dartsdk'
import {Widget} from './framework'
export const runApp = (widget: Widget) => {
  N.setAppWidget(widget, OctoAppBundleId)
}

export abstract class WidgetsBindingObserver {
  abstract didChangeAppLifecycleState(state: AppLifecycleState): void

  abstract didChangeMetrics()

  abstract didChangeTextScaleFactor()

  abstract didChangePlatformBrightness()
}

export class WidgetsBinding {
  static instance: WidgetsBinding = new WidgetsBinding()

  private _observersMap: Map<any, Array<WidgetsBindingObserver>> = new Map()

  addObserver(observer: WidgetsBindingObserver) {
    if (this._observersMap.has(OctoAppBundleId)) {
      this._observersMap.get(OctoAppBundleId).push(observer)
    } else {
      const _observers: Array<WidgetsBindingObserver> = []
      _observers.push(observer)
      this._observersMap.set(OctoAppBundleId, _observers)

      N.setAppLifeCycleListener(OctoAppBundleId, (state) => {
        this._observersMap.get(OctoAppBundleId).forEach((v, i, arr) => {
          v.didChangeAppLifecycleState(state)
        })
      })

      N.setAppDidChangedListener(OctoAppBundleId, (type) => {
        this._observersMap.get(OctoAppBundleId).forEach((v, i, arr) => {
          switch (type) {
            case 1:
              v.didChangeMetrics()
              break
            case 2:
              v.didChangeTextScaleFactor()
              break
            case 3:
              v.didChangePlatformBrightness()
              break
          }
        })
      })
    }
  }

  removeObserver(observer: WidgetsBindingObserver): boolean {
    if (this._observersMap.has(OctoAppBundleId)) {
      const index = this._observersMap.get(OctoAppBundleId).indexOf(observer, 0)
      if (index >= 0) {
        this._observersMap.get(OctoAppBundleId).splice(index, 1)
        return true
      }
    }
    return false
  }
}
