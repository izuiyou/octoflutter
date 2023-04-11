import {Color} from '@octoflutter/dartsdk'

export class IconThemeData extends N.IconThemeData {
  constructor(args?: {color?: Color; opacity?: number; size?: number}) {
    super(args?.color, args?.opacity, args?.size)
  }
}

// IconThemeData: function IconThemeData(t0, t1, t2) {
//     this.color = t0;
//     this._icon_theme_data0$_opacity = t1;
//     this.size = t2;
//   },
