import {Offset} from './geometry'

export enum FontStyle {
  normal = C.FontStyle_0,
  italic = C.FontStyle_1,
}

export class FontWeight extends N.FontWeight {
  constructor(index: number) {
    super(index)
  }

  static w100 = new FontWeight(0)
  static w200 = new FontWeight(1)
  static w300 = new FontWeight(2)
  static w400 = new FontWeight(3)
  static w500 = new FontWeight(4)
  static w600 = new FontWeight(5)
  static w700 = new FontWeight(6)
  static w800 = new FontWeight(7)
  static w900 = new FontWeight(8)

  static normal = FontWeight.w400
  static bold = FontWeight.w700
}

export enum TextAlign {
  left = C.TextAlign_0,
  right = C.TextAlign_1,
  center = C.TextAlign_2,
  justify = C.TextAlign_3,
  start = C.TextAlign_4,
  end = C.TextAlign_5,
}

export enum TextBaseline {
  alphabetic = C.TextBaseline_0,
  ideographic = C.TextBaseline_1,
}

export enum TextDecorationStyle {
  solid = C.TextDecorationStyle_0,
  double = C.TextDecorationStyle_1,
  dotted = C.TextDecorationStyle_2,
  dashed = C.TextDecorationStyle_3,
  wavy = C.TextDecorationStyle_4,
}

export enum TextLeadingDistribution {
  proportional = C.TextLeadingDistribution_0,
  even = C.TextLeadingDistribution_1,
}

export enum TextDirection {
  rtl = C.TextDirection_0,
  ltr = C.TextDirection_1,
}

export class TextDecoration extends N.TextDecoration {
  constructor(mask: number) {
    super(mask)
  }

  static none = new TextDecoration(0x0)
  static underline = new TextDecoration(0x1)
  static overline = new TextDecoration(0x2)
  static lineThrough = new TextDecoration(0x4)
}

export class TextHeightBehavior extends N.TextHeightBehavior {
  constructor(args?: {
    applyHeightToFirstAscent?: boolean
    applyHeightToLastDescent?: boolean
    leadingDistribution?: TextLeadingDistribution
  }) {
    super(
      args?.applyHeightToFirstAscent ?? true,
      args?.applyHeightToLastDescent ?? true,
      args?.leadingDistribution ?? TextLeadingDistribution.proportional
    )
  }
}

export enum PlaceholderAlignment {
  baseline = C.PlaceholderAlignment_0,
  aboveBaseline = C.PlaceholderAlignment_1,
  belowBaseline = C.PlaceholderAlignment_2,
  top = C.PlaceholderAlignment_3,
  bottom = C.PlaceholderAlignment_4,
  middle = C.PlaceholderAlignment_5,
}

export enum TextAffinity {
  upstream = C.TextAffinity_0,
  downstream = C.TextAffinity_1,
}

export class TextPosition extends N.TextPosition {
  public readonly offset: number
  public readonly affinity: TextAffinity
  constructor(args: {offset: number; affinity?: TextAffinity}) {
    super(args.offset, args.affinity ?? TextAffinity.downstream)
    this.offset = args.offset
    this.affinity = args.affinity ?? TextAffinity.downstream
  }
}

// TextPosition: function TextPosition(t0, t1) {
//   this.offset = t0;
//   this.affinity = t1;
// },

export enum BoxWidthStyle {
  tight = C.BoxWidthStyle_0,
  max = C.BoxWidthStyle_1,
}

export enum BoxHeightStyle {
  tight = C.BoxHeightStyle_0,
  max = C.BoxHeightStyle_1,
  includeLineSpacingMiddle = C.BoxHeightStyle_2,
  includeLineSpacingTop = C.BoxHeightStyle_3,
  includeLineSpacingBottom = C.BoxHeightStyle_4,
  strut = C.BoxHeightStyle_5,
}

export class TextRange {
  public readonly start: number
  public readonly end: number

  constructor(args: {start: number; end: number}) {
    this.start = args.start
    this.end = args.end
  }

  static collapsed(offset: number): TextRange {
    return new TextRange({start: offset, end: offset})
  }

  static empty = new TextRange({start: -1, end: -1})

  get isValid() {
    return this.start >= 0 && this.end >= 0
  }

  get isCollapsed() {
    return this.start == this.end
  }

  get isNormalized() {
    return this.end >= this.start
  }

  textBefore(text: string): string {
    return text.substring(0, this.start)
  }

  textInside(text: string): string {
    return text.substring(this.start, this.end)
  }

  textAfter(text: string): string {
    return text.substring(this.end)
  }
}
