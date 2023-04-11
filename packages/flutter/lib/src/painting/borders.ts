import {Color, Paint, PaintingStyle} from '@octoflutter/dartsdk'
import {Colors} from '../material/colors'

export enum BorderStyle {
  none = C.BorderStyle_0,
  solid = C.BorderStyle_1,
}

export class BorderSide extends N.BorderSide {
  public readonly color: Color
  public readonly width: number
  public readonly style: BorderStyle

  constructor(args?: {color?: Color; width?: number; style?: BorderStyle}) {
    super(
      args?.color ?? Colors.black,
      args?.width ?? 1.0,
      args?.style ?? BorderStyle.none
    )
    this.color = args?.color ?? Colors.black
    this.width = args?.width ?? 1.0
    this.style = args?.style ?? BorderStyle.none
  }

  static none = new BorderSide({
    width: 0,
    style: BorderStyle.none,
    color: Colors.transparent,
  })

  toPaint = (): Paint => {
    const p = new Paint()
    p.color = this.color
    p.strokeWidth = this.width
    p.style = PaintingStyle.stroke
    return p
  }
}

export abstract class ShapeBorder {}

export abstract class OutlinedBorder extends ShapeBorder {}
