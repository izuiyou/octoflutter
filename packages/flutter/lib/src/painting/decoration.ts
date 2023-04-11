import {
  Canvas,
  Offset,
  Path,
  Rect,
  TextDirection,
  VoidCallback,
} from '@octoflutter/dartsdk'
import {convertImageConfiguration, convertRect} from '../../utils'
import {EdgeInsets} from './edge_insets'
import {ImageConfiguration} from './image_provider'

export abstract class Decoration {}

export abstract class BoxPainter extends N.OctoBoxPainter {
  public readonly onChanged?: VoidCallback

  constructor(onChanged?: VoidCallback) {
    super(onChanged)
    this.onChanged = onChanged
  }

  private bda(canvas, dx, dy, configuration) {
    this.paint(
      new Canvas(canvas),
      new Offset(dx, dy),
      convertImageConfiguration(configuration)
    )
  }

  abstract paint(
    canvas: Canvas,
    offset: Offset,
    configuration: ImageConfiguration
  )
}

export abstract class AbsDecoration extends N.OctoDecoration {
  abstract createBoxPainter(onChanged?: VoidCallback)

  abstract getClipPath(rect: Rect, textDirection: TextDirection): Path

  get padding(): EdgeInsets {
    return EdgeInsets.zero
  }

  get isComplex(): boolean {
    return false
  }

  lerpFrom = (a: AbsDecoration | null, t: number): AbsDecoration | null => {
    return a
  }

  lerpTo = (b: AbsDecoration | null, t: number): AbsDecoration | null => {
    return b
  }

  private bdb(onChanged) {
    return this.createBoxPainter(onChanged)
  }

  private bdc(rect, textDirection) {
    return this.getClipPath(convertRect(rect), textDirection)
  }

  private bdd() {
    return this.padding
  }

  private bde() {
    return this.isComplex
  }

  private bdf(decoration, t) {
    return this.lerpFrom(decoration, t)
  }

  private bdg(decoration, t) {
    return this.lerpTo(decoration, t)
  }
}
