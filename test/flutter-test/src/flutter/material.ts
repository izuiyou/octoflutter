import {
  AppBar,
  Scaffold,
  Text,
  Container,
  WidgetBuilder,
  BuildContext,
  StatelessWidget,
  Widget,
  ListView,
  Alignment,
  EdgeInsets,
  GestureDetector,
  Navigator,
} from '@octoflutter/flutter'
import {PageAppBar} from './material/app_bar'
import {PageMaterialApp} from './material/app'
import {PageButton} from './material/button'
import {PageDrawer} from './material/drawer'
import {PageScaffold} from './material/scaffold'
import {PageCard} from './material/card'
import {PageChip} from './material/chip'
import {PageTab} from './material/tabs'
import {Color} from '@octoflutter/dartsdk'
import {PageBottomNavigationBar} from './material/bottom_naviagtion_bar'
import {PageCircleAvatar} from './material/circle_avatar'

export function getMaterialRoutes(): Map<string, WidgetBuilder> {
  const innerRoutes = getMaterialInnerRoutes()
  return new Map<string, WidgetBuilder>([...innerRoutes])
}
export function getMaterialInnerRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    ['/material/app', (context: BuildContext) => new PageMaterialApp()],
    ['/material/app_bar', (context: BuildContext) => new PageAppBar()],
    [
      '/material/bottom_navigation_bar',
      (context: BuildContext) => new PageBottomNavigationBar(),
    ],
    ['/material/button', (context: BuildContext) => new PageButton()],
    ['/material/card', (context: BuildContext) => new PageCard()],
    ['/material/chip', (context: BuildContext) => new PageChip()],
    [
      '/material/circle_avatar',
      (context: BuildContext) => new PageCircleAvatar(),
    ],
    ['/material/drawer', (context: BuildContext) => new PageDrawer()],
    ['/material/scaffold', (context: BuildContext) => new PageScaffold()],
    ['/material/tab', (context: BuildContext) => new PageTab()],
  ])
}

export class PageMaterial extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getMaterialInnerRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Material'),
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
