import {Color} from '@octoflutter/dartsdk'
import {ShapeBorder} from '../painting/borders'
import {TextStyle} from '../painting/text_style'

export class SnackBarThemeData extends N.SnackBarThemeData {
  constructor(args?: {
    backgroundColor?: Color
    actionTextColor?: Color
    disabledActionTextColor?: Color
    contentTextStyle?: TextStyle
    elevation?: number
    shape?: ShapeBorder
    behavior?: any
  }) {
    super(
      args?.backgroundColor,
      args?.actionTextColor,
      args?.disabledActionTextColor,
      args?.contentTextStyle,
      args?.elevation,
      args?.shape,
      args?.behavior
    )
  }
}

// SnackBarThemeData: function SnackBarThemeData(t0, t1, t2, t3, t4, t5, t6) {
//     var _ = this;
//     _.backgroundColor = t0;
//     _.actionTextColor = t1;
//     _.disabledActionTextColor = t2;
//     _.contentTextStyle = t3;
//     _.elevation = t4;
//     _.shape = t5;
//     _.behavior = t6;
//   },

export enum SnackBarBehavior {
  fixed = C.SnackBarBehavior_0,
  floating = C.SnackBarBehavior_1,
}
