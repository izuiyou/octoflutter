import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Container,
  EdgeInsets,
  GestureDetector,
  ListView,
  Navigator,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
  WidgetBuilder,
} from '@octoflutter/flutter'
import {PageCupertinoApp} from './cupertino/app'

export function getCupertinoRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    ['/cupertino/app', (context: BuildContext) => new PageCupertinoApp()],
  ])
}

export class PageCupertino extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getCupertinoRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Cupertino'),
      }),
      body: ListView.builder({
        itemBuilder: (ctx, index) => {
          const c = (index / keys.length) * 255
          const route = keys[index]
          return new GestureDetector({
            child: new Container({
              padding: EdgeInsets.only({left: 10}),
              child: new Text(route),
              color: Color.fromARGB(255, c, 255, 255 - c),
              height: 50,
              alignment: Alignment.centerLeft,
            }),
            onTap: () => {
              Navigator.of(context).pushNamed(route)
            },
          })
        },
        itemCount: keys.length,
      }),
    })
  }
}
