import {
  TextAlign,
  TextDirection,
  TextHeightBehavior,
  Locale,
} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {StrutStyle} from '../painting/strut_style'
import {TextWidthBasis} from '../painting/text_painter'
import {InlineSpan} from '../painting/inline_span'
import {TextStyle} from '../painting/text_style'
import {TextOverflow} from '../rendering/paragraph'
import {Widget} from './framework'

export class DefaultTextStyle extends N.DefaultTextStyle {
  constructor(args?: {
    key?: Key
    style?: TextStyle
    textAlign?: TextAlign
    softWrap?: boolean
    overflow?: TextOverflow
    maxLines?: number
    textWidthBasis?: TextWidthBasis
    textHeightBehavior?: TextHeightBehavior
    child?: Widget
  }) {
    super(
      args?.style,
      args?.textAlign,
      args?.softWrap ?? true,
      args?.overflow ?? TextOverflow.clip,
      args?.maxLines,
      args?.textWidthBasis ?? TextWidthBasis.parent,
      args?.textHeightBehavior,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// DefaultTextStyle: function DefaultTextStyle(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//   var _ = this;
//   _.style = t0;
//   _.textAlign = t1;
//   _.softWrap = t2;
//   _.overflow = t3;
//   _.maxLines = t4;
//   _.textWidthBasis = t5;
//   _.textHeightBehavior = t6;
//   _.child = t7;
//   _.key0 = t8;
// },

export class Text extends N.Text {
  constructor(
    data: string,
    args?: {
      key?: Key
      style?: TextStyle
      strutStyle?: StrutStyle
      textAlign?: TextAlign
      textDirection?: TextDirection
      locale?: Locale
      softWrap?: boolean
      overflow?: TextOverflow
      textScaleFactor?: number
      maxLines?: number
      semanticsLabel?: string
      textWidthBasis?: TextWidthBasis
      textHeightBehavior?: TextHeightBehavior
    }
  ) {
    super(
      data,
      null,
      args?.style,
      args?.strutStyle,
      args?.textAlign,
      args?.textDirection,
      args?.locale,
      args?.softWrap,
      args?.overflow,
      args?.textScaleFactor,
      args?.maxLines,
      args?.semanticsLabel,
      args?.textWidthBasis,
      args?.textHeightBehavior,
      args?.key?.[octoKey]
    )
  }

  static rich = (
    textSpan: InlineSpan,
    args?: {
      key?: Key
      style?: TextStyle
      strutStyle?: StrutStyle
      textAlign?: TextAlign
      textDirection?: TextDirection
      locale?: Locale
      softWrap?: boolean
      overflow?: TextOverflow
      textScaleFactor?: number
      maxLines?: number
      semanticsLabel?: string
      textWidthBasis?: TextWidthBasis
      textHeightBehavior?: TextHeightBehavior
    }
  ): Text => {
    return N.textRichInstance(
      textSpan,
      args?.key?.[octoKey],
      args?.style,
      args?.strutStyle,
      args?.textAlign,
      args?.textDirection,
      args?.locale,
      args?.softWrap,
      args?.overflow,
      args?.textScaleFactor,
      args?.maxLines,
      args?.semanticsLabel,
      args?.textWidthBasis,
      args?.textHeightBehavior
    ) as Text
  }
}

// Text: function Text(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14) {
//   var _ = this;
//   _.data0 = t0;
//   _.textSpan = t1;
//   _.style = t2;
//   _.strutStyle = t3;
//   _.textAlign = t4;
//   _.textDirection = t5;
//   _.locale = t6;
//   _.softWrap = t7;
//   _.overflow = t8;
//   _.textScaleFactor = t9;
//   _.maxLines = t10;
//   _.semanticsLabel = t11;
//   _.textWidthBasis = t12;
//   _.textHeightBehavior = t13;
//   _.key0 = t14;
// },
