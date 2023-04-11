import {Color} from '@octoflutter/dartsdk'
import {TextStyle} from '../painting/text_style'
import {BottomNavigationBarLandscapeLayout} from './bottom_navigation_bar'

export class BottomNavigationBarThemeData extends N.BottomNavigationBarThemeData {
  constructor(args?: {
    backgroundColor?: Color
    elevation?: number
    selectedIconTheme?: any
    unselectedIconTheme?: any
    selectedItemColor?: Color
    unselectedItemColor?: Color
    selectedLabelStyle?: TextStyle
    unselectedLabelStyle?: TextStyle
    showSelectedLabels?: boolean
    showUnselectedLabels?: boolean
    type?: any
    enableFeedback?: boolean
    landscapeLayout?: BottomNavigationBarLandscapeLayout
  }) {
    super(
      args?.backgroundColor,
      args?.elevation,
      args?.selectedIconTheme,
      args?.unselectedIconTheme,
      args?.selectedItemColor,
      args?.unselectedItemColor,
      args?.selectedLabelStyle,
      args?.unselectedLabelStyle,
      args?.showSelectedLabels,
      args?.showUnselectedLabels,
      args?.type,
      args?.enableFeedback,
      args?.landscapeLayout ?? BottomNavigationBarLandscapeLayout.centered
    )
  }
}

// BottomNavigationBarThemeData: function BottomNavigationBarThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12) {
//   var _ = this;
//   _.backgroundColor = t0;
//   _.elevation = t1;
//   _.selectedIconTheme = t2;
//   _.unselectedIconTheme = t3;
//   _.selectedItemColor = t4;
//   _.unselectedItemColor = t5;
//   _.selectedLabelStyle = t6;
//   _.unselectedLabelStyle = t7;
//   _.showSelectedLabels = t8;
//   _.showUnselectedLabels = t9;
//   _.type0 = t10;
//   _.enableFeedback = t11;
//   _.landscapeLayout = t12;
// },
