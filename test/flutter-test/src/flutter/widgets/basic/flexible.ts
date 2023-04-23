import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  DefaultTabController,
  Expanded,
  Row,
  Scaffold,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageFlexibleState extends State<PageFlexible> {
  index = 0

  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 2,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Flexible'),
          bottom: new TabBar({
            tabs: [new Tab({text: 'Flexible'}), new Tab({text: 'Expanded'})],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [this.flexibleWidgets(), this.expendWidgets()],
        }),
      }),
    })
  }

  childrenWidgets = (): Array<Widget> => {
    return [
      new Container({
        child: new Text('Colors.red'),
        color: Colors.red,
        width: 50,
        height: 50,
        alignment: Alignment.center,
      }),
      new Container({
        child: new Text('Colors.white'),
        color: Colors.white,
        width: 50,
        height: 50,
        alignment: Alignment.center,
      }),
      new Container({
        child: new Text('Colors.blue'),
        color: Colors.blue,
        width: 50,
        height: 50,
        alignment: Alignment.center,
      }),
    ]
  }

  flexibleWidgets = (): Widget => {
    return new Container({
      child: new Row({
        children: [
          new Expanded({
            child: new Container({
              color: Colors.red,
            }),
            flex: 1,
          }),
          ...this.childrenWidgets(),
          new Expanded({
            child: new Container({
              color: Colors.blue,
            }),
            flex: 2,
          }),
        ],
      }),
    })
  }

  expendWidgets = (): Widget => {
    return new Container({
      child: new Row({
        children: [
          new Expanded({
            child: new Container({
              color: Colors.red,
            }),
            flex: 1,
          }),
          ...this.childrenWidgets(),
        ],
      }),
    })
  }
}

export class PageFlexible extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageFlexibleState()
  }
}
