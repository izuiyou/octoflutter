import {Rect} from './geometry'

export type VoidCallback = () => void

export class Locale extends N.Locale {
  constructor(languageCode: string, countryCode: string) {
    super(languageCode, countryCode)
  }
}

// Locale: function Locale(t0, t1) {
//     this._languageCode = t0;
//     this._countryCode = t1;
//   },

export enum AppLifecycleState {
  resumed = C.AppLifecycleState_0,
  inactive = C.AppLifecycleState_1,
  paused = C.AppLifecycleState_2,
  detached = C.AppLifecycleState_3,
}

export enum DisplayFeatureType {
  unknown = C.DisplayFeatureType_0,
  fold = C.DisplayFeatureType_1,
  hinge = C.DisplayFeatureType_2,
  cutout = C.DisplayFeatureType_3,
}

export enum DisplayFeatureState {
  unknown = C.DisplayFeatureState_0,
  postureFlat = C.DisplayFeatureState_1,
  postureHalfOpened = C.DisplayFeatureState_2,
}

export class DisplayFeature extends N.DisplayFeature {
  constructor(args: {
    bounds: Rect
    type: DisplayFeatureType
    state: DisplayFeatureState
  }) {
    super(args.bounds, args.type, args.state)
  }
}

// DisplayFeature: function DisplayFeature(t0, t1, t2) {
//   this.bounds = t0;
//   this.type0 = t1;
//   this.state = t2;
// },
