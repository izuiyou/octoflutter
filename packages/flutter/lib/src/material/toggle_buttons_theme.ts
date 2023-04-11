import {Color} from '@octoflutter/dartsdk'
import {BorderRadius} from '../painting/border_radius'
import {TextStyle} from '../painting/text_style'
import {BoxConstraints} from '../rendering/box'

export class ToggleButtonsThemeData extends N.ToggleButtonsThemeData {
  constructor(args?: {
    textStyle?: TextStyle
    constraints?: BoxConstraints
    color?: Color
    selectedColor?: Color
    disabledColor?: Color
    fillColor?: Color
    focusColor?: Color
    highlightColor?: Color
    hoverColor?: Color
    splashColor?: Color
    borderColor?: Color
    selectedBorderColor?: Color
    disabledBorderColor?: Color
    borderRadius?: BorderRadius
    borderWidth?: number
  }) {
    super(
      args?.textStyle,
      args?.constraints,
      args?.color,
      args?.selectedColor,
      args?.disabledColor,
      args?.fillColor,
      args?.focusColor,
      args?.highlightColor,
      args?.splashColor,
      args?.hoverColor,
      args?.borderColor,
      args?.selectedBorderColor,
      args?.disabledBorderColor,
      args?.borderWidth,
      args?.borderRadius
    )
  }
}

// ToggleButtonsThemeData: function ToggleButtonsThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14) {
//     var _ = this;
//     _.textStyle = t0;
//     _.constraints = t1;
//     _.color = t2;
//     _.selectedColor = t3;
//     _.disabledColor = t4;
//     _.fillColor = t5;
//     _.focusColor = t6;
//     _.highlightColor = t7;
//     _.splashColor = t8;
//     _.hoverColor = t9;
//     _.borderColor = t10;
//     _.selectedBorderColor = t11;
//     _.disabledBorderColor = t12;
//     _.borderWidth = t13;
//     _.borderRadius = t14;
//   },
