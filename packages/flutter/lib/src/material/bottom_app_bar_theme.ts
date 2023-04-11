import {Color} from '@octoflutter/dartsdk'

export class BottomAppBarTheme extends N.BottomAppBarTheme {
  constructor(args?: {color?: Color; elevation?: number; shape?: any}) {
    super(args?.color, args?.elevation, args?.shape)
  }
}

// BottomAppBarTheme: function BottomAppBarTheme(t0, t1, t2) {
//     this.color = t0;
//     this.elevation = t1;
//     this.shape = t2;
//   },
