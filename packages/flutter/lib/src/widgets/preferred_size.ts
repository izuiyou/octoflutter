import {Key, octoKey} from '../foundation/key'
import {Widget} from './framework'
import {Size} from '@octoflutter/dartsdk'
import {AppBar} from '../material/app_bar'
import {Tab, TabBar} from '../material/tabs'

export class PreferredSize extends N.PreferredSize {
  constructor(args: {key?: Key; child: Widget; preferredSize: Size}) {
    super(args.child, args.preferredSize, args.key?.[octoKey])
  }
}

// PreferredSize: function PreferredSize(t0, t1, t2) {
//     this.child = t0;
//     this.preferredSize = t1;
//     this.key = t2;
//   },

export type PreferredSizeWidget = PreferredSize | AppBar | Tab | TabBar
