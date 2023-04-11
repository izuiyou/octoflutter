import {PlaceholderAlignment, TextBaseline} from '@octoflutter/dartsdk'
import {TextStyle} from '../painting/text_style'
import {Widget} from './framework'

export class WidgetSpan extends N.WidgetSpan {
  constructor(args: {
    child: Widget
    alignment?: PlaceholderAlignment
    baseline?: TextBaseline
    style?: TextStyle
  }) {
    super(
      args.child,
      args.alignment ?? PlaceholderAlignment.bottom,
      args.baseline,
      args.style
    )
  }
}

// WidgetSpan: function WidgetSpan(t0, t1, t2, t3) {
//     var _ = this;
//     _.child = t0;
//     _.alignment = t1;
//     _.baseline = t2;
//     _.style = t3;
//   },
