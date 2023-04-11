import {Duration, Clip, Color, VoidCallback} from '@octoflutter/dartsdk'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {ShapeBorder} from '../painting/borders'
import {EdgeInsets, EdgeInsetsGeometry} from '../painting/edge_insets'
import {RoundedRectangleBorder} from '../painting/rounded_rectangle_border'
import {TextStyle} from '../painting/text_style'
import {BoxConstraints} from '../rendering/box'
import {Widget} from '../widgets/framework'
import {MaterialTapTargetSize, VisualDensity} from './theme_data'

export class RawMaterialButton extends N.RawMaterialButton {
  constructor(args: {
    key?: Key
    onPressed?: VoidCallback
    onLongPress?: VoidCallback
    onHighlightChanged?: ValueChanged<boolean>
    mouseCursor?: any
    textStyle?: TextStyle
    fillColor?: Color
    focusColor?: Color
    hoverColor?: Color
    highlightColor?: Color
    splashColor?: Color
    elevation?: number
    focusElevation?: number
    hoverElevation?: number
    highlightElevation?: number
    disabledElevation?: number
    padding?: EdgeInsetsGeometry
    visualDensity?: VisualDensity
    constraints?: BoxConstraints
    shape?: ShapeBorder
    animationDuration?: Duration
    clipBehavior?: Clip
    focusNode?: any
    autofocus?: boolean
    materialTapTargetSize?: MaterialTapTargetSize
    child?: Widget
    enableFeedback?: boolean
  }) {
    super(
      args.onPressed,
      args.onLongPress,
      args.onHighlightChanged,
      args.mouseCursor,
      args.textStyle,
      args.fillColor,
      args.focusColor,
      args.hoverColor,
      args.highlightColor,
      args.splashColor,
      args.elevation ?? 2,
      args.hoverElevation ?? 4,
      args.focusElevation ?? 4,
      args.highlightElevation ?? 8,
      args.disabledElevation ?? 0,
      args.padding ?? EdgeInsets.zero,
      args.visualDensity ?? new VisualDensity(),
      args.constraints ?? new BoxConstraints({minWidth: 88, minHeight: 36}),
      args.shape ?? new RoundedRectangleBorder(),
      args.animationDuration ?? new Duration({milliseconds: 200}),
      args.child,
      args.materialTapTargetSize ?? MaterialTapTargetSize.padded,
      args.focusNode,
      args.autofocus ?? false,
      args.clipBehavior ?? Clip.none,
      args.enableFeedback ?? true,
      args.key?.[octoKey]
    )
  }
}

// RawMaterialButton: function RawMaterialButton(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26) {
//     var _ = this;
//     _.onPressed = t0;
//     _.onLongPress = t1;
//     _.onHighlightChanged = t2;
//     _.mouseCursor = t3;
//     _.textStyle = t4;
//     _.fillColor = t5;
//     _.focusColor = t6;
//     _.hoverColor = t7;
//     _.highlightColor = t8;
//     _.splashColor = t9;
//     _.elevation = t10;
//     _.hoverElevation = t11;
//     _.focusElevation = t12;
//     _.highlightElevation = t13;
//     _.disabledElevation = t14;
//     _.padding = t15;
//     _.visualDensity = t16;
//     _.constraints = t17;
//     _.shape = t18;
//     _.animationDuration = t19;
//     _.child = t20;
//     _.materialTapTargetSize = t21;
//     _.focusNode = t22;
//     _.autofocus = t23;
//     _.clipBehavior = t24;
//     _.enableFeedback = t25;
//     _.key0 = t26;
//   },
