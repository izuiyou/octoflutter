import {Brightness, Color} from '@octoflutter/dartsdk'
import {Colors, MaterialColor} from './colors'
import {ThemeData} from './theme_data'

export class ColorScheme extends N.ColorScheme {
  constructor(args: {
    brightness: Brightness
    primary: Color
    onPrimary: Color
    primaryContainer?: Color
    onPrimaryContainer?: Color
    secondary: Color
    onSecondary: Color
    secondaryContainer?: Color
    onSecondaryContainer?: Color
    tertiary?: Color
    onTertiary?: Color
    tertiaryContainer?: Color
    onTertiaryContainer?: Color
    error: Color
    onError: Color
    errorContainer?: Color
    onErrorContainer?: Color
    background: Color
    onBackground: Color
    surface: Color
    onSurface: Color
    surfaceVariant?: Color
    onSurfaceVariant?: Color
    outline?: Color
    shadow?: Color
    inverseSurface?: Color
    onInverseSurface?: Color
    inversePrimary?: Color
  }) {
    super(
      args.brightness,
      args.primary,
      args.onPrimary,
      args.primaryContainer,
      args.onPrimaryContainer,
      args.secondary,
      args.onSecondary,
      args.secondaryContainer,
      args.onSecondaryContainer,
      args.tertiary,
      args.onTertiary,
      args.tertiaryContainer,
      args.onTertiaryContainer,
      args.error,
      args.onError,
      args.errorContainer,
      args.onErrorContainer,
      args.background,
      args.onBackground,
      args.surface,
      args.onSurface,
      args.surfaceVariant,
      args.onSurfaceVariant,
      args.outline,
      args.shadow,
      args.inverseSurface,
      args.onInverseSurface,
      args.inversePrimary
    )
  }

  static fromSwatch = (args: {
    primarySwatch: MaterialColor
    primaryColorDark?: Color
    accentColor?: Color
    cardColor?: Color
    backgroundColor?: Color
    errorColor?: Color
    brightness: Brightness
  }): ColorScheme => {
    const primarySwatch = args.primarySwatch ?? Colors.blue
    const brightness = args.brightness ?? Brightness.light

    const isDark = brightness === Brightness.dark
    const primaryIsDark =
      ThemeData.estimateBrightnessForColor(primarySwatch) === Brightness.dark
    const secondary =
      args.accentColor ?? (isDark ? new Color(0xff64ffda) : primarySwatch)
    const secondaryIsDark =
      ThemeData.estimateBrightnessForColor(secondary) === Brightness.dark

    return new ColorScheme({
      primary: primarySwatch,
      secondary: secondary,
      surface:
        args.cardColor ?? (isDark ? new Color(0xff424242) : Colors.white),
      background:
        args.backgroundColor ??
        (isDark ? new Color(0xff424242) : primarySwatch.shade200),
      error: args.errorColor ?? new Color(0xffe53935),
      onPrimary: primaryIsDark ? Colors.white : Colors.black,
      onSecondary: secondaryIsDark ? Colors.white : Colors.black,
      onSurface: isDark ? Colors.white : Colors.black,
      onBackground: primaryIsDark ? Colors.white : Colors.black,
      onError: isDark ? Colors.black : Colors.white,
      brightness: brightness,
    })
  }
}

// ColorScheme: function ColorScheme(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29) {
//   var _ = this;
//   _.brightness = t0;
//   _.primary = t1;
//   _.onPrimary = t2;
//   _._primaryContainer = t3;
//   _._onPrimaryContainer = t4;
//   _.secondary = t5;
//   _.onSecondary = t6;
//   _._secondaryContainer = t7;
//   _._onSecondaryContainer = t8;
//   _._tertiary = t9;
//   _._onTertiary = t10;
//   _._tertiaryContainer = t11;
//   _._onTertiaryContainer = t12;
//   _.error = t13;
//   _.onError = t14;
//   _._errorContainer = t15;
//   _._onErrorContainer = t16;
//   _.background = t17;
//   _.onBackground = t18;
//   _.surface = t19;
//   _.onSurface = t20;
//   _._surfaceVariant = t21;
//   _._onSurfaceVariant = t22;
//   _._outline = t23;
//   _._shadow = t24;
//   _._inverseSurface = t25;
//   _._onInverseSurface = t26;
//   _._inversePrimary = t27;
//   _._primaryVariant = t28;
//   _._secondaryVariant = t29;
// },
