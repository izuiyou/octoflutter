import {
  AppBar,
  BuildContext,
  Container,
  GestureDetector,
  Icon,
  Icons,
  Scaffold,
  ScaffoldMessenger,
  SnackBar,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageAppBar extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('AppBar'),
        actions: [
          new GestureDetector({
            child: new Icon(Icons.add),
            onTap: () => {
              window.console.log('Icons.add click')
              ScaffoldMessenger.of(context).showSnackBar(
                new SnackBar({
                  content: new Text('Icons.add Clicked'),
                })
              )
            },
          }),
          new GestureDetector({
            child: new Icon(Icons.arrow_downward),
            onTap: () => {
              window.console.log('Icons.arrow_downward click')
              ScaffoldMessenger.of(context).showSnackBar(
                new SnackBar({
                  content: new Text('Icons.arrow_downward Clicked'),
                })
              )
            },
          }),
          new GestureDetector({
            child: new Icon(Icons.arrow_upward),
            onTap: () => {
              window.console.log('Icons.arrow_upward click')
              ScaffoldMessenger.of(context).showSnackBar(
                new SnackBar({
                  content: new Text('Icons.arrow_upward Clicked'),
                })
              )
            },
          }),
        ],
      }),
      body: new Container({}),
    })
  }
}
