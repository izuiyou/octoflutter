import {Color} from '@octoflutter/dartsdk'
import {ShapeBorder} from '../painting/borders'
import {EdgeInsetsGeometry} from '../painting/edge_insets'

export class ListTileThemeData extends N.ListTileThemeData {
  constructor(args?: {
    dense?: boolean
    shape?: ShapeBorder
    style?: any
    selectedColor?: Color
    iconColor?: Color
    textColor?: Color
    contentPadding?: EdgeInsetsGeometry
    tileColor?: Color
    selectedTileColor?: Color
    horizontalTitleGap?: number
    minVerticalPadding?: number
    minLeadingWidth?: number
    enableFeedback?: boolean
  }) {
    super(
      args?.dense,
      args?.shape,
      args?.style,
      args?.selectedColor,
      args?.iconColor,
      args?.textColor,
      args?.contentPadding,
      args?.tileColor,
      args?.selectedTileColor,
      args?.horizontalTitleGap,
      args?.minVerticalPadding,
      args?.minLeadingWidth,
      args?.enableFeedback
    )
  }
}
//     ListTileThemeData: function ListTileThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12) {
//       var _ = this;
//       _.dense = t0;
//       _.shape = t1;
//       _.style = t2;
//       _.selectedColor = t3;
//       _.iconColor = t4;
//       _.textColor = t5;
//       _.contentPadding = t6;
//       _.tileColor = t7;
//       _.selectedTileColor = t8;
//       _.horizontalTitleGap = t9;
//       _.minVerticalPadding = t10;
//       _.minLeadingWidth = t11;
//       _.enableFeedback = t12;
//     },
