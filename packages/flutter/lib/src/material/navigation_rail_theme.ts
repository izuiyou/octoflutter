import {Color} from '@octoflutter/dartsdk'
import {TextStyle} from '../painting/text_style'

export class NavigationRailThemeData extends N.NavigationRailThemeData {
  constructor(args?: {
    backgroundColor?: Color
    elevation?: number
    unselectedLabelTextStyle?: TextStyle
    selectedLabelTextStyle?: TextStyle
    unselectedIconTheme?: any
    selectedIconTheme?: any
    groupAlignment?: number
    labelType?: any
    useIndicator?: boolean
    indicatorColor?: Color
  }) {
    super(
      args?.backgroundColor,
      args?.elevation,
      args?.unselectedLabelTextStyle,
      args?.selectedLabelTextStyle,
      args?.unselectedIconTheme,
      args?.selectedIconTheme,
      args?.groupAlignment,
      args?.labelType,
      args?.useIndicator,
      args?.indicatorColor
    )
  }
}

// NavigationRailThemeData: function NavigationRailThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//   var _ = this;
//   _.backgroundColor = t0;
//   _.elevation = t1;
//   _.unselectedLabelTextStyle = t2;
//   _.selectedLabelTextStyle = t3;
//   _.unselectedIconTheme = t4;
//   _.selectedIconTheme = t5;
//   _.groupAlignment = t6;
//   _.labelType = t7;
//   _.useIndicator = t8;
//   _.indicatorColor = t9;
// },
