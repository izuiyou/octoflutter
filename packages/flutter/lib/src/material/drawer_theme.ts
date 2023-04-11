import {Color} from '@octoflutter/dartsdk'
import {ShapeBorder} from '../painting/borders'

export class DrawerThemeData extends N.DrawerThemeData {
  constructor(args?: {
    backgroundColor?: Color
    scrimColor?: Color
    elevation?: number
    shape?: ShapeBorder
  }) {
    super(args?.backgroundColor, args?.scrimColor, args?.elevation, args?.shape)
  }
}

//     DrawerThemeData: function DrawerThemeData(t0, t1, t2, t3) {
//       var _ = this;
//       _.backgroundColor = t0;
//       _.scrimColor = t1;
//       _.elevation = t2;
//       _.shape = t3;
//     },
