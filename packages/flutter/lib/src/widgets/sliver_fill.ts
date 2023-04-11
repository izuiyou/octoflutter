import {Key, octoKey} from '../foundation/key'
import {Widget} from './framework'

export class SliverFillRemaining extends N.SliverFillRemaining {
  constructor(args?: {
    key?: Key
    child?: Widget
    hasScrollBody?: boolean
    fillOverscroll?: boolean
  }) {
    super(
      args?.child,
      args?.hasScrollBody,
      args?.fillOverscroll,
      args?.key?.[octoKey]
    )
  }
}

// SliverFillRemaining: function SliverFillRemaining(t0, t1, t2, t3) {
//     var _ = this;
//     _.child = t0;
//     _.hasScrollBody = t1;
//     _.fillOverscroll = t2;
//     _.key0 = t3;
//   },
