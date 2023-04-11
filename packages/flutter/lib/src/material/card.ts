import {Clip, Color} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {ShapeBorder} from '../painting/borders'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {Widget} from '../widgets/framework'

export class Card extends N.Card {
  constructor(args?: {
    key?: Key
    color?: Color
    shadowColor?: Color
    elevation?: number
    shape?: ShapeBorder
    borderOnForeground?: boolean
    margin?: EdgeInsetsGeometry
    clipBehavior?: Clip
    child?: Widget
    semanticContainer?: boolean
  }) {
    super(
      args.color,
      args.shadowColor,
      args.elevation,
      args.shape,
      args.borderOnForeground ?? true,
      args.clipBehavior,
      args.margin,
      args.semanticContainer ?? true,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// Card: function Card(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//     var _ = this;
//     _.color = t0;
//     _.shadowColor = t1;
//     _.elevation = t2;
//     _.shape = t3;
//     _.borderOnForeground = t4;
//     _.clipBehavior = t5;
//     _.margin = t6;
//     _.semanticContainer = t7;
//     _.child = t8;
//     _.key0 = t9;
//   },
