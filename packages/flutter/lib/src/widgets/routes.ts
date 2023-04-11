import {Color, Duration, isNullOrUndefined} from '@octoflutter/dartsdk'
import {
  BuildContext,
  octoModalRoute,
  TransitionBuilder,
  Widget,
} from './framework'
import {
  NavigatorObserver,
  Route,
  routeDartMirror,
  RouteSettings,
} from './navigator'
import {Animation} from '../animation/animation'

export abstract class RouteAware extends N.OctoRouteAware {
  abstract didPopNext(): void
  abstract didPush(): void
  abstract didPop(): void
  abstract didPushNext(): void

  private wgm() {
    this.didPush()
  }

  private wgn() {
    this.didPop()
  }

  private wgo() {
    this.didPushNext()
  }

  private wgp() {
    this.didPopNext()
  }
}

export class RouteObserver<R extends Route<any>> extends NavigatorObserver {
  constructor() {
    super()
  }

  subscribe(routeAware: RouteAware, route: R): void {
    super.wta(routeAware, route[routeDartMirror])
  }

  unsubscribe(routeAware: RouteAware): void {
    super.wtb(routeAware)
  }
}

export abstract class OverlayRoute<T> extends Route<T> {
  constructor(args?: {settings?: RouteSettings}) {
    super(args?.settings)
  }
}

export abstract class TransitionRoute<T> extends OverlayRoute<T> {
  constructor(args?: {settings?: RouteSettings}) {
    super(args)
  }
}

export abstract class ModalRoute<T> extends TransitionRoute<T> {
  constructor(args?: {settings?: RouteSettings}) {
    super(args)
  }

  static of<T>(context: BuildContext): ModalRoute<T> {
    //这里取到的ModalRoute可能是dart侧框架生成的原始的ModalRoute
    //针对这种暂时返回_ProxyModalRoute
    const real = context[octoModalRoute]()
    return real[routeDartMirror] ?? new _ProxyModalRoute(real)
  }
}

export class _ProxyModalRoute extends ModalRoute<any> {
  private readonly octoRoute: any

  constructor(real: any) {
    const octoRoute = N.octoModalRouteInstance(real)
    const settings = new RouteSettings({
      name: octoRoute.wti(),
      arguments: octoRoute.wtj(),
    })
    super({settings: settings})
    this.octoRoute = octoRoute
    this[routeDartMirror] = real
    real[routeDartMirror] = this
  }
}

export abstract class PopupRoute<T> extends ModalRoute<T> {
  constructor(args?: {settings?: RouteSettings}) {
    super(args)
  }
}

export class RawDialogRoute<T> extends PopupRoute<T> {
  constructor(args: {
    pageBuilder: RoutePageBuilder
    settings?: RouteSettings
    barrierDismissible?: boolean
    barrierColor?: Color
    barrierLabel?: string
    transitionDuration?: Duration
    transitionBuilder?: RouteTransitionsBuilder
  }) {
    super({settings: args.settings})
    const tb = (ctx, anim, anim2, child) => {
      return args.transitionBuilder(
        new BuildContext(ctx),
        new Animation<number>(anim),
        new Animation<number>(anim2),
        child
      )
    }
    const real = N.rawDialogRouteInstance(
      (ctx, anim, anim2) => {
        return args.pageBuilder(
          new BuildContext(ctx),
          new Animation<number>(anim),
          new Animation<number>(anim2)
        )
      },
      args.barrierDismissible,
      args.barrierColor,
      args.barrierLabel,
      args.transitionDuration,
      isNullOrUndefined(args.transitionBuilder) ? null : tb
    )
    this[routeDartMirror] = real
    real[routeDartMirror] = this
  }
}

export type RoutePageBuilder = (
  context: BuildContext,
  animation: Animation<number>,
  secondaryAnimation: Animation<number>
) => Widget

export type RouteTransitionsBuilder = (
  context: BuildContext,
  animation: Animation<number>,
  secondaryAnimation: Animation<number>,
  child: Widget
) => Widget

export const showGeneralDialog = <T>(args: {
  context: BuildContext
  pageBuilder: RoutePageBuilder
  barrierDismissible?: boolean
  barrierLabel?: string
  barrierColor?: Color
  transitionDuration?: Duration
  transitionBuilder?: RouteTransitionsBuilder
  useRootNavigator?: boolean
  routeSettings?: RouteSettings
}): Promise<T> => {
  let tb
  if (!isNullOrUndefined(args.transitionBuilder)) {
    tb = (ctx, anim, anim2, child) => {
      return args.transitionBuilder(
        new BuildContext(ctx),
        new Animation<number>(anim),
        new Animation<number>(anim2),
        child
      )
    }
  }

  const pb = (ctx, anim, anim2) => {
    return args.pageBuilder(
      new BuildContext(ctx),
      new Animation<number>(anim),
      new Animation<number>(anim2)
    )
  }

  return new Promise<T>((resolve, reject) => {
    N.octoShowGeneralDialog(
      args.context,
      pb,
      args.barrierDismissible,
      args.barrierLabel,
      args.barrierColor,
      args.transitionDuration,
      tb,
      args.useRootNavigator,
      args.routeSettings,
      (ret) => {
        resolve(ret)
      },
      (err) => {
        reject(err)
      }
    )
  })
}
