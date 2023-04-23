import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  DefaultTabController,
  EdgeInsets,
  Flex,
  MainAxisAlignment,
  Row,
  Scaffold,
  SingleChildScrollView,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageFlexState extends State<PageFlex> {
  index = 0

  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 3,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Flex'),
          bottom: new TabBar({
            tabs: [
              new Tab({text: 'Row'}),
              new Tab({text: 'Column'}),
              new Tab({text: 'Flex'}),
            ],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            this.rowWidgets(),
            this.columnWidgets(),
            this.flexWidgets(),
          ],
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

  rowWidgets = (): Widget => {
    return new Container({
      alignment: Alignment.center,
      child: new SingleChildScrollView({
        child: new Column({
          children: [
            new Container({
              child: new Text(
                'MainAxisAlignment.start + CrossAxisAlignment.start'
              ),
              color: Colors.red,
            }),
            new Container({
              color: Colors.grey,
              child: new Row({
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: this.childrenWidgets(),
              }),
              height: 100,
            }),

            new Container({
              child: new Text(
                'MainAxisAlignment.center + CrossAxisAlignment.center'
              ),
              color: Colors.red,
              margin: EdgeInsets.only({top: 20}),
            }),
            new Container({
              color: Colors.grey,
              child: new Row({
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: this.childrenWidgets(),
              }),
              height: 100,
            }),

            new Container({
              child: new Text('MainAxisAlignment.end + CrossAxisAlignment.end'),
              color: Colors.red,
              margin: EdgeInsets.only({top: 20}),
            }),
            new Container({
              color: Colors.grey,
              child: new Row({
                mainAxisAlignment: MainAxisAlignment.end,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: this.childrenWidgets(),
              }),
              height: 100,
            }),

            new Container({
              child: new Text(
                'MainAxisAlignment.start + CrossAxisAlignment.center'
              ),
              color: Colors.red,
              margin: EdgeInsets.only({top: 20}),
            }),
            new Container({
              color: Colors.grey,
              child: new Row({
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: this.childrenWidgets(),
              }),
              height: 100,
            }),

            new Container({
              child: new Text(
                'MainAxisAlignment.spaceBetween + CrossAxisAlignment.center'
              ),
              color: Colors.red,
              margin: EdgeInsets.only({top: 20}),
            }),
            new Container({
              color: Colors.grey,
              child: new Row({
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: this.childrenWidgets(),
              }),
              height: 100,
            }),

            new Container({
              child: new Text(
                'MainAxisAlignment.spaceAround+ CrossAxisAlignment.center'
              ),
              color: Colors.red,
              margin: EdgeInsets.only({top: 20}),
            }),
            new Container({
              color: Colors.grey,
              child: new Row({
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: this.childrenWidgets(),
              }),
              height: 100,
            }),

            new Container({
              child: new Text(
                'MainAxisAlignment.spaceEvenly+ CrossAxisAlignment.center'
              ),
              color: Colors.red,
              margin: EdgeInsets.only({top: 20}),
            }),
            new Container({
              color: Colors.grey,
              child: new Row({
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: this.childrenWidgets(),
              }),
              height: 100,
            }),
          ],
        }),
        scrollDirection: Axis.vertical,
      }),
    })
  }

  columnWidgets = (): Widget => {
    return new Container({
      child: new Row({
        children: [
          new Container({
            child: new Column({
              mainAxisAlignment: MainAxisAlignment.start,
              children: this.childrenWidgets(),
            }),
          }),
          new Container({
            child: new Column({
              mainAxisAlignment: MainAxisAlignment.center,
              children: this.childrenWidgets(),
            }),
          }),
          new Container({
            child: new Column({
              mainAxisAlignment: MainAxisAlignment.end,
              children: this.childrenWidgets(),
            }),
          }),
          new Container({
            child: new Column({
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: this.childrenWidgets(),
            }),
          }),
          new Container({
            child: new Column({
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: this.childrenWidgets(),
            }),
          }),
          new Container({
            child: new Column({
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: this.childrenWidgets(),
            }),
          }),
        ],
      }),
    })
  }

  flexWidgets = (): Widget => {
    return new Container({
      child: new Flex({
        children: this.childrenWidgets(),
        direction: Axis.horizontal,
      }),
    })
  }
}

export class PageFlex extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageFlexState()
  }
}
