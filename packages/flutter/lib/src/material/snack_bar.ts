import {Color, VoidCallback, Duration} from '@octoflutter/dartsdk'
import {Animation} from '../animation/animation'
import {Key, octoKey} from '../foundation/key'
import {ShapeBorder} from '../painting/borders'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {DismissDirection} from '../widgets/dismissible'
import {Widget} from '../widgets/framework'
import {SnackBarBehavior} from './snack_bar_theme'

export class SnackBarAction extends N.SnackBarAction {
  constructor(args: {
    key?: Key
    textColor?: Color
    disabledTextColor?: Color
    label: string
    onPressed: VoidCallback
  }) {
    super(
      args.textColor,
      args.disabledTextColor,
      args.label,
      args.onPressed,
      args.key?.[octoKey]
    )
  }
}

// SnackBarAction: function SnackBarAction(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.textColor = t0;
//     _.disabledTextColor = t1;
//     _.label = t2;
//     _.onPressed = t3;
//     _.key0 = t4;
//   },

export class SnackBar extends N.SnackBar {
  constructor(args: {
    key?: Key
    content: Widget
    backgroundColor?: Color
    elevation?: number
    margin?: EdgeInsetsGeometry
    padding?: EdgeInsetsGeometry
    width?: number
    shape?: ShapeBorder
    behavior?: SnackBarBehavior
    action?: SnackBarAction
    duration?: Duration
    animation?: Animation<number>
    onVisible?: VoidCallback
    dismissDirection?: DismissDirection
  }) {
    super(
      args.content,
      args.backgroundColor,
      args.elevation,
      args.margin,
      args.padding,
      args.width,
      args.shape,
      args.behavior,
      args.action,
      args.duration ?? new Duration({milliseconds: 4000}),
      args.animation,
      args.onVisible,
      args.dismissDirection ?? DismissDirection.down,
      args.key?.[octoKey]
    )
  }
}

// SnackBar: function SnackBar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) {
//     var _ = this;
//     _.content = t0;
//     _.backgroundColor = t1;
//     _.elevation = t2;
//     _.margin = t3;
//     _.padding = t4;
//     _.width = t5;
//     _.shape = t6;
//     _.behavior = t7;
//     _.action = t8;
//     _.duration = t9;
//     _.animation = t10;
//     _.onVisible = t11;
//     _.dismissDirection = t12;
//     _.key0 = t13;
//   },
