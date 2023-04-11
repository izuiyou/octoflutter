import {Brightness, Color} from '@octoflutter/dartsdk'

export class NoDefaultCupertinoThemeData extends N.NoDefaultCupertinoThemeData {
  constructor(args?: {
    brightness?: Brightness
    primaryColor?: Color
    primaryContrastingColor?: Color
    textTheme?: any
    barBackgroundColor?: Color
    scaffoldBackgroundColor?: Color
  }) {
    super(
      args?.brightness,
      args?.primaryColor,
      args?.primaryContrastingColor,
      args?.textTheme,
      args?.barBackgroundColor,
      args?.scaffoldBackgroundColor
    )
  }
}

//    NoDefaultCupertinoThemeData: function NoDefaultCupertinoThemeData(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.brightness = t0;
//     _.primaryColor = t1;
//     _.primaryContrastingColor = t2;
//     _.textTheme = t3;
//     _.barBackgroundColor = t4;
//     _.scaffoldBackgroundColor = t5;
//   },
