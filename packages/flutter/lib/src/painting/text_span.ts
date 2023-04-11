import {WidgetSpan} from '../widgets/widget_span'
import {TextStyle} from './text_style'

export class TextSpan extends N.OctoTextSpan {
  constructor(args?: {
    text?: string
    children?: Array<InlineSpan>
    style?: TextStyle
    recognizer?: any
    mouseCursor?: any
    onEnter?: any
    onExit?: any
    semanticsLabel?: string
  }) {
    const real = N.textSpanInstance(
      args?.text,
      args?.children ?? [],
      args?.style,
      args?.recognizer,
      args?.mouseCursor,
      args?.onEnter,
      args?.onExit,
      args?.semanticsLabel
    )
    super(real)
  }
}

export type InlineSpan = TextSpan | WidgetSpan

// textSpanInstance: function(text, children, style, recognizer, mouseCursor, onEnter, onExit, semanticsLabel) {
//     return N.TextSpan$(children, mouseCursor, onEnter, onExit, recognizer, semanticsLabel, style, text);
//   },
// OctoTextSpan: function OctoTextSpan(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//     var _ = this;
//     _._textSpan = t0;
//     _.text = t1;
//     _.children = t2;
//     _.recognizer = t3;
//     _.mouseCursor = t4;
//     _.onEnter = t5;
//     _.onExit = t6;
//     _.semanticsLabel = t7;
//     _.style = t8;
//   },
