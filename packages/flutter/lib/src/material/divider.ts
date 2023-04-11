import {Color} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'

export class Divider extends N.Divider {
  constructor(args?: {
    key?: Key
    height?: number
    thickness?: number
    indent?: number
    endIndent?: number
    color?: Color
  }) {
    super(
      args?.height,
      args?.thickness,
      args?.indent,
      args?.endIndent,
      args?.color,
      args?.key?.[octoKey]
    )
  }
}

// Divider: function Divider(t0, t1, t2, t3, t4, t5) {
//   var _ = this;
//   _.height = t0;
//   _.thickness = t1;
//   _.indent = t2;
//   _.endIndent = t3;
//   _.color = t4;
//   _.key0 = t5;
// },

export class VerticalDivider extends N.VerticalDivider {
  constructor(args?: {
    key?: Key
    width?: number
    thickness?: number
    indent?: number
    endIndent?: number
    color?: Color
  }) {
    super(
      args?.width,
      args?.thickness,
      args?.indent,
      args?.endIndent,
      args?.color,
      args?.key?.[octoKey]
    )
  }
}

// VerticalDivider: function VerticalDivider(t0, t1, t2, t3, t4, t5) {
//   var _ = this;
//   _.width = t0;
//   _.thickness = t1;
//   _.indent = t2;
//   _.endIndent = t3;
//   _.color = t4;
//   _.key0 = t5;
// },
