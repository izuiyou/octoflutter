import {Duration} from '@octoflutter/dartsdk'
import {Decoration} from '../painting/decoration'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'

export class TooltipThemeData extends N.TooltipThemeData {
  constructor(args?: {
    height?: number
    padding?: EdgeInsetsGeometry
    margin?: EdgeInsetsGeometry
    verticalOffset?: number
    preferBelow?: boolean
    excludeFromSemantics?: boolean
    decoration?: Decoration
    textStyle?: TextStyle
    waitDuration?: Duration
    showDuration?: Duration
  }) {
    super(
      args?.height,
      args?.padding,
      args?.margin,
      args?.verticalOffset,
      args?.preferBelow,
      args?.excludeFromSemantics,
      args?.decoration,
      args?.textStyle,
      args?.waitDuration,
      args?.showDuration
    )
  }
}

// TooltipThemeData: function TooltipThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//     var _ = this;
//     _.height = t0;
//     _.padding = t1;
//     _.margin = t2;
//     _.verticalOffset = t3;
//     _.preferBelow = t4;
//     _.excludeFromSemantics = t5;
//     _.decoration = t6;
//     _.textStyle = t7;
//     _.waitDuration = t8;
//     _.showDuration = t9;
//   },
