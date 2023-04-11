import {isNullOrUndefined} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {
  BuildContext,
  octoNavigatorState,
  State,
  StatefulWidget,
  Widget,
} from './framework'

export type RoutePredicate = (route: Route<any>) => boolean

export type WillPopCallback = () => Promise<boolean>

export type PopPageCallback = (route: Route<any>, result: any) => boolean

export type RouteFactory = (settings: RouteSettings) => Route<any>

export type RouteListFactory = (
  navigator: NavigatorState,
  initialRoute: string
) => Array<Route<any>>

export type RestorableRouteBuilder<T> = (
  context: BuildContext,
  args?: any
) => Route<T>

export enum RoutePopDisposition {
  pop = C.RoutePopDisposition_0,
  doNotPop = C.RoutePopDisposition_1,
  bubble = C.RoutePopDisposition_2,
}

export const routeSettings = Symbol('routeSettings')

export class RouteSettings {
  public readonly name: string
  public readonly args: any
  private real?: any

  constructor(args?: {name?: string; arguments?: any}) {
    this.name = args?.name
    this.args = args?.arguments
    this[routeSettings] = new N.RouteSettings(args?.name, args?.arguments)
  }

  private [routeSettings]() {
    return this.real
  }
}

// RouteSettings: function RouteSettings(t0, t1) {
//     this.name = t0;
//     this.$arguments = t1;
//   },

export const routeDartMirror = Symbol('routeDartMirror')

export abstract class Route<T> extends N.Route {
  public readonly settings: RouteSettings
  private real?: any

  constructor(settings?: RouteSettings) {
    super()
    this.settings = settings ?? new RouteSettings()
  }

  private [routeDartMirror]() {
    return this.real
  }

  didPop(result: T): boolean {
    return N.octoRouteDidPop(this[routeDartMirror], result)
  }
}

// Route: function Route() {
// },

export class _ProxyRoute extends Route<any> {
  private readonly octoRoute: any

  constructor(real: any) {
    const octoRoute = N.octoModalRouteInstance(real)
    const settings = new RouteSettings({
      name: octoRoute.wti(),
      arguments: octoRoute.wtj(),
    })
    super(settings)
    this.octoRoute = octoRoute
    this[routeDartMirror] = real
    real[routeDartMirror] = this
  }
}

class OctoPage extends N.OctoPage {
  private fake_page: Page<any>
  constructor(
    page: Page<any>,
    key?: Key,
    name?: string,
    args?: any,
    restorationId?: string
  ) {
    super(key?.[octoKey], restorationId, name, args)
    this.fake_page = page
  }

  private wtl(ctx: any) {
    return Reflect.apply(
      Reflect.get(this.fake_page, 'wtl'),
      this.fake_page,
      ctx
    )
  }
}

const createOctoPage = (
  page: Page<any>,
  key?: Key,
  name?: string,
  args?: any,
  restorationId?: string
) => {
  return new OctoPage(page, key, name, args, restorationId) as any
}

export abstract class Page<T> extends RouteSettings {
  private route: any

  constructor(args?: {
    key?: Key
    name?: string
    arguments?: any
    restorationId?: string
  }) {
    super(args)
    const real = createOctoPage(
      this,
      args?.key,
      args?.name,
      args?.arguments,
      args?.restorationId
    )
    this[routeSettings] = real
  }

  private [routeDartMirror]() {
    return this.route
  }

  private wtl(ctx: any) {
    this.route = this.createRoute(new BuildContext(ctx))
    this[routeDartMirror] = this.route
    return this.route[routeDartMirror]
  }

  abstract createRoute<T>(context: BuildContext): Route<T>
}

// OctoPage: function OctoPage(t0, t1, t2, t3) {
//     var _ = this;
//     _.key = t0;
//     _.restorationId = t1;
//     _.name = t2;
//     _.$arguments = t3;
//   },

export class NavigatorObserver extends N.OctoRouteObserver {
  private readonly real: any

  constructor() {
    const real = N.routeObserverInstance()
    super(real, null)
    this.real = real
  }

  didPush(route: Route<any>, previousRoute: Route<any>) {}

  didPop(route: Route<any>, previousRoute: Route<any>) {}

  didRemove(route: Route<any>, previousRoute: Route<any>) {}

  didReplace(args: {newRoute?: Route<any>; oldRoute?: Route<any>}) {}

  didStartUserGesture(route: Route<any>, previousRoute: Route<any>) {}

  didStopUserGesture() {}

  private makeRoute(route: any) {
    return isNullOrUndefined(route)
      ? route
      : route[routeDartMirror] ?? new _ProxyRoute(route)
  }

  private wtc(route: any, previousRoute: any) {
    this.didPop(this.makeRoute(route), this.makeRoute(previousRoute))
  }

  private wtd(route: any, previousRoute: any) {
    this.didPush(this.makeRoute(route), this.makeRoute(previousRoute))
  }

  private wte(route: any, previousRoute: any) {
    this.didRemove(this.makeRoute(route), this.makeRoute(previousRoute))
  }

  private wtf(newRoute: any, oldRoute: any) {
    this.didReplace({
      newRoute: this.makeRoute(newRoute),
      oldRoute: this.makeRoute(oldRoute),
    })
  }

  private wtg(route: any, previousRoute: any) {
    this.didStartUserGesture(
      this.makeRoute(route),
      this.makeRoute(previousRoute)
    )
  }

  private wth() {
    this.didStopUserGesture()
  }
}

// NavigatorObserver: function NavigatorObserver() {
//     this._navigator = null;
//   },

export class DefaultTransitionDelegate extends N.DefaultTransitionDelegate {}

// DefaultTransitionDelegate: function DefaultTransitionDelegate() {
// },

export class Navigator extends N.Navigator {
  private readonly fake_pages?: Array<Page<any>>

  constructor(args?: {
    key?: Key
    pages?: Array<Page<any>>
    onPopPage?: PopPageCallback
    initialRoute?: string
    onGenerateInitialRoutes?: RouteListFactory
    onGenerateRoute?: RouteFactory
    onUnknownRoute?: RouteFactory
    transitionDelegate?: any
    reportsRouteUpdateToEngine?: boolean
    observers?: Array<NavigatorObserver>
    restorationScopeId?: string
  }) {
    const poppage = (route: any, result: any) => {
      const page = this.findPage(route)
      const pr = page[routeDartMirror] as unknown as Route<any>
      return args?.onPopPage(pr, result)
    }

    const generate = (settings: any) => {
      return args?.onGenerateRoute(
        new RouteSettings({
          name: N.octoSettingsName(settings),
          arguments: N.octoSettingsArgs(settings),
        })
      )?.[routeDartMirror]
    }

    const unknown = (settings: any) => {
      return args?.onUnknownRoute(
        new RouteSettings({
          name: N.octoSettingsName(settings),
          arguments: N.octoSettingsArgs(settings),
        })
      )?.[routeDartMirror]
    }

    const initial = (state: any, initialRoute: any) => {
      return args
        ?.onGenerateInitialRoutes(new NavigatorState(state), initialRoute)
        .map((item, index, arr) => {
          return item?.[routeDartMirror]
        })
    }

    const pages = []
    if (!isNullOrUndefined(args?.pages)) {
      args?.pages.forEach((v, i, a) => {
        pages.push(v[routeSettings])
      })
    }

    super(
      pages,
      isNullOrUndefined(args?.onPopPage) ? null : poppage,
      args?.transitionDelegate ?? new DefaultTransitionDelegate(),
      args?.initialRoute,
      isNullOrUndefined(args?.onGenerateRoute) ? null : generate,
      isNullOrUndefined(args?.onUnknownRoute) ? null : unknown,
      args?.observers ?? [],
      args?.restorationScopeId,
      isNullOrUndefined(args?.onGenerateInitialRoutes)
        ? N.navigatorDefaultGenerateInitialRoutes
        : initial,
      args?.reportsRouteUpdateToEngine ?? false,
      args?.key?.[octoKey]
    )

    this.fake_pages = args?.pages
  }

  private findPage(route: any): Page<any> {
    if (isNullOrUndefined(this.fake_pages)) {
      return null
    }

    return this.fake_pages.find((value, index, obj) => {
      return value[routeDartMirror][routeDartMirror] === route
    })
  }

  public static of(ctx: BuildContext): NavigatorState {
    return new NavigatorState(ctx[octoNavigatorState]())
  }
}

// Navigator: function Navigator(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) {
//     var _ = this;
//     _.pages = t0;
//     _.onPopPage = t1;
//     _.transitionDelegate = t2;
//     _.initialRoute = t3;
//     _.onGenerateRoute = t4;
//     _.onUnknownRoute = t5;
//     _.observers = t6;
//     _.restorationScopeId = t7;
//     _.onGenerateInitialRoutes = t8;
//     _.reportsRouteUpdateToEngine = t9;
//     _.key = t10;
//   },

export class NavigatorState extends State<any> {
  build(context: BuildContext): Widget {
    return null
  }

  private readonly real: any

  constructor(real: any) {
    super()
    this.real = real
  }

  canPop(): boolean {
    return this.real.wgc()
  }

  pop(result?: any): void {
    this.real.wgd(result)
  }

  popUntil(predicate: RoutePredicate): void {
    return this.real.wge((route: any) => {
      if (isNullOrUndefined(predicate)) {
        return false
      }
      return predicate(route?.[routeDartMirror])
    })
  }

  popAndPushNamed = <T, TO>(
    routeName: string,
    args?: {result?: TO; args?: any}
  ): Promise<T> => {
    return new Promise<any>((resolve, reject) => {
      try {
        const ret = this.real.wgf(routeName, args?.args, args?.result)
        resolve(ret)
      } catch (error) {
        reject(error)
      }
    })
  }

  push = <T>(route: Route<T>): Promise<T> => {
    return new Promise<any>((resolve, reject) => {
      try {
        const ret = this.real.wgg(route[routeDartMirror])
        resolve(ret)
      } catch (error) {
        reject(error)
      }
    })
  }

  pushNamed = <T>(routeName: string, args?: any): Promise<T> => {
    return new Promise<any>((resolve, reject) => {
      try {
        const ret = this.real.wgh(routeName, args)
        resolve(ret)
      } catch (error) {
        reject(error)
      }
    })
  }

  pushAndRemoveUntil = <T>(
    route: Route<T>,
    predicate: RoutePredicate
  ): Promise<T> => {
    return new Promise<any>((resolve, reject) => {
      try {
        const ret = this.real.wgi(route[routeDartMirror], (route: any) => {
          if (isNullOrUndefined(predicate)) {
            return false
          }
          return predicate(route?.[routeDartMirror])
        })
        resolve(ret)
      } catch (error) {
        reject(error)
      }
    })
  }

  pushNamedAndRemoveUntil = <T>(
    routeName: string,
    predicate: RoutePredicate,
    args?: any
  ): Promise<T> => {
    return new Promise<any>((resolve, reject) => {
      try {
        const ret = this.real.wgj(
          routeName,
          (route: any) => {
            if (isNullOrUndefined(predicate)) {
              return false
            }
            return predicate(route?.[routeDartMirror])
          },
          args
        )
        resolve(ret)
      } catch (error) {
        reject(error)
      }
    })
  }

  pushReplacement = <T, TO>(route: Route<T>, result?: TO): Promise<T> => {
    return new Promise<any>((resolve, reject) => {
      try {
        const ret = this.real.wgk(route[routeDartMirror], result)
        resolve(ret)
      } catch (error) {
        reject(error)
      }
    })
  }

  pushReplacementNamed = <T, TO>(
    routeName: string,
    args?: {result?: TO; args?: any}
  ): Promise<T> => {
    return new Promise<any>((resolve, reject) => {
      try {
        const ret = this.real.wgl(routeName, args?.args, args?.result)
        resolve(ret)
      } catch (error) {
        reject(error)
      }
    })
  }
}

// N.OctoNavigatorState.prototype = {
//     wgc: function() {
//       return this.state.canPop$0();
//     },
//     wgd: function(result) {
//       this.state.pop$1(0, result);
//     },
//     octoPop$1: function(result) {
//       return this.wgd(result, type$.legacy_Object);
//     },
//     octoPop$0: function() {
//       return this.wgd(null, type$.legacy_Object);
//     },
//     octoPop$1$0: function($T) {
//       return this.wgd(null, $T);
//     },
//     wge: function(predicate) {
//       this.state.popUntil$1(predicate);
//     },
