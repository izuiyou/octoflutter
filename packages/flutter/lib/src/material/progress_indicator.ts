import {Color} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {Animation} from '../animation/animation'

export class LinearProgressIndicator extends N.LinearProgressIndicator {
  constructor(args?: {
    key?: Key
    value?: number
    backgroundColor?: Color
    color?: Color
    valueColor?: Animation<Color>
    minHeight?: number
    semanticsLabel?: string
    semanticsValue?: string
  }) {
    super(
      args?.minHeight,
      args?.value,
      args?.backgroundColor,
      args?.color,
      args?.valueColor,
      args?.semanticsLabel,
      args?.semanticsValue,
      args?.key?.[octoKey]
    )
  }
}
// LinearProgressIndicator: function LinearProgressIndicator(t0, t1, t2, t3, t4, t5, t6, t7) {
//     var _ = this;
//     _.minHeight = t0;
//     _.value = t1;
//     _.backgroundColor = t2;
//     _.color = t3;
//     _.valueColor = t4;
//     _.semanticsLabel = t5;
//     _.semanticsValue = t6;
//     _.key = t7;
//   },

export class CircularProgressIndicator extends N.CircularProgressIndicator {
  constructor(args?: {
    key?: Key
    value?: number
    backgroundColor?: Color
    color?: Color
    valueColor?: Animation<Color>
    strokeWidth?: number
    semanticsLabel?: string
    semanticsValue?: string
  }) {
    super(
      args?.strokeWidth ?? 4.0,
      args?.value,
      args?.backgroundColor,
      args?.color,
      args?.valueColor,
      args?.semanticsLabel,
      args?.semanticsValue,
      args?.key?.[octoKey]
    )
  }
}

// CircularProgressIndicator: function CircularProgressIndicator(t0, t1, t2, t3, t4, t5, t6, t7) {
//     var _ = this;
//     _.strokeWidth = t0;
//     _.value = t1;
//     _.backgroundColor = t2;
//     _.color = t3;
//     _.valueColor = t4;
//     _.semanticsLabel = t5;
//     _.semanticsValue = t6;
//     _.key = t7;
//   },
