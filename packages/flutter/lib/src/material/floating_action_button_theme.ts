import {Color} from '@octoflutter/dartsdk'
import {ShapeBorder} from '../painting/borders'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'
import {BoxConstraints} from '../rendering/box'

export class FloatingActionButtonThemeData extends N.FloatingActionButtonThemeData {
  constructor(args?: {
    foregroundColor?: Color
    backgroundColor?: Color
    focusColor?: Color
    hoverColor?: Color
    splashColor?: Color
    elevation?: number
    focusElevation?: number
    hoverElevation?: number
    disabledElevation?: number
    highlightElevation?: number
    shape?: ShapeBorder
    enableFeedback?: boolean
    sizeConstraints?: BoxConstraints
    smallSizeConstraints?: BoxConstraints
    largeSizeConstraints?: BoxConstraints
    extendedSizeConstraints?: BoxConstraints
    extendedIconLabelSpacing?: number
    extendedPadding?: EdgeInsetsGeometry
    extendedTextStyle?: TextStyle
  }) {
    super(
      args?.foregroundColor,
      args?.backgroundColor,
      args?.focusColor,
      args?.hoverColor,
      args?.splashColor,
      args?.elevation,
      args?.focusElevation,
      args?.hoverElevation,
      args?.disabledElevation,
      args?.highlightElevation,
      args?.shape,
      args?.enableFeedback,
      args?.sizeConstraints,
      args?.smallSizeConstraints,
      args?.largeSizeConstraints,
      args?.extendedSizeConstraints,
      args?.extendedIconLabelSpacing,
      args?.extendedPadding,
      args?.extendedTextStyle
    )
  }
}

// FloatingActionButtonThemeData: function FloatingActionButtonThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
//   var _ = this;
//   _.foregroundColor = t0;
//   _.backgroundColor = t1;
//   _.focusColor = t2;
//   _.hoverColor = t3;
//   _.splashColor = t4;
//   _.elevation = t5;
//   _.focusElevation = t6;
//   _.hoverElevation = t7;
//   _.disabledElevation = t8;
//   _.highlightElevation = t9;
//   _.shape = t10;
//   _.enableFeedback = t11;
//   _.sizeConstraints = t12;
//   _.smallSizeConstraints = t13;
//   _.largeSizeConstraints = t14;
//   _.extendedSizeConstraints = t15;
//   _.extendedIconLabelSpacing = t16;
//   _.extendedPadding = t17;
//   _.extendedTextStyle = t18;
// },
