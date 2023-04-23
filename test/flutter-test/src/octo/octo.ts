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
import {PageOctoList} from './octo_list'
import {PageNestedRefresh} from './refresh/page_nested_refresh'
import {PageTransformPageView} from './transform_pageview'

export function getOctoRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    ['/octo/refresh', (context: BuildContext) => new PageNestedRefresh()],
    ['/octo/list', (context: BuildContext) => new PageOctoList()],
    [
      '/octo/transform_pageview',
      (context: BuildContext) => new PageTransformPageView(),
    ],
  ])
}

export class PageOcto extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getOctoRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Octo'),
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
