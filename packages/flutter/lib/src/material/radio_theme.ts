import {MaterialTapTargetSize, VisualDensity} from './theme_data'

export class RadioThemeData extends N.RadioThemeData {
  constructor(args?: {
    mouseCursor?: any
    fillColor?: any
    overlayColor?: any
    splashRadius?: number
    materialTapTargetSize?: MaterialTapTargetSize
    visualDensity?: VisualDensity
  }) {
    super(
      args?.mouseCursor,
      args?.fillColor,
      args?.overlayColor,
      args?.splashRadius,
      args?.materialTapTargetSize,
      args?.visualDensity
    )
  }
}

// RadioThemeData: function RadioThemeData(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.mouseCursor = t0;
//     _.fillColor = t1;
//     _.overlayColor = t2;
//     _.splashRadius = t3;
//     _.materialTapTargetSize = t4;
//     _.visualDensity = t5;
//   },
