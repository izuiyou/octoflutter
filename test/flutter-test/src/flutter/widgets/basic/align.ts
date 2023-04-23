import {
  Align,
  Alignment,
  AppBar,
  BuildContext,
  Center,
  DefaultTabController,
  Scaffold,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageAlignState extends State<PageAlign> {
  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 2,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Align'),
          bottom: new TabBar({
            tabs: [new Tab({text: 'Center'}), new Tab({text: 'Align'})],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            new Center({
              child: new Text('Center'),
            }),
            new Align({
              alignment: Alignment.centerRight,
              child: new Text('Align:centerRight'),
            }),
          ],
        }),
      }),
    })
  }
}

export class PageAlign extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageAlignState()
  }
}
