import {isNullOrUndefined, Clip, floor} from '@octoflutter/dartsdk'
import {
  Axis,
  EdgeInsetsGeometry,
  Key,
  DragStartBehavior,
  octoKey,
  BuildContext,
  IndexedWidgetBuilder,
  ScrollController,
  ClampingScrollPhysics,
  ScrollPhysics,
  ScrollViewKeyboardDismissBehavior,
  SliverChildBuilderDelegate,
  SliverChildDelegate,
} from '@octoflutter/flutter'

type SliverChildSizeDelegate = (index: number) => number

export class OctoListView extends N.OctoListView {
  constructor(args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: ScrollPhysics
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    childrenDelegate: SliverChildDelegate
    sizeDelegate: SliverChildSizeDelegate
    childCount: number
    cacheExtent: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }) {
    const sd = (index) => {
      return args.sizeDelegate(index)
    }
    super(
      args.childrenDelegate,
      sd,
      args.childCount,
      args.padding,
      args.scrollDirection ?? Axis.vertical,
      args.reverse ?? false,
      args.controller,
      args.primary ?? (isNullOrUndefined(args.controller) ? true : false),
      args.physics ?? new ClampingScrollPhysics(),
      null,
      args.shrinkWrap ?? false,
      null,
      0.0,
      args.cacheExtent,
      args.childCount,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.keyboardDismissBehavior ?? ScrollViewKeyboardDismissBehavior.manual,
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
    physics?: any
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    sizeDelegate: SliverChildSizeDelegate
    itemBuilder: IndexedWidgetBuilder
    itemCount: number
    addAutomaticKeepAlives?: boolean
    addRepaintBoundaries?: boolean
    addSemanticIndexes?: boolean
    cacheExtent?: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): OctoListView => {
    const delegate = new SliverChildBuilderDelegate(args.itemBuilder, {
      childCount: args.itemCount,
      addAutomaticKeepAlives: args.addAutomaticKeepAlives ?? true,
      addRepaintBoundaries: args?.addRepaintBoundaries ?? true,
      addSemanticIndexes: args?.addSemanticIndexes ?? true,
    })

    return new OctoListView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      childrenDelegate: delegate,
      sizeDelegate: args.sizeDelegate,
      childCount: args.itemCount,
      cacheExtent: args.cacheExtent ?? 500,
      dragStartBehavior: args.dragStartBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      clipBehavior: args.clipBehavior,
    })
  }

  static custom = (args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: any
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    sizeDelegate: SliverChildSizeDelegate
    childrenDelegate: SliverChildDelegate
    cacheExtent?: number
    semanticChildCount: number
    dragStartBehavior?: DragStartBehavior
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
    restorationId?: string
    clipBehavior?: Clip
  }): OctoListView => {
    return new OctoListView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      childrenDelegate: args.childrenDelegate,
      sizeDelegate: args.sizeDelegate,
      childCount: args.semanticChildCount,
      cacheExtent: args.cacheExtent ?? 500,
      dragStartBehavior: args.dragStartBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      clipBehavior: args.clipBehavior,
    })
  }

  static separated = (args: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    controller?: ScrollController
    primary?: boolean
    physics?: any
    shrinkWrap?: boolean
    padding?: EdgeInsetsGeometry
    itemBuilder: IndexedWidgetBuilder
    separatorBuilder: IndexedWidgetBuilder
    itemSizeDelegate: SliverChildSizeDelegate
    separatorSizeDelegate: SliverChildSizeDelegate
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
  }): OctoListView => {
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

    const sizeDelegate = (index: number) => {
      const itemIndex = floor(index / 2)
      if (index % 2 === 0) {
        return args.itemSizeDelegate(itemIndex)
      } else {
        return args.separatorSizeDelegate(itemIndex)
      }
    }

    return new OctoListView({
      key: args.key,
      scrollDirection: args.scrollDirection,
      reverse: args.reverse,
      controller: args.controller,
      primary: args.primary,
      physics: args.physics,
      shrinkWrap: args.shrinkWrap,
      padding: args.padding,
      childrenDelegate: delegate,
      sizeDelegate: sizeDelegate,
      childCount: args.semanticChildCount,
      cacheExtent: args.cacheExtent ?? 500,
      dragStartBehavior: args.dragStartBehavior,
      keyboardDismissBehavior: args.keyboardDismissBehavior,
      restorationId: args.restorationId,
      clipBehavior: args.clipBehavior,
    })
  }
}

// OctoListView: function OctoListView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19) {
//     var _ = this;
//     _.childrenDelegate = t0;
//     _.sizeDelegate = t1;
//     _.childCount = t2;
//     _.padding = t3;
//     _.scrollDirection = t4;
//     _.reverse = t5;
//     _.controller = t6;
//     _.primary = t7;
//     _.physics = t8;
//     _.scrollBehavior = t9;
//     _.shrinkWrap = t10;
//     _.center = t11;
//     _.anchor = t12;
//     _.cacheExtent = t13;
//     _.semanticChildCount = t14;
//     _.dragStartBehavior = t15;
//     _.keyboardDismissBehavior = t16;
//     _.restorationId = t17;
//     _.clipBehavior = t18;
//     _.key0 = t19;
//   }
