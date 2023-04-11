import {TargetPlatform} from '../foundation/platform'
import {TextTheme} from './text_theme'

export class Typography extends N.Typography {
  constructor(args: {
    black: TextTheme
    white: TextTheme
    englishLike: TextTheme
    dense: TextTheme
    tall: TextTheme
  }) {
    super(args?.black, args?.white, args?.englishLike, args?.dense, args?.tall)
  }

  static material2018 = (args?: {
    platform?: TargetPlatform
    black?: TextTheme
    white?: TextTheme
    englishLike?: TextTheme
    dense?: TextTheme
    tall?: TextTheme
  }): Typography => {
    return N.octoTypographyMaterial2018(
      args?.platform,
      args?.black,
      args?.white,
      args?.englishLike,
      args?.dense,
      args?.tall
    ) as Typography
  }
}

// Typography: function Typography(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.black = t0;
//     _.white = t1;
//     _.englishLike = t2;
//     _.dense = t3;
//     _.tall = t4;
//   },
