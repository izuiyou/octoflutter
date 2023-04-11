import {BlurStyle, Color, Offset} from '@octoflutter/dartsdk'
import {Colors} from '../material/colors'

export class BoxShadow extends N.BoxShadow {
  constructor(args?: {
    color?: Color
    blurStyle?: BlurStyle
    offset?: Offset
    blurRadius?: number
    spreadRadius?: number
  }) {
    super(
      args?.spreadRadius ?? 0,
      args?.blurStyle ?? BlurStyle.normal,
      args?.color ?? Colors.transparent,
      args?.offset ?? new Offset(0, 0),
      args?.blurRadius ?? 0
    )
  }
}

// BoxShadow: function BoxShadow(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.spreadRadius = t0;
//   _.blurStyle = t1;
//   _.color = t2;
//   _.offset = t3;
//   _.blurRadius = t4;
// },
