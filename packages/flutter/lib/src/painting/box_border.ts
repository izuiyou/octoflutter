import {Color} from '@octoflutter/dartsdk'
import {BorderSide, BorderStyle, ShapeBorder} from './borders'

export abstract class BoxBorder extends ShapeBorder {}

export class Border extends N.Border implements BoxBorder {
  constructor(args?: {
    top?: BorderSide
    right?: BorderSide
    bottom?: BorderSide
    left?: BorderSide
  }) {
    super(
      args?.top ?? BorderSide.none,
      args?.right ?? BorderSide.none,
      args?.bottom ?? BorderSide.none,
      args?.left ?? BorderSide.none
    )
  }

  static fromBorderSide(side: BorderSide) {
    return new Border({top: side, right: side, bottom: side, left: side})
  }

  static symmetric(args?: {vertical?: BorderSide; horizontal?: BorderSide}) {
    const vb = args?.vertical ?? BorderSide.none
    const hb = args?.vertical ?? BorderSide.none
    return new Border({top: hb, bottom: hb, left: vb, right: vb})
  }

  static all(args?: {color?: Color; width?: number; style?: BorderStyle}) {
    const side = new BorderSide({
      color: args?.color,
      width: args?.width,
      style: args?.style,
    })
    return Border.fromBorderSide(side)
  }
}

export class BorderDirectional
  extends N.BorderDirectional
  implements BoxBorder
{
  constructor(args?: {
    top?: BorderSide
    start?: BorderSide
    end?: BorderSide
    bottom?: BorderSide
  }) {
    super(
      args?.top ?? BorderSide.none,
      args?.start ?? BorderSide.none,
      args?.end ?? BorderSide.none,
      args?.bottom ?? BorderSide.none
    )
  }
}

export enum BoxShape {
  rectangle = C.BoxShape_0,
  circle = C.BoxShape_1,
}
