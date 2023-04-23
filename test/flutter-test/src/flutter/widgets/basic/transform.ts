import {Matrix4} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  ColoredBox,
  Colors,
  Scaffold,
  SizedBox,
  StatelessWidget,
  Text,
  Transform,
  Widget,
} from '@octoflutter/flutter'

export class PageTransform extends StatelessWidget {
  build(context: BuildContext): Widget {
    const matrix = Matrix4.identity()
    matrix.rotateZ(5)

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Transform'),
      }),
      body: new Transform({
        child: new ColoredBox({
          color: Colors.red,
          child: new SizedBox({width: 100, height: 100}),
        }),
        transform: matrix,
        alignment: Alignment.centerRight,
      }),
    })
  }
}
