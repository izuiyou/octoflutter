import {
  BasicMessageChannel,
  EventChannel,
  MethodChannel,
  MessageCodec,
  MethodCodec,
} from '@octoflutter/flutter'

export class AppBundleMethodChannel extends MethodChannel {
  constructor(name: string, codec?: MethodCodec) {
    super(name + OctoAppBundleId, codec)
  }
}

export class AppBundleEventChannel extends EventChannel {
  constructor(name: string, codec?: MethodCodec) {
    super(name + OctoAppBundleId, codec)
  }
}

export class AppBundleBasicMessageChannel<T> extends BasicMessageChannel<T> {
  constructor(name: string, codec: MessageCodec<T>) {
    super(name + OctoAppBundleId, codec)
  }
}
