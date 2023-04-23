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
import {PageClipBoard} from './services/clipboard'
import {PageSystemChrome} from './services/system_chrome'

export function getServicesRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    ['/services/clipboard', (context: BuildContext) => new PageClipBoard()],
    [
      '/services/system_chrome',
      (context: BuildContext) => new PageSystemChrome(),
    ],
  ])
}

export class PageServices extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getServicesRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Services'),
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
