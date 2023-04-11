export enum TargetPlatform {
  android = C.TargetPlatform_0,
  iOS = C.TargetPlatform_2,
}

export const defaultTargetPlatform = window.navigator.platform
  .toLowerCase()
  .includes('android')
  ? TargetPlatform.android
  : TargetPlatform.iOS
