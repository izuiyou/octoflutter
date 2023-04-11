import {BuildContext, Widget} from './framework'
import {
  Rect,
  FilterQuality,
  BlendMode,
  Color,
  isNullOrUndefined,
} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {ImageProvider} from '../painting/image_provider'
import {BoxFit} from '../painting/box_fit'
import {Alignment} from '../painting/alignment'
import {ImageRepeat} from '../painting/decoration_image'
import {Container} from './container'

export type ImageLoadingBuilder = (
  context: BuildContext,
  child: Widget,
  loadingProgress?: any
) => Widget

export type ImageErrorWidgetBuilder = (
  context: BuildContext,
  error: any,
  stackTrace?: any
) => Widget

export class Image extends N.Image {
  constructor(args: {
    key?: Key
    image: ImageProvider
    frameBuilder?: any
    loadingBuilder?: ImageLoadingBuilder
    errorBuilder?: ImageErrorWidgetBuilder
    semanticLabel?: string
    excludeFromSemantics?: boolean
    width?: number
    height?: number
    color?: Color
    colorBlendMode?: BlendMode
    fit?: BoxFit
    alignment?: Alignment
    repeat?: ImageRepeat
    centerSlice?: Rect
    matchTextDirection?: boolean
    gaplessPlayback?: boolean
    isAntiAlias?: boolean
    filterQuality?: FilterQuality
  }) {
    let loadingCb = null
    if (!isNullOrUndefined(args.loadingBuilder)) {
      loadingCb = (ctx, child, loadingProgress) => {
        return args.loadingBuilder(
          new BuildContext(ctx),
          child,
          loadingProgress
        )
      }
    }

    let errorCb = null
    if (!isNullOrUndefined(args.errorBuilder)) {
      errorCb = (ctx, error, stackTrace) => {
        return args.errorBuilder(new BuildContext(ctx), error, stackTrace)
      }
    }

    super(
      args.image,
      args.frameBuilder,
      loadingCb,
      errorCb,
      args.width,
      args.height,
      args.color,
      args.filterQuality ?? FilterQuality.low,
      args.colorBlendMode,
      args.fit,
      args.alignment ?? Alignment.center,
      args.repeat ?? ImageRepeat.noRepeat,
      args.centerSlice,
      args.matchTextDirection ?? false,
      args.gaplessPlayback ?? false,
      args.semanticLabel,
      args.excludeFromSemantics ?? false,
      args.isAntiAlias ?? false,
      args.key?.[octoKey]
    )
  }

  static asset = (
    name: string,
    args?: {
      key?: Key
      bundle?: any
      frameBuilder?: any
      errorBuilder?: ImageErrorWidgetBuilder
      semanticLabel?: string
      excludeFromSemantics?: boolean
      scale?: number
      width?: number
      height?: number
      color?: Color
      colorBlendMode?: BlendMode
      fit?: BoxFit
      alignment?: Alignment
      repeat?: ImageRepeat
      centerSlice?: Rect
      matchTextDirection?: boolean
      gaplessPlayback?: boolean
      isAntiAlias?: boolean
      package?: string
      cacheWidth?: number
      cacheHeight?: number
      filterQuality?: FilterQuality
    }
  ) => {
    if (isNullOrUndefined(name) || name.trim().length === 0) {
      return new Container()
    }

    let errorCb = null
    if (!isNullOrUndefined(args?.errorBuilder)) {
      errorCb = (ctx, error, stackTrace) => {
        return args?.errorBuilder(new BuildContext(ctx), error, stackTrace)
      }
    }

    return N.imageAssetInstance(
      name,
      args?.key?.[octoKey],
      args?.bundle ?? N.octoRootBundle(OctoAppBundleId),
      args?.frameBuilder,
      errorCb,
      args?.semanticLabel,
      args?.excludeFromSemantics ?? false,
      args?.scale,
      args?.width,
      args?.height,
      args?.color,
      args?.colorBlendMode,
      args?.fit,
      args?.alignment ?? Alignment.center,
      args?.repeat ?? ImageRepeat.noRepeat,
      args?.centerSlice,
      args?.matchTextDirection ?? false,
      args?.gaplessPlayback ?? false,
      args?.isAntiAlias ?? false,
      args?.package,
      args?.filterQuality ?? FilterQuality.low,
      args?.cacheWidth,
      args?.cacheHeight
    ) as Image
  }

  static network = (
    src: string,
    args?: {
      key?: Key
      scale?: number
      frameBuilder?: any
      loadingBuilder?: ImageLoadingBuilder
      errorBuilder?: ImageErrorWidgetBuilder
      semanticLabel?: string
      excludeFromSemantics?: boolean
      width?: number
      height?: number
      color?: Color
      colorBlendMode?: BlendMode
      fit?: BoxFit
      alignment?: Alignment
      repeat?: ImageRepeat
      centerSlice?: Rect
      matchTextDirection?: boolean
      gaplessPlayback?: boolean
      isAntiAlias?: boolean
      headers?: any
      cacheWidth?: number
      cacheHeight?: number
      filterQuality?: FilterQuality
    }
  ) => {
    if (isNullOrUndefined(src) || src.trim().length === 0) {
      return new Container()
    }

    let loadingCb = null
    if (!isNullOrUndefined(args?.loadingBuilder)) {
      loadingCb = (ctx, child, loadingProgress) => {
        return args?.loadingBuilder(
          new BuildContext(ctx),
          child,
          loadingProgress
        )
      }
    }

    let errorCb = null
    if (!isNullOrUndefined(args?.errorBuilder)) {
      errorCb = (ctx, error, stackTrace) => {
        return args?.errorBuilder(new BuildContext(ctx), error, stackTrace)
      }
    }

    return N.imageNetworkInstance(
      src,
      args?.key?.[octoKey],
      args?.scale ?? 1.0,
      args?.frameBuilder,
      loadingCb,
      errorCb,
      args?.semanticLabel,
      args?.excludeFromSemantics ?? false,
      args?.width,
      args?.height,
      args?.color,
      args?.colorBlendMode,
      args?.fit,
      args?.alignment ?? Alignment.center,
      args?.repeat ?? ImageRepeat.noRepeat,
      args?.centerSlice,
      args?.matchTextDirection ?? false,
      args?.gaplessPlayback ?? false,
      args?.filterQuality ?? FilterQuality.low,
      args?.isAntiAlias ?? false,
      args?.headers,
      args?.cacheWidth,
      args?.cacheHeight
    ) as Image
  }
}

// Image: function Image(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
//   var _ = this;
//   _.image = t0;
//   _.frameBuilder = t1;
//   _.loadingBuilder = t2;
//   _.errorBuilder = t3;
//   _.width = t4;
//   _.height = t5;
//   _.color = t6;
//   _.filterQuality = t7;
//   _.colorBlendMode = t8;
//   _.fit = t9;
//   _.alignment = t10;
//   _.repeat = t11;
//   _.centerSlice = t12;
//   _.matchTextDirection = t13;
//   _.gaplessPlayback = t14;
//   _.semanticLabel = t15;
//   _.excludeFromSemantics = t16;
//   _.isAntiAlias = t17;
//   _.key0 = t18;
// },
