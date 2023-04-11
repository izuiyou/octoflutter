import {MaterialTapTargetSize} from './theme_data'

export class SwitchThemeData extends N.SwitchThemeData {
  constructor(args?: {
    thumbColor?: any
    trackColor?: any
    materialTapTargetSize?: MaterialTapTargetSize
    mouseCursor?: any
    overlayColor?: any
    splashRadius?: number
  }) {
    super(
      args?.thumbColor,
      args?.trackColor,
      args?.materialTapTargetSize,
      args?.mouseCursor,
      args?.overlayColor,
      args?.splashRadius
    )
  }
}

// SwitchThemeData: function SwitchThemeData(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.thumbColor = t0;
//     _.trackColor = t1;
//     _.materialTapTargetSize = t2;
//     _.mouseCursor = t3;
//     _.overlayColor = t4;
//     _.splashRadius = t5;
//   },
