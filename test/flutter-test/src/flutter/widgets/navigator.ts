import {VoidCallback, Offset} from '@octoflutter/dartsdk'
import {
  AppBar,
  BuildContext,
  Center,
  Container,
  Curves,
  CurveTween,
  GestureDetector,
  GlobalKey,
  HitTestBehavior,
  MaterialApp,
  ModalRoute,
  Navigator,
  NavigatorObserver,
  OffsetTween,
  PageRouteBuilder,
  Route,
  RouteAware,
  Scaffold,
  SlideTransition,
  State,
  StatefulWidget,
  StatelessWidget,
  Text,
  Widget,
  WidgetBuilder,
} from '@octoflutter/flutter'

class _MyObserver extends NavigatorObserver {
  didPop(route: Route<any>, previousRoute: Route<any>): void {
    super.didPop(route, previousRoute)
    window.console.log(
      'didPop:route:' +
        route?.settings?.name +
        ' previousRoute:' +
        previousRoute?.settings?.name
    )
  }

  didPush(route: Route<any>, previousRoute: Route<any>): void {
    super.didPush(route, previousRoute)
    window.console.log(
      'didPush:route:' +
        route?.settings?.name +
        ' previousRoute:' +
        previousRoute?.settings?.name
    )
  }

  didRemove(route: Route<any>, previousRoute: Route<any>): void {
    super.didRemove(route, previousRoute)
    window.console.log(
      'didRemove:route:' +
        route?.settings?.name +
        ' previousRoute:' +
        previousRoute?.settings?.name
    )
  }

  didReplace(args: {newRoute?: Route<any>; oldRoute?: Route<any>}): void {
    super.didReplace(args)
    window.console.log(
      'didReplace:newRoute:' +
        args.newRoute?.settings?.name +
        ' oldRoute:' +
        args.oldRoute?.settings?.name
    )
  }

  didStartUserGesture(route: Route<any>, previousRoute: Route<any>): void {
    super.didStartUserGesture(route, previousRoute)
    window.console.log(
      'didStartUserGesture:route:' +
        route?.settings?.name +
        ' previousRoute:' +
        previousRoute?.settings?.name
    )
  }

  didStopUserGesture(): void {
    super.didStopUserGesture()
    window.console.log('didStopUserGesture')
  }
}

class _MyRouteAware extends RouteAware {
  routeKey: GlobalKey<_HomeState>
  constructor(routeKey: GlobalKey<_HomeState>) {
    super()
    this.routeKey = routeKey
  }

  didPop() {
    const route = ModalRoute.of(this.routeKey.currentContext).settings.name
    console.log('didPop:' + route)
  }

  didPopNext() {
    const route = ModalRoute.of(this.routeKey.currentContext).settings.name
    console.log('didPopNext:' + route)
  }

  didPush() {
    const route = ModalRoute.of(this.routeKey.currentContext).settings.name
    console.log('didPush:' + route)
  }

  didPushNext() {
    const route = ModalRoute.of(this.routeKey.currentContext).settings.name
    console.log('didPushNext:' + route)
  }
}

class OnTapPage extends StatelessWidget {
  constructor(id: string, onTap: VoidCallback) {
    super()
    this.id = id
    this.onTap = onTap
  }

  id: string
  onTap: VoidCallback

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({title: new Text(`Page ${this.id}`)}),
      body: new GestureDetector({
        onTap: this.onTap,
        behavior: HitTestBehavior.opaque,
        child: new Center({
          child: new Text(this.id),
        }),
      }),
    })
  }
}

class _HomeState extends State<_Home> {
  routeAware: _MyRouteAware
  initState(): void {
    super.initState()
    const homeKey = new GlobalKey<_HomeState>()
    this.routeAware = new _MyRouteAware(homeKey)
  }

  build(context: BuildContext): Widget {
    return new OnTapPage('A', () => {
      Navigator.of(context).pushNamed('/pageB')
    })
  }
}

class _Home extends StatefulWidget {
  observer: NavigatorObserver
  constructor(observer: NavigatorObserver) {
    super()
    this.observer = observer
  }

  createState(): State<StatefulWidget> {
    return new _HomeState()
  }
}

class _PageNavigatorState extends State<PageNavigator> {
  observer: NavigatorObserver = new _MyObserver()

  build(context: BuildContext): Widget {
    return new MaterialApp({
      routes: this.getrRoutes(),
      home: new _Home(this.observer),
      navigatorObservers: [this.observer],
    })
  }

  getrRoutes(): Map<string, WidgetBuilder> {
    return new Map<string, WidgetBuilder>([
      [
        '/pageA',
        (context: BuildContext) =>
          new OnTapPage('A', () => {
            Navigator.of(context).pushNamed('/pageB')
          }),
      ],
      [
        '/pageB',
        (context: BuildContext) =>
          new OnTapPage('B', () => {
            Navigator.of(context).pushNamed('/pageC')
          }),
      ],
      [
        '/pageC',
        (context: BuildContext) =>
          new OnTapPage('C', () => {
            Navigator.of(context).pushNamed('/pageD')
          }),
      ],
      [
        '/pageD',
        (context: BuildContext) =>
          new OnTapPage('D', () => {
            Navigator.of(context).popAndPushNamed('/pageE')
          }),
      ],
      [
        '/pageE',
        (context: BuildContext) =>
          new OnTapPage('E', () => {
            Navigator.of(context).pushReplacementNamed('/pageF')
          }),
      ],
      [
        '/pageF',
        (context: BuildContext) =>
          new OnTapPage('F', () => {
            Navigator.of(context).pushNamedAndRemoveUntil('/pageG', (r) => {
              return r.settings.name === '/pageC'
            })
          }),
      ],
      [
        '/pageG',
        (context: BuildContext) =>
          new OnTapPage('G', () => {
            Navigator.of(context).push(
              new PageRouteBuilder({
                pageBuilder: (ctx, a1, a2) => {
                  return new Container({
                    child: new OnTapPage('H', () => {
                      Navigator.of(context).popUntil((r) => {
                        return r.settings.name === '/'
                      })
                    }),
                  })
                },

                transitionsBuilder: (ctx, a1, a2, child) => {
                  const begin = new Offset(0.0, 1.0)
                  const end = Offset.zero
                  const tween = new OffsetTween(begin, end).chain(
                    new CurveTween(Curves.ease)
                  )

                  return new SlideTransition({
                    position: a1.drive(tween),
                    child: child,
                  })
                },
              })
            )
          }),
      ],
    ])
  }
}

export class PageNavigator extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageNavigatorState()
  }
}
