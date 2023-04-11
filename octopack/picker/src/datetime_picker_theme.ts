import {Color} from '@octoflutter/dartsdk'
import {Colors, TextStyle} from '@octoflutter/flutter'

N.octoLoadPicker()

export class DatePickerTheme extends PICKER.DatePickerTheme {
  constructor(args?: {
    cancelStyle?: TextStyle
    doneStyle?: TextStyle
    itemStyle?: TextStyle
    backgroundColor?: Color
    headerColor?: Color
    containerHeight?: number
    titleHeight?: number
    itemHeight?: number
  }) {
    super(
      args?.cancelStyle ??
        new TextStyle({
          fontSize: 16,
          color: new Color(0x8a000000),
        }),
      args?.doneStyle ??
        new TextStyle({
          fontSize: 16,
          color: new Color(0xff2196f3),
        }),
      args?.itemStyle ??
        new TextStyle({
          fontSize: 18,
          color: new Color(0xff000046),
        }),
      args?.backgroundColor ?? Colors.white,
      args?.headerColor ?? Colors.white,
      args?.containerHeight ?? 210.0,
      args?.titleHeight ?? 44.0,
      args?.itemHeight ?? 36.0
    )
  }
}
// DatePickerTheme: function DatePickerTheme(t0, t1, t2, t3, t4, t5, t6, t7) {
//     var _ = this;
//     _.cancelStyle = t0;
//     _.doneStyle = t1;
//     _.itemStyle = t2;
//     _.backgroundColor = t3;
//     _.headerColor = t4;
//     _.containerHeight = t5;
//     _.titleHeight = t6;
//     _.itemHeight = t7;
//   },
