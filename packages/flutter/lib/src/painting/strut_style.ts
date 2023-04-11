import {
  FontStyle,
  FontWeight,
  TextLeadingDistribution,
} from '@octoflutter/dartsdk'

export class StrutStyle extends N.StrutStyle {
  constructor(args?: {
    fontFamily?: string
    fontFamilyFallback?: Array<string>
    fontSize?: number
    height?: number
    leadingDistribution?: TextLeadingDistribution
    leading?: number
    fontWeight?: FontWeight
    fontStyle?: FontStyle
    forceStrutHeight?: boolean
    debugLabel?: string
    package?: string
  }) {
    super(
      args?.fontFamily,
      args?.fontFamilyFallback,
      args?.package,
      args?.fontSize,
      args?.height,
      args?.fontWeight,
      args?.fontStyle,
      args?.leading,
      args?.forceStrutHeight,
      args?.debugLabel
    )
  }
}

// StrutStyle: function StrutStyle(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//     var _ = this;
//     _.fontFamily = t0;
//     _._strut_style0$_fontFamilyFallback = t1;
//     _._strut_style0$_package = t2;
//     _.fontSize = t3;
//     _.height = t4;
//     _.fontWeight = t5;
//     _.fontStyle = t6;
//     _.leading = t7;
//     _.forceStrutHeight = t8;
//     _.debugLabel = t9;
//   },
