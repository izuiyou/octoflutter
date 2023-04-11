import {Clip} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {DragStartBehavior} from '../gestures/recognizer'
import {Axis, AxisDirection} from '../painting/basic_types'
import {BuildContext, octoContext, Widget} from './framework'
import {ScrollBehavior} from './scroll_configuration'
import {ScrollController} from './scroll_controller'
import {ScrollPhysics} from './scroll_physics'

export type NestedScrollViewHeaderSliversBuilder = (
  context: BuildContext,
  innerBoxIsScrolled: boolean
) => Array<Widget>

export class NestedScrollView extends N.NestedScrollView {
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
  }) {
    const bd = (ctx, innerBoxIsScrolled) => {
      return args.headerSliverBuilder(new BuildContext(ctx), innerBoxIsScrolled)
    }
    super(
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
      args.key?.[octoKey]
    )
  }

  static sliverOverlapAbsorberHandleFor = (
    ctx: BuildContext
  ): SliverOverlapAbsorberHandle => {
    return N.nestedSliverOverlapAbsorberHandleFor(
      ctx[octoContext]()
    ) as SliverOverlapAbsorberHandle
  }
}

// NestedScrollView: function NestedScrollView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11) {
//     var _ = this;
//     _.controller = t0;
//     _.scrollDirection = t1;
//     _.reverse = t2;
//     _.physics = t3;
//     _.headerSliverBuilder = t4;
//     _.body0 = t5;
//     _.dragStartBehavior = t6;
//     _.floatHeaderSlivers = t7;
//     _.clipBehavior = t8;
//     _.restorationId = t9;
//     _.scrollBehavior = t10;
//     _.key0 = t11;
//   },

export class SliverOverlapAbsorberHandle extends N.SliverOverlapAbsorberHandle {}

export class SliverOverlapAbsorber extends N.SliverOverlapAbsorber {
  constructor(args: {
    key?: Key
    handle: SliverOverlapAbsorberHandle
    sliver?: Widget
  }) {
    super(args.handle, args.sliver, args.key?.[octoKey])
  }
}

// SliverOverlapAbsorber: function SliverOverlapAbsorber(t0, t1, t2) {
//     this.handle = t0;
//     this.child = t1;
//     this.key0 = t2;
//   },

export class SliverOverlapInjector extends N.SliverOverlapInjector {
  constructor(args: {
    key?: Key
    handle: SliverOverlapAbsorberHandle
    sliver?: Widget
  }) {
    super(args.handle, args.sliver, args.key?.[octoKey])
  }
}

// SliverOverlapInjector: function SliverOverlapInjector(t0, t1, t2) {
//     this.handle = t0;
//     this.child = t1;
//     this.key0 = t2;
//   },

export class NestedScrollViewViewport extends N.NestedScrollViewViewport {
  constructor(args: {
    key?: Key
    axisDirection?: AxisDirection
    crossAxisDirection?: AxisDirection
    anchor?: number
    offset: any
    center?: Key
    slivers?: Array<Widget>
    handle: SliverOverlapAbsorberHandle
    clipBehavior?: Clip
  }) {
    super(
      args.handle,
      args.axisDirection ?? AxisDirection.down,
      args.crossAxisDirection,
      args.anchor ?? 0,
      args.offset,
      args.center?.[octoKey],
      null,
      null, //todo 要调整
      args.clipBehavior ?? Clip.hardEdge,
      args.slivers,
      args.key?.[octoKey]
    )
  }
}

// NestedScrollViewViewport: function NestedScrollViewViewport(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) {
//     var _ = this;
//     _.handle = t0;
//     _.axisDirection = t1;
//     _.crossAxisDirection = t2;
//     _.anchor = t3;
//     _.offset = t4;
//     _.center = t5;
//     _.cacheExtent = t6;
//     _.cacheExtentStyle = t7;
//     _.clipBehavior = t8;
//     _.children = t9;
//     _.key0 = t10;
//   },
