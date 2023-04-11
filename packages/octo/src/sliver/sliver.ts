import {Rect, TextDirection, Duration} from '@octoflutter/dartsdk'
import {
  Key,
  octoKey,
  Alignment,
  AlignmentGeometry,
  Widget,
  Curve,
  Curves,
} from '@octoflutter/flutter'

export class MultiSliver extends N.MultiSliver {
  constructor(args: {
    children: Array<Widget>
    pushPinnedChildren?: boolean
    key?: Key
  }) {
    super(args.pushPinnedChildren ?? false, args.children, args.key?.[octoKey])
  }
}

// MultiSliver: function MultiSliver(t0, t1, t2) {
//     this.pushPinnedChildren = t0;
//     this.children = t1;
//     this.key0 = t2;
//   },

export class SliverStack extends N.SliverStack {
  constructor(args: {
    key?: Key
    children: Array<Widget>
    textDirection?: TextDirection
    positionedAlignment?: AlignmentGeometry
    insetOnOverlap?: boolean
  }) {
    super(
      args.positionedAlignment ?? Alignment.center,
      args.textDirection,
      args.insetOnOverlap ?? false,
      args.children,
      args.key?.[octoKey]
    )
  }
}

// SliverStack: function SliverStack(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.positionedAlignment = t0;
//   _.textDirection = t1;
//   _.insetOnOverlap = t2;
//   _.children = t3;
//   _.key0 = t4;
// },

export class SliverPositioned extends N.SliverPositioned {
  constructor(args: {
    key?: Key
    left?: number
    top?: number
    right?: number
    bottom?: number
    width?: number
    height?: number
    child: Widget
  }) {
    super(
      args.left,
      args.top,
      args.right,
      args.bottom,
      args.width,
      args.height,
      args.child,
      args.key?.[octoKey]
    )
  }

  static fromRect = (args: {
    key?: Key
    rect: Rect
    child: Widget
  }): SliverPositioned => {
    return new SliverPositioned({
      key: args.key,
      left: args.rect.left,
      top: args.rect.top,
      width: args.rect.width,
      height: args.rect.height,
      child: args.child,
    })
  }

  static fill = (args: {
    key?: Key
    left?: number
    top?: number
    right?: number
    bottom?: number
    child: Widget
  }): SliverPositioned => {
    return new SliverPositioned({
      key: args.key,
      left: args.left ?? 0,
      top: args.top ?? 0,
      right: args.right ?? 0,
      bottom: args.bottom ?? 0,
      child: args.child,
    })
  }
}

// SliverPositioned: function SliverPositioned(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.left0 = t0;
//   _.top0 = t1;
//   _.right = t2;
//   _.bottom = t3;
//   _.width = t4;
//   _.height = t5;
//   _.child = t6;
//   _.key0 = t7;
// },

export class SliverAnimatedPaintExtent extends N.SliverAnimatedPaintExtent {
  constructor(args: {
    key?: Key
    duration: Duration
    child: Widget
    curve?: Curve
  }) {
    super(
      args.duration,
      args.curve ?? Curves.linear,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// SliverAnimatedPaintExtent: function SliverAnimatedPaintExtent(t0, t1, t2, t3) {
//   var _ = this;
//   _.duration = t0;
//   _.curve = t1;
//   _.child = t2;
//   _.key0 = t3;
// },
