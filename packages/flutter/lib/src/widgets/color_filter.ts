import {ColorFilter} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {Widget} from './framework'

export class ColorFiltered extends N.ColorFiltered {
  constructor(args: {colorFilter: ColorFilter; key?: Key; child?: Widget}) {
    super(args.colorFilter, args.child, args.key?.[octoKey])
  }
}

// ColorFiltered: function ColorFiltered(t0, t1, t2) {
//     this.colorFilter = t0;
//     this.child = t1;
//     this.key0 = t2;
//   },
