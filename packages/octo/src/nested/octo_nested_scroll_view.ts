import {Clip} from '@octoflutter/dartsdk'
import {
  BuildContext,
  NestedScrollViewHeaderSliversBuilder,
  ScrollController,
  ScrollPhysics,
  ScrollViewKeyboardDismissBehavior,
  Widget,
  Key,
  Axis,
  octoKey,
  DragStartBehavior,
} from '@octoflutter/flutter'

export class OctoNestedScrollView extends N.OctoNestedScrollView {
  constructor(args: {
    key?: Key
    controller?: ScrollController
    scrollDirection?: Axis
    reverse?: boolean
    physics?: ScrollPhysics
    headerSliverBuilder: NestedScrollViewHeaderSliversBuilder
    body: Widget
    dragStartBehavior?: DragStartBehavior
    floatHeaderSlivers?: boolean
    clipBehavior?: Clip
    restorationId?: string
    scrollBehavior?: ScrollBehavior
    pinnedHeaderSliverHeightBuilder?: any
    onlyOneScrollInBody?: boolean
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
  }) {
    const bd = (ctx, innerBoxIsScrolled) => {
      return args.headerSliverBuilder(new BuildContext(ctx), innerBoxIsScrolled)
    }
    super(
      args.pinnedHeaderSliverHeightBuilder,
      args.onlyOneScrollInBody ?? true,
      args.controller,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.physics,
      bd,
      args.body,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.floatHeaderSlivers ?? false,
      args.clipBehavior ?? Clip.hardEdge,
      args.restorationId,
      args.scrollBehavior,
      args.keyboardDismissBehavior,
      args.key?.[octoKey]
    )
  }
}

// OctoNestedScrollView: function OctoNestedScrollView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14) {
//     var _ = this;
//     _.pinnedHeaderSliverHeightBuilder = t0;
//     _.onlyOneScrollInBody = t1;
//     _.controller = t2;
//     _.scrollDirection = t3;
//     _.reverse = t4;
//     _.physics = t5;
//     _.headerSliverBuilder = t6;
//     _.body0 = t7;
//     _.dragStartBehavior = t8;
//     _.floatHeaderSlivers = t9;
//     _.clipBehavior = t10;
//     _.restorationId = t11;
//     _.scrollBehavior = t12;
//     _.keyboardDismissBehavior = t13;
//     _.key0 = t14;
//   },
