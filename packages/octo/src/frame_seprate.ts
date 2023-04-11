import {Key, Widget, octoKey} from '@octoflutter/flutter'

export class FrameSeparateWidget extends N.FrameSeparateWidget {
  constructor(args: {
    key?: Key
    index?: number
    placeHolder?: Widget
    child: Widget
  }) {
    super(args.child, args.placeHolder, args.index, args.key?.[octoKey])
  }
}
// FrameSeparateWidget: function FrameSeparateWidget(t0, t1, t2, t3) {
//     var _ = this;
//     _.child = t0;
//     _.placeHolder = t1;
//     _.index = t2;
//     _.key0 = t3;
//   },
