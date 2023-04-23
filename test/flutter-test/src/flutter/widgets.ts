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
import {PageBasic, getBasicRoutes} from './widgets/basic'
import {PageBottomNavigationBarItem} from './widgets/bottom_navigation_bar_item'
import {PageColorFilterd} from './widgets/color_filtered'
import {PageContainer} from './widgets/container'
import {PageEditableText} from './widgets/editable_text'
import {PageFramework, getFrameworkRoutes} from './widgets/framework'
import {PageGestureDetector} from './widgets/gesture_detector'
import {PageGrid} from './widgets/grid'
import {PageImage} from './widgets/image'
import {PageList} from './widgets/list'
import {PageNavigator} from './widgets/navigator'
import {PageNestedScrollView} from './widgets/nested_scroll_view'
import {PageNavigatorPage} from './widgets/page'
import {PageViewTest} from './widgets/page_view'
import {PageSingleChildScrollView} from './widgets/single_child_scroll_view'

export function getWidgetsRoutes(): Map<string, WidgetBuilder> {
  const basicRoutes = getBasicRoutes()
  const frameworkRoutes = getFrameworkRoutes()
  const innerRoutes = getWidgetsInnerRoutes()
  return new Map<string, WidgetBuilder>([
    ...basicRoutes,
    ...frameworkRoutes,
    ...innerRoutes,
  ])
}
export function getWidgetsInnerRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    ['/widgets/basic', (context: BuildContext) => new PageBasic()],
    [
      '/widgets/bottom_navigation_bar_item',
      (context: BuildContext) => new PageBottomNavigationBarItem(),
    ],
    [
      '/widgets/color_filtered',
      (context: BuildContext) => new PageColorFilterd(),
    ],
    ['/widgets/container', (context: BuildContext) => new PageContainer()],
    [
      '/widgets/editable_text',
      (context: BuildContext) => new PageEditableText(),
    ],
    ['/widgets/framework', (context: BuildContext) => new PageFramework()],
    [
      '/widgets/gesture_detector',
      (context: BuildContext) => new PageGestureDetector(),
    ],
    ['/widgets/grid', (context: BuildContext) => new PageGrid()],
    ['/widgets/image', (context: BuildContext) => new PageImage()],
    ['/widgets/list', (context: BuildContext) => new PageList()],
    ['/widgets/navigator', (context: BuildContext) => new PageNavigator()],
    [
      '/widgets/nested_scroll_view',
      (context: BuildContext) => new PageNestedScrollView(),
    ],
    ['/widgets/page_view', (context: BuildContext) => new PageViewTest()],
    ['/widgets/page', (context: BuildContext) => new PageNavigatorPage()],
    [
      '/widgets/single_child_scroll_view',
      (context: BuildContext) => new PageSingleChildScrollView(),
    ],
  ])
}

export class PageWidgets extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getWidgetsInnerRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Widgets'),
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
