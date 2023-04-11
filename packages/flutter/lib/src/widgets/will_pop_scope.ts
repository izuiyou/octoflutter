import {Key, octoKey} from '../foundation/key'
import {Widget} from './framework'
import {WillPopCallback} from './navigator'

export class WillPopScope extends N.OctoWillPopScope {
  constructor(args: {key?: Key; child: Widget; onWillPop: WillPopCallback}) {
    const cb = (id) => {
      args.onWillPop().then((ret) => {
        super.wpa(id, ret)
      })
    }
    super(args.child, cb, args.key?.[octoKey])
  }
}

// WillPopScope: function WillPopScope(t0, t1, t2) {
//     this.child = t0;
//     this.onWillPop = t1;
//     this.key = t2;
//   },
