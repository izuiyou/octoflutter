import {isNullOrUndefined, Color, Size} from '@octoflutter/dartsdk'
import {AsyncCallback} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {ShapeBorder} from '../painting/borders'
import {TextStyle} from '../painting/text_style'
import {SystemUiOverlayStyle} from '../services/system_chrome'
import {Widget} from '../widgets/framework'
import {IconThemeData} from '../widgets/icon_theme_data'
import {PreferredSizeWidget} from '../widgets/preferred_size'
import {kToolbarHeight} from './constants'
import {TextTheme} from './text_theme'

export class AppBar extends N.AppBar implements PreferredSizeWidget {
  constructor(args?: {
    key?: Key
    leading?: Widget
    automaticallyImplyLeading?: boolean
    title?: Widget
    actions?: Array<Widget>
    flexibleSpace?: Widget
    bottom?: PreferredSizeWidget
    elevation?: number
    shadowColor?: Color
    shape?: ShapeBorder
    backgroundColor?: Color
    foregroundColor?: Color
    iconTheme?: IconThemeData
    actionsIconTheme?: IconThemeData
    primary?: boolean
    centerTitle?: boolean
    excludeHeaderSemantics?: boolean
    titleSpacing?: number
    toolbarOpacity?: number
    bottomOpacity?: number
    toolbarHeight?: number
    leadingWidth?: number
    toolbarTextStyle?: TextStyle
    titleTextStyle?: TextStyle
    systemOverlayStyle?: SystemUiOverlayStyle
  }) {
    const preferredSize = Size.fromHeight(
      (args?.toolbarHeight ?? kToolbarHeight) +
        (isNullOrUndefined(args?.bottom)
          ? 0
          : N.heightOfPreferredSize(args?.bottom))
    )
    super(
      args?.leading,
      args?.automaticallyImplyLeading ?? true,
      args?.title,
      args?.actions,
      args?.flexibleSpace,
      args?.bottom,
      args?.elevation,
      args?.shadowColor,
      args?.shape,
      args?.backgroundColor,
      args?.foregroundColor,
      null,
      args?.iconTheme,
      args?.actionsIconTheme,
      null,
      args?.primary ?? true,
      args?.centerTitle,
      args?.excludeHeaderSemantics ?? false,
      args?.titleSpacing,
      args?.toolbarOpacity ?? 1,
      args?.bottomOpacity ?? 1,
      preferredSize,
      args?.toolbarHeight,
      args?.leadingWidth,
      false,
      args?.toolbarTextStyle,
      args?.titleTextStyle,
      args?.systemOverlayStyle,
      args?.key?.[octoKey]
    )
  }
}

// AppBar: function AppBar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28) {
//   var _ = this;
//   _.leading = t0;
//   _.automaticallyImplyLeading = t1;
//   _.title = t2;
//   _.actions = t3;
//   _.flexibleSpace = t4;
//   _.bottom = t5;
//   _.elevation = t6;
//   _.shadowColor = t7;
//   _.shape = t8;
//   _.backgroundColor = t9;
//   _.foregroundColor = t10;
//   _.brightness = t11;
//   _.iconTheme = t12;
//   _.actionsIconTheme = t13;
//   _.textTheme = t14;
//   _.primary = t15;
//   _.centerTitle = t16;
//   _.excludeHeaderSemantics = t17;
//   _.titleSpacing = t18;
//   _.toolbarOpacity = t19;
//   _.bottomOpacity = t20;
//   _.preferredSize = t21;
//   _.toolbarHeight = t22;
//   _.leadingWidth = t23;
//   _.backwardsCompatibility = t24;
//   _.toolbarTextStyle = t25;
//   _.titleTextStyle = t26;
//   _.systemOverlayStyle = t27;
//   _.key0 = t28;
// },

export class SliverAppBar extends N.SliverAppBar {
  constructor(args?: {
    key?: Key
    leading?: Widget
    automaticallyImplyLeading?: boolean
    title?: Widget
    actions?: Array<Widget>
    flexibleSpace?: Widget
    bottom?: PreferredSizeWidget
    elevation?: number
    shadowColor?: Color
    forceElevated?: boolean
    backgroundColor?: Color
    foregroundColor?: Color
    iconTheme?: IconThemeData
    actionsIconTheme?: IconThemeData
    primary?: boolean
    centerTitle?: boolean
    excludeHeaderSemantics?: boolean
    titleSpacing?: number
    collapsedHeight?: number
    expandedHeight?: number
    floating?: boolean
    pinned?: boolean
    snap?: boolean
    stretch?: boolean
    stretchTriggerOffset?: number
    onStretchTrigger?: AsyncCallback
    shape?: ShapeBorder
    toolbarHeight?: number
    leadingWidth?: number
    toolbarTextStyle?: TextStyle
    titleTextStyle?: TextStyle
    systemOverlayStyle?: SystemUiOverlayStyle
  }) {
    let cb = null
    if (!isNullOrUndefined(args?.onStretchTrigger)) {
      cb = N.callbackToFutureVoidCallback(() => {
        args
          ?.onStretchTrigger()
          .then((v) => {})
          .catch((e) => {})
      })
    }

    super(
      args?.leading,
      args?.automaticallyImplyLeading ?? true,
      args?.title,
      args?.actions,
      args?.flexibleSpace,
      args?.bottom,
      args?.elevation,
      args?.shadowColor,
      args?.forceElevated ?? false,
      args?.backgroundColor,
      args?.foregroundColor,
      args?.iconTheme,
      args?.actionsIconTheme,
      args?.primary ?? true,
      args?.centerTitle,
      args?.excludeHeaderSemantics ?? false,
      args?.titleSpacing,
      args?.collapsedHeight,
      args?.expandedHeight,
      args?.floating ?? false,
      args?.pinned ?? false,
      args?.shape,
      args?.snap ?? false,
      args?.stretch ?? false,
      args?.stretchTriggerOffset ?? 100,
      cb,
      args?.toolbarHeight ?? kToolbarHeight,
      args?.leadingWidth,
      args?.toolbarTextStyle,
      args?.titleTextStyle,
      args?.systemOverlayStyle,
      args?.key?.[octoKey]
    )
  }
}

// SliverAppBar: function SliverAppBar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31) {
//   var _ = this;
//   _.leading = t0;
//   _.automaticallyImplyLeading = t1;
//   _.title = t2;
//   _.actions = t3;
//   _.flexibleSpace = t4;
//   _.bottom = t5;
//   _.elevation = t6;
//   _.shadowColor = t7;
//   _.forceElevated = t8;
//   _.backgroundColor = t9;
//   _.foregroundColor = t10;
//   _.iconTheme = t11;
//   _.actionsIconTheme = t12;
//   _.primary = t13;
//   _.centerTitle = t14;
//   _.excludeHeaderSemantics = t15;
//   _.titleSpacing = t16;
//   _.collapsedHeight = t17;
//   _.expandedHeight = t18;
//   _.floating = t19;
//   _.pinned = t20;
//   _.shape = t21;
//   _.snap = t22;
//   _.stretch = t23;
//   _.stretchTriggerOffset = t24;
//   _.onStretchTrigger = t25;
//   _.toolbarHeight = t26;
//   _.leadingWidth = t27;
//   _.toolbarTextStyle = t28;
//   _.titleTextStyle = t29;
//   _.systemOverlayStyle = t30;
//   _.key0 = t31;
// },
