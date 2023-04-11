import {Color} from '@octoflutter/dartsdk'
export class ProgressIndicatorThemeData extends N.ProgressIndicatorThemeData {
  constructor(args?: {
    color?: Color
    linearTrackColor?: Color
    linearMinHeight?: number
    circularTrackColor?: Color
    refreshBackgroundColor?: Color
  }) {
    super(
      args?.color,
      args?.linearTrackColor,
      args?.linearMinHeight,
      args?.circularTrackColor,
      args?.refreshBackgroundColor
    )
  }
}

//     ProgressIndicatorThemeData: function ProgressIndicatorThemeData(t0, t1, t2, t3, t4) {
//       var _ = this;
//       _.color = t0;
//       _.linearTrackColor = t1;
//       _.linearMinHeight = t2;
//       _.circularTrackColor = t3;
//       _.refreshBackgroundColor = t4;
//     },
