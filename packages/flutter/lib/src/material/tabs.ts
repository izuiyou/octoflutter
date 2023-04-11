import {assert, Color, isNullOrUndefined} from '@octoflutter/dartsdk'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {DragStartBehavior} from '../gestures/recognizer'
import {Decoration} from '../painting/decoration'
import {EdgeInsets, EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'
import {Widget} from '../widgets/framework'
import {ScrollPhysics} from '../widgets/scroll_physics'
import {MaterialStateProperty} from './material_state'
import {TabController} from './tab_controller'

export enum TabBarIndicatorSize {
  tab = C.TabBarIndicatorSize_0,
  label = C.TabBarIndicatorSize_1,
}

export class Tab extends N.Tab {
  constructor(args: {
    key?: Key
    text?: string
    icon?: Widget
    iconMargin?: EdgeInsets
    height?: number
    child?: Widget
  }) {
    assert(
      !isNullOrUndefined(args.text) ||
        !isNullOrUndefined(args.child) ||
        !isNullOrUndefined(args.icon),
      'text != null || child != null || icon != null'
    )
    assert(
      isNullOrUndefined(args.text) || isNullOrUndefined(args.child),
      'text == null || child == null'
    )
    super(
      args.text,
      args.child,
      args.icon,
      args.iconMargin ?? EdgeInsets.only({bottom: 10}),
      args.height,
      args.key?.[octoKey]
    )
  }
}

// Tab: function Tab(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.text0 = t0;
//     _.child = t1;
//     _.icon = t2;
//     _.iconMargin = t3;
//     _.height = t4;
//     _.key0 = t5;
//   },

export class TabBar extends N.TabBar {
  constructor(args: {
    key?: Key
    tabs: Array<Widget>
    controller?: TabController
    isScrollable?: boolean
    padding?: EdgeInsets
    indicatorColor?: Color
    automaticIndicatorColorAdjustment?: boolean
    indicatorWeight?: number
    indicatorPadding?: EdgeInsets
    indicator?: Decoration
    indicatorSize?: TabBarIndicatorSize
    labelColor?: Color
    labelStyle?: TextStyle
    labelPadding?: EdgeInsetsGeometry
    unselectedLabelColor?: Color
    unselectedLabelStyle?: TextStyle
    dragStartBehavior?: DragStartBehavior
    overlayColor?: MaterialStateProperty<Color>
    mouseCursor?: any
    enableFeedback?: boolean
    onTap?: ValueChanged<number>
    physics?: ScrollPhysics
  }) {
    super(
      args.tabs,
      args.controller,
      args.isScrollable ?? false,
      args.padding,
      args.indicatorColor,
      args.indicatorWeight ?? 2.0,
      args.indicatorPadding ?? EdgeInsets.zero,
      args.indicator,
      args.automaticIndicatorColorAdjustment ?? true,
      args.indicatorSize,
      args.labelColor,
      args.unselectedLabelColor,
      args.labelStyle,
      args.labelPadding,
      args.unselectedLabelStyle,
      args.overlayColor,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.mouseCursor,
      args.enableFeedback,
      args.onTap,
      args.physics,
      args.key?.[octoKey]
    )
  }
}

// TabBar: function TabBar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21) {
//     var _ = this;
//     _.tabs = t0;
//     _.controller = t1;
//     _.isScrollable = t2;
//     _.padding = t3;
//     _.indicatorColor = t4;
//     _.indicatorWeight = t5;
//     _.indicatorPadding = t6;
//     _.indicator = t7;
//     _.automaticIndicatorColorAdjustment = t8;
//     _.indicatorSize = t9;
//     _.labelColor = t10;
//     _.unselectedLabelColor = t11;
//     _.labelStyle = t12;
//     _.labelPadding = t13;
//     _.unselectedLabelStyle = t14;
//     _.overlayColor = t15;
//     _.dragStartBehavior = t16;
//     _.mouseCursor = t17;
//     _.enableFeedback = t18;
//     _.onTap = t19;
//     _.physics = t20;
//     _.key0 = t21;
//   },

export class TabBarView extends N.TabBarView {
  constructor(args: {
    key?: Key
    children: Array<Widget>
    controller?: TabController
    physics?: ScrollPhysics
    dragStartBehavior?: DragStartBehavior
  }) {
    super(
      args.controller,
      args.children,
      args.physics,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.key?.[octoKey]
    )
  }
}

// TabBarView: function TabBarView(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.controller = t0;
//     _.children = t1;
//     _.physics = t2;
//     _.dragStartBehavior = t3;
//     _.key0 = t4;
//   },

export class TabPageSelector extends N.TabPageSelector {
  constructor(args?: {
    key?: Key
    controller?: TabController
    indicatorSize?: number
    color?: Color
    selectedColor?: Color
  }) {
    super(
      args?.controller,
      args?.indicatorSize,
      args?.color,
      args?.selectedColor,
      args?.key?.[octoKey]
    )
  }
}

// TabPageSelector: function TabPageSelector(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.controller = t0;
//     _.indicatorSize = t1;
//     _.color = t2;
//     _.selectedColor = t3;
//     _.key0 = t4;
//   },
