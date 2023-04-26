import {ImageProvider} from './image_provider'

export class AssetImage extends N.AssetImage implements ImageProvider {
  constructor(assetName: string, args?: {bundle?: any; package?: string}) {
    super(
      assetName,
      args?.bundle ?? N.octoRootBundle(OctoAppBundleId),
      args?.package
    )
  }
}
