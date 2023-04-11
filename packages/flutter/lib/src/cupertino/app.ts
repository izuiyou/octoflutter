import {map4Dart, isNullOrUndefined, Color, Locale} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {ThemeData} from '../material/theme_data'
import {GenerateAppTitle, InitialRouteListFactory} from '../widgets/app'
import {
  BuildContext,
  GlobalKey,
  TransitionBuilder,
  Widget,
  WidgetBuilder,
} from '../widgets/framework'
import {
  NavigatorObserver,
  NavigatorState,
  routeDartMirror,
  RouteFactory,
  RouteSettings,
} from '../widgets/navigator'

export class CupertinoApp extends N.CupertinoApp {
  constructor(args?: {
    key?: Key
    navigatorKey?: GlobalKey<NavigatorState>
    home?: Widget
    theme?: ThemeData
    routes?: Map<string, WidgetBuilder>
    initialRoute?: string
    onGenerateRoute?: RouteFactory
    onGenerateInitialRoutes?: InitialRouteListFactory
    onUnknownRoute?: RouteFactory
    navigatorObservers?: Array<NavigatorObserver>
    builder?: TransitionBuilder
    title?: string
    onGenerateTitle?: GenerateAppTitle
    color?: Color
    locale?: Locale
    localizationsDelegates?: any
    localeListResolutionCallback?: any
    localeResolutionCallback?: any
    supportedLocales?: Array<Locale>
    showPerformanceOverlay?: boolean
    checkerboardRasterCacheImages?: boolean
    checkerboardOffscreenLayers?: boolean
    showSemanticsDebugger?: boolean
    debugShowCheckedModeBanner?: boolean
    shortcuts?: any
    actions?: any
    restorationScopeId?: string
    scrollBehavior?: ScrollBehavior
  }) {
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

    const initial = (initialRoute: any) => {
      return args
        ?.onGenerateInitialRoutes(initialRoute)
        .map((item, index, arr) => {
          return item?.[routeDartMirror]
        })
    }

    const apptitle = (ctx: any) => {
      return args?.onGenerateTitle(new BuildContext(ctx))
    }

    const routes = new Map()
    if (!isNullOrUndefined(args?.routes)) {
      args?.routes.forEach((v, k, map) => {
        routes.set(k, (ctx) => {
          return v(new BuildContext(ctx))
        })
      })
    }

    super(
      args?.navigatorKey?.[octoKey],
      args?.home,
      args?.theme,
      map4Dart(routes),
      args?.initialRoute,
      isNullOrUndefined(args?.onGenerateRoute) ? null : generate,
      isNullOrUndefined(args?.onGenerateInitialRoutes) ? null : initial,
      isNullOrUndefined(args?.onUnknownRoute) ? null : unknown,
      args?.navigatorObservers ?? [],
      args?.builder,
      args?.title ?? '',
      isNullOrUndefined(args?.onGenerateTitle) ? null : apptitle,
      args?.color,
      args?.locale,
      args?.localizationsDelegates,
      args?.localeListResolutionCallback,
      args?.localeResolutionCallback,
      args?.supportedLocales ?? [new Locale('en', 'US')],
      args?.showPerformanceOverlay ?? false,
      args?.checkerboardRasterCacheImages ?? false,
      args?.checkerboardOffscreenLayers ?? false,
      args?.showSemanticsDebugger ?? false,
      args?.debugShowCheckedModeBanner ?? true,
      args?.shortcuts,
      args?.actions,
      args?.restorationScopeId,
      args?.scrollBehavior,
      args?.key?.[octoKey]
    )
  }
}

// CupertinoApp: function CupertinoApp(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27) {
//     var _ = this;
//     _.navigatorKey = t0;
//     _.home = t1;
//     _.theme = t2;
//     _.routes = t3;
//     _.initialRoute = t4;
//     _.onGenerateRoute = t5;
//     _.onGenerateInitialRoutes = t6;
//     _.onUnknownRoute = t7;
//     _.navigatorObservers = t8;
//     _.builder = t9;
//     _.title = t10;
//     _.onGenerateTitle = t11;
//     _.color = t12;
//     _.locale = t13;
//     _.localizationsDelegates = t14;
//     _.localeListResolutionCallback = t15;
//     _.localeResolutionCallback = t16;
//     _.supportedLocales = t17;
//     _.showPerformanceOverlay = t18;
//     _.checkerboardRasterCacheImages = t19;
//     _.checkerboardOffscreenLayers = t20;
//     _.showSemanticsDebugger = t21;
//     _.debugShowCheckedModeBanner = t22;
//     _.shortcuts = t23;
//     _.actions = t24;
//     _.restorationScopeId = t25;
//     _.scrollBehavior = t26;
//     _.key = t27;
//   },
