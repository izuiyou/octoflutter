import {
  Rect,
  VoidCallback,
  TextDirection,
  Path,
  Canvas,
  Offset,
  StrokeCap,
} from '@octoflutter/dartsdk'
import {
  AbsDecoration,
  BorderSide,
  EdgeInsets,
  Colors,
  BoxPainter,
  ImageConfiguration,
} from '@octoflutter/flutter'

export class UnderlineDecoration extends AbsDecoration {
  public readonly borderSide?: BorderSide
  public readonly insets?: EdgeInsets

  constructor(args?: {borderSide?: BorderSide; insets?: EdgeInsets}) {
    super()
    this.borderSide =
      args?.borderSide ??
      new BorderSide({
        width: 1.0,
        color: Colors.white,
      })
    this.insets = args?.insets ?? EdgeInsets.zero
  }

  _indicatorRectFor = (rect: Rect): Rect => {
    const indicator = this.insets.deflateRect(rect)
    return Rect.fromLTWH(
      indicator.left,
      indicator.bottom - this.borderSide.width,
      indicator.width,
      this.borderSide.width
    )
  }

  createBoxPainter(onChanged?: VoidCallback) {
    return new _UnderlinePainter(this, onChanged)
  }

  getClipPath(rect: Rect, textDirection: TextDirection): Path {
    const p = new Path()
    p.addRect(this._indicatorRectFor(rect))
    return p
  }
}

export class _UnderlinePainter extends BoxPainter {
  public readonly decoration: UnderlineDecoration
  public readonly onChanged?: VoidCallback
  constructor(decoration: UnderlineDecoration, onChanged?: VoidCallback) {
    super(onChanged)
    this.decoration = decoration
    this.onChanged = onChanged
  }

  paint(canvas: Canvas, offset: Offset, configuration: ImageConfiguration) {
    const rect = Rect.fromLTWH(
      offset.dx,
      offset.dy,
      configuration.size.width,
      configuration.size.height
    )
    const indicator = this.decoration
      ._indicatorRectFor(rect)
      .deflate(this.decoration.borderSide.width / 2.0)

    const paint = this.decoration.borderSide.toPaint()
    paint.strokeCap = StrokeCap.round
    canvas.drawLine(indicator.bottomLeft, indicator.bottomRight, paint)
  }
}
