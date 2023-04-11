import {map4Dart, isNullOrUndefined, Color, Locale} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {TextStyle} from '../painting/text_style'
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
  Route,
  routeDartMirror,
  RouteFactory,
  RouteSettings,
} from '../widgets/navigator'

export type GenerateAppTitle = (context: BuildContext) => string

export type InitialRouteListFactory = (
  initialRoute: string
) => Array<Route<any>>

export class WidgetsApp extends N.WidgetsApp {
  constructor(args: {
    key?: Key
    navigatorKey?: GlobalKey<NavigatorState>
    onGenerateRoute?: RouteFactory
    onGenerateInitialRoutes?: InitialRouteListFactory
    onUnknownRoute?: RouteFactory
    navigatorObservers?: Array<NavigatorObserver>
    initialRoute?: string
    home?: Widget
    pageRouteBuilder?: any
    routes?: Map<string, WidgetBuilder>
    builder?: TransitionBuilder
    title?: string
    onGenerateTitle?: GenerateAppTitle
    textStyle?: TextStyle
    color: Color
    locale?: Locale
    localizationsDelegates?: any
    localeListResolutionCallback?: any
    localeResolutionCallback?: any
    supportedLocales?: Array<Locale>
    showPerformanceOverlay?: boolean
    checkerboardRasterCacheImages?: boolean
    checkerboardOffscreenLayers?: boolean
    showSemanticsDebugger?: boolean
    debugShowWidgetInspector?: boolean
    debugShowCheckedModeBanner?: boolean
    inspectorSelectButtonBuilder?: any
    shortcuts?: any
    actions?: any
    restorationScopeId?: string
    useInheritedMediaQuery?: boolean
  }) {
    const generate = (settings: any) => {
      return args.onGenerateRoute(
        new RouteSettings({
          name: N.octoSettingsName(settings),
          arguments: N.octoSettingsArgs(settings),
        })
      )?.[routeDartMirror]
    }

    const unknown = (settings: any) => {
      return args.onUnknownRoute(
        new RouteSettings({
          name: N.octoSettingsName(settings),
          arguments: N.octoSettingsArgs(settings),
        })
      )?.[routeDartMirror]
    }

    const initial = (initialRoute: any) => {
      return args
        .onGenerateInitialRoutes(initialRoute)
        .map((item, index, arr) => {
          return item?.[routeDartMirror]
        })
    }

    const apptitle = (ctx: any) => {
      return args.onGenerateTitle(new BuildContext(ctx))
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
      args.navigatorKey?.[octoKey],
      isNullOrUndefined(args.onGenerateRoute) ? null : generate,
      isNullOrUndefined(args.onGenerateInitialRoutes) ? null : initial,
      args.pageRouteBuilder,
      null,
      null,
      null,
      null,
      args.home,
      map4Dart(routes),
      isNullOrUndefined(args.onUnknownRoute) ? null : unknown,
      args.initialRoute,
      args.navigatorObservers ?? [],
      args.builder,
      args.title ?? '',
      isNullOrUndefined(args.onGenerateTitle) ? null : apptitle,
      args.textStyle,
      args.color,
      args.locale,
      args.localizationsDelegates,
      args.localeListResolutionCallback,
      args.localeResolutionCallback,
      args.supportedLocales ?? [new Locale('en', 'US')],
      args.showPerformanceOverlay ?? false,
      args.checkerboardRasterCacheImages ?? false,
      args.checkerboardOffscreenLayers ?? false,
      args.showSemanticsDebugger ?? false,
      args.debugShowWidgetInspector,
      args.inspectorSelectButtonBuilder,
      args.debugShowCheckedModeBanner ?? true,
      args.shortcuts,
      args.actions,
      args.restorationScopeId,
      args.useInheritedMediaQuery ?? false,
      args.key?.[octoKey]
    )
  }
}

// WidgetsApp: function WidgetsApp(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34) {
//   var _ = this;
//   _.navigatorKey = t0;
//   _.onGenerateRoute = t1;
//   _.onGenerateInitialRoutes = t2;
//   _.pageRouteBuilder = t3;
//   _.routeInformationParser = t4;
//   _.routerDelegate = t5;
//   _.backButtonDispatcher = t6;
//   _.routeInformationProvider = t7;
//   _.home = t8;
//   _.routes = t9;
//   _.onUnknownRoute = t10;
//   _.initialRoute = t11;
//   _.navigatorObservers = t12;
//   _.builder = t13;
//   _.title = t14;
//   _.onGenerateTitle = t15;
//   _.textStyle = t16;
//   _.color = t17;
//   _.locale = t18;
//   _.localizationsDelegates = t19;
//   _.localeListResolutionCallback = t20;
//   _.localeResolutionCallback = t21;
//   _.supportedLocales = t22;
//   _.showPerformanceOverlay = t23;
//   _.checkerboardRasterCacheImages = t24;
//   _.checkerboardOffscreenLayers = t25;
//   _.showSemanticsDebugger = t26;
//   _.debugShowWidgetInspector = t27;
//   _.inspectorSelectButtonBuilder = t28;
//   _.debugShowCheckedModeBanner = t29;
//   _.shortcuts = t30;
//   _.actions = t31;
//   _.restorationScopeId = t32;
//   _.useInheritedMediaQuery = t33;
//   _.key0 = t34;
// },
