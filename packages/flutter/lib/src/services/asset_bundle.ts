export class AssetBundle extends N.AssetBundle {
  constructor() {
    super()
  }
}

export const rootBundle = N.octoRootBundle(OctoAppBundleId) as AssetBundle
