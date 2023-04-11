import {Color} from '@octoflutter/dartsdk'

export class DividerThemeData extends N.DividerThemeData {
  constructor(args?: {
    color?: Color
    space?: number
    thickness?: number
    indent?: number
    endIndent?: number
  }) {
    super(
      args?.color,
      args?.space,
      args?.thickness,
      args?.indent,
      args?.endIndent
    )
  }
}

// DividerThemeData: function DividerThemeData(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.color = t0;
//     _.space = t1;
//     _.thickness = t2;
//     _.indent = t3;
//     _.endIndent = t4;
//   },
