import {isNullOrUndefined} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {BuildContext, Widget} from '../widgets/framework'

export type RefreshCallback = () => Promise<void>

export enum RefreshIndicatorMode {
  inactive = C.RefreshIndicatorMode_0,
  drag = C.RefreshIndicatorMode_1,
  armed = C.RefreshIndicatorMode_2,
  refresh = C.RefreshIndicatorMode_3,
  done = C.RefreshIndicatorMode_4,
}

export type RefreshControlIndicatorBuilder = (
  context: BuildContext,
  refreshState: RefreshIndicatorMode,
  pulledExtent: number,
  refreshTriggerPullDistance: number,
  refreshIndicatorExtent: number
) => Widget

export class CupertinoSliverRefreshControl extends N.CupertinoSliverRefreshControl {
  constructor(args?: {
    key?: Key
    refreshIndicatorExtent?: number
    refreshTriggerPullDistance?: number
    builder?: RefreshControlIndicatorBuilder
    onRefresh?: RefreshCallback
  }) {
    let bd = null
    if (isNullOrUndefined(args?.builder)) {
      bd = (ctx, state, pull, distance, indicator) => {
        return N.cupertinoBuildRefreshIndicator(
          ctx,
          state,
          pull,
          distance,
          indicator
        )
      }
    } else {
      bd = (ctx, state, pull, distance, indicator) => {
        return args?.builder(
          new BuildContext(ctx),
          state,
          pull,
          distance,
          indicator
        )
      }
    }

    const refreshCb = N.callbackToFutureVoidCallback(() => {
      if (!isNullOrUndefined(args?.onRefresh)) {
        args
          ?.onRefresh()
          .then((v) => {})
          .catch((e) => {})
      }
    })

    super(
      args?.refreshTriggerPullDistance ?? 100,
      args?.refreshIndicatorExtent ?? 60,
      bd,
      refreshCb,
      args?.key?.[octoKey]
    )
  }
}

// CupertinoSliverRefreshControl: function CupertinoSliverRefreshControl(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.refreshTriggerPullDistance = t0;
//     _.refreshIndicatorExtent = t1;
//     _.builder = t2;
//     _.onRefresh = t3;
//     _.key0 = t4;
//   },
