import {Canvas, Offset, Paint, Rect, Size} from '@octoflutter/dartsdk'
import {
  AppBar,
  BuildContext,
  Center,
  Colors,
  CustomPaint,
  CustomPainter,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _MyCustomPainter extends CustomPainter {
  paint(canvas: Canvas, size: Size) {
    const paint = new Paint()
    paint.color = Colors.red
    canvas.drawCircle(new Offset(50, 50), 50, paint)
    paint.color = Colors.yellow
    canvas.drawRect(new Rect(0, 0, 25, 25), paint)
  }
  shouldRepaint(oldDelegate: CustomPainter) {
    return true
  }
}

export class PageCustomPaint extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('CustomPaint'),
      }),
      body: new Center({
        child: new CustomPaint({
          size: new Size(100, 100),
          painter: new _MyCustomPainter(),
        }),
      }),
    })
  }
}
