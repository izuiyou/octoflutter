import {Brightness, Color} from '@octoflutter/dartsdk'
import {ShapeBorder} from '../painting/borders'
import {TextStyle} from '../painting/text_style'
import {SystemUiOverlayStyle} from '../services/system_chrome'
import {IconThemeData} from '../widgets/icon_theme_data'
import {TextTheme} from './text_theme'

export class AppBarTheme extends N.AppBarTheme {
  constructor(args?: {
    color?: Color
    backgroundColor?: Color
    foregroundColor?: Color
    elevation?: number
    shadowColor?: Color
    shape?: ShapeBorder
    iconTheme?: IconThemeData
    actionsIconTheme?: IconThemeData
    centerTitle?: boolean
    titleSpacing?: number
    toolbarHeight?: number
    toolbarTextStyle?: TextStyle
    titleTextStyle?: TextStyle
    systemOverlayStyle?: SystemUiOverlayStyle
  }) {
    super(
      null,
      args?.backgroundColor ?? args?.color,
      args?.foregroundColor,
      args?.elevation,
      args?.shadowColor,
      args?.shape,
      args?.iconTheme,
      args?.actionsIconTheme,
      null,
      args?.centerTitle,
      args?.titleSpacing,
      args?.toolbarHeight,
      args?.toolbarTextStyle,
      args?.titleTextStyle,
      args?.systemOverlayStyle,
      false
    )
  }
}

// AppBarTheme: function AppBarTheme(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15) {
//   var _ = this;
//   _.brightness = t0;
//   _.backgroundColor = t1;
//   _.foregroundColor = t2;
//   _.elevation = t3;
//   _.shadowColor = t4;
//   _.shape = t5;
//   _.iconTheme = t6;
//   _.actionsIconTheme = t7;
//   _.textTheme = t8;
//   _.centerTitle = t9;
//   _.titleSpacing = t10;
//   _.toolbarHeight = t11;
//   _.toolbarTextStyle = t12;
//   _.titleTextStyle = t13;
//   _.systemOverlayStyle = t14;
//   _.backwardsCompatibility = t15;
// },
