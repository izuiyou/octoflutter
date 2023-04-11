import {Color, Duration, Size} from '@octoflutter/dartsdk'
import {Alignment} from '../painting/alignment'
import {BorderSide} from '../painting/borders'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'
import {InteractiveInkFeatureFactory} from './ink_splash'
import {MaterialStateProperty} from './material_state'
import {MaterialTapTargetSize, VisualDensity} from './theme_data'

export class ButtonStyle extends N.ButtonStyle {
  constructor(args?: {
    textStyle?: MaterialStateProperty<TextStyle>
    backgroundColor?: MaterialStateProperty<Color>
    foregroundColor?: MaterialStateProperty<Color>
    overlayColor?: MaterialStateProperty<Color>
    shadowColor?: MaterialStateProperty<Color>
    elevation?: MaterialStateProperty<number>
    padding?: MaterialStateProperty<EdgeInsetsGeometry>
    minimumSize?: MaterialStateProperty<Size>
    fixedSize?: MaterialStateProperty<Size>
    maximumSize?: MaterialStateProperty<Size>
    side?: MaterialStateProperty<BorderSide>
    shape?: any
    mouseCursor?: any
    visualDensity?: VisualDensity
    tapTargetSize?: MaterialTapTargetSize
    animationDuration?: Duration
    enableFeedback?: boolean
    alignment?: Alignment
    splashFactory?: InteractiveInkFeatureFactory
  }) {
    super(
      args?.textStyle,
      args?.backgroundColor,
      args?.foregroundColor,
      args?.overlayColor,
      args?.shadowColor,
      args?.elevation,
      args?.padding,
      args?.minimumSize,
      args?.fixedSize,
      args?.maximumSize,
      args?.side,
      args?.shape,
      args?.mouseCursor,
      args?.visualDensity,
      args?.tapTargetSize,
      args?.animationDuration,
      args?.enableFeedback,
      args?.alignment,
      args?.splashFactory
    )
  }
}

// ButtonStyle: function ButtonStyle(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
//     var _ = this;
//     _.textStyle = t0;
//     _.backgroundColor = t1;
//     _.foregroundColor = t2;
//     _.overlayColor = t3;
//     _.shadowColor = t4;
//     _.elevation = t5;
//     _.padding = t6;
//     _.minimumSize = t7;
//     _.fixedSize = t8;
//     _.maximumSize = t9;
//     _.side = t10;
//     _.shape = t11;
//     _.mouseCursor = t12;
//     _.visualDensity = t13;
//     _.tapTargetSize = t14;
//     _.animationDuration = t15;
//     _.enableFeedback = t16;
//     _.alignment = t17;
//     _.splashFactory = t18;
//   },
