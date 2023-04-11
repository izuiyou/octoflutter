import {Clip, Duration, isNullOrUndefined} from '@octoflutter/dartsdk'
import {Animation} from '../animation/animation'
import {Key, octoKey} from '../foundation/key'
import {Axis} from '../painting/basic_types'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {SchedulerBinding} from '../scheduler/binding'
import {
  BuildContext,
  GlobalKey,
  octoAnimatedListState,
  Widget,
} from './framework'
import {ScrollController} from './scroll_controller'
import {ScrollPhysics} from './scroll_physics'

export type AnimatedListItemBuilder = (
  context: BuildContext,
  index: number,
  animation: Animation<number>
) => Widget

export type AnimatedListRemovedItemBuilder = (
  context: BuildContext,
  animation: Animation<number>
) => Widget

export class AnimatedListState extends N.OctoAnimatedListState {
  constructor(real: any) {
    super(real)
  }

  insertItem = (index: number, duration?: Duration) => {
    super.ala(index, duration ?? new Duration({milliseconds: 300}))
  }

  removeItem = (
    index: number,
    builder: AnimatedListRemovedItemBuilder,
    duration?: Duration
  ) => {
    const cb = (ctx, anim) => {
      return builder(new BuildContext(ctx), new Animation<number>(anim))
    }
    super.alb(index, cb, duration ?? new Duration({milliseconds: 300}))
  }
}

// OctoAnimatedListState: function OctoAnimatedListState(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.state = t0;
//     _._sliverAnimatedListKey = t1;
//     _.TickerProviderStateMixin__tickers = t2;
//     _.TickerProviderStateMixin__tickerModeNotifier = t3;
//     _._widget = null;
//     _._debugLifecycleState = t4;
//     _._element = null;
//   },

export class AnimatedList extends N.AnimatedList {
  private _localKey: Key

  constructor(args: {
    key?: Key
    itemBuilder: AnimatedListItemBuilder
    initialItemCount?: number
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    clipBehavior?: Clip
  }) {
    const cb = (ctx, index, anim) => {
      return args.itemBuilder(
        new BuildContext(ctx),
        index,
        new Animation<number>(anim)
      )
    }
    super(
      cb,
      args.initialItemCount ?? 0,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? (isNullOrUndefined(args.controller) ? true : false),
      args.physics,
      args.shrinkWrap ?? false,
      args.padding,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    )
    this._localKey = args.key
  }

  static of(context: BuildContext): AnimatedListState {
    return new AnimatedListState(context[octoAnimatedListState]())
  }
  static ofKey(key: GlobalKey<any>): AnimatedListState {
    return new AnimatedListState(key._state)
  }

  private wga() {
    const ret = super.wga()
    if (
      !isNullOrUndefined(this._localKey) &&
      this._localKey instanceof GlobalKey
    ) {
      this._localKey._state = ret
      this._localKey._state.currentWidget = this
    }
    return ret
  }
}

// AnimatedList: function AnimatedList(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) {
//     var _ = this;
//     _.itemBuilder = t0;
//     _.initialItemCount = t1;
//     _.scrollDirection = t2;
//     _.reverse = t3;
//     _.controller = t4;
//     _.primary = t5;
//     _.physics = t6;
//     _.shrinkWrap = t7;
//     _.padding = t8;
//     _.clipBehavior = t9;
//     _.key0 = t10;
//   },
