import {Color} from '@octoflutter/dartsdk'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {BottomNavigationBarItem} from '../widgets/bottom_navgation_bar_item'
import {IconThemeData} from '../widgets/icon_theme_data'
import {TextStyle} from '../painting/text_style'

export enum BottomNavigationBarType {
  fixed = C.BottomNavigationBarType_0,
  shifting = C.BottomNavigationBarType_1,
}

export enum BottomNavigationBarLandscapeLayout {
  spread = C.BottomNavigationBarLandscapeLayout_0,
  centered = C.BottomNavigationBarLandscapeLayout_1,
  linear = C.BottomNavigationBarLandscapeLayout_2,
}

export class BottomNavigationBar extends N.BottomNavigationBar {
  constructor(args: {
    key?: Key
    items: Array<BottomNavigationBarItem>
    onTap?: ValueChanged<number>
    currentIndex?: number
    elevation?: number
    type?: BottomNavigationBarType
    fixedColor?: Color
    backgroundColor?: Color
    iconSize?: number
    selectedItemColor?: Color
    unselectedItemColor?: Color
    selectedIconTheme?: IconThemeData
    unselectedIconTheme?: IconThemeData
    selectedFontSize?: number
    unselectedFontSize?: number
    selectedLabelStyle?: TextStyle
    unselectedLabelStyle?: TextStyle
    showSelectedLabels?: boolean
    showUnselectedLabels?: boolean
    mouseCursor?: any
    enableFeedback?: boolean
    landscapeLayout?: BottomNavigationBarLandscapeLayout
  }) {
    super(
      args.items,
      args.onTap,
      args.currentIndex ?? 0,
      args.elevation,
      args.type,
      args.backgroundColor,
      args.iconSize ?? 24.0,
      args.selectedItemColor ?? args.fixedColor,
      args.unselectedItemColor,
      args.selectedIconTheme,
      args.unselectedIconTheme,
      args.selectedLabelStyle,
      args.unselectedLabelStyle,
      args.selectedFontSize ?? 14.0,
      args.unselectedFontSize ?? 12.0,
      args.showUnselectedLabels,
      args.showSelectedLabels,
      args.mouseCursor,
      args.enableFeedback,
      args.landscapeLayout,
      args.key?.[octoKey]
    )
  }
}

// BottomNavigationBar: function BottomNavigationBar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20) {
//   var _ = this;
//   _.items = t0;
//   _.onTap = t1;
//   _.currentIndex = t2;
//   _.elevation = t3;
//   _.type0 = t4;
//   _.backgroundColor = t5;
//   _.iconSize = t6;
//   _.selectedItemColor = t7;
//   _.unselectedItemColor = t8;
//   _.selectedIconTheme = t9;
//   _.unselectedIconTheme = t10;
//   _.selectedLabelStyle = t11;
//   _.unselectedLabelStyle = t12;
//   _.selectedFontSize = t13;
//   _.unselectedFontSize = t14;
//   _.showUnselectedLabels = t15;
//   _.showSelectedLabels = t16;
//   _.mouseCursor = t17;
//   _.enableFeedback = t18;
//   _.landscapeLayout = t19;
//   _.key0 = t20;
// },
