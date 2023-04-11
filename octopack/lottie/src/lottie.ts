import {Canvas, isNullOrUndefined, VoidCallback} from '@octoflutter/dartsdk'
import {
  AlignmentGeometry,
  BoxFit,
  Key,
  Animation,
  AssetBundle,
  Alignment,
} from '@octoflutter/flutter'

N.octoLoadLottie()

export abstract class LottieProvider {}

export type LottieLoadCallback = (composition: any) => void
export type LottiePreloadCallback = (success: boolean) => void

export class LottieBuilder extends LOTTIE.LottieBuilder {
  constructor(args: {
    lottie: LottieProvider
    onLoad?: LottieLoadCallback
    controller?: Animation<number>
    frameRate?: any
    animate?: boolean
    repeat?: boolean
    reverse?: boolean
    delegates?: any
    options?: any
    frameBuilder?: any
    width?: number
    height?: number
    fit?: BoxFit
    alignment?: AlignmentGeometry
    addRepaintBoundary?: boolean
    onWarning?: any
    errorBuilder?: any
    key?: Key
  }) {
    let cb = null
    if (!isNullOrUndefined(args.onLoad)) {
      cb = (composition) => {
        args.onLoad(composition)
      }
    }

    super(
      args.lottie,
      cb,
      args.controller,
      args.frameRate,
      args.animate,
      args.repeat,
      args.reverse,
      args.delegates,
      args.options,
      args.frameBuilder,
      args.width,
      args.height,
      args.fit,
      args.alignment,
      args.addRepaintBoundary,
      args.onWarning,
      args.errorBuilder,
      args.key
    )
  }
}

// LottieBuilder: function LottieBuilder(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17) {
//   var _ = this;
//   _.lottie = t0;
//   _.onLoaded = t1;
//   _.controller = t2;
//   _.frameRate = t3;
//   _.animate = t4;
//   _.repeat = t5;
//   _.reverse = t6;
//   _.delegates = t7;
//   _.options = t8;
//   _.frameBuilder = t9;
//   _.width = t10;
//   _.height = t11;
//   _.fit = t12;
//   _.alignment = t13;
//   _.addRepaintBoundary = t14;
//   _.onWarning = t15;
//   _.errorBuilder = t16;
//   _.key0 = t17;
// },

export class AssetLottie extends LOTTIE.AssetLottie implements LottieProvider {
  constructor(
    assetName: string,
    args?: {
      bundle?: AssetBundle
      package?: string
      imageProviderFactory?: any
    }
  ) {
    super(
      assetName,
      args?.bundle ?? N.octoRootBundle(OctoAppBundleId),
      args?.package,
      [],
      args?.imageProviderFactory
    )
  }

  prepare = (cb: LottiePreloadCallback) => {
    super.lta((success) => {
      if (!isNullOrUndefined(cb)) {
        cb(success)
      }
    })
  }

  dispose() {
    super.dispose()
  }
}

// AssetLottie: function AssetLottie(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.assetName = t0;
//   _.bundle = t1;
//   _.$package = t2;
//   _._composition = null;
//   _._infos = t3;
//   _.imageProviderFactory = t4;
//   _._disposed = false;
// },

export class OctoLottieAnimation extends LOTTIE.OctoLottieAnimation {
  constructor(args: {
    lottie: AssetLottie
    fit?: BoxFit
    alignment?: Alignment
  }) {
    super(args.lottie, args.fit, args.alignment ?? Alignment.center)
  }

  drawLottie = (canvas: Canvas, width: number, height: number): void => {
    super.ltb(canvas, width, height)
  }

  advance = (dt: number) => {
    super.ltc(dt)
  }

  set completedCallback(callback: VoidCallback) {
    if (!isNullOrUndefined(callback)) {
      super.ltd(callback)
    }
  }

  reset() {
    super.lte()
  }

  prepare = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      super.ltf(
        () => {
          resolve()
        },
        (e) => {
          reject(e)
        }
      )
    })
  }

  get isLoaded(): boolean {
    return super.ltg()
  }
}

// OctoLottieAnimation: function OctoLottieAnimation(t0, t1, t2) {
//   var _ = this;
//   _.lottie = t0;
//   _._fit = t1;
//   _._alignment = t2;
//   _._drawable = _._composition = _.frameCompletedCallback = null;
// },
