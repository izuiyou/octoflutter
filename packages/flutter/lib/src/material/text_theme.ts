import {TextStyle} from '../painting/text_style'

export class TextTheme extends N.TextTheme {
  public readonly displayLarge?: TextStyle
  public readonly displayMedium?: TextStyle
  public readonly displaySmall?: TextStyle
  public readonly headlineLarge?: TextStyle
  public readonly headlineMedium?: TextStyle
  public readonly headlineSmall?: TextStyle
  public readonly titleLarge?: TextStyle
  public readonly titleMedium?: TextStyle
  public readonly titleSmall?: TextStyle
  public readonly bodyLarge?: TextStyle
  public readonly bodyMedium?: TextStyle
  public readonly bodySmall?: TextStyle
  public readonly labelLarge?: TextStyle
  public readonly labelMedium?: TextStyle
  public readonly labelSmall?: TextStyle

  constructor(args?: {
    displayLarge?: TextStyle
    displayMedium?: TextStyle
    displaySmall?: TextStyle
    headlineLarge?: TextStyle
    headlineMedium?: TextStyle
    headlineSmall?: TextStyle
    titleLarge?: TextStyle
    titleMedium?: TextStyle
    titleSmall?: TextStyle
    bodyLarge?: TextStyle
    bodyMedium?: TextStyle
    bodySmall?: TextStyle
    labelLarge?: TextStyle
    labelMedium?: TextStyle
    labelSmall?: TextStyle
  }) {
    super(
      args?.displayLarge,
      args?.displayMedium,
      args?.displaySmall,
      args?.headlineLarge,
      args?.headlineMedium,
      args?.headlineSmall,
      args?.titleLarge,
      args?.titleMedium,
      args?.titleSmall,
      args?.bodyLarge,
      args?.bodyMedium,
      args?.bodySmall,
      args?.labelLarge,
      args?.labelMedium,
      args?.labelSmall
    )

    this.displayLarge = args?.displayLarge
    this.displayMedium = args?.displayMedium
    this.displaySmall = args?.displaySmall
    this.headlineLarge = args?.headlineLarge
    this.headlineMedium = args?.headlineMedium
    this.headlineSmall = args?.headlineSmall
    this.titleLarge = args?.titleLarge
    this.titleMedium = args?.titleMedium
    this.titleSmall = args?.titleSmall
    this.bodyLarge = args?.bodyLarge
    this.bodyMedium = args?.bodyMedium
    this.bodySmall = args?.bodySmall
    this.labelLarge = args?.labelLarge
    this.labelMedium = args?.labelMedium
    this.labelSmall = args?.labelSmall
  }
}

// TextTheme: function TextTheme(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14) {
//   var _ = this;
//   _.displayLarge = t0;
//   _.displayMedium = t1;
//   _.displaySmall = t2;
//   _.headlineLarge = t3;
//   _.headlineMedium = t4;
//   _.headlineSmall = t5;
//   _.titleLarge = t6;
//   _.titleMedium = t7;
//   _.titleSmall = t8;
//   _.bodyLarge = t9;
//   _.bodyMedium = t10;
//   _.bodySmall = t11;
//   _.labelLarge = t12;
//   _.labelMedium = t13;
//   _.labelSmall = t14;
// },
