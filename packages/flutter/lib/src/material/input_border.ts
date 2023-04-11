import {Color, Radius} from '@octoflutter/dartsdk'
import {BorderSide, BorderStyle, ShapeBorder} from '../painting/borders'
import {BorderRadius} from '../painting/border_radius'

export abstract class InputBorder extends ShapeBorder {
  static none = N.octoInputBorderNone() as InputBorder
}

export class UnderlineInputBorder
  extends N.UnderlineInputBorder
  implements InputBorder
{
  constructor(args?: {borderSide?: BorderSide; borderRadius?: BorderRadius}) {
    super(
      args?.borderRadius ??
        BorderRadius.only({
          topLeft: Radius.circular(4),
          topRight: Radius.circular(4),
        }),
      args?.borderSide ??
        new BorderSide({
          color: new Color(0xff000000),
          width: 1,
          style: BorderStyle.solid,
        })
    )
  }
}

// UnderlineInputBorder: function UnderlineInputBorder(t0, t1) {
//     this.borderRadius = t0;
//     this.borderSide = t1;
//   },

export class OutlineInputBorder
  extends N.OutlineInputBorder
  implements InputBorder
{
  constructor(args?: {
    borderSide?: BorderSide
    borderRadius?: BorderRadius
    gapPadding?: number
  }) {
    super(
      args?.gapPadding ?? 4.0,
      args?.borderRadius ?? BorderRadius.all(Radius.circular(4)),
      args?.borderSide ??
        new BorderSide({
          color: new Color(0xff000000),
          width: 1,
          style: BorderStyle.solid,
        })
    )
  }
}

// OutlineInputBorder: function OutlineInputBorder(t0, t1, t2) {
//     this.gapPadding = t0;
//     this.borderRadius = t1;
//     this.borderSide = t2;
//   },
