import {map4Dart, isNullOrUndefined, Color, Locale} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
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
import {ThemeData} from './theme_data'

export enum ThemeMode {
  system = C.ThemeMode_0,
  light = C.ThemeMode_1,
  dark = C.ThemeMode_2,
}

export class MaterialApp extends N.MaterialApp {
  constructor(args?: {
    key?: Key
    navigatorKey?: GlobalKey<NavigatorState>
    scaffoldMessengerKey?: GlobalKey<any>
    home?: Widget
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
    theme?: ThemeData
    darkTheme?: ThemeData
    highContrastTheme?: ThemeData
    highContrastDarkTheme?: ThemeData
    themeMode?: ThemeMode
    locale?: Locale
    localizationsDelegates?: any
    localeListResolutionCallback?: any
    localeResolutionCallback?: any
    supportedLocales?: Array<Locale>
    debugShowMaterialGrid?: boolean
    showPerformanceOverlay?: boolean
    checkerboardRasterCacheImages?: boolean
    checkerboardOffscreenLayers?: boolean
    showSemanticsDebugger?: boolean
    debugShowCheckedModeBanner?: boolean
    shortcuts?: any
    actions?: any
    restorationScopeId?: string
    scrollBehavior?: ScrollBehavior
    useInheritedMediaQuery?: boolean
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
      args?.scaffoldMessengerKey?.[octoKey],
      args?.home,
      map4Dart(routes),
      args?.initialRoute,
      isNullOrUndefined(args?.onGenerateRoute) ? null : generate,
      isNullOrUndefined(args?.onGenerateInitialRoutes) ? null : initial,
      isNullOrUndefined(args?.onUnknownRoute) ? null : unknown,
      args?.navigatorObservers ?? [],
      args?.builder,
      args?.title ?? '',
      isNullOrUndefined(args?.onGenerateTitle) ? null : apptitle,
      args?.theme,
      args?.darkTheme,
      args?.highContrastTheme,
      args?.highContrastDarkTheme,
      args?.themeMode ?? ThemeMode.system,
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
      args?.debugShowMaterialGrid ?? false,
      args?.useInheritedMediaQuery ?? false,
      args?.key?.[octoKey]
    )
  }
}

// MaterialApp: function MaterialApp(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34) {
//   var _ = this;
//   _.navigatorKey = t0;
//   _.scaffoldMessengerKey = t1;
//   _.home = t2;
//   _.routes = t3;
//   _.initialRoute = t4;
//   _.onGenerateRoute = t5;
//   _.onGenerateInitialRoutes = t6;
//   _.onUnknownRoute = t7;
//   _.navigatorObservers = t8;
//   _.builder = t9;
//   _.title = t10;
//   _.onGenerateTitle = t11;
//   _.theme = t12;
//   _.darkTheme = t13;
//   _.highContrastTheme = t14;
//   _.highContrastDarkTheme = t15;
//   _.themeMode = t16;
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
//   _.debugShowCheckedModeBanner = t27;
//   _.shortcuts = t28;
//   _.actions = t29;
//   _.restorationScopeId = t30;
//   _.scrollBehavior = t31;
//   _.debugShowMaterialGrid = t32;
//   _.useInheritedMediaQuery = t33;
//   _.key0 = t34;
// },

export class MaterialScrollBehavior extends N.MaterialScrollBehavior {}
