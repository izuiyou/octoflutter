import {BorderSide} from '../painting/borders'
import {MaterialTapTargetSize, VisualDensity} from './theme_data'

export class CheckboxThemeData extends N.CheckboxThemeData {
  constructor(args?: {
    mouseCursor?: any
    fillColor?: any
    checkColor?: any
    overlayColor?: any
    splashRadius?: number
    materialTapTargetSize?: MaterialTapTargetSize
    visualDensity?: VisualDensity
    shape?: any
    side?: BorderSide
  }) {
    super(
      args?.mouseCursor,
      args?.fillColor,
      args?.checkColor,
      args?.overlayColor,
      args?.splashRadius,
      args?.materialTapTargetSize,
      args?.visualDensity,
      args?.shape,
      args?.side
    )
  }
}

// CheckboxThemeData: function CheckboxThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//     var _ = this;
//     _.mouseCursor = t0;
//     _.fillColor = t1;
//     _.checkColor = t2;
//     _.overlayColor = t3;
//     _.splashRadius = t4;
//     _.materialTapTargetSize = t5;
//     _.visualDensity = t6;
//     _.shape = t7;
//     _.side = t8;
//   },
