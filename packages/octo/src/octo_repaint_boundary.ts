import {Key, Widget, octoKey} from '@octoflutter/flutter'

export class OctoRepaintBoundary extends N.OctoRepaintBoundary {
  constructor(args: {child: Widget; key?: Key}) {
    super(args.child, args.key?.[octoKey])
  }
}

// OctoRepaintBoundary: function OctoRepaintBoundary(t0, t1) {
//     this.child = t0;
//     this.key0 = t1;
//   },
