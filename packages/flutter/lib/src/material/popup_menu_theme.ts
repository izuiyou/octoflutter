import {Color} from '@octoflutter/dartsdk'
import {ShapeBorder} from '../painting/borders'
import {TextStyle} from '../painting/text_style'

export class PopupMenuThemeData extends N.PopupMenuThemeData {
  constructor(args?: {
    color?: Color
    shape?: ShapeBorder
    elevation?: number
    textStyle?: TextStyle
    enableFeedback?: boolean
  }) {
    super(
      args?.color,
      args?.shape,
      args?.elevation,
      args?.textStyle,
      args?.enableFeedback
    )
  }
}

// PopupMenuThemeData: function PopupMenuThemeData(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.color = t0;
//     _.shape = t1;
//     _.elevation = t2;
//     _.textStyle = t3;
//     _.enableFeedback = t4;
//   },
