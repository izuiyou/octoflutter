import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  GestureDetector,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageGestureDetectorState extends State<PageGestureDetector> {
  text = 'Click To Test GestureDetector'

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('GestureDetector'),
      }),
      body: new GestureDetector({
        child: new Container({
          child: new Text(this.text),
          alignment: Alignment.center,
          color: Colors.red,
        }),

        onTap: () => {
          this.text = 'onTap'
          this.setState(() => {})
        },
        onDoubleTap: () => {
          this.text = 'onDoubleTap'
          this.setState(() => {})
        },
        onPanStart: (d) => {
          this.text =
            'onPanStart:' + d.globalPosition.dx + ' ' + d.globalPosition.dy
          this.setState(() => {})
        },
        onPanUpdate: (d) => {
          this.text =
            'onPanUpdate:' + d.globalPosition.dx + ' ' + d.globalPosition.dy
          this.setState(() => {})
        },
        onPanEnd: () => {
          this.text = 'onPanEnd'
          this.setState(() => {})
        },
        onLongPress: () => {
          this.text = 'onLongPress'
          this.setState(() => {})
        },
      }),
    })
  }
}

export class PageGestureDetector extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageGestureDetectorState()
  }
}
