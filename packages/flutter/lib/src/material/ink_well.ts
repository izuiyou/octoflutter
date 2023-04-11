import {Color} from '@octoflutter/dartsdk'
import {
  GestureLongPressCallback,
  GestureTapCallback,
  GestureTapCancelCallback,
  GestureTapDownCallback,
} from '../../gestures'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {BorderRadius} from '../painting/border_radius'
import {BoxShape} from '../painting/box_border'
import {Widget} from '../widgets/framework'
import {InteractiveInkFeatureFactory} from './ink_splash'

export class InkWell extends N.InkWell {
  constructor(args?: {
    key?: Key
    child?: Widget
    onTap?: GestureTapCallback
    onDoubleTap?: GestureTapCallback
    onLongPress?: GestureLongPressCallback
    onTapDown?: GestureTapDownCallback
    onTapCancel?: GestureTapCancelCallback
    onHighlightChanged?: ValueChanged<boolean>
    onHover?: ValueChanged<boolean>
    mouseCursor?: any
    focusColor?: Color
    hoverColor?: Color
    highlightColor?: Color
    overlayColor?: any
    splashColor?: Color
    splashFactory?: InteractiveInkFeatureFactory
    radius?: number
    borderRadius?: BorderRadius
    customBorder?: any
    enableFeedback?: boolean
    excludeFromSemantics?: boolean
    focusNode?: any
    canRequestFocus?: boolean
    onFocusChange?: ValueChanged<boolean>
    autofocus?: boolean
  }) {
    super(
      args?.child,
      args?.onTap,
      args?.onTapDown,
      args?.onTapCancel,
      args?.onDoubleTap,
      args?.onLongPress,
      args?.onHighlightChanged,
      args?.onHover,
      args?.mouseCursor,
      true,
      BoxShape.rectangle,
      args?.radius,
      args?.borderRadius,
      args?.customBorder,
      args?.focusColor,
      args?.hoverColor,
      args?.highlightColor,
      args?.overlayColor,
      args?.splashColor,
      args?.splashFactory,
      args?.enableFeedback,
      args?.excludeFromSemantics,
      args?.onFocusChange,
      args?.autofocus,
      args?.focusNode,
      args?.canRequestFocus,
      args?.key?.[octoKey]
    )
  }
}

// InkWell: function InkWell(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26) {
//     var _ = this;
//     _.child = t0;
//     _.onTap = t1;
//     _.onTapDown = t2;
//     _.onTapCancel = t3;
//     _.onDoubleTap = t4;
//     _.onLongPress = t5;
//     _.onHighlightChanged = t6;
//     _.onHover = t7;
//     _.mouseCursor = t8;
//     _.containedInkWell = t9;
//     _.highlightShape = t10;
//     _.radius = t11;
//     _.borderRadius = t12;
//     _.customBorder = t13;
//     _.focusColor = t14;
//     _.hoverColor = t15;
//     _.highlightColor = t16;
//     _.overlayColor = t17;
//     _.splashColor = t18;
//     _.splashFactory = t19;
//     _.enableFeedback = t20;
//     _.excludeFromSemantics = t21;
//     _.onFocusChange = t22;
//     _.autofocus = t23;
//     _.focusNode = t24;
//     _.canRequestFocus = t25;
//     _.key0 = t26;
//   },
