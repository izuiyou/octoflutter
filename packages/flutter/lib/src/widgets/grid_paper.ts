import {Color} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {octoAnimatedListState, Widget} from './framework'

export class GridPaper extends N.GridPaper {
  constructor(args?: {
    key?: Key
    color?: Color
    interval?: number
    divisions?: number
    subdivisions?: number
    child?: Widget
  }) {
    super(
      args?.color ?? new Color(0x7fc3e8f3),
      args?.interval ?? 100.0,
      args?.divisions ?? 2,
      args?.subdivisions ?? 5,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// GridPaper: function GridPaper(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.color = t0;
//     _.interval = t1;
//     _.divisions = t2;
//     _.subdivisions = t3;
//     _.child = t4;
//     _.key0 = t5;
//   },
