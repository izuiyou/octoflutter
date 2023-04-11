import {VoidCallback} from '@octoflutter/dartsdk'

export abstract class Listenable {
  abstract addListener(listener: VoidCallback)

  abstract removeListener(listener: VoidCallback)
}

export class ChangeNotifier extends N.ChangeNotifier implements Listenable {
  constructor() {
    super([])
  }

  dispose() {
    N.octoChangeNotifierDispose(this)
  }

  addListener(listener: VoidCallback) {
    N.octoChangeNotifierAdd(this, listener)
  }

  removeListener(listener: VoidCallback) {
    N.octoChangeNotifierRemove(this, listener)
  }

  notifyListeners() {
    N.octoChangeNotifierNotify(this)
  }
}
