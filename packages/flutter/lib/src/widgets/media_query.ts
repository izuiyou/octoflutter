import {Brightness, DisplayFeature, Size} from '@octoflutter/dartsdk'
import {convertMediaQuery} from '../../utils'
import {Key, octoKey} from '../foundation/key'
import {DeviceGestureSettings} from '../gestures/gesture_settings'
import {EdgeInsets} from '../painting/edge_insets'
import {BuildContext, octoMediaQuery, Widget} from './framework'

export enum Orientation {
  portrait = C.Orientation_0,
  landscape = C.Orientation_1,
}

export enum NavigationMode {
  traditional = C.NavigationMode_0,
  directional = C.NavigationMode_1,
}

export class MediaQuery extends N.MediaQuery {
  constructor(args: {key?: Key; data: MediaQueryData; child: Widget}) {
    super(args.data, args.child, args.key?.[octoKey])
  }

  static of(context: BuildContext): MediaQueryData {
    return convertMediaQuery(context[octoMediaQuery]())
  }
}

// MediaQuery: function MediaQuery(t0, t1, t2) {
//     this.data = t0;
//     this.child = t1;
//     this.key = t2;
//   },

export class MediaQueryData extends N.MediaQueryData {
  public readonly size?: Size
  public readonly devicePixelRatio?: number
  public readonly textScaleFactor?: number
  public readonly platformBrightness?: Brightness
  public readonly padding?: EdgeInsets
  public readonly viewInsets?: EdgeInsets
  public readonly systemGestureInsets?: EdgeInsets
  public readonly viewPadding?: EdgeInsets
  public readonly alwaysUse24HourFormat?: boolean
  public readonly accessibleNavigation?: boolean
  public readonly invertColors?: boolean
  public readonly highContrast?: boolean
  public readonly disableAnimations?: boolean
  public readonly boldText?: boolean
  public readonly navigationMode?: NavigationMode

  constructor(args: {
    size?: Size
    devicePixelRatio?: number
    textScaleFactor?: number
    platformBrightness?: Brightness
    padding?: EdgeInsets
    viewInsets?: EdgeInsets
    systemGestureInsets?: EdgeInsets
    viewPadding?: EdgeInsets
    alwaysUse24HourFormat?: boolean
    accessibleNavigation?: boolean
    invertColors?: boolean
    highContrast?: boolean
    disableAnimations?: boolean
    boldText?: boolean
    navigationMode?: NavigationMode
    gestureSettings?: DeviceGestureSettings
    displayFeatures?: Array<DisplayFeature>
  }) {
    const size = args.size ?? Size.zero
    const devicePixelRatio = args.devicePixelRatio ?? 1
    const textScaleFactor = args.textScaleFactor ?? 1
    const platformBrightness = args.platformBrightness ?? Brightness.light
    const padding = args.padding ?? EdgeInsets.zero
    const viewInsets = args.viewInsets ?? EdgeInsets.zero
    const systemGestureInsets = args.systemGestureInsets ?? EdgeInsets.zero
    const viewPadding = args.viewPadding ?? EdgeInsets.zero
    const alwaysUse24HourFormat = args.alwaysUse24HourFormat ?? false
    const accessibleNavigation = args.accessibleNavigation ?? false
    const invertColors = args.invertColors ?? false
    const highContrast = args.highContrast ?? false
    const disableAnimations = args.disableAnimations ?? false
    const boldText = args.boldText ?? false
    const navigationMode = args.navigationMode ?? NavigationMode.traditional

    super(
      size,
      devicePixelRatio,
      textScaleFactor,
      platformBrightness,
      viewInsets,
      padding,
      viewPadding,
      systemGestureInsets,
      alwaysUse24HourFormat,
      accessibleNavigation,
      invertColors,
      highContrast,
      disableAnimations,
      boldText,
      navigationMode,
      args.gestureSettings ?? new DeviceGestureSettings(18),
      args.displayFeatures ?? []
    )

    this.size = size
    this.devicePixelRatio = devicePixelRatio
    this.textScaleFactor = textScaleFactor
    this.platformBrightness = platformBrightness
    this.padding = padding
    this.viewInsets = viewInsets
    this.systemGestureInsets = systemGestureInsets
    this.viewPadding = viewPadding
    this.alwaysUse24HourFormat = alwaysUse24HourFormat
    this.accessibleNavigation = accessibleNavigation
    this.invertColors = invertColors
    this.highContrast = highContrast
    this.disableAnimations = disableAnimations
    this.boldText = boldText
    this.navigationMode = navigationMode
  }
}

// MediaQueryData: function MediaQueryData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16) {
//   var _ = this;
//   _.size0 = t0;
//   _.devicePixelRatio = t1;
//   _.textScaleFactor = t2;
//   _.platformBrightness = t3;
//   _.viewInsets = t4;
//   _.padding = t5;
//   _.viewPadding = t6;
//   _.systemGestureInsets = t7;
//   _.alwaysUse24HourFormat = t8;
//   _.accessibleNavigation = t9;
//   _.invertColors = t10;
//   _.highContrast = t11;
//   _.disableAnimations = t12;
//   _.boldText = t13;
//   _.navigationMode = t14;
//   _.gestureSettings = t15;
//   _.displayFeatures = t16;
// },
