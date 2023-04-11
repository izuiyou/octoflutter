import {Canvas, Color, isNullOrUndefined} from '@octoflutter/dartsdk'
import {
  Alignment,
  AssetBundle,
  BoxFit,
  BuildContext,
  Key,
  octoKey,
  Widget,
} from '@octoflutter/flutter'

export type FlareCompletedCallback = (name: string) => void

N.octoLoadFlare()

export class FlareActor extends FLARE.OctoFlareActor {
  constructor(
    filename: string,
    args?: {
      boundsNode?: string
      animation?: string
      fit?: BoxFit
      alignment?: Alignment
      isPaused?: boolean
      snapToEnd?: boolean
      callback?: FlareCompletedCallback
      color?: Color
      shouldClip?: boolean
      sizeFromArtboard?: boolean
      artboard?: string
      antialias?: boolean
    }
  ) {
    let cb = null
    if (!isNullOrUndefined(args?.callback)) {
      cb = (s) => {
        args?.callback(s)
      }
    }

    super(
      OctoAppBundleId,
      filename,
      null,
      args?.artboard,
      args?.animation,
      args?.snapToEnd ?? false,
      args?.fit ?? BoxFit.contain,
      args?.alignment ?? Alignment.center,
      args?.isPaused ?? false,
      args?.shouldClip ?? true,
      null,
      cb,
      args?.color,
      args?.boundsNode,
      args?.sizeFromArtboard ?? false,
      args?.antialias ?? true
    )
  }

  static asset = (
    flareProvider: AssetProvider,
    args: {
      boundsNode?: string
      animation?: string
      fit?: BoxFit
      alignment?: Alignment
      isPaused?: boolean
      snapToEnd?: boolean
      controller?: any
      callback?: FlareCompletedCallback
      color?: Color
      shouldClip?: boolean
      sizeFromArtboard?: boolean
      artboard?: string
      antialias?: boolean
    }
  ) => {
    let cb = null
    if (!isNullOrUndefined(args.callback)) {
      cb = (s) => {
        args.callback(s)
      }
    }

    return FLARE.flareActorAssetInstance(
      OctoAppBundleId,
      flareProvider,
      args.boundsNode,
      args.animation,
      args.fit,
      args.alignment,
      args.isPaused,
      args.snapToEnd,
      args.controller,
      cb,
      args.color,
      args.shouldClip,
      args.sizeFromArtboard,
      args.artboard,
      args.antialias
    ) as FlareActor
  }
}

// OctoFlareActor: function OctoFlareActor(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16) {
//   var _ = this;
//   _.bid = t0;
//   _.filename = t1;
//   _.flareProvider = t2;
//   _.artboard = t3;
//   _.animation = t4;
//   _.snapToEnd = t5;
//   _.fit = t6;
//   _.alignment = t7;
//   _.isPaused = t8;
//   _.shouldClip = t9;
//   _.controller = t10;
//   _.callback = t11;
//   _.color = t12;
//   _.boundsNode = t13;
//   _.sizeFromArtboard = t14;
//   _.antialias = t15;
//   _.key = t16;
// },

export class AssetFlare extends FLARE.AssetFlare {
  public readonly bundle: AssetBundle
  public readonly name: string
  constructor(args: {bundle: AssetBundle; name: string}) {
    super(args.bundle, args.name)
    this.bundle = args.bundle
    this.name = args.name
  }
}

export type AssetProvider = AssetFlare

export type FlareWidgetBuilder = (
  context: BuildContext,
  isWarm: boolean
) => Widget

export class FlareCacheBuilder extends FLARE.FlareCacheBuilder {
  constructor(
    assetProviders: Array<AssetProvider>,
    args: {
      key?: Key
      builder: FlareWidgetBuilder
    }
  ) {
    const fb = (ctx, isWarm) => {
      return args.builder(new BuildContext(ctx), isWarm)
    }
    super(fb, assetProviders, args.key?.[octoKey])
  }
}

export class FlareAnimation extends FLARE.OctoFlareAnimation {
  constructor(name: string) {
    super(name, [])
  }

  loadFlareAsset = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      super.fra(
        OctoAppBundleId,
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
    return super.frb()
  }

  drawFlare = (canvas: Canvas, width: number, height: number): void => {
    super.frc(canvas, width, height)
  }

  advance = (dt: number) => {
    super.frd(dt)
  }

  set completedCallback(callback: FlareCompletedCallback) {
    if (!isNullOrUndefined(callback)) {
      const cb = (s) => {
        callback(s)
      }
      super.fre(cb)
    }
  }

  set animation(name: string) {
    super.frf(name)
  }

  reset() {
    super.frg()
  }

  dispose() {
    super.frh()
  }
}

// OctoFlareAnimation: function OctoFlareAnimation(t0, t1) {
//   var _ = this;
//   _.name = t0;
//   _._flare$_actor = _._completedCallback = _._animationName = null;
//   _._animationLayers = t1;
//   _._artboard = null;
// },
