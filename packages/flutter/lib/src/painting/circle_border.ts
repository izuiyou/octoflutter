import {BorderSide, OutlinedBorder} from './borders'

export class CircleBorder extends N.CircleBorder implements OutlinedBorder {
  constructor(args?: {side?: BorderSide}) {
    super(args?.side ?? BorderSide.none)
  }
}

// CircleBorder: function CircleBorder(t0) {
//     this.side = t0;
//   },
