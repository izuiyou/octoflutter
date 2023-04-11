import {Key, octoKey} from '../foundation/key'
import {SizedBox, SliverToBoxAdapter} from './basic'
import {Widget} from './framework'

export class Visibility extends N.Visibility {
  constructor(args: {
    child: Widget
    key?: Key
    replacement?: Widget
    visible?: boolean
    maintainState?: boolean
    maintainAnimation?: boolean
    maintainSize?: boolean
    maintainSemantics?: boolean
    maintainInteractivity?: boolean
  }) {
    super(
      args.child,
      args.replacement ?? SizedBox.shrink(),
      args?.visible ?? true,
      args?.maintainState ?? false,
      args?.maintainAnimation ?? false,
      args?.maintainSize ?? false,
      args?.maintainSemantics ?? false,
      args?.maintainInteractivity ?? false,
      args?.key?.[octoKey]
    )
  }
}

// Visibility: function Visibility(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//   var _ = this;
//   _.child = t0;
//   _.replacement = t1;
//   _.visible = t2;
//   _.maintainState = t3;
//   _.maintainAnimation = t4;
//   _.maintainSize = t5;
//   _.maintainSemantics = t6;
//   _.maintainInteractivity = t7;
//   _.key0 = t8;
// },

export class SliverVisibility extends N.SliverVisibility {
  constructor(args: {
    sliver: Widget
    key?: Key
    replacementSliver?: Widget
    visible?: boolean
    maintainState?: boolean
    maintainAnimation?: boolean
    maintainSize?: boolean
    maintainSemantics?: boolean
    maintainInteractivity?: boolean
  }) {
    super(
      args.sliver,
      args.replacementSliver ?? new SliverToBoxAdapter(),
      args?.visible ?? true,
      args?.maintainState ?? false,
      args?.maintainAnimation ?? false,
      args?.maintainSize ?? false,
      args?.maintainSemantics ?? false,
      args?.maintainInteractivity ?? false,
      args?.key?.[octoKey]
    )
  }
}

// SliverVisibility: function SliverVisibility(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//   var _ = this;
//   _.sliver = t0;
//   _.replacementSliver = t1;
//   _.visible = t2;
//   _.maintainState = t3;
//   _.maintainAnimation = t4;
//   _.maintainSize = t5;
//   _.maintainSemantics = t6;
//   _.maintainInteractivity = t7;
//   _.key0 = t8;
// },
