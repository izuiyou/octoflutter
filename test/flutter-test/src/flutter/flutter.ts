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
import {PageAnimation, getAnimationRoutes} from './animation'
import {PageCupertino, getCupertinoRoutes} from './cupertino'
import {PageMaterial, getMaterialRoutes} from './material'
import {PageServices, getServicesRoutes} from './services'
import {PageWidgets, getWidgetsRoutes} from './widgets'

export function getFlutterRoutes(): Map<string, WidgetBuilder> {
  const animationRoutes = getAnimationRoutes()
  const cupertinoRoutes = getCupertinoRoutes()
  const materialRoutes = getMaterialRoutes()
  const servicesRoutes = getServicesRoutes()
  const widgetsRoutes = getWidgetsRoutes()
  const innerRoutes = getFlutterInnerRoutes()
  return new Map<string, WidgetBuilder>([
    ...animationRoutes,
    ...cupertinoRoutes,
    ...materialRoutes,
    ...servicesRoutes,
    ...widgetsRoutes,
    ...innerRoutes,
  ])
}

function getFlutterInnerRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    ['/animation', (context: BuildContext) => new PageAnimation()],
    ['/cupertino', (context: BuildContext) => new PageCupertino()],
    ['/material', (context: BuildContext) => new PageMaterial()],
    ['/widgets', (context: BuildContext) => new PageWidgets()],
    ['/services', (context: BuildContext) => new PageServices()],
  ])
}

export class PageFlutter extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getFlutterInnerRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('flutter'),
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
