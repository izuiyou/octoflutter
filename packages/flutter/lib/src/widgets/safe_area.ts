import {Key, octoKey} from '../foundation/key'
import {EdgeInsets} from '../painting/edge_insets'
import {Widget} from './framework'

export class SafeArea extends N.SafeArea {
  constructor(args: {
    key?: Key
    left?: boolean
    top?: boolean
    right?: boolean
    bottom?: boolean
    minimum?: EdgeInsets
    maintainBottomViewPadding?: boolean
    child: Widget
  }) {
    super(
      args.left ?? true,
      args.top ?? true,
      args.right ?? true,
      args.bottom ?? true,
      args.minimum ?? EdgeInsets.zero,
      args.maintainBottomViewPadding ?? false,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// SafeArea: function SafeArea(t0, t1, t2, t3, t4, t5, t6, t7) {
//     var _ = this;
//     _.left0 = t0;
//     _.top0 = t1;
//     _.right = t2;
//     _.bottom = t3;
//     _.minimum = t4;
//     _.maintainBottomViewPadding = t5;
//     _.child = t6;
//     _.key0 = t7;
//   },
