import {BorderSide, OutlinedBorder} from './borders'
import {BorderRadius} from './border_radius'

export class RoundedRectangleBorder
  extends N.RoundedRectangleBorder
  implements OutlinedBorder
{
  constructor(args?: {side?: BorderSide; borderRadius?: BorderRadius}) {
    super(
      args?.borderRadius ?? BorderRadius.zero,
      args?.side ?? BorderSide.none
    )
  }
}

// RoundedRectangleBorder: function RoundedRectangleBorder(t0, t1) {
//     this.borderRadius = t0;
//     this.side = t1;
//   },
