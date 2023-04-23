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
import {PageAsync} from './async'
import {PageCore} from './core'
import {PageUi} from './ui'
import {PageVectorMath} from './vector_math'

export function getDartsdkRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    ['/async', (context: BuildContext) => new PageAsync()],
    ['/core', (context: BuildContext) => new PageCore()],
    ['/ui', (context: BuildContext) => new PageUi()],
    ['/vector_math', (context: BuildContext) => new PageVectorMath()],
  ])
}

export class PageDartSdk extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getDartsdkRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('dartsdk'),
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
