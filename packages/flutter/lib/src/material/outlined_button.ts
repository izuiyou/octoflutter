import {Clip, VoidCallback} from '@octoflutter/dartsdk'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {Widget} from '../widgets/framework'
import {ButtonStyle} from './button_style'

export class OutlinedButton extends N.OutlinedButton {
  constructor(args: {
    key?: Key
    onPressed: VoidCallback
    onLongPress?: VoidCallback
    onHover?: ValueChanged<boolean>
    onFocusChange?: ValueChanged<boolean>
    style?: ButtonStyle
    focusNode?: any
    autofocus?: boolean
    clipBehavior?: Clip
    child: Widget
  }) {
    super(
      args.onPressed,
      args.onLongPress,
      args.onHover,
      args.onFocusChange,
      args.style,
      args.clipBehavior ?? Clip.none,
      args.focusNode,
      args.autofocus,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// OutlinedButton: function OutlinedButton(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//     var _ = this;
//     _.onPressed = t0;
//     _.onLongPress = t1;
//     _.onHover = t2;
//     _.onFocusChange = t3;
//     _.style = t4;
//     _.clipBehavior = t5;
//     _.focusNode = t6;
//     _.autofocus = t7;
//     _.child = t8;
//     _.key0 = t9;
//   },
