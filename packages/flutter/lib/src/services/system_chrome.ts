import {Brightness, Color} from '@octoflutter/dartsdk'

export enum DeviceOrientation {
  portraitUp = C.DeviceOrientation_0,
  landscapeLeft = C.DeviceOrientation_1,
  portraitDown = C.DeviceOrientation_2,
  landscapeRight = C.DeviceOrientation_3,
}

export class ApplicationSwitcherDescription extends N.ApplicationSwitcherDescription {
  constructor(args?: {label?: string; primaryColor?: Color}) {
    super(args?.label, args?.primaryColor?.value)
  }
}

export enum SystemUiOverlay {
  top = C.SystemUiOverlay_0,
  bottom = C.SystemUiOverlay_1,
}

export class SystemUiOverlayStyle extends N.SystemUiOverlayStyle {
  constructor(args?: {
    systemNavigationBarColor?: Color
    systemNavigationBarDividerColor?: Color
    systemNavigationBarIconBrightness?: Brightness
    systemNavigationBarContrastEnforced?: boolean
    statusBarColor?: Color
    statusBarBrightness?: Brightness
    statusBarIconBrightness?: Brightness
    systemStatusBarContrastEnforced?: boolean
  }) {
    super(
      args?.systemNavigationBarColor,
      args?.systemNavigationBarDividerColor,
      args?.systemNavigationBarIconBrightness,
      args?.systemNavigationBarContrastEnforced,
      args?.statusBarColor,
      args?.statusBarBrightness,
      args?.statusBarIconBrightness,
      args?.systemStatusBarContrastEnforced
    )
  }
}

// SystemUiOverlayStyle: function SystemUiOverlayStyle(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.systemNavigationBarColor = t0;
//   _.systemNavigationBarDividerColor = t1;
//   _.systemNavigationBarIconBrightness = t2;
//   _.systemNavigationBarContrastEnforced = t3;
//   _.statusBarColor = t4;
//   _.statusBarBrightness = t5;
//   _.statusBarIconBrightness = t6;
//   _.systemStatusBarContrastEnforced = t7;
// },

export class SystemChrome {
  static setPreferredOrientations = (
    orientations: Array<DeviceOrientation>
  ): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      N.octoSetPreferredOrientations(
        orientations,
        () => {
          resolve()
        },
        (e) => {
          reject(e)
        }
      )
    })
  }

  static setApplicationSwitcherDescription = (
    description: ApplicationSwitcherDescription
  ): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      N.octoSetApplicationSwitcherDescription(
        description,
        () => {
          resolve()
        },
        (e) => {
          reject(e)
        }
      )
    })
  }

  static setEnabledSystemUIOverlays = (
    overlays: Array<SystemUiOverlay>
  ): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      N.octoSetEnabledSystemUIOverlays(
        overlays,
        () => {
          resolve()
        },
        (e) => {
          reject(e)
        }
      )
    })
  }

  static restoreSystemUIOverlays = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      N.octoRestoreSystemUIOverlays(
        () => {
          resolve()
        },
        (e) => {
          reject(e)
        }
      )
    })
  }

  static setSystemUIOverlayStyle = (style: SystemUiOverlayStyle): void => {
    return N.octoSetSystemUIOverlayStyle(style)
  }
}
