import {Clip} from '@octoflutter/dartsdk'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {BuildContext, NullableIndexedWidgetBuilder, Widget} from './framework'
import {ScrollController} from './scroll_controller'
import {ScrollPhysics} from './scroll_physics'

export class ListWheelChildListDelegate extends N.ListWheelChildListDelegate {
  constructor(children: Array<Widget>) {
    super(children)
  }
}

export class ListWheelChildLoopingListDelegate extends N.ListWheelChildLoopingListDelegate {
  constructor(children: Array<Widget>) {
    super(children)
  }
}

export class ListWheelChildBuilderDelegate extends N.ListWheelChildBuilderDelegate {
  constructor(args: {
    builder: NullableIndexedWidgetBuilder
    childCount?: number
  }) {
    const cb = (ctx, index) => {
      return args.builder(new BuildContext(ctx), index)
    }
    super(cb, args.childCount)
  }
}

export type ListWheelChildDelegate =
  | ListWheelChildListDelegate
  | ListWheelChildLoopingListDelegate
  | ListWheelChildBuilderDelegate

export class ListWheelScrollView extends N.ListWheelScrollView {
  constructor(args: {
    key?: Key
    controller?: ScrollController
    physics?: ScrollPhysics
    diameterRatio?: number
    perspective?: number
    offAxisFraction?: number
    useMagnifier?: boolean
    magnification?: number
    overAndUnderCenterOpacity?: number
    itemExtent: number
    squeeze?: number
    onSelectedItemChanged?: ValueChanged<number>
    renderChildrenOutsideViewport?: boolean
    clipBehavior?: Clip
    restorationId?: string
    scrollBehavior?: ScrollBehavior
    children: Array<Widget>
    childDelegate?: ListWheelChildDelegate
  }) {
    const delegate =
      args.childDelegate ?? new ListWheelChildListDelegate(args.children)
    super(
      args.controller,
      args.physics,
      args.diameterRatio ?? 2.0,
      args.perspective ?? 0.003,
      args.offAxisFraction ?? 0,
      args.useMagnifier ?? false,
      args.magnification ?? 1.0,
      args.overAndUnderCenterOpacity ?? 1.0,
      args.itemExtent,
      args.squeeze ?? 1.0,
      args.onSelectedItemChanged,
      args.renderChildrenOutsideViewport ?? false,
      delegate,
      args.clipBehavior ?? Clip.hardEdge,
      args.restorationId,
      args.scrollBehavior,
      args.key?.[octoKey]
    )
  }

  static useDelegate = (args: {
    key?: Key
    controller?: ScrollController
    physics?: ScrollPhysics
    diameterRatio?: number
    perspective?: number
    offAxisFraction?: number
    useMagnifier?: boolean
    magnification?: number
    overAndUnderCenterOpacity?: number
    itemExtent: number
    squeeze?: number
    onSelectedItemChanged?: ValueChanged<number>
    renderChildrenOutsideViewport?: boolean
    clipBehavior?: Clip
    restorationId?: string
    scrollBehavior?: ScrollBehavior
    childDelegate: ListWheelChildDelegate
  }): ListWheelScrollView => {
    return new ListWheelScrollView({
      key: args.key,
      controller: args.controller,
      physics: args.physics,
      diameterRatio: args.diameterRatio,
      perspective: args.perspective,
      offAxisFraction: args.offAxisFraction,
      useMagnifier: args.useMagnifier,
      magnification: args.magnification,
      overAndUnderCenterOpacity: args.overAndUnderCenterOpacity,
      itemExtent: args.itemExtent,
      squeeze: args.squeeze,
      onSelectedItemChanged: args.onSelectedItemChanged,
      renderChildrenOutsideViewport: args.renderChildrenOutsideViewport,
      clipBehavior: args.clipBehavior,
      restorationId: args.restorationId,
      scrollBehavior: args.scrollBehavior,
      children: [],
      childDelegate: args.childDelegate,
    })
  }
}

// ListWheelScrollView: function ListWheelScrollView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16) {
//     var _ = this;
//     _.controller = t0;
//     _.physics = t1;
//     _.diameterRatio = t2;
//     _.perspective = t3;
//     _.offAxisFraction = t4;
//     _.useMagnifier = t5;
//     _.magnification = t6;
//     _.overAndUnderCenterOpacity = t7;
//     _.itemExtent = t8;
//     _.squeeze = t9;
//     _.onSelectedItemChanged = t10;
//     _.renderChildrenOutsideViewport = t11;
//     _.childDelegate = t12;
//     _.clipBehavior = t13;
//     _.restorationId = t14;
//     _.scrollBehavior = t15;
//     _.key0 = t16;
//   }
