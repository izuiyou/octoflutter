import {Color} from '@octoflutter/dartsdk'
import {AlignmentGeometry} from '../painting/alignment'
import {ShapeBorder} from '../painting/borders'
import {TextStyle} from '../painting/text_style'

export class DialogTheme extends N.DialogTheme {
  constructor(args?: {
    backgroundColor?: Color
    elevation?: number
    shape?: ShapeBorder
    alignment?: AlignmentGeometry
    titleTextStyle?: TextStyle
    contentTextStyle?: TextStyle
  }) {
    super(
      args?.backgroundColor,
      args?.elevation,
      args?.shape,
      args?.alignment,
      args?.titleTextStyle,
      args?.contentTextStyle
    )
  }
}

// DialogTheme: function DialogTheme(t0, t1, t2, t3, t4, t5) {
//   var _ = this;
//   _.backgroundColor = t0;
//   _.elevation = t1;
//   _.shape = t2;
//   _.alignment = t3;
//   _.titleTextStyle = t4;
//   _.contentTextStyle = t5;
// },
