import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  DefaultTabController,
  GestureDetector,
  IndexedStack,
  Scaffold,
  Stack,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageStackState extends State<PageStack> {
  index = 0

  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 2,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Stack'),
          bottom: new TabBar({
            tabs: [new Tab({text: 'Stack'}), new Tab({text: 'IndexStack'})],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            new Container({
              alignment: Alignment.center,
              child: new Stack({
                children: [
                  new Container({
                    child: new Text('Colors.red'),
                    color: Colors.red,
                    width: 300,
                    height: 300,
                    alignment: Alignment.bottomRight,
                  }),

                  new Container({
                    child: new Text('Colors.white'),
                    color: Colors.white,
                    width: 200,
                    height: 200,
                    alignment: Alignment.bottomRight,
                  }),
                  new Container({
                    child: new Text('Colors.blue'),
                    color: Colors.blue,
                    width: 100,
                    height: 100,
                    alignment: Alignment.bottomRight,
                  }),
                ],
              }),
            }),
            new Container({
              alignment: Alignment.center,
              child: new GestureDetector({
                child: new Container({
                  alignment: Alignment.center,
                  child: new IndexedStack({
                    index: this.index,
                    children: [
                      new Container({
                        child: new Text('Colors.red ,Click Change index'),
                        color: Colors.red,
                        width: 300,
                        height: 300,
                        alignment: Alignment.bottomRight,
                      }),

                      new Container({
                        child: new Text('Colors.white ,Click Change index'),
                        color: Colors.white,
                        width: 200,
                        height: 200,
                        alignment: Alignment.bottomRight,
                      }),
                      new Container({
                        child: new Text('Colors.blue ,Click Change index'),
                        color: Colors.blue,
                        width: 100,
                        height: 100,
                        alignment: Alignment.bottomRight,
                      }),
                    ],
                  }),
                }),
                onTap: () => {
                  this.index += 1
                  if (this.index > 2) {
                    this.index = 0
                  }
                  this.setState(() => {})
                },
              }),
            }),
          ],
        }),
      }),
    })
  }
}

export class PageStack extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageStackState()
  }
}
