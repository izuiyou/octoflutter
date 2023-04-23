import {
  Alignment,
  AppBar,
  BuildContext,
  Builder,
  Colors,
  Container,
  DismissDirection,
  Drawer,
  FloatingActionButton,
  Icon,
  Icons,
  Scaffold,
  ScaffoldMessenger,
  SnackBar,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageScaffold extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Scaffold'),
      }),
      body: new Container({
        child: new Text('Body'),
        alignment: Alignment.center,
      }),
      drawer: new Drawer({
        backgroundColor: Colors.red,
        child: new Container({
          child: new Text('Drawer'),
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
              window.console.log(
                'hasDrawer:' +
                  Scaffold.of(ctx).hasDrawer +
                  ' appBarMaxHeight:' +
                  Scaffold.of(ctx).appBarMaxHeight +
                  ' hasAppBar:' +
                  Scaffold.of(ctx).hasAppBar +
                  ' hasEndDrawer:' +
                  Scaffold.of(ctx).hasEndDrawer +
                  ' hasFloatingActionButton:' +
                  Scaffold.of(ctx).hasFloatingActionButton
              )

              // Scaffold.of(ctx).showBodyScrim(true, 0.3)

              const ctrl = Scaffold.of(ctx).showBottomSheet((ctxx) => {
                return new Container({
                  color: Colors.pink,
                  height: 100,
                })
              })

              window.setTimeout(() => {
                ctrl.close()
                ScaffoldMessenger.of(ctx).showSnackBar(
                  new SnackBar({
                    content: new Text('SnackBar'),
                    dismissDirection: DismissDirection.horizontal,
                  })
                )
              }, 2000)

              ctrl.closed
                .then((v) => {
                  window.console.log('then v:' + v)
                })
                .catch((e) => {
                  window.console.log('err e:' + e)
                })
            },
          })
        },
      }),
    })
  }
}
