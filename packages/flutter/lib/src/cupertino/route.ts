import {LocalKey, octoKey} from '../foundation/key'
import {BuildContext, Widget, WidgetBuilder} from '../widgets/framework'
import {
  Page,
  Route,
  routeDartMirror,
  routeSettings,
  RouteSettings,
} from '../widgets/navigator'
import {PageRoute} from '../widgets/pages'
import {PopupRoute, RouteTransitionsBuilder} from '../widgets/routes'
import {isNullOrUndefined, Duration, Color} from '@octoflutter/dartsdk'
import {Animation} from '../animation/animation'

export class CupertinoPage<T> extends Page<T> {
  constructor(args: {
    child: Widget
    maintainState?: boolean
    title?: string
    fullscreenDialog?: boolean
    key?: LocalKey
    name?: string
    arguments?: any
    restorationId?: string
  }) {
    const real = N.cupertinoPageInstance(
      args.child,
      args.maintainState,
      args.title,
      args.fullscreenDialog,
      args.key?.[octoKey],
      args.name,
      args.arguments,
      args.restorationId
    )
    super({
      key: args.key,
      name: args.name,
      arguments: args.arguments,
      restorationId: args.restorationId,
    })
    this[routeSettings] = real
  }

  createRoute<T>(context: BuildContext): Route<T> {
    return N.octoPageCreateRoute(this[routeSettings], context) as Route<T>
  }
}

export class CupertinoPageRoute<T> extends PageRoute<T> {
  constructor(args: {
    builder: WidgetBuilder
    title?: string
    settings?: RouteSettings
    maintainState?: boolean
    fullscreenDialog?: boolean
  }) {
    super({
      settings: args.settings,
      fullscreenDialog: args.fullscreenDialog ?? false,
    })
    const wb = (ctx) => {
      return args.builder(new BuildContext(ctx))
    }
    const real = N.cupertinoPageRouteInstance(
      wb,
      args.title,
      args.settings?.[routeSettings],
      args.maintainState,
      args.fullscreenDialog
    )
    this[routeDartMirror] = real
    real[routeDartMirror] = this
  }
}

export class CupertinoModalPopupRoute<T> extends PopupRoute<T> {
  constructor(args: {
    builder: WidgetBuilder
    barrierLabel?: string
    barrierColor?: Color
    barrierDismissible?: boolean
    semanticsDismissible?: boolean
    filter?: any
    settings?: RouteSettings
  }) {
    super({settings: args.settings})
    const wb = (ctx) => {
      return args.builder(new BuildContext(ctx))
    }
    const real = N.cupertinoModalPopupRouteInstance(
      wb,
      args.barrierLabel,
      args.barrierColor,
      args.barrierDismissible,
      args.semanticsDismissible,
      args.filter,
      args.settings?.[routeSettings]
    )
    this[routeDartMirror] = real
    real[routeDartMirror] = this
  }
}

export class CupertinoDialogRoute<T> extends PopupRoute<T> {
  constructor(args: {
    builder: WidgetBuilder
    context: BuildContext
    barrierDismissible?: boolean
    barrierColor?: Color
    barrierLabel?: string
    transitionDuration?: Duration
    transitionBuilder?: RouteTransitionsBuilder
    settings?: RouteSettings
  }) {
    super({settings: args.settings})
    const wb = (ctx) => {
      return args.builder(new BuildContext(ctx))
    }
    const tb = (ctx, anim, anim2, child) => {
      return args.transitionBuilder(
        new BuildContext(ctx),
        new Animation<number>(anim),
        new Animation<number>(anim2),
        child
      )
    }
    const real = N.cupertinoDialogRouteInstance(
      wb,
      args.context,
      args.barrierDismissible,
      args.barrierColor,
      args.barrierLabel,
      args.transitionDuration,
      isNullOrUndefined(args.transitionBuilder) ? null : tb,
      args.settings?.[routeSettings]
    )
    this[routeDartMirror] = real
    real[routeDartMirror] = this
  }
}
