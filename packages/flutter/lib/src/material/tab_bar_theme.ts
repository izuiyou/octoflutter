import {Color} from '@octoflutter/dartsdk'
import {Decoration} from '../painting/decoration'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'

export class TabBarTheme extends N.TabBarTheme {
  constructor(args?: {
    indicator?: Decoration
    indicatorSize?: any
    labelColor?: Color
    labelPadding?: EdgeInsetsGeometry
    labelStyle?: TextStyle
    unselectedLabelColor?: Color
    unselectedLabelStyle?: Color
  }) {
    super(
      args?.indicator,
      args?.indicatorSize,
      args?.labelColor,
      args?.labelPadding,
      args?.labelStyle,
      args?.unselectedLabelColor,
      args?.unselectedLabelStyle
    )
  }
}

// TabBarTheme: function TabBarTheme(t0, t1, t2, t3, t4, t5, t6) {
//     var _ = this;
//     _.indicator = t0;
//     _.indicatorSize = t1;
//     _.labelColor = t2;
//     _.labelPadding = t3;
//     _.labelStyle = t4;
//     _.unselectedLabelColor = t5;
//     _.unselectedLabelStyle = t6;
//   },
