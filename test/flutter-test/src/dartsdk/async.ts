import {Duration, Timer} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Container,
  FloatingActionButton,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageAsyncState extends State<PageAsync> {
  timer: Timer
  count = 0

  initState() {
    super.initState()
    this.timer = Timer.periodic(new Duration({seconds: 1}), (t) => {
      this.count += 1
      this.setState(() => {})
    })
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({title: new Text('Async')}),
      body: new Container({
        alignment: Alignment.center,
        child: new Text('Timer.periodic Callback Count:' + this.count),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Text('取消'),
        onPressed: () => {
          this.timer?.cancel()
        },
      }),
    })
  }

  dispose(): void {
    super.dispose()
    this.timer?.cancel()
  }
}

export class PageAsync extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageAsyncState()
  }
}
