import {Key, octoKey, Widget} from '@octoflutter/flutter'

export class OctoVisibilityDetector extends N.OctoVisibilityDetector {
  constructor(args: {
    child: Widget
    uniqueKey: Key
    inPageView?: boolean
    pageIndex?: number
    key?: Key
  }) {
    super(
      args.child,
      args.uniqueKey[octoKey],
      args.inPageView,
      args.pageIndex,
      args.key?.[octoKey]
    )
  }
}

// OctoVisibilityDetector: function OctoVisibilityDetector(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.child = t0;
//     _.uniqueKey = t1;
//     _.inPageView = t2;
//     _.pageIndex = t3;
//     _.key0 = t4;
//   },
