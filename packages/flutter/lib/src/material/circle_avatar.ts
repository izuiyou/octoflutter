import {Color} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {Widget} from '../widgets/framework'
import {ImageProvider} from '../painting/image_provider'
import {ImageErrorListener} from '../painting/image_stream'

export class CircleAvatar extends N.CircleAvatar {
  constructor(args?: {
    key?: Key
    child?: Widget
    backgroundColor?: Color
    backgroundImage?: ImageProvider
    foregroundImage?: ImageProvider
    onBackgroundImageError?: ImageErrorListener
    onForegroundImageError?: ImageErrorListener
    foregroundColor?: Color
    radius?: number
    minRadius?: number
    maxRadius?: number
  }) {
    super(
      args?.child,
      args?.backgroundColor,
      args?.foregroundColor,
      args?.backgroundImage,
      args?.foregroundImage,
      args?.onBackgroundImageError,
      args?.onForegroundImageError,
      args?.radius,
      args?.minRadius,
      args?.maxRadius,
      args?.key?.[octoKey]
    )
  }
}

// CircleAvatar: function CircleAvatar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) {
//     var _ = this;
//     _.child = t0;
//     _.backgroundColor = t1;
//     _.foregroundColor = t2;
//     _.backgroundImage = t3;
//     _.foregroundImage = t4;
//     _.onBackgroundImageError = t5;
//     _.onForegroundImageError = t6;
//     _.radius = t7;
//     _.minRadius = t8;
//     _.maxRadius = t9;
//     _.key0 = t10;
//   },
