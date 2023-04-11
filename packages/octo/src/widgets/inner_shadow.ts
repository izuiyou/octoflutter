import {Color, Offset} from '@octoflutter/dartsdk'
import {Widget, Key, Colors, octoKey} from '@octoflutter/flutter'

export class InnerShadow extends N.InnerShadow {
  constructor(args: {
    key?: Key
    blur?: number
    color?: Color
    offset?: Offset
    child: Widget
  }) {
    super(
      args.blur ?? 10,
      args.color ?? Colors.black,
      args.offset ?? new Offset(5, 5),
      args.child,
      args.key?.[octoKey]
    )
  }
}
// InnerShadow: function InnerShadow(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.blur0 = t0;
//     _.color = t1;
//     _.offset = t2;
//     _.child = t3;
//     _.key0 = t4;
//   },
