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
import {PageBuildContext} from './framework/build_context'
import {PageInheritedWidget} from './framework/inherited_widget'

export function getFrameworkRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    [
      '/widgets/framework/buildcontext',
      (context: BuildContext) => new PageBuildContext(),
    ],
    [
      '/widgets/framework/inherit',
      (context: BuildContext) => new PageInheritedWidget(),
    ],
  ])
}

export class PageFramework extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getFrameworkRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Framework'),
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
