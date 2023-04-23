import {Color, Matrix4} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Container,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageVectorMath extends StatelessWidget {
  build(context: BuildContext): Widget {
    const matrix = Matrix4.identity()
    matrix.setRotationZ(10)

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('VectorMath'),
      }),
      body: new Container({
        alignment: Alignment.center,
        child: new Container({
          child: new Text('Matrix4 setRotationZ(10)'),
          width: 100,
          height: 100,
          color: Color.fromARGB(255, 255, 0, 0),
          transform: matrix,
          transformAlignment: Alignment.center,
        }),
      }),
    })
  }
}
