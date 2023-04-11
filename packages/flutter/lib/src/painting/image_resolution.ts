import {rootBundle} from '../services/asset_bundle'

export class AssetImage extends N.AssetImage {
  constructor(assetName: string, args?: {bundle?: any; package?: string}) {
    super(
      assetName,
      args?.bundle ?? N.octoRootBundle(OctoAppBundleId),
      args?.package
    )
  }
}
