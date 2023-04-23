import {
  Alignment,
  AppBar,
  BuildContext,
  Builder,
  Container,
  DefaultTabController,
  FloatingActionButton,
  Scaffold,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageTabState extends State<PageTab> {
  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 5,
      initialIndex: 2,
      child: new Builder({
        builder: (ctx) => {
          return new Scaffold({
            appBar: new AppBar({
              title: new Text('Tab'),
              bottom: new TabBar({
                tabs: [
                  new Tab({text: 'Tab1'}),
                  new Tab({text: 'Tab2'}),
                  new Tab({text: 'Tab3'}),
                  new Tab({text: 'Tab4'}),
                  new Tab({text: 'Tab5'}),
                ],
              }),
            }),
            body: new TabBarView({
              children: [
                this.pageAt(0),
                this.pageAt(1),
                this.pageAt(2),
                this.pageAt(3),
                this.pageAt(4),
              ],
            }),
            floatingActionButton: new FloatingActionButton({
              child: new Text('Click'),
              onPressed: () => {
                DefaultTabController.of(ctx).animateTo(4)
              },
            }),
          })
        },
      }),
    })
  }

  pageAt(index) {
    return new Container({
      alignment: Alignment.center,
      child: new Text('Page:' + index),
    })
  }
}

export class PageTab extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageTabState()
  }
}
