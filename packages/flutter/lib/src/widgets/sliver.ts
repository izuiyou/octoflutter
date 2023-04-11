import {map4Dart} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {SliverGridDelegate} from '../rendering/sliver_grid'
import {BuildContext, NullableIndexedWidgetBuilder, Widget} from './framework'

export type SemanticIndexCallback = (
  widget: Widget,
  localIndex: number
) => number | null | undefined

export type ChildIndexGetter = (key: Key) => number | null | undefined

const _kDefaultSemanticIndexCallback = (_, localIndex) => localIndex

export class SliverChildListDelegate extends N.SliverChildListDelegate {
  constructor(
    children: Array<Widget>,
    args?: {
      addAutomaticKeepAlives?: boolean
      addRepaintBoundaries?: boolean
      addSemanticIndexes?: boolean
      semanticIndexCallback?: SemanticIndexCallback
      semanticIndexOffset?: number
    }
  ) {
    super(
      args?.addAutomaticKeepAlives ?? true,
      args?.addRepaintBoundaries ?? true,
      args?.addSemanticIndexes ?? true,
      args?.semanticIndexOffset ?? 0,
      args?.semanticIndexCallback ?? _kDefaultSemanticIndexCallback,
      children,
      map4Dart(new Map([[null, 0]]))
    )
  }
}

// SliverChildListDelegate: function SliverChildListDelegate(t0, t1, t2, t3, t4, t5, t6) {
//     var _ = this;
//     _.addAutomaticKeepAlives = t0;
//     _.addRepaintBoundaries = t1;
//     _.addSemanticIndexes = t2;
//     _.semanticIndexOffset = t3;
//     _.semanticIndexCallback = t4;
//     _.children = t5;
//     _._keyToIndex = t6;
//   },

export class SliverChildBuilderDelegate extends N.SliverChildBuilderDelegate {
  constructor(
    builder: NullableIndexedWidgetBuilder,
    args?: {
      findChildIndexCallback?: ChildIndexGetter
      childCount?: number
      addAutomaticKeepAlives?: boolean
      addRepaintBoundaries?: boolean
      addSemanticIndexes?: boolean
      semanticIndexCallback?: SemanticIndexCallback
      semanticIndexOffset?: number
    }
  ) {
    const wb = (ctx: any, index: any) => {
      return builder(new BuildContext(ctx), index)
    }
    super(
      wb,
      args?.childCount,
      args?.addAutomaticKeepAlives ?? true,
      args?.addRepaintBoundaries ?? true,
      args?.addSemanticIndexes ?? true,
      args?.semanticIndexOffset ?? 0,
      args?.semanticIndexCallback ?? _kDefaultSemanticIndexCallback,
      args?.findChildIndexCallback
    )
  }
}

// SliverChildBuilderDelegate: function SliverChildBuilderDelegate(t0, t1, t2, t3, t4, t5, t6, t7) {
//     var _ = this;
//     _.builder = t0;
//     _.childCount = t1;
//     _.addAutomaticKeepAlives = t2;
//     _.addRepaintBoundaries = t3;
//     _.addSemanticIndexes = t4;
//     _.semanticIndexOffset = t5;
//     _.semanticIndexCallback = t6;
//     _.findChildIndexCallback = t7;
//   },

export type SliverChildDelegate =
  | SliverChildBuilderDelegate
  | SliverChildListDelegate

export class SliverList extends N.SliverList {
  constructor(args: {key?: Key; delegate: SliverChildDelegate}) {
    super(args.delegate, args.key?.[octoKey])
  }
}

// SliverList: function SliverList(t0, t1) {
//     this.delegate = t0;
//     this.key = t1;
//   },

export class SliverFixedExtentList extends N.SliverFixedExtentList {
  constructor(args: {
    key?: Key
    delegate: SliverChildDelegate
    itemExtent: number
  }) {
    super(args.itemExtent, args.delegate, args.key?.[octoKey])
  }
}

// SliverFixedExtentList: function SliverFixedExtentList(t0, t1, t2) {
//     this.itemExtent = t0;
//     this.delegate = t1;
//     this.key = t2;
//   },

export class SliverGrid extends N.SliverGrid {
  constructor(args: {
    key?: Key
    delegate: SliverChildDelegate
    gridDelegate: SliverGridDelegate
  }) {
    super(args.gridDelegate, args.delegate, args.key?.[octoKey])
  }
}

// SliverGrid: function SliverGrid(t0, t1, t2) {
//     this.gridDelegate = t0;
//     this.delegate = t1;
//     this.key = t2;
//   },

export class SliverOpacity extends N.SliverOpacity {
  constructor(args: {
    key?: Key
    opacity: number
    alwaysIncludeSemantics?: boolean
    sliver?: Widget
  }) {
    super(
      args.opacity,
      args.alwaysIncludeSemantics ?? false,
      args.sliver,
      args.key?.[octoKey]
    )
  }
}

// SliverOpacity: function SliverOpacity(t0, t1, t2, t3) {
//     var _ = this;
//     _.opacity = t0;
//     _.alwaysIncludeSemantics = t1;
//     _.child = t2;
//     _.key = t3;
//   },

export class SliverIgnorePointer extends N.SliverIgnorePointer {
  constructor(args?: {
    key?: Key
    ignoring?: boolean
    ignoringSemantics?: boolean
    sliver?: Widget
  }) {
    super(
      args?.ignoring ?? true,
      args?.ignoringSemantics,
      args?.sliver,
      args?.key?.[octoKey]
    )
  }
}

// SliverIgnorePointer: function SliverIgnorePointer(t0, t1, t2, t3) {
//     var _ = this;
//     _.ignoring = t0;
//     _.ignoringSemantics = t1;
//     _.child = t2;
//     _.key = t3;
//   },

export class SliverOffstage extends N.SliverOffstage {
  constructor(args?: {key?: Key; offstage?: boolean; sliver?: Widget}) {
    super(args?.offstage, args?.sliver, args?.key?.[octoKey])
  }
}

// SliverOffstage: function SliverOffstage(t0, t1, t2) {
//     this.offstage = t0;
//     this.child = t1;
//     this.key = t2;
//   },
