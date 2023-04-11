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

export class MaterialPage<T> extends Page<T> {
  constructor(args: {
    child: Widget
    maintainState?: boolean
    fullscreenDialog?: boolean
    key?: LocalKey
    name?: string
    arguments?: any
    restorationId?: string
  }) {
    const real = N.materialPageInstance(
      args.child,
      args.maintainState,
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

export class MaterialPageRoute<T> extends PageRoute<T> {
  constructor(args: {
    builder: WidgetBuilder
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

    const real = N.materialPageRouteInstance(
      wb,
      args.settings?.[routeSettings],
      args.maintainState,
      args.fullscreenDialog
    )
    this[routeDartMirror] = real
    real[routeDartMirror] = this
  }
}
