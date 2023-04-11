import {Size, Canvas} from '@octoflutter/dartsdk'
import {Listenable} from '../foundation/change_notifier'

export abstract class CustomPainter extends N.OctoCustomPainter {
  constructor(repaint?: Listenable) {
    super(repaint)
  }

  private wtx(canvas: any, width: any, height: any) {
    this.paint(new Canvas(canvas), new Size(width, height))
  }

  abstract paint(canvas: Canvas, size: Size)

  private wty(oldDelegate: any) {
    return this.shouldRepaint(oldDelegate as CustomPainter)
  }

  abstract shouldRepaint(oldDelegate: CustomPainter)
}
