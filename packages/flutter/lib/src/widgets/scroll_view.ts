import {isNullOrUndefined, floor, Clip} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {DragStartBehavior} from '../gestures/recognizer'
import {Axis} from '../painting/basic_types'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {
  SliverGridDelegate,
  SliverGridDelegateWithFixedCrossAxisCount,
  SliverGridDelegateWithMaxCrossAxisExtent,
} from '../rendering/sliver_grid'
import {BuildContext, IndexedWidgetBuilder, Widget} from './framework'
import {ScrollController} from './scroll_controller'
import {ScrollPhysics} from './scroll_physics'
import {
  SliverChildBuilderDelegate,
  SliverChildDelegate,
  SliverChildListDelegate,
} from './sliver'

export enum ScrollViewKeyboardDismissBehavior {
  manual = C.ScrollViewKeyboardDismissBehavior_0,
  onDrag = C.ScrollViewKeyboardDismissBehavior_1,
}

export class ListView extends N.ListView {
  constructor(args?: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    itemExtent?: number
    prototypeItem?: Widget
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    children?: Array<Widget>
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }) {
    const delegate = new SliverChildListDelegate(args?.children ?? [], {
      addAutomaticKeepAlives: args?.addAutomaticKeepAlives ?? true,
      addRepaintBoundaries: args?.addRepaintBoundaries ?? true,
      addSemanticIndexes: args?.addSemanticIndexes ?? true,
    })
    super(
      args?.itemExtent,
      args?.prototypeItem,
      delegate,
      args?.padding,
      args?.scrollDirection ?? Axis.vertical,
      args?.reverse ?? false,
      args?.controller,
      args?.primary ?? (isNullOrUndefined(args?.controller) ? true : false),
      args?.physics,
      null,
      args?.shrinkWrap ?? false,
      null,
      0.0,
      args?.cacheExtent,
      args?.semanticChildCount ?? args?.children?.length ?? 0,
      args?.dragStartBehavior ?? DragStartBehavior.start,
      args?.keyboardDismissBehavior,
      args?.restorationId,
      args?.clipBehavior ?? Clip.hardEdge,
      args?.key?.[octoKey]
    )
  }

  static builder = (args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    itemExtent?: number
    prototypeItem?: Widget
    itemBuilder: IndexedWidgetBuilder
    itemCount?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): ListView => {
    const delegate = new SliverChildBuilderDelegate(args.itemBuilder, {
      childCount: args.itemCount,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives ?? true,
      addRepaintBoundaries: args?.addRepaintBoundaries ?? true,
      addSemanticIndexes: args?.addSemanticIndexes ?? true,
    })

    return new N.ListView(
      args.itemExtent,
      args.prototypeItem,
      delegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? (isNullOrUndefined(args.controller) ? true : false),
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.semanticChildCount ?? args.itemCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    ) as ListView
  }

  static custom = (args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    itemExtent?: number
    prototypeItem?: Widget
    childrenDelegate: SliverChildDelegate
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): ListView => {
    return new N.ListView(
      args.itemExtent,
      args.prototypeItem,
      args.childrenDelegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? (isNullOrUndefined(args.controller) ? true : false),
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.semanticChildCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    ) as ListView
  }

  static separated = (args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    itemBuilder: IndexedWidgetBuilder
    separatorBuilder: IndexedWidgetBuilder
    itemCount: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): ListView => {
    const delegate = new SliverChildBuilderDelegate(
      (ctx: BuildContext, index: number) => {
        const itemIndex = floor(index / 2)
        if (index % 2 === 0) {
          return args.itemBuilder(ctx, itemIndex)
        } else {
          return args.separatorBuilder(ctx, itemIndex)
        }
      },
      {
        childCount: Math.max(0, (args.itemCount ?? 0) * 2 - 1),
        addAutomaticKeepAlives: args.addAutomaticKeepAlives ?? true,
        addRepaintBoundaries: args.addRepaintBoundaries ?? true,
        addSemanticIndexes: args?.addSemanticIndexes ?? true,
        semanticIndexCallback: (_, index) => {
          return index % 2 === 0 ? floor(index / 2) : null
        },
      }
    )

    return new N.ListView(
      null,
      null,
      delegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? (isNullOrUndefined(args.controller) ? true : false),
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.semanticChildCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    ) as ListView
  }
}

// ListView: function ListView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19) {
//   var _ = this;
//   _.itemExtent = t0;
//   _.prototypeItem = t1;
//   _.childrenDelegate = t2;
//   _.padding = t3;
//   _.scrollDirection = t4;
//   _.reverse = t5;
//   _.controller = t6;
//   _.primary = t7;
//   _.physics = t8;
//   _.scrollBehavior = t9;
//   _.shrinkWrap = t10;
//   _.center = t11;
//   _.anchor = t12;
//   _.cacheExtent = t13;
//   _.semanticChildCount = t14;
//   _.dragStartBehavior = t15;
//   _.keyboardDismissBehavior = t16;
//   _.restorationId = t17;
//   _.clipBehavior = t18;
//   _.key0 = t19;
// },

export class GridView extends N.GridView {
  constructor(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    gridDelegate: SliverGridDelegate
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
    const delegate = new SliverChildListDelegate(args.children ?? [], {
      addAutomaticKeepAlives: args.addAutomaticKeepAlives ?? true,
      addRepaintBoundaries: args.addRepaintBoundaries ?? true,
      addSemanticIndexes: args.addSemanticIndexes ?? true,
    })
    super(
      args.gridDelegate,
      delegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? true,
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.semanticChildCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    )
  }

  static builder = (args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    gridDelegate: SliverGridDelegate
    itemBuilder: IndexedWidgetBuilder
    itemCount?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): GridView => {
    const delegate = new SliverChildBuilderDelegate(args.itemBuilder, {
      childCount: args.itemCount,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives ?? true,
      addRepaintBoundaries: args?.addRepaintBoundaries ?? true,
      addSemanticIndexes: args?.addSemanticIndexes ?? true,
    })

    return new N.GridView(
      args.gridDelegate,
      delegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? true,
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.semanticChildCount ?? args.itemCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    ) as GridView
  }

  static custom = (args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    gridDelegate: SliverGridDelegate
    childrenDelegate: SliverChildDelegate
    cacheExtent?: number
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): GridView => {
    return new N.GridView(
      args.gridDelegate,
      args.childrenDelegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? true,
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.semanticChildCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    ) as GridView
  }

  static count = (args: {
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
    childAspectRatio?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    children?: Array<Widget>
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): GridView => {
    const gridDelegate = new SliverGridDelegateWithFixedCrossAxisCount({
      crossAxisCount: args.crossAxisCount,
      mainAxisSpacing: args.mainAxisSpacing ?? 0,
      crossAxisSpacing: args.crossAxisSpacing ?? 0,
      childAspectRatio: args.childAspectRatio ?? 1,
    })

    const delegate = new SliverChildListDelegate(args.children ?? [], {
      addAutomaticKeepAlives: args.addAutomaticKeepAlives ?? true,
      addRepaintBoundaries: args?.addRepaintBoundaries ?? true,
      addSemanticIndexes: args?.addSemanticIndexes ?? true,
    })

    return new N.GridView(
      gridDelegate,
      delegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? true,
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.semanticChildCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    ) as GridView
  }

  static extent = (args: {
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
    childAspectRatio?: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    children?: Array<Widget>
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): GridView => {
    const gridDelegate = new SliverGridDelegateWithMaxCrossAxisExtent({
      maxCrossAxisExtent: args.maxCrossAxisExtent,
      mainAxisSpacing: args.mainAxisSpacing ?? 0,
      crossAxisSpacing: args.crossAxisSpacing ?? 0,
      childAspectRatio: args.childAspectRatio ?? 1,
    })

    const delegate = new SliverChildListDelegate(args.children ?? [], {
      addAutomaticKeepAlives: args.addAutomaticKeepAlives ?? true,
      addRepaintBoundaries: args?.addRepaintBoundaries ?? true,
      addSemanticIndexes: args?.addSemanticIndexes ?? true,
    })

    return new N.GridView(
      gridDelegate,
      delegate,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? true,
      args.physics,
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.semanticChildCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior,
      args.restorationId,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    ) as GridView
  }
}

// GridView: function GridView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
//   var _ = this;
//   _.gridDelegate = t0;
//   _.childrenDelegate = t1;
//   _.padding = t2;
//   _.scrollDirection = t3;
//   _.reverse = t4;
//   _.controller = t5;
//   _.primary = t6;
//   _.physics = t7;
//   _.scrollBehavior = t8;
//   _.shrinkWrap = t9;
//   _.center = t10;
//   _.anchor = t11;
//   _.cacheExtent = t12;
//   _.semanticChildCount = t13;
//   _.dragStartBehavior = t14;
//   _.keyboardDismissBehavior = t15;
//   _.restorationId = t16;
//   _.clipBehavior = t17;
//   _.key0 = t18;
// },

export class CustomScrollView extends N.CustomScrollView {
  constructor(args?: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    scrollBehavior?: ScrollBehavior
    shrinkWrap?: boolean
    center?: Key
    anchor?: number
    cacheExtent?: number
    slivers?: Array<Widget>
    semanticChildCount?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }) {
    super(
      args?.slivers ?? [],
      args?.scrollDirection ?? Axis.vertical,
      args?.reverse ?? false,
      args?.controller,
      args?.primary ?? true,
      args?.physics,
      args?.scrollBehavior,
      args?.shrinkWrap ?? false,
      args?.center?.[octoKey],
      args?.anchor ?? 0.0,
      args?.cacheExtent,
      args?.semanticChildCount,
      args?.dragStartBehavior ?? DragStartBehavior.start,
      args?.keyboardDismissBehavior ?? ScrollViewKeyboardDismissBehavior.manual,
      args?.restorationId,
      args?.clipBehavior ?? Clip.hardEdge,
      args?.key?.[octoKey]
    )
  }
}

// CustomScrollView: function CustomScrollView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16) {
//   var _ = this;
//   _.slivers = t0;
//   _.scrollDirection = t1;
//   _.reverse = t2;
//   _.controller = t3;
//   _.primary = t4;
//   _.physics = t5;
//   _.scrollBehavior = t6;
//   _.shrinkWrap = t7;
//   _.center = t8;
//   _.anchor = t9;
//   _.cacheExtent = t10;
//   _.semanticChildCount = t11;
//   _.dragStartBehavior = t12;
//   _.keyboardDismissBehavior = t13;
//   _.restorationId = t14;
//   _.clipBehavior = t15;
//   _.key0 = t16;
// },
