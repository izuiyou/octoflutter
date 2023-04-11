import {Key, octoKey} from '../foundation/key'
import {Widget} from './framework'

export class AutomaticKeepAlive extends N.OctoAutomaticKeepAlive {
  constructor(args?: {key?: Key; child?: Widget; keepAlive?: boolean}) {
    super(args?.keepAlive ?? true, args?.child, args?.key?.[octoKey])
  }
}

// OctoAutomaticKeepAlive: function OctoAutomaticKeepAlive(t0, t1, t2) {
//     this.keepAlive = t0;
//     this.child = t1;
//     this.key0 = t2;
//   },
