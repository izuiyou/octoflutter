import {
  Alignment,
  AppBar,
  BuildContext,
  Builder,
  Colors,
  Container,
  Drawer,
  FloatingActionButton,
  GestureDetector,
  Icon,
  Icons,
  Navigator,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageDrawer extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Drawer'),
      }),
      body: new Container({
        child: new Text('Body'),
        alignment: Alignment.center,
      }),
      drawer: new Drawer({
        backgroundColor: Colors.red,
        child: new Container({
          child: new GestureDetector({
            child: new Text('Drawer'),
            onTap: () => {
              Navigator.of(context).pop()
            },
          }),
          alignment: Alignment.center,
        }),
      }),
      onDrawerChanged: (isOpened: boolean) => {
        window.console.log('isOpened:' + isOpened)
      },
      floatingActionButton: new Builder({
        builder: (ctx) => {
          return new FloatingActionButton({
            child: new Icon(Icons.add),
            onPressed: () => {
              if (Scaffold.of(ctx).isDrawerOpen) {
                Navigator.of(ctx).pop()
              } else {
                Scaffold.of(ctx).openDrawer()
              }
            },
          })
        },
      }),
    })
  }
}
