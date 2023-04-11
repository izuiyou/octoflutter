import {BorderSide} from '../painting/borders'
import {EdgeInsets} from '../painting/edge_insets'
import {Colors} from './colors'

export class UnderlineTabIndicator extends N.UnderlineTabIndicator {
  constructor(args?: {borderSide?: BorderSide; insets?: EdgeInsets}) {
    super(
      args?.borderSide ??
        new BorderSide({
          width: 1.0,
          color: Colors.white,
        }),
      args?.insets ?? EdgeInsets.zero
    )
  }
}

// UnderlineTabIndicator: function UnderlineTabIndicator(t0, t1) {
//     this.borderSide = t0;
//     this.insets = t1;
//   },
