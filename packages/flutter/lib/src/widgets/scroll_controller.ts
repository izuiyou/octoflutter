import {Duration, VoidCallback} from '@octoflutter/dartsdk'
import {Curve, Curves} from '../animation/curves'
import {Listenable} from '../foundation/change_notifier'

export class ScrollController
  extends N.OctoScrollController
  implements Listenable
{
  constructor(args?: {
    initialScrollOffset?: number
    keepScrollOffset?: boolean
    debugLabel?: string
  }) {
    const real = N.scrollControllerInstance(
      args?.initialScrollOffset,
      args?.keepScrollOffset,
      args?.debugLabel
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

// OctoScrollController: function OctoScrollController(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.scrollController = t0;
//     _._initialScrollOffset = t1;
//     _.keepScrollOffset = t2;
//     _.debugLabel = t3;
//     _._positions = t4;
//     _.ChangeNotifier__listeners = t5;
//   },
