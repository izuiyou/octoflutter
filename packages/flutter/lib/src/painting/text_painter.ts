import {
  Canvas,
  Locale,
  Offset,
  Size,
  TextAlign,
  TextDirection,
  TextHeightBehavior,
  TextPosition,
} from '@octoflutter/dartsdk'
import {StrutStyle} from './strut_style'
import {InlineSpan} from './text_span'

export enum TextWidthBasis {
  parent = C.TextWidthBasis_0,
  longestLine = C.TextWidthBasis_1,
}

export class TextPainter extends N.OctoTextPainter {
  constructor(args?: {
    text?: InlineSpan
    textAlign?: TextAlign
    textDirection?: TextDirection
    textScaleFactor?: number
    maxLines?: number
    ellipsis?: string
    locale?: Locale
    strutStyle?: StrutStyle
    textWidthBasis?: TextWidthBasis
    textHeightBehavior?: TextHeightBehavior
  }) {
    super(
      args?.text,
      args?.textAlign ?? TextAlign.start,
      args?.textDirection,
      args?.textScaleFactor ?? 1,
      args?.ellipsis,
      args?.locale,
      args?.maxLines,
      args?.strutStyle,
      args?.textWidthBasis ?? TextWidthBasis.parent,
      args?.textHeightBehavior
    )
  }

  get width(): number {
    return super.wgs()
  }

  get height(): number {
    return super.wgt()
  }

  get size(): Size {
    return new Size(this.width, this.height)
  }

  get minIntrinsicWidth(): number {
    return super.tpc()
  }

  get maxIntrinsicWidth(): number {
    return super.tpd()
  }

  get didExceedMaxLines(): boolean {
    return super.tpe()
  }

  layout(
    args: {minWidth: number; maxWidth: number} = {
      minWidth: 0.0,
      maxWidth: Number.POSITIVE_INFINITY,
    }
  ) {
    super.tpa(args.minWidth, args.maxWidth)
  }

  paint(canvas: Canvas, offset: Offset) {
    super.tpb(canvas, offset)
  }

  getPositionForOffset(offset: Offset): TextPosition {
    const ret = super.tpf(offset)
    return new TextPosition({offset: ret[0], affinity: ret[1]})
  }

  getOffsetBefore(offset: number): number | null {
    return super.tpg(offset)
  }

  getOffsetAfter(offset: number): number | null {
    return super.tph(offset)
  }
}

// OctoTextPainter: function OctoTextPainter(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//   var _ = this;
//   _._paragraph = null;
//   _._rebuildParagraphForPaint = true;
//   _._text_painter0$_text = t0;
//   _._textAlign = t1;
//   _._textDirection = t2;
//   _._textScaleFactor = t3;
//   _._ellipsis = t4;
//   _._locale = t5;
//   _._maxLines = t6;
//   _._strutStyle = t7;
//   _._textWidthBasis = t8;
//   _._textHeightBehavior = t9;
//   _._lastMaxWidth = _._lastMinWidth = _._layoutTemplate = _._placeholderDimensions = _._inlinePlaceholderScales = _._inlinePlaceholderBoxes = null;
//   _.__TextPainter__caretMetrics = $;
//   _._lineMetricsCache = _._previousCaretPrototype = _._previousCaretPosition = null;
// },
