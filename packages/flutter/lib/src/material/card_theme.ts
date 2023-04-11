import {Clip, Color} from '@octoflutter/dartsdk'
import {ShapeBorder} from '../painting/borders'
import {EdgeInsetsGeometry} from '../painting/edge_insets'

export class CardTheme extends N.CardTheme {
  constructor(args?: {
    clipBehavior?: Clip
    color?: Color
    shadowColor?: Color
    elevation?: number
    margin?: EdgeInsetsGeometry
    shape?: ShapeBorder
  }) {
    super(
      args?.clipBehavior,
      args?.color,
      args?.shadowColor,
      args?.elevation,
      args?.margin,
      args?.shape
    )
  }
}

// CardTheme: function CardTheme(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.clipBehavior = t0;
//     _.color = t1;
//     _.shadowColor = t2;
//     _.elevation = t3;
//     _.margin = t4;
//     _.shape = t5;
//   },
