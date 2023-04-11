import {FilterQuality, Size} from '@octoflutter/dartsdk'
import {
  Alignment,
  HitTestBehavior,
  Key,
  octoKey,
  Widget,
  BoxDecoration,
  ImageProvider,
} from '@octoflutter/flutter'

N.octoLoadPhoto()

export class PhotoView extends PHOTO.PhotoView {
  static asset = (args: {
    key?: Key
    asset: string
    useOcto?: boolean
    loadingBuilder?: any
    backgroundDecoration?: BoxDecoration
    wantKeepAlive?: boolean
    gaplessPlayback?: boolean
    heroAttributes?: any
    scaleStateChangedCallback?: any
    enableRotation?: boolean
    controller?: any
    scaleStateController?: any
    maxScale?: number
    minScale?: number
    initialScale?: number
    basePosition?: Alignment
    scaleStateCycle?: any
    onTapUp?: any
    onTapDown?: any
    onScaleEnd?: any
    customSize?: Size
    gestureDetectorBehavior?: HitTestBehavior
    tightMode?: boolean
    filterQuality?: FilterQuality
    disableGestures?: boolean
    errorBuilder?: any
    enablePanAlways?: boolean
  }): PhotoView => {
    return PHOTO.octoPhotoImageChild(
      args.key?.[octoKey],
      args.useOcto ?? true,
      OctoAppBundleId,
      args.asset,
      true,
      null,
      args.customSize,
      args.loadingBuilder,
      args.errorBuilder,
      args.backgroundDecoration,
      args.wantKeepAlive ?? false,
      args.gaplessPlayback ?? false,
      args.heroAttributes,
      args.scaleStateChangedCallback,
      args.enableRotation,
      args.controller,
      args.scaleStateController,
      args.maxScale,
      args.minScale,
      args.initialScale,
      args.basePosition,
      args.scaleStateCycle,
      args.onTapUp,
      args.onTapDown,
      args.onScaleEnd,
      args.gestureDetectorBehavior,
      args.tightMode,
      args.filterQuality ?? FilterQuality.low,
      args.disableGestures,
      args.enablePanAlways
    ) as PhotoView
  }

  static network = (args: {
    key?: Key
    url: string
    useOcto?: boolean
    headers?: any
    loadingBuilder?: any
    backgroundDecoration?: BoxDecoration
    wantKeepAlive?: boolean
    gaplessPlayback?: boolean
    heroAttributes?: any
    scaleStateChangedCallback?: any
    enableRotation?: boolean
    controller?: any
    scaleStateController?: any
    maxScale?: number
    minScale?: number
    initialScale?: number
    basePosition?: Alignment
    scaleStateCycle?: any
    onTapUp?: any
    onTapDown?: any
    onScaleEnd?: any
    customSize?: Size
    gestureDetectorBehavior?: HitTestBehavior
    tightMode?: boolean
    filterQuality?: FilterQuality
    disableGestures?: boolean
    errorBuilder?: any
    enablePanAlways?: boolean
  }): PhotoView => {
    return PHOTO.octoPhotoImageChild(
      args.key?.[octoKey],
      args.useOcto ?? true,
      OctoAppBundleId,
      args.url,
      false,
      args.headers,
      args.customSize,
      args.loadingBuilder,
      args.errorBuilder,
      args.backgroundDecoration,
      args.wantKeepAlive ?? false,
      args.gaplessPlayback ?? false,
      args.heroAttributes,
      args.scaleStateChangedCallback,
      args.enableRotation,
      args.controller,
      args.scaleStateController,
      args.maxScale,
      args.minScale,
      args.initialScale,
      args.basePosition,
      args.scaleStateCycle,
      args.onTapUp,
      args.onTapDown,
      args.onScaleEnd,
      args.gestureDetectorBehavior,
      args.tightMode,
      args.filterQuality ?? FilterQuality.low,
      args.disableGestures,
      args.enablePanAlways
    ) as PhotoView
  }

  static customChild = (args: {
    key?: Key
    child: Widget
    childSize?: Size
    backgroundDecoration?: BoxDecoration
    wantKeepAlive?: boolean
    gaplessPlayback?: boolean
    heroAttributes?: any
    scaleStateChangedCallback?: any
    enableRotation?: boolean
    controller?: any
    scaleStateController?: any
    maxScale?: number
    minScale?: number
    initialScale?: number
    basePosition?: Alignment
    scaleStateCycle?: any
    onTapUp?: any
    onTapDown?: any
    onScaleEnd?: any
    customSize?: Size
    gestureDetectorBehavior?: HitTestBehavior
    tightMode?: boolean
    filterQuality?: FilterQuality
    disableGestures?: boolean
    enablePanAlways?: boolean
  }): PhotoView => {
    return PHOTO.octoPhotoCustomChild(
      args.key?.[octoKey],
      args.child,
      args.childSize,
      args.backgroundDecoration,
      args.wantKeepAlive ?? false,
      args.heroAttributes,
      args.scaleStateChangedCallback,
      args.enableRotation ?? false,
      args.controller,
      args.scaleStateController,
      args.maxScale,
      args.minScale,
      args.initialScale,
      args.basePosition,
      args.scaleStateCycle,
      args.onTapUp,
      args.onTapDown,
      args.onScaleEnd,
      args.customSize,
      args.gestureDetectorBehavior ?? HitTestBehavior.translucent,
      args.tightMode ?? false,
      args.filterQuality ?? FilterQuality.low,
      args.disableGestures ?? false,
      args.enablePanAlways ?? false
    ) as PhotoView
  }
}
