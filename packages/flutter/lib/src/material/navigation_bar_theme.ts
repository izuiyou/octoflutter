import {Color} from '@octoflutter/dartsdk'

export class NavigationBarThemeData extends N.NavigationBarThemeData {
  constructor(args?: {
    height?: number
    backgroundColor?: Color
    indicatorColor?: Color
    labelTextStyle?: any
    iconTheme?: any
    labelBehavior?: any
  }) {
    super(
      args?.height,
      args?.backgroundColor,
      args?.indicatorColor,
      args?.labelTextStyle,
      args?.iconTheme,
      args?.labelBehavior
    )
  }
}

//     NavigationBarThemeData: function NavigationBarThemeData(t0, t1, t2, t3, t4, t5) {
//       var _ = this;
//       _.height = t0;
//       _.backgroundColor = t1;
//       _.indicatorColor = t2;
//       _.labelTextStyle = t3;
//       _.iconTheme = t4;
//       _.labelBehavior = t5;
//     },
