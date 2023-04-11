import {Brightness, Color} from '@octoflutter/dartsdk'
import {BorderSide} from '../painting/borders'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'

export class ChipThemeData extends N.ChipThemeData {
  constructor(args: {
    backgroundColor: Color
    deleteIconColor?: Color
    disabledColor: Color
    selectedColor: Color
    secondarySelectedColor: Color
    shadowColor?: Color
    selectedShadowColor?: Color
    showCheckmark?: boolean
    checkmarkColor?: Color
    labelPadding?: EdgeInsetsGeometry
    padding: EdgeInsetsGeometry
    side?: BorderSide
    shape?: any
    labelStyle: TextStyle
    secondaryLabelStyle: TextStyle
    brightness: Brightness
    elevation?: number
    pressElevation?: number
  }) {
    super(
      args.backgroundColor,
      args.deleteIconColor,
      args.disabledColor,
      args.selectedColor,
      args.secondarySelectedColor,
      args.shadowColor,
      args.selectedShadowColor,
      args.checkmarkColor,
      args.labelPadding,
      args.padding,
      args.side,
      args.shape,
      args.labelStyle,
      args.secondaryLabelStyle,
      args.brightness,
      args.elevation,
      args.pressElevation
    )
  }
}

// ChipThemeData: function ChipThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16) {
//   var _ = this;
//   _.backgroundColor = t0;
//   _.deleteIconColor = t1;
//   _.disabledColor = t2;
//   _.selectedColor = t3;
//   _.secondarySelectedColor = t4;
//   _.shadowColor = t5;
//   _.selectedShadowColor = t6;
//   _.checkmarkColor = t7;
//   _.labelPadding = t8;
//   _.padding = t9;
//   _.side = t10;
//   _.shape = t11;
//   _.labelStyle = t12;
//   _.secondaryLabelStyle = t13;
//   _.brightness = t14;
//   _.elevation = t15;
//   _.pressElevation = t16;
// },
