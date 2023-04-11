import {Key, octoKey} from '../foundation/key'

export class Spacer extends N.Spacer {
  constructor(args?: {key?: Key; flex?: number}) {
    super(args?.flex ?? 1, args?.key?.[octoKey])
  }
}

// Spacer: function Spacer(t0, t1) {
//     this.flex = t0;
//     this.key = t1;
//   },
