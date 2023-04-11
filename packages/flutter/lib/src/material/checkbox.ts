import {Color} from '@octoflutter/dartsdk'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {BorderSide, OutlinedBorder} from '../painting/borders'
import {MaterialStateProperty} from './material_state'
import {MaterialTapTargetSize, VisualDensity} from './theme_data'

export class Checkbox extends N.Checkbox {
  constructor(args: {
    key?: Key
    value?: boolean
    tristate?: boolean
    onChanged: ValueChanged<boolean>
    mouseCursor?: any
    activeColor?: Color
    fillColor?: Color
    checkColor?: Color
    focusColor?: Color
    hoverColor?: Color
    overlayColor?: MaterialStateProperty<Color>
    splashRadius?: number
    materialTapTargetSize?: MaterialTapTargetSize
    visualDensity?: VisualDensity
    focusNode?: any
    autofocus?: boolean
    shape?: OutlinedBorder
    side?: BorderSide
  }) {
    super(
      args.value ?? false,
      args.onChanged,
      args.mouseCursor,
      args.activeColor,
      args.fillColor,
      args.checkColor,
      args.tristate ?? false,
      args.materialTapTargetSize,
      args.visualDensity,
      args.focusColor,
      args.hoverColor,
      args.overlayColor,
      args.splashRadius,
      args.focusNode,
      args.autofocus,
      args.shape,
      args.side,
      args.key?.[octoKey]
    )
  }
}

// Checkbox: function Checkbox(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17) {
//     var _ = this;
//     _.value = t0;
//     _.onChanged = t1;
//     _.mouseCursor = t2;
//     _.activeColor = t3;
//     _.fillColor = t4;
//     _.checkColor = t5;
//     _.tristate = t6;
//     _.materialTapTargetSize = t7;
//     _.visualDensity = t8;
//     _.focusColor = t9;
//     _.hoverColor = t10;
//     _.overlayColor = t11;
//     _.splashRadius = t12;
//     _.focusNode = t13;
//     _.autofocus = t14;
//     _.shape = t15;
//     _.side = t16;
//     _.key0 = t17;
//   },
