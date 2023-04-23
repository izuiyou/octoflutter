import {Color, Offset, Size} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Container,
  EdgeInsets,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageUi extends StatelessWidget {
  build(context: BuildContext): Widget {
    const size = new Size(150, 150)
    const offset = new Offset(50, 80)

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Ui'),
      }),
      body: new Container({
        alignment: Alignment.topLeft,
        child: new Container({
          margin: EdgeInsets.only({left: offset.dx, top: offset.dy}),
          child: new Text(
            'Size(150, 150) \nOffset(50, 80) \nColor.fromARGB(255, 255, 0, 0)'
          ),
          width: size.width,
          height: size.height,
          color: Color.fromARGB(255, 255, 0, 0),
        }),
      }),
    })
  }
}
