import {Color, Duration, Size, StrokeCap} from '@octoflutter/dartsdk'
import {
  Axis,
  Curve,
  Curves,
  Decoration,
  DragStartBehavior,
  EdgeInsets,
  EdgeInsetsGeometry,
  Key,
  MainAxisAlignment,
  MaterialStateProperty,
  octoKey,
  PageController,
  ScrollPhysics,
  TabBarIndicatorSize,
  TabController,
  TextStyle,
  ValueChanged,
  Widget,
} from '@octoflutter/flutter'
import {PageTransformer, TransformerPageController} from '../octo'

export type OnNestedTabSelected = (
  outerTabIndex: number,
  innerIndexOfTotal: number,
  innerIndexOfOuterTab: number
) => void

export class OctoNestedTabBar extends N.OctoNestedTabBar {
  constructor(args: {
    key?: Key
    tabs: Array<Widget>
    childrenTabsLength: Array<number>
    childrenTabBar?: Widget
    isScrollable?: boolean
    padding?: EdgeInsetsGeometry
    indicatorColor?: Color
    automaticIndicatorColorAdjustment?: boolean
    indicatorWeight?: number
    indicatorPadding?: EdgeInsetsGeometry
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
    initialParentIndex?: number
    parentTabController?: TabController
    onNestedTabSelected?: OnNestedTabSelected
  }) {
    super(
      args.childrenTabBar,
      args.childrenTabsLength,
      args.tabs,
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
      args.dragStartBehavior,
      args.mouseCursor,
      args.enableFeedback,
      args.onTap,
      args.physics,
      args.initialParentIndex ?? 0,
      args.parentTabController,
      args.onNestedTabSelected,
      args.key?.[octoKey]
    )
  }
}

// OctoNestedTabBar: function OctoNestedTabBar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25) {
//   var _ = this;
//   _.childrenTabBar = t0;
//   _.childrenTabsLength = t1;
//   _.tabs = t2;
//   _.isScrollable = t3;
//   _.padding = t4;
//   _.indicatorColor = t5;
//   _.indicatorWeight = t6;
//   _.indicatorPadding = t7;
//   _.indicator = t8;
//   _.automaticIndicatorColorAdjustment = t9;
//   _.indicatorSize = t10;
//   _.labelColor = t11;
//   _.unselectedLabelColor = t12;
//   _.labelStyle = t13;
//   _.labelPadding = t14;
//   _.unselectedLabelStyle = t15;
//   _.overlayColor = t16;
//   _.dragStartBehavior = t17;
//   _.mouseCursor = t18;
//   _.enableFeedback = t19;
//   _.onTap = t20;
//   _.physics = t21;
//   _.initialParentIndex = t22;
//   _.parentTabController = t23;
//   _.onNestedTabSelected = t24;
//   _.key0 = t25;
// },

export class OctoCarouselIndicator extends N.OctoCarouselIndicator {
  constructor(args?: {
    controller?: TabController
    size?: Size
    unselectedColor?: Color
    selectedColor?: Color
    strokeCap?: StrokeCap
    indicatorPadding?: EdgeInsetsGeometry
    tapEnable?: boolean
  }) {
    super(
      args?.controller,
      args?.size ?? new Size(20, 5),
      args?.unselectedColor,
      args?.selectedColor,
      args?.strokeCap ?? StrokeCap.square,
      args?.indicatorPadding ?? EdgeInsets.symmetric({horizontal: 5}),
      args?.tapEnable ?? false
    )
  }
}

// OctoCarouselIndicator: function OctoCarouselIndicator(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.controller = t0;
//   _.size0 = t1;
//   _.unselectedColor = t2;
//   _.selectedColor = t3;
//   _.strokeCap = t4;
//   _.indicatorPadding = t5;
//   _.tapEnable = t6;
//   _.key0 = t7;
// },

export class OctoLinkTabBar extends N.OctoLinkTabBar {
  constructor(args: {
    key?: Key
    tabs: Array<Widget>
    controller?: TabController
    isScrollable?: boolean
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
    scrollDirection?: Axis
    foregroundIndicator?: boolean
    strokeCap?: StrokeCap
    mainAxisAlignment?: MainAxisAlignment
  }) {
    super(
      args.foregroundIndicator ?? false,
      args.tabs,
      args.controller,
      args.isScrollable ?? false,
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
      args.scrollDirection ?? Axis.horizontal,
      args.strokeCap ?? StrokeCap.square,
      args.mainAxisAlignment ?? MainAxisAlignment.start,
      args.key?.[octoKey]
    )
  }
}

// OctoLinkTabBar: function OctoLinkTabBar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24) {
//   var _ = this;
//   _.foregroundIndicator = t0;
//   _.tabs = t1;
//   _.controller = t2;
//   _.isScrollable = t3;
//   _.indicatorColor = t4;
//   _.indicatorWeight = t5;
//   _.indicatorPadding = t6;
//   _.indicator = t7;
//   _.automaticIndicatorColorAdjustment = t8;
//   _.indicatorSize = t9;
//   _.labelColor = t10;
//   _.unselectedLabelColor = t11;
//   _.labelStyle = t12;
//   _.labelPadding = t13;
//   _.unselectedLabelStyle = t14;
//   _.overlayColor = t15;
//   _.dragStartBehavior = t16;
//   _.mouseCursor = t17;
//   _.enableFeedback = t18;
//   _.onTap = t19;
//   _.physics = t20;
//   _.scrollDirection = t21;
//   _.strokeCap = t22;
//   _.mainAxisAlignment = t23;
//   _.key0 = t24;
// },

export class OctoLinkTab extends N.OctoLinkTab {
  constructor(args?: {
    key?: Key
    text?: string
    icon?: Widget
    iconMargin?: EdgeInsetsGeometry
    child?: Widget
    scrollDirection?: Axis
    size?: number
    height?: number
  }) {
    super(
      args?.text,
      args?.child,
      args?.icon,
      args?.iconMargin ?? EdgeInsets.only({bottom: 10}),
      args?.scrollDirection,
      args?.size,
      args?.height,
      args?.key?.[octoKey]
    )
  }
}

// OctoLinkTab: function OctoLinkTab(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.text0 = t0;
//   _.child = t1;
//   _.icon = t2;
//   _.iconMargin = t3;
//   _.scrollDirection = t4;
//   _.size0 = t5;
//   _.height = t6;
//   _.key0 = t7;
// },

export class OctoLinkTabBarView extends N.OctoLinkTabBarView {
  constructor(args: {
    key?: Key
    children: Array<Widget>
    controller?: TabController
    physics?: ScrollPhysics
    dragStartBehavior?: DragStartBehavior
    cacheExtent?: number
    link?: boolean
    scrollDirection?: Axis
    pageController?: PageController
  }) {
    super(
      args.cacheExtent ?? 0,
      args.link ?? true,
      args.controller,
      args.children,
      args.physics,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.scrollDirection ?? Axis.horizontal,
      args.pageController,
      args.key?.[octoKey]
    )
  }
}

// OctoLinkTabBarView: function OctoLinkTabBarView(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//   var _ = this;
//   _.cacheExtent = t0;
//   _.link0 = t1;
//   _.controller = t2;
//   _.children = t3;
//   _.physics = t4;
//   _.dragStartBehavior = t5;
//   _.scrollDirection = t6;
//   _.pageController = t7;
//   _.key0 = t8;
// },

export class TransformerTabBarView extends N.TransformerTabBarView {
  constructor(args: {
    key?: Key
    children: Array<Widget>
    controller?: TabController
    physics?: ScrollPhysics
    index?: number
    duration?: Duration
    curve?: Curve
    viewportFraction?: number
    loop?: boolean
    scrollDirection?: Axis
    pageSnapping?: boolean
    onPageChanged?: ValueChanged<number>
    transformer?: PageTransformer
    pageController?: TransformerPageController
  }) {
    super(
      args.controller,
      args.children,
      args.physics,
      args.transformer,
      args.scrollDirection ?? Axis.horizontal,
      args.pageSnapping ?? true,
      args.onPageChanged,
      args.duration ?? new Duration({milliseconds: 300}),
      args.curve ?? Curves.ease,
      args.pageController,
      args.loop ?? false,
      args.viewportFraction ?? 1.0,
      args.index ?? 0,
      args.key?.[octoKey]
    )
  }
}

// TransformerTabBarView: function TransformerTabBarView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) {
//   var _ = this;
//   _.controller = t0;
//   _.children = t1;
//   _.physics = t2;
//   _.transformer = t3;
//   _.scrollDirection = t4;
//   _.pageSnapping = t5;
//   _.onPageChanged = t6;
//   _.duration = t7;
//   _.curve = t8;
//   _.pageController = t9;
//   _.loop0 = t10;
//   _.viewportFraction = t11;
//   _.index = t12;
//   _.key0 = t13;
// },
