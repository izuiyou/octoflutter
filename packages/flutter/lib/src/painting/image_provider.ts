import {Locale, Size, TextDirection} from '@octoflutter/dartsdk'
import {TargetPlatform} from '../foundation/platform'
import {AssetBundle, rootBundle} from '../services/asset_bundle'
import {AssetImage} from './image_resolution'

export class NetworkImage extends N.NetworkImage {
  constructor(url: string, args?: {scale?: number}) {
    super(url, args?.scale ?? 1.0)
  }
}

export class FileImage extends N.FileImage {
  constructor(file: any, args?: {scale?: number}) {
    super(file, args?.scale ?? 1.0)
  }
}

export class MemoryImage extends N.MemoryImage {
  constructor(bytes: any, args?: {scale?: number}) {
    super(bytes, args?.scale ?? 1.0)
  }
}

export class ExactAssetImage extends N.ExactAssetImage {
  constructor(
    assetName: any,
    args?: {scale?: number; bundle?: any; package?: string}
  ) {
    super(
      assetName,
      args?.scale ?? 1.0,
      args?.bundle ?? rootBundle,
      args?.package
    )
  }
}

export type ImageProvider =
  | NetworkImage
  | FileImage
  | MemoryImage
  | ExactAssetImage
  | AssetImage

export class ImageConfiguration extends N.ImageConfiguration {
  public readonly bundle?: AssetBundle
  public readonly devicePixelRatio?: number
  public readonly locale?: Locale
  public readonly textDirection?: TextDirection
  public readonly size?: Size
  public readonly platform?: TargetPlatform

  constructor(args?: {
    bundle?: AssetBundle
    devicePixelRatio?: number
    locale?: Locale
    textDirection?: TextDirection
    size?: Size
    platform?: TargetPlatform
  }) {
    super(
      args?.bundle,
      args?.devicePixelRatio,
      args?.locale,
      args?.textDirection,
      args?.size,
      args?.platform
    )
    this.bundle = args?.bundle
    this.devicePixelRatio = args?.devicePixelRatio
    this.locale = args?.locale
    this.textDirection = args?.textDirection
    this.size = args?.size
    this.platform = args?.platform
  }
}

// ImageConfiguration: function ImageConfiguration(t0, t1, t2, t3, t4, t5) {
//   var _ = this;
//   _.bundle = t0;
//   _.devicePixelRatio = t1;
//   _.locale = t2;
//   _.textDirection = t3;
//   _.size0 = t4;
//   _.platform = t5;
// },
