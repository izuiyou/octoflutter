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
import {PageMasonryGrid} from './masonry'
import {PageQuilted} from './quilted'
import {PageStaggeredGrid} from './staggered_grid'
import {PageStaired} from './staired'
import {PageWoven} from './woven'
import {PageAligined} from './aligned'

export function getStaggeredRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    [
      '/staggered/staggered',
      (context: BuildContext) => new PageStaggeredGrid(),
    ],
    ['/staggered/masonry', (context: BuildContext) => new PageMasonryGrid()],
    ['/staggered/quilted', (context: BuildContext) => new PageQuilted()],
    ['/staggered/staired', (context: BuildContext) => new PageStaired()],
    ['/staggered/woven', (context: BuildContext) => new PageWoven()],
    ['/staggered/aligned', (context: BuildContext) => new PageAligined()],
  ])
}

export class PageStaggered extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getStaggeredRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Staggered'),
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
