import {
  Color,
  FontStyle,
  FontWeight,
  Locale,
  Paint,
  TextBaseline,
  TextDecoration,
  TextDecorationStyle,
  TextLeadingDistribution,
} from '@octoflutter/dartsdk'
import {TextOverflow} from '../rendering/paragraph'

export class TextStyle extends N.TextStyle {
  public readonly inherit?: boolean
  public readonly color?: Color
  public readonly backgroundColor?: Color
  public readonly fontSize?: number
  public readonly fontWeight?: FontWeight
  public readonly fontStyle?: FontStyle
  public readonly letterSpacing?: number
  public readonly wordSpacing?: number
  public readonly textBaseline?: TextBaseline
  public readonly height?: number
  public readonly leadingDistribution?: TextLeadingDistribution
  public readonly locale?: Locale
  // public readonly foreground?: any
  // public readonly background?: any
  public readonly shadows?: any
  public readonly fontFeatures?: any
  public readonly decoration?: TextDecoration
  public readonly decorationColor?: Color
  public readonly decorationStyle?: TextDecorationStyle
  public readonly decorationThickness?: number
  public readonly debugLabel?: string
  public readonly fontFamily?: string
  public readonly fontFamilyFallback?: Array<string>
  public readonly package?: string
  public readonly overflow?: TextOverflow

  constructor(args?: {
    inherit?: boolean
    color?: Color
    backgroundColor?: Color
    fontSize?: number
    fontWeight?: FontWeight
    fontStyle?: FontStyle
    letterSpacing?: number
    wordSpacing?: number
    textBaseline?: TextBaseline
    height?: number
    leadingDistribution?: TextLeadingDistribution
    locale?: Locale
    foreground?: Paint
    background?: Paint
    shadows?: any
    fontFeatures?: any
    decoration?: TextDecoration
    decorationColor?: Color
    decorationStyle?: TextDecorationStyle
    decorationThickness?: number
    debugLabel?: string
    fontFamily?: string
    fontFamilyFallback?: Array<string>
    package?: string
    overflow?: TextOverflow
  }) {
    const fp = args?.foreground?.paint() ?? null
    const bp = args?.background?.paint() ?? null
    super(
      args?.inherit ?? true,
      args?.color,
      args?.backgroundColor,
      args?.fontFamily,
      args?.fontFamilyFallback,
      args?.package,
      args?.fontSize,
      args?.fontWeight,
      args?.fontStyle,
      args?.letterSpacing,
      args?.wordSpacing,
      args?.textBaseline,
      args?.height,
      args?.leadingDistribution,
      args?.locale,
      fp,
      bp,
      args?.decoration,
      args?.decorationColor,
      args?.decorationStyle,
      args?.decorationThickness,
      args?.debugLabel,
      args?.shadows,
      args?.fontFeatures,
      args?.overflow
    )

    this.inherit = args?.inherit ?? true
    this.color = args?.color
    this.backgroundColor = args?.backgroundColor
    this.fontFamily = args?.fontFamily
    this.fontFamilyFallback = args?.fontFamilyFallback
    this.package = args?.package
    this.fontSize = args?.fontSize
    this.fontWeight = args?.fontWeight
    this.fontStyle = args?.fontStyle
    this.letterSpacing = args?.letterSpacing
    this.wordSpacing = args?.wordSpacing
    this.textBaseline = args?.textBaseline
    this.height = args?.height
    this.leadingDistribution = args?.leadingDistribution
    this.locale = args?.locale
    // this.foreground = args?.foreground
    // this.background = args?.background
    this.decoration = args?.decoration
    this.decorationColor = args?.decorationColor
    this.decorationStyle = args?.decorationStyle
    this.decorationThickness = args?.decorationThickness
    this.debugLabel = args?.debugLabel
    this.shadows = args?.shadows
    this.fontFeatures = args?.fontFeatures
    this.overflow = args?.overflow
  }
}

// TextStyle: function TextStyle(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24) {
//   var _ = this;
//   _.inherit = t0;
//   _.color = t1;
//   _.backgroundColor = t2;
//   _.fontFamily = t3;
//   _._fontFamilyFallback = t4;
//   _._package = t5;
//   _.fontSize = t6;
//   _.fontWeight = t7;
//   _.fontStyle = t8;
//   _.letterSpacing = t9;
//   _.wordSpacing = t10;
//   _.textBaseline = t11;
//   _.height = t12;
//   _.leadingDistribution = t13;
//   _.locale = t14;
//   _.foreground = t15;
//   _.background = t16;
//   _.decoration = t17;
//   _.decorationColor = t18;
//   _.decorationStyle = t19;
//   _.decorationThickness = t20;
//   _.debugLabel = t21;
//   _.shadows = t22;
//   _.fontFeatures = t23;
//   _.overflow = t24;
// },
