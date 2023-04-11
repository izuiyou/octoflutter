import {
  BlendMode,
  Color,
  FilterQuality,
  ImageDecoderCallback,
  Rect,
  isNullOrUndefined,
} from '@octoflutter/dartsdk'

import {
  ImageErrorWidgetBuilder,
  ImageLoadingBuilder,
  BuildContext,
  GlobalKey,
  Container,
  ImageRepeat,
  BoxFit,
  Alignment,
  Key,
  octoKey,
} from '@octoflutter/flutter'

export class OctoImage extends N.OctoImage {
  static asset = (
    name: string,
    args?: {
      key?: Key
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

    return N.octoImageAssetInstance(
      OctoAppBundleId,
      name,
      args?.key?.[octoKey],
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
      args?.filterQuality ?? FilterQuality.low,
      args?.cacheWidth,
      args?.cacheHeight
    ) as OctoImage
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

    return N.octoImageNetworkInstance(
      OctoAppBundleId,
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
    ) as OctoImage
  }
}

export type DecodeErrorCallback = (error: string) => void

export const decodeImageFromAsset = (
  name: string,
  onImage: ImageDecoderCallback,
  onError: DecodeErrorCallback
) => {
  N.octoDecodeImageFromAsset(OctoAppBundleId, name, onImage, onError)
}

export type ImageSaveCallback = (success: boolean, path: string) => void

export const captureToImageFile = (
  key: GlobalKey<any>,
  name: string,
  callback: ImageSaveCallback
) => {
  N.octoCaptureToImageFile(key?.[octoKey], name, callback)
}
