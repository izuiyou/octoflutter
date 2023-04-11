import {Duration, isNullOrUndefined, VoidCallback} from '@octoflutter/dartsdk'
import {Curve, Curves} from '../animation/curves'
import {Key, octoKey} from '../foundation/key'
import {TickerProvider} from '../scheduler/ticker'
import {BuildContext, octoTabCtrl, Widget} from '../widgets/framework'

export class TabController extends N.OctoTabController {
  constructor(args: {
    initialIndex?: number
    animationDuration?: Duration
    length: number
    vsync: TickerProvider
    real?: any
  }) {
    super(
      args.real ??
        N.tabControllerInstance(
          args.initialIndex ?? 0,
          args.animationDuration,
          args.length,
          args.vsync
        ),
      args.vsync
    )
  }

  set index(i: number) {
    super.tca(i)
  }

  get index(): number {
    return super.tcb()
  }

  get previousIndex(): number {
    return super.tcc()
  }

  get indexIsChanging(): boolean {
    return super.tcd()
  }

  set offset(i: number) {
    super.tce(i)
  }

  get offset(): number {
    return super.tcf()
  }

  animateTo = (
    value: number,
    args?: {duration?: Duration; curve?: Curve}
  ): void => {
    super.tcg(
      value,
      args?.duration ?? new Duration({milliseconds: 200}),
      args?.curve ?? Curves.ease
    )
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

export class DefaultTabController extends N.DefaultTabController {
  constructor(args: {
    key?: Key
    length: number
    initialIndex?: number
    child: Widget
    animationDuration?: Duration
  }) {
    super(
      args.length,
      args.initialIndex ?? 0,
      args.animationDuration,
      args.child,
      args.key?.[octoKey]
    )
  }

  static of(context: BuildContext): TabController | null | undefined {
    const real = context[octoTabCtrl]()
    if (isNullOrUndefined(real)) {
      return real
    }

    return new TabController({
      real: real,
      length: 0,
      vsync: null,
    })
  }
}

// DefaultTabController: function DefaultTabController(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.length = t0;
//     _.initialIndex = t1;
//     _.animationDuration = t2;
//     _.child = t3;
//     _.key0 = t4;
//   },
