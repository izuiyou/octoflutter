import {Clip, TextDirection} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {PlatformViewHitTestBehavior} from '../rendering/platform_view'
import {MessageCodec} from '../services/message_codec'
import {PlatformViewCreatedCallback} from '../services/platform_views'

export class AndroidView extends N.AndroidView {
  constructor(args: {
    key?: Key
    viewType: string
    onPlatformViewCreated?: PlatformViewCreatedCallback
    hitTestBehavior?: PlatformViewHitTestBehavior
    layoutDirection?: TextDirection
    gestureRecognizers?: any
    creationParams?: number | boolean | string
    creationParamsCodec?: MessageCodec<any>
    clipBehavior?: Clip
  }) {
    super(
      args.viewType,
      args.onPlatformViewCreated,
      args.hitTestBehavior ?? PlatformViewHitTestBehavior.opaque,
      args.layoutDirection,
      args.gestureRecognizers,
      args.creationParams,
      args.creationParamsCodec,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    )
  }
}

// AndroidView: function AndroidView(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//   var _ = this;
//   _.viewType = t0;
//   _.onPlatformViewCreated = t1;
//   _.hitTestBehavior = t2;
//   _.layoutDirection = t3;
//   _.gestureRecognizers = t4;
//   _.creationParams = t5;
//   _.creationParamsCodec = t6;
//   _.clipBehavior = t7;
//   _.key0 = t8;
// },

export class AppbundleAndroidView extends N.AndroidView {
  constructor(args: {
    key?: Key
    viewType: string
    onPlatformViewCreated?: PlatformViewCreatedCallback
    hitTestBehavior?: PlatformViewHitTestBehavior
    layoutDirection?: TextDirection
    gestureRecognizers?: any
    creationParams?: number | boolean | string
    creationParamsCodec?: MessageCodec<any>
    clipBehavior?: Clip
  }) {
    super(
      args.viewType + '_' + OctoAppBundleId,
      args.onPlatformViewCreated,
      args.hitTestBehavior ?? PlatformViewHitTestBehavior.opaque,
      args.layoutDirection,
      args.gestureRecognizers,
      args.creationParams,
      args.creationParamsCodec,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    )
  }
}

export class UiKitView extends N.UiKitView {
  constructor(args: {
    key?: Key
    viewType: string
    onPlatformViewCreated?: PlatformViewCreatedCallback
    hitTestBehavior?: PlatformViewHitTestBehavior
    layoutDirection?: TextDirection
    gestureRecognizers?: any
    creationParams?: number | boolean | string
    creationParamsCodec?: MessageCodec<any>
  }) {
    super(
      args.viewType,
      args.onPlatformViewCreated,
      args.hitTestBehavior ?? PlatformViewHitTestBehavior.opaque,
      args.layoutDirection,
      args.creationParams,
      args.creationParamsCodec,
      args.gestureRecognizers,
      args.key?.[octoKey]
    )
  }
}

// UiKitView: function UiKitView(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.viewType = t0;
//   _.onPlatformViewCreated = t1;
//   _.hitTestBehavior = t2;
//   _.layoutDirection = t3;
//   _.creationParams = t4;
//   _.creationParamsCodec = t5;
//   _.gestureRecognizers = t6;
//   _.key0 = t7;
// },

export class AppbundleUiKitView extends N.UiKitView {
  constructor(args: {
    key?: Key
    viewType: string
    onPlatformViewCreated?: PlatformViewCreatedCallback
    hitTestBehavior?: PlatformViewHitTestBehavior
    layoutDirection?: TextDirection
    gestureRecognizers?: any
    creationParams?: number | boolean | string
    creationParamsCodec?: MessageCodec<any>
  }) {
    super(
      args.viewType + '_' + OctoAppBundleId,
      args.onPlatformViewCreated,
      args.hitTestBehavior ?? PlatformViewHitTestBehavior.opaque,
      args.layoutDirection,
      args.creationParams,
      args.creationParamsCodec,
      args.gestureRecognizers,
      args.key?.[octoKey]
    )
  }
}
