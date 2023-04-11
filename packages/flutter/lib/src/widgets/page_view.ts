import {
  Duration,
  isNullOrUndefined,
  Clip,
  VoidCallback,
} from '@octoflutter/dartsdk'
import {SliverChildDelegate, Widget} from '../../widgets'
import {Curve, Curves} from '../animation/curves'
import {ValueChanged} from '../foundation/basic_types'
import {Listenable} from '../foundation/change_notifier'
import {Key, octoKey} from '../foundation/key'
import {DragStartBehavior} from '../gestures/recognizer'
import {Axis} from '../painting/basic_types'
import {ScrollPhysics} from './scroll_physics'
import {SliverChildListDelegate} from './sliver'

export class PageScrollPhysics extends N.PageScrollPhysics {
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class PageController extends N.OctoPageController implements Listenable {
  constructor(args?: {
    initialPage?: number
    keepPage?: boolean
    viewportFraction?: number
  }) {
    const real = N.pageControllerInstance(
      args?.initialPage ?? 0,
      args?.keepPage ?? true,
      args?.viewportFraction ?? 1.0
    )
    super(real)
  }

  get initialScrollOffset(): number {
    return super.wtr()
  }

  get offset(): number {
    return super.wts()
  }

  get keepScrollOffset(): number {
    return super.wtt()
  }

  public animateTo(
    offset: number,
    args?: {duration?: Duration; curve?: Curve}
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.wtu(
        offset,
        args?.duration ?? new Duration({milliseconds: 200}),
        args?.curve ?? Curves.ease,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public jumpTo(value: number): void {
    super.wtv(value)
  }

  get page(): number {
    return super.pca()
  }

  public animateToPage(
    page: number,
    args?: {duration?: Duration; curve?: Curve}
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.pcb(
        page,
        args?.duration ?? new Duration({milliseconds: 200}),
        args?.curve ?? Curves.ease,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public jumpToPage(page: number) {
    super.pcc(page)
  }

  public nextPage(args?: {duration?: Duration; curve?: Curve}): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.pcd(
        args?.duration ?? new Duration({milliseconds: 200}),
        args?.curve ?? Curves.ease,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public previousPage(args?: {
    duration?: Duration
    curve?: Curve
  }): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.pce(
        args?.duration ?? new Duration({milliseconds: 200}),
        args?.curve ?? Curves.ease,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  dispose() {
    super.dispose()
  }

  addListener(listener: VoidCallback) {
    N.octoChangeNotifierAdd(this, listener)
  }

  removeListener(listener: VoidCallback) {
    N.octoChangeNotifierRemove(this, listener)
  }
}

// OctoPageController: function OctoPageController(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//   var _ = this;
//   _.pageController = t0;
//   _.initialPage = t1;
//   _.keepPage = t2;
//   _.viewportFraction = t3;
//   _._initialScrollOffset = t4;
//   _.keepScrollOffset = t5;
//   _.debugLabel = t6;
//   _._scroll_controller0$_positions = t7;
//   _.ChangeNotifier__count = 0;
//   _.ChangeNotifier__listeners = t8;
//   _.ChangeNotifier__reentrantlyRemovedListeners = _.ChangeNotifier__notificationCallStackDepth = 0;
//   _.ChangeNotifier__debugDisposed = false;
// },

export class PageView extends N.PageView {
  constructor(args?: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: PageController
    physics?: ScrollPhysics
    pageSnapping?: boolean
    onPageChanged?: ValueChanged<number>
    children?: Array<Widget>
    dragStartBehavior?: DragStartBehavior
    allowImplicitScrolling?: boolean
    restorationId?: string
    clipBehavior?: Clip
    scrollBehavior?: ScrollBehavior
    padEnds?: boolean
    childrenDelegate?: SliverChildDelegate
  }) {
    let cb = null
    if (!isNullOrUndefined(args?.onPageChanged)) {
      cb = (index) => {
        args?.onPageChanged(index)
      }
    }
    super(
      args?.allowImplicitScrolling ?? false,
      args?.restorationId,
      args?.scrollDirection ?? Axis.horizontal,
      args?.reverse ?? false,
      args?.controller ?? new PageController(),
      args?.physics,
      args?.pageSnapping ?? true,
      cb,
      args?.childrenDelegate ?? new SliverChildListDelegate(args?.children),
      args?.dragStartBehavior ?? DragStartBehavior.start,
      args?.clipBehavior ?? Clip.hardEdge,
      args?.scrollBehavior,
      args?.padEnds ?? true,
      args?.key?.[octoKey]
    )
  }

  static custom = (args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: PageController
    physics?: ScrollPhysics
    pageSnapping?: boolean
    onPageChanged?: ValueChanged<number>
    dragStartBehavior?: DragStartBehavior
    allowImplicitScrolling?: boolean
    restorationId?: string
    clipBehavior?: Clip
    scrollBehavior?: ScrollBehavior
    padEnds?: boolean
    childrenDelegate: SliverChildDelegate
  }): PageView => {
    return new PageView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      physics: args.physics,
      pageSnapping: args.pageSnapping,
      onPageChanged: args.onPageChanged,
      dragStartBehavior: args.dragStartBehavior,
      allowImplicitScrolling: args.allowImplicitScrolling,
      restorationId: args.restorationId,
      clipBehavior: args.clipBehavior,
      scrollBehavior: args.scrollBehavior,
      padEnds: args.padEnds,
      childrenDelegate: args.childrenDelegate,
    })
  }
}

// PageView: function PageView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) {
//   var _ = this;
//   _.allowImplicitScrolling = t0;
//   _.restorationId = t1;
//   _.scrollDirection = t2;
//   _.reverse = t3;
//   _.controller = t4;
//   _.physics = t5;
//   _.pageSnapping = t6;
//   _.onPageChanged = t7;
//   _.childrenDelegate = t8;
//   _.dragStartBehavior = t9;
//   _.clipBehavior = t10;
//   _.scrollBehavior = t11;
//   _.padEnds = t12;
//   _.key0 = t13;
// },
