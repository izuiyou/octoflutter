import {Color, TextDirection} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {IconData} from './icon_data'

export class Icon extends N.Icon {
  constructor(
    icon: IconData,
    args?: {
      key?: Key
      size?: number
      color?: Color
      semanticLabel?: string
      textDirection?: TextDirection
    }
  ) {
    super(
      icon,
      args?.size,
      args?.color,
      args?.semanticLabel,
      args?.textDirection,
      args?.key?.[octoKey]
    )
  }
}

// Icon: function Icon(t0, t1, t2, t3, t4, t5) {
//   var _ = this;
//   _.icon = t0;
//   _.size0 = t1;
//   _.color = t2;
//   _.semanticLabel = t3;
//   _.textDirection = t4;
//   _.key0 = t5;
// },
