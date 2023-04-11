import {Color, Duration, isNullOrUndefined} from '@octoflutter/dartsdk'
import {BuildContext, TransitionBuilder} from './framework'
import {routeDartMirror, routeSettings, RouteSettings} from './navigator'
import {ModalRoute, RoutePageBuilder, RouteTransitionsBuilder} from './routes'
import {Animation} from '../animation/animation'

export abstract class PageRoute<T> extends ModalRoute<T> {
  constructor(args?: {settings?: RouteSettings; fullscreenDialog?: boolean}) {
    super({settings: args?.settings})
  }
}

export class PageRouteBuilder<T> extends PageRoute<T> {
  constructor(args: {
    settings?: RouteSettings
    pageBuilder: RoutePageBuilder
    transitionsBuilder?: RouteTransitionsBuilder
    transitionDuration?: Duration
    reverseTransitionDuration?: Duration
    opaque?: boolean
    barrierDismissible?: boolean
    barrierColor?: Color
    barrierLabel?: string
    maintainState?: boolean
    fullscreenDialog?: boolean
  }) {
    super({
      settings: args.settings,
      fullscreenDialog: args.fullscreenDialog ?? false,
    })
    const tb = (ctx, anim, anim2, child) => {
      return args.transitionsBuilder(
        new BuildContext(ctx),
        new Animation<number>(anim),
        new Animation<number>(anim2),
        child
      )
    }
    const real = N.pageRouteBuilderInstance(
      args.settings?.[routeSettings],
      (ctx, anim, anim2) => {
        return args.pageBuilder(
          new BuildContext(ctx),
          new Animation<number>(anim),
          new Animation<number>(anim2)
        )
      },
      isNullOrUndefined(args.transitionsBuilder) ? null : tb,
      args.transitionDuration,
      args.reverseTransitionDuration,
      args.opaque,
      args.barrierDismissible,
      args.barrierColor,
      args.barrierLabel,
      args.maintainState,
      args.fullscreenDialog
    )
    this[routeDartMirror] = real
    real[routeDartMirror] = this
  }
}
