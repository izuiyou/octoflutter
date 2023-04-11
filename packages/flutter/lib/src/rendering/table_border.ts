import {BorderSide} from '../painting/borders'
import {BorderRadius} from '../painting/border_radius'

export class TableBorder extends N.TableBorder {
  constructor(args?: {
    top?: BorderSide
    right?: BorderSide
    bottom?: BorderSide
    left?: BorderSide
    horizontalInside?: BorderSide
    verticalInside?: BorderSide
    borderRadius?: BorderRadius
  }) {
    super(
      args?.top ?? BorderSide.none,
      args?.right ?? BorderSide.none,
      args?.bottom ?? BorderSide.none,
      args?.left ?? BorderSide.none,
      args?.horizontalInside ?? BorderSide.none,
      args?.verticalInside ?? BorderSide.none,
      args?.borderRadius ?? BorderRadius.zero
    )
  }
}

// TableBorder: function TableBorder(t0, t1, t2, t3, t4, t5, t6) {
//     var _ = this;
//     _.top0 = t0;
//     _.right = t1;
//     _.bottom = t2;
//     _.left0 = t3;
//     _.horizontalInside = t4;
//     _.verticalInside = t5;
//     _.borderRadius = t6;
//   },
