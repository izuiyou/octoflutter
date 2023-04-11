import {Color} from '@octoflutter/dartsdk'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'

export class MaterialBannerThemeData extends N.MaterialBannerThemeData {
  constructor(args?: {
    backgroundColor?: Color
    contentTextStyle?: TextStyle
    padding?: EdgeInsetsGeometry
    leadingPadding?: EdgeInsetsGeometry
  }) {
    super(
      args?.backgroundColor,
      args?.contentTextStyle,
      args?.padding,
      args?.leadingPadding
    )
  }
}

// MaterialBannerThemeData: function MaterialBannerThemeData(t0, t1, t2, t3) {
//     var _ = this;
//     _.backgroundColor = t0;
//     _.contentTextStyle = t1;
//     _.padding = t2;
//     _.leadingPadding = t3;
//   },
