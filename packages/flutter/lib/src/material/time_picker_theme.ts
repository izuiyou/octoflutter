import {Color} from '@octoflutter/dartsdk'
import {BorderSide, ShapeBorder} from '../painting/borders'
import {TextStyle} from '../painting/text_style'
import {InputDecorationTheme} from './input_decorator'

export class TimePickerThemeData extends N.TimePickerThemeData {
  constructor(args?: {
    backgroundColor?: Color
    hourMinuteTextColor?: Color
    hourMinuteColor?: Color
    dayPeriodTextColor?: Color
    dayPeriodColor?: Color
    dialHandColor?: Color
    dialBackgroundColor?: Color
    dialTextColor?: Color
    entryModeIconColor?: Color
    hourMinuteTextStyle?: TextStyle
    dayPeriodTextStyle?: TextStyle
    helpTextStyle?: TextStyle
    shape?: ShapeBorder
    hourMinuteShape?: ShapeBorder
    dayPeriodShape?: any
    dayPeriodBorderSide?: BorderSide
    inputDecorationTheme?: InputDecorationTheme
  }) {
    super(
      args?.backgroundColor,
      args?.hourMinuteTextColor,
      args?.hourMinuteColor,
      args?.dayPeriodTextColor,
      args?.dayPeriodColor,
      args?.dialHandColor,
      args?.dialBackgroundColor,
      args?.dialTextColor,
      args?.entryModeIconColor,
      args?.hourMinuteTextStyle,
      args?.dayPeriodTextStyle,
      args?.helpTextStyle,
      args?.shape,
      args?.hourMinuteShape,
      args?.dayPeriodShape,
      args?.dayPeriodBorderSide,
      args?.inputDecorationTheme
    )
  }
}

// TimePickerThemeData: function TimePickerThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16) {
//     var _ = this;
//     _.backgroundColor = t0;
//     _.hourMinuteTextColor = t1;
//     _.hourMinuteColor = t2;
//     _.dayPeriodTextColor = t3;
//     _.dayPeriodColor = t4;
//     _.dialHandColor = t5;
//     _.dialBackgroundColor = t6;
//     _.dialTextColor = t7;
//     _.entryModeIconColor = t8;
//     _.hourMinuteTextStyle = t9;
//     _.dayPeriodTextStyle = t10;
//     _.helpTextStyle = t11;
//     _.shape = t12;
//     _.hourMinuteShape = t13;
//     _.dayPeriodShape = t14;
//     _.dayPeriodBorderSide = t15;
//     _.inputDecorationTheme = t16;
//   },
