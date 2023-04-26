import {
  AlignmentDirectional,
  AlignmentGeometry,
  Axis,
  AxisDirection,
  DragStartBehavior,
  EdgeInsetsGeometry,
  IndexedWidgetBuilder,
  Key,
  NullableIndexedWidgetBuilder,
  octoKey,
  ScrollController,
  ScrollPhysics,
  ScrollViewKeyboardDismissBehavior,
  SliverChildBuilderDelegate,
  SliverChildDelegate,
  SliverChildListDelegate,
  SliverGridDelegate,
  Widget,
} from '@octoflutter/flutter'

import {Clip, isNullOrUndefined} from '@octoflutter/dartsdk'

N.octoLoadStaggered()

export abstract class StaggeredGridDelegate {}

export class StaggeredGrid extends STAGGERED.StaggeredGrid {
  constructor(args: {
    delegate: StaggeredGridDelegate
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    axisDirection?: AxisDirection
    children?: Array<Widget>
    key?: Key
  }) {
    super(
      args.delegate,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      args.axisDirection,
      args.children ?? [],
      args.key?.[octoKey]
    )
  }

  static custom(args: {
    delegate: StaggeredGridDelegate
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    axisDirection?: AxisDirection
    children?: Array<Widget>
    key?: Key
  }): StaggeredGrid {
    return new StaggeredGrid(args)
  }

  static count(args: {
    crossAxisCount: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    axisDirection?: AxisDirection
    children?: Array<Widget>
    key?: Key
  }): StaggeredGrid {
    return new StaggeredGrid({
      delegate: new StaggeredGridDelegateWithFixedCrossAxisCount({
        crossAxisCount: args.crossAxisCount,
      }),
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      axisDirection: args.axisDirection,
      children: args.children,
      key: args.key,
    })
  }

  static extent(args: {
    maxCrossAxisExtent: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    axisDirection?: AxisDirection
    children?: Array<Widget>
    key?: Key
  }): StaggeredGrid {
    return new StaggeredGrid({
      delegate: new StaggeredGridDelegateWithMaxCrossAxisExtent({
        maxCrossAxisExtent: args.maxCrossAxisExtent,
      }),
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      axisDirection: args.axisDirection,
      children: args.children,
      key: args.key,
    })
  }
}

// StaggeredGrid: function StaggeredGrid(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.delegate = t0;
//     _.mainAxisSpacing = t1;
//     _.crossAxisSpacing = t2;
//     _.axisDirection = t3;
//     _.children = t4;
//     _.key0 = t5;
//   },

export class StaggeredGridDelegateWithMaxCrossAxisExtent
  extends STAGGERED.StaggeredGridDelegateWithMaxCrossAxisExtent
  implements StaggeredGridDelegate
{
  constructor(args: {maxCrossAxisExtent: number}) {
    super(args.maxCrossAxisExtent)
  }
}

// StaggeredGridDelegateWithMaxCrossAxisExtent: function StaggeredGridDelegateWithMaxCrossAxisExtent(t0) {
//     this.maxCrossAxisExtent = t0;
//   },

export class StaggeredGridDelegateWithFixedCrossAxisCount
  extends STAGGERED.StaggeredGridDelegateWithFixedCrossAxisCount
  implements StaggeredGridDelegate
{
  constructor(args: {crossAxisCount: number}) {
    super(args.crossAxisCount)
  }
}

// StaggeredGridDelegateWithFixedCrossAxisCount: function StaggeredGridDelegateWithFixedCrossAxisCount(t0) {
//     this.crossAxisCount = t0;
//   },

export class StaggeredGridTile extends STAGGERED.StaggeredGridTile {
  constructor(args: {
    key?: Key
    crossAxisCellCount: number
    mainAxisCellCount: number | null
    mainAxisExtent: number | null
    child: Widget
  }) {
    super(
      args.crossAxisCellCount,
      args.mainAxisCellCount,
      args.mainAxisExtent,
      args.child,
      args.key?.[octoKey]
    )
  }

  static count(args: {
    key?: Key
    crossAxisCellCount: number
    mainAxisCellCount: number
    child: Widget
  }): StaggeredGridTile {
    return new StaggeredGridTile({
      key: args.key,
      crossAxisCellCount: args.crossAxisCellCount,
      mainAxisCellCount: args.mainAxisCellCount,
      child: args.child,
      mainAxisExtent: null,
    })
  }

  static extent(args: {
    key?: Key
    crossAxisCellCount: number
    mainAxisExtent: number
    child: Widget
  }): StaggeredGridTile {
    return new StaggeredGridTile({
      key: args.key,
      crossAxisCellCount: args.crossAxisCellCount,
      mainAxisCellCount: null,
      child: args.child,
      mainAxisExtent: args.mainAxisExtent,
    })
  }

  static fit(args: {
    key?: Key
    crossAxisCellCount: number
    child: Widget
  }): StaggeredGridTile {
    return new StaggeredGridTile({
      key: args.key,
      crossAxisCellCount: args.crossAxisCellCount,
      mainAxisCellCount: null,
      mainAxisExtent: null,
      child: args.child,
    })
  }
}

// StaggeredGridTile: function StaggeredGridTile(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.crossAxisCellCount = t0;
//     _.mainAxisCellCount = t1;
//     _.mainAxisExtent = t2;
//     _.child = t3;
//     _.key0 = t4;
//   }

export abstract class SliverSimpleGridDelegate {}

export class SliverSimpleGridDelegateWithFixedCrossAxisCount
  extends STAGGERED.SliverSimpleGridDelegateWithFixedCrossAxisCount
  implements SliverSimpleGridDelegate
{
  constructor(args: {crossAxisCount: number}) {
    super(args.crossAxisCount)
  }
}

export class SliverSimpleGridDelegateWithMaxCrossAxisExtent
  extends STAGGERED.SliverSimpleGridDelegateWithMaxCrossAxisExtent
  implements SliverSimpleGridDelegate
{
  constructor(args: {maxCrossAxisExtent: number}) {
    super(args.maxCrossAxisExtent)
  }
}

// SliverSimpleGridDelegateWithFixedCrossAxisCount: function SliverSimpleGridDelegateWithFixedCrossAxisCount(t0) {
//   this.crossAxisCount = t0;
// },
// SliverSimpleGridDelegateWithMaxCrossAxisExtent: function SliverSimpleGridDelegateWithMaxCrossAxisExtent(t0) {
//   this.maxCrossAxisExtent = t0;
// },

export class MasonryGridView extends STAGGERED.MasonryGridView {
  constructor(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    gridDelegate: SliverSimpleGridDelegate
    childrenDelegate?: SliverChildDelegate
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    children?: Array<Widget>
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    clipBehavior?: Clip
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
  }) {
    const childrenDelegate =
      args.childrenDelegate ??
      new SliverChildListDelegate(args.children ?? [], {
        addAutomaticKeepAlives: args.addAutomaticKeepAlives ?? true,
        addRepaintBoundaries: args.addRepaintBoundaries ?? true,
        addSemanticIndexes: args.addSemanticIndexes ?? true,
      })
    super(
      args.gridDelegate,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      childrenDelegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? (isNullOrUndefined(args.controller) ? true : false),
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0,
      args.cacheExtent,
      args.semanticChildCount ?? args.children?.length ?? 0,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior ?? ScrollViewKeyboardDismissBehavior.manual,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    )
  }

  static builder(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    gridDelegate: SliverSimpleGridDelegate
    itemBuilder: IndexedWidgetBuilder
    itemCount?: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    clipBehavior?: Clip
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
  }): MasonryGridView {
    const childrenDelegate = new SliverChildBuilderDelegate(args.itemBuilder, {
      childCount: args.itemCount,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      addSemanticIndexes: args.addSemanticIndexes,
    })

    return new MasonryGridView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      addSemanticIndexes: args.addSemanticIndexes,
      cacheExtent: args.cacheExtent,
      semanticChildCount: args.semanticChildCount ?? args.itemCount,
      dragStartBehavior: args.dragStartBehavior,
      clipBehavior: args.clipBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      childrenDelegate: childrenDelegate,
      gridDelegate: args.gridDelegate,
    })
  }

  static custom(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    gridDelegate: SliverSimpleGridDelegate
    childrenDelegate: SliverChildDelegate
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    clipBehavior?: Clip
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
  }): MasonryGridView {
    return new MasonryGridView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      addSemanticIndexes: args.addSemanticIndexes,
      cacheExtent: args.cacheExtent,
      semanticChildCount: args.semanticChildCount,
      dragStartBehavior: args.dragStartBehavior,
      clipBehavior: args.clipBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      childrenDelegate: args.childrenDelegate,
      gridDelegate: args.gridDelegate,
    })
  }

  static count(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    crossAxisCount: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    itemBuilder: IndexedWidgetBuilder
    itemCount?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    clipBehavior?: Clip
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
  }): MasonryGridView {
    const childrenDelegate = new SliverChildBuilderDelegate(args.itemBuilder, {
      childCount: args.itemCount,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      addSemanticIndexes: args.addSemanticIndexes,
    })

    const gridDelegate = new SliverSimpleGridDelegateWithFixedCrossAxisCount({
      crossAxisCount: args.crossAxisCount,
    })
    return new MasonryGridView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      addSemanticIndexes: args.addSemanticIndexes,
      cacheExtent: args.cacheExtent,
      semanticChildCount: args.semanticChildCount ?? args.itemCount,
      dragStartBehavior: args.dragStartBehavior,
      clipBehavior: args.clipBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      childrenDelegate: childrenDelegate,
      gridDelegate: gridDelegate,
    })
  }

  static extent(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    maxCrossAxisExtent: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    itemBuilder: IndexedWidgetBuilder
    itemCount?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    clipBehavior?: Clip
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
  }): MasonryGridView {
    const childrenDelegate = new SliverChildBuilderDelegate(args.itemBuilder, {
      childCount: args.itemCount,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      addSemanticIndexes: args.addSemanticIndexes,
    })

    const gridDelegate = new SliverSimpleGridDelegateWithMaxCrossAxisExtent({
      maxCrossAxisExtent: args.maxCrossAxisExtent,
    })
    return new MasonryGridView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      addSemanticIndexes: args.addSemanticIndexes,
      cacheExtent: args.cacheExtent,
      semanticChildCount: args.semanticChildCount ?? args.itemCount,
      dragStartBehavior: args.dragStartBehavior,
      clipBehavior: args.clipBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      childrenDelegate: childrenDelegate,
      gridDelegate: gridDelegate,
    })
  }
}

// MasonryGridView: function MasonryGridView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20) {
//   var _ = this;
//   _.gridDelegate = t0;
//   _.mainAxisSpacing = t1;
//   _.crossAxisSpacing = t2;
//   _.childrenDelegate = t3;
//   _.padding = t4;
//   _.scrollDirection = t5;
//   _.reverse = t6;
//   _.controller = t7;
//   _.primary = t8;
//   _.physics = t9;
//   _.scrollBehavior = t10;
//   _.shrinkWrap = t11;
//   _.center = t12;
//   _.anchor = t13;
//   _.cacheExtent = t14;
//   _.semanticChildCount = t15;
//   _.dragStartBehavior = t16;
//   _.keyboardDismissBehavior = t17;
//   _.restorationId = t18;
//   _.clipBehavior = t19;
//   _.key0 = t20;
// },

export class SliverMasonryGrid extends STAGGERED.SliverMasonryGrid {
  constructor(args: {
    key?: Key
    delegate: SliverChildDelegate
    gridDelegate: SliverSimpleGridDelegate
    mainAxisSpacing?: number
    crossAxisSpacing?: number
  }) {
    super(
      args.gridDelegate,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      args.delegate,
      args.key?.[octoKey]
    )
  }

  static count(args: {
    key?: Key
    crossAxisCount: number
    itemBuilder: IndexedWidgetBuilder
    childCount?: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
  }): SliverMasonryGrid {
    const delegate = new SliverChildBuilderDelegate(args.itemBuilder, {
      childCount: args.childCount,
    })
    const gridDelegate = new SliverSimpleGridDelegateWithFixedCrossAxisCount({
      crossAxisCount: args.crossAxisCount,
    })
    return new SliverMasonryGrid({
      key: args.key,
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      delegate: delegate,
      gridDelegate: gridDelegate,
    })
  }

  static extent(args: {
    key?: Key
    maxCrossAxisExtent: number
    itemBuilder: IndexedWidgetBuilder
    childCount?: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
  }): SliverMasonryGrid {
    const delegate = new SliverChildBuilderDelegate(args.itemBuilder, {
      childCount: args.childCount,
    })
    const gridDelegate = new SliverSimpleGridDelegateWithMaxCrossAxisExtent({
      maxCrossAxisExtent: args.maxCrossAxisExtent,
    })
    return new SliverMasonryGrid({
      key: args.key,
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      delegate: delegate,
      gridDelegate: gridDelegate,
    })
  }
}

// SliverMasonryGrid: function SliverMasonryGrid(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.gridDelegate = t0;
//   _.mainAxisSpacing = t1;
//   _.crossAxisSpacing = t2;
//   _.delegate = t3;
//   _.key0 = t4;
// },

export class QuiltedGridRepeatPattern {
  static same = STAGGERED.quiltedGridRepeatPattern(
    0
  ) as QuiltedGridRepeatPattern

  static inverted = STAGGERED.quiltedGridRepeatPattern(
    1
  ) as QuiltedGridRepeatPattern

  static mirrored = STAGGERED.quiltedGridRepeatPattern(
    2
  ) as QuiltedGridRepeatPattern
}

export class QuiltedGridTile extends STAGGERED.QuiltedGridTile {
  constructor(mainAxisCount: number, crossAxisCount: number) {
    super(mainAxisCount, crossAxisCount)
  }
}

// QuiltedGridTile: function QuiltedGridTile(t0, t1) {
//   this.mainAxisCount = t0;
//   this.crossAxisCount = t1;
// },

export class SliverQuiltedGridDelegate
  extends STAGGERED.SliverQuiltedGridDelegate
  implements SliverGridDelegate
{
  constructor(args: {
    crossAxisCount: number
    pattern: Array<QuiltedGridTile>
    repeatPattern?: QuiltedGridRepeatPattern
    mainAxisSpacing?: number
    crossAxisSpacing?: number
  }) {
    super(
      args.crossAxisCount,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      STAGGERED.quiltedToPattern(
        args.pattern,
        args.crossAxisCount,
        args.repeatPattern ?? QuiltedGridRepeatPattern.same
      )
    )
  }
}

// SliverQuiltedGridDelegate: function SliverQuiltedGridDelegate(t0, t1, t2, t3) {
//   var _ = this;
//   _.crossAxisCount = t0;
//   _.mainAxisSpacing = t1;
//   _.crossAxisSpacing = t2;
//   _._quilted$_pattern = t3;
// },

export class WovenGridTile extends STAGGERED.WovenGridTile {
  constructor(args: {
    aspectRatio: number
    crossAxisRatio?: number
    alignment?: AlignmentDirectional
  }) {
    super(
      args.aspectRatio,
      args.crossAxisRatio ?? 1,
      args.alignment ?? new AlignmentDirectional(0, 0)
    )
  }
}

// WovenGridTile: function WovenGridTile(t0, t1, t2) {
//   this.aspectRatio = t0;
//   this.crossAxisRatio = t1;
//   this.alignment = t2;
// },

export class SliverWovenGridDelegate implements SliverGridDelegate {
  static count(args: {
    pattern: Array<WovenGridTile>
    crossAxisCount: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    tileBottomSpace?: number
  }): SliverWovenGridDelegate {
    return STAGGERED.sliverWovenGridDelegateCount(
      args.pattern,
      args.crossAxisCount,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      args.tileBottomSpace ?? 0
    )
  }

  static extent(args: {
    pattern: Array<WovenGridTile>
    maxCrossAxisExtent: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    tileBottomSpace?: number
  }): SliverWovenGridDelegate {
    return STAGGERED.sliverWovenGridDelegateExtent(
      args.pattern,
      args.maxCrossAxisExtent,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      args.tileBottomSpace ?? 0
    )
  }
}

export class StairedGridTile extends STAGGERED.StairedGridTile {
  constructor(crossAxisRatio: number, aspectRatio: number) {
    super(crossAxisRatio, aspectRatio)
  }
}

// StairedGridTile: function StairedGridTile(t0, t1) {
//   this.crossAxisRatio = t0;
//   this.aspectRatio = t1;
// },

export class SliverStairedGridDelegate
  extends STAGGERED.SliverStairedGridDelegate
  implements SliverGridDelegate
{
  constructor(args: {
    pattern: Array<StairedGridTile>
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    tileBottomSpace?: number
    startCrossAxisDirectionReversed?: boolean
  }) {
    super(
      args.tileBottomSpace ?? 0,
      args.startCrossAxisDirectionReversed ?? false,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      args.pattern,
      args.pattern.length,
      1,
      null
    )
  }
}

// SliverStairedGridDelegate: function SliverStairedGridDelegate(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.tileBottomSpace = t0;
//   _.startCrossAxisDirectionReversed = t1;
//   _.mainAxisSpacing = t2;
//   _.crossAxisSpacing = t3;
//   _.pattern = t4;
//   _.tileCount = t5;
//   _.crossAxisCount = t6;
//   _.maxCrossAxisExtent = t7;
// },

export class AlignedGridView extends STAGGERED.AlignedGridView {
  constructor(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    itemCount?: number
    itemBuilder: NullableIndexedWidgetBuilder
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
    gridDelegate: SliverSimpleGridDelegate
  }) {
    super(
      args.gridDelegate,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      args.itemBuilder,
      args.itemCount,
      args.addAutomaticKeepAlives ?? true,
      args.addRepaintBoundaries ?? true,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? (isNullOrUndefined(args.controller) ? true : false),
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0,
      args.cacheExtent,
      args.semanticChildCount ?? args.itemCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior ?? ScrollViewKeyboardDismissBehavior.manual,
      args.restorationId,
      args.clipBehavior ?? Clip.none,
      args.key?.[octoKey]
    )
  }

  static custom(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    itemCount?: number
    itemBuilder: NullableIndexedWidgetBuilder
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
    gridDelegate: SliverSimpleGridDelegate
  }): AlignedGridView {
    return new AlignedGridView(args)
  }

  static count(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    crossAxisCount: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    itemCount?: number
    itemBuilder: NullableIndexedWidgetBuilder
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): AlignedGridView {
    const gridDelegate = new SliverSimpleGridDelegateWithFixedCrossAxisCount({
      crossAxisCount: args.crossAxisCount,
    })

    return new AlignedGridView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      itemBuilder: args.itemBuilder,
      itemCount: args.itemCount,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      cacheExtent: args.cacheExtent,
      semanticChildCount: args.semanticChildCount,
      dragStartBehavior: args.dragStartBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      clipBehavior: args.clipBehavior,
      gridDelegate: gridDelegate,
    })
  }

  static extent(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    maxCrossAxisExtent: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    itemCount?: number
    itemBuilder: NullableIndexedWidgetBuilder
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): AlignedGridView {
    const gridDelegate = new SliverSimpleGridDelegateWithMaxCrossAxisExtent({
      maxCrossAxisExtent: args.maxCrossAxisExtent,
    })

    return new AlignedGridView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      mainAxisSpacing: args.mainAxisSpacing,
      crossAxisSpacing: args.crossAxisSpacing,
      itemBuilder: args.itemBuilder,
      itemCount: args.itemCount,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives,
      addRepaintBoundaries: args.addRepaintBoundaries,
      cacheExtent: args.cacheExtent,
      semanticChildCount: args.semanticChildCount,
      dragStartBehavior: args.dragStartBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      clipBehavior: args.clipBehavior,
      gridDelegate: gridDelegate,
    })
  }
}

// AlignedGridView: function AlignedGridView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23) {
//   var _ = this;
//   _.gridDelegate = t0;
//   _.mainAxisSpacing = t1;
//   _.crossAxisSpacing = t2;
//   _.itemBuilder = t3;
//   _.itemCount = t4;
//   _.addAutomaticKeepAlives = t5;
//   _.addRepaintBoundaries = t6;
//   _.padding = t7;
//   _.scrollDirection = t8;
//   _.reverse = t9;
//   _.controller = t10;
//   _.primary = t11;
//   _.physics = t12;
//   _.scrollBehavior = t13;
//   _.shrinkWrap = t14;
//   _.center = t15;
//   _.anchor = t16;
//   _.cacheExtent = t17;
//   _.semanticChildCount = t18;
//   _.dragStartBehavior = t19;
//   _.keyboardDismissBehavior = t20;
//   _.restorationId = t21;
//   _.clipBehavior = t22;
//   _.key0 = t23;
// },
