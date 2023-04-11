import {Duration, isNullOrUndefined, VoidCallback} from '@octoflutter/dartsdk'
import {
  Curve,
  Curves,
  DragStartBehavior,
  Icons,
  Axis,
  BuildContext,
  Icon,
  ScrollController,
  Widget,
  ScrollPhysics,
  Colors,
  TextStyle,
  Key,
  octoKey,
} from '@octoflutter/flutter'

N.octoLoadRefresh()

export enum RefreshStatus {
  idle = REFRESH_C.RefreshStatus_0,
  canRefresh = REFRESH_C.RefreshStatus_1,
  refreshing = REFRESH_C.RefreshStatus_2,
  completed = REFRESH_C.RefreshStatus_3,
  failed = REFRESH_C.RefreshStatus_4,
  canTwoLevel = REFRESH_C.RefreshStatus_5,
  twoLevelOpening = REFRESH_C.RefreshStatus_6,
  twoLeveling = REFRESH_C.RefreshStatus_7,
  twoLevelClosing = REFRESH_C.RefreshStatus_8,
}

export enum LoadStatus {
  idle = REFRESH_C.LoadStatus_0,
  canLoading = REFRESH_C.LoadStatus_1,
  loading = REFRESH_C.LoadStatus_2,
  noMore = REFRESH_C.LoadStatus_3,
  failed = REFRESH_C.LoadStatus_4,
}

export enum RefreshStyle {
  Follow = REFRESH_C.RefreshStyle_0,
  UnFollow = REFRESH_C.RefreshStyle_1,
  Behind = REFRESH_C.RefreshStyle_2,
  Front = REFRESH_C.RefreshStyle_3,
}

export enum LoadStyle {
  ShowAlways = REFRESH_C.LoadStyle_0,
  HideAlways = REFRESH_C.LoadStyle_1,
  ShowWhenLoading = REFRESH_C.LoadStyle_2,
}

export class RefreshController extends REFRESH.OctoRefreshController {
  constructor(args?: {
    initialRefresh?: boolean
    initialRefreshStatus?: RefreshStatus
    initialLoadStatus?: LoadStatus
  }) {
    super(
      REFRESH.refreshControllerInstance(
        args?.initialRefresh ?? false,
        args?.initialRefreshStatus ?? RefreshStatus.idle,
        args?.initialLoadStatus ?? LoadStatus.idle
      )
    )
  }

  public requestRefresh(args?: {
    needMove?: boolean
    needCallback?: boolean
    duration?: Duration
    curve?: Curve
  }): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.rha(
        args?.needMove ?? true,
        args?.needCallback ?? true,
        args?.duration ?? new Duration({milliseconds: 500}),
        args?.curve ?? Curves.linear,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public requestTwoLevel(args?: {
    duration?: Duration
    curve?: Curve
  }): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.rhb(
        args?.duration ?? new Duration({milliseconds: 500}),
        args?.curve ?? Curves.linear,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public requestLoading(args?: {
    needMove?: boolean
    needCallback?: boolean
    duration?: Duration
    curve?: Curve
  }): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.rhc(
        args?.needMove ?? true,
        args?.needCallback ?? true,
        args?.duration ?? new Duration({milliseconds: 500}),
        args?.curve ?? Curves.linear,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public refreshCompleted(resetFooterState = false) {
    super.rhd(resetFooterState ?? false)
  }

  public twoLevelComplete(args?: {
    duration?: Duration
    curve?: Curve
  }): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.rhe(
        args?.duration ?? new Duration({milliseconds: 500}),
        args?.curve ?? Curves.linear,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public refreshFailed() {
    super.rhf()
  }

  public refreshToIdle() {
    super.rhg()
  }

  public loadComplete() {
    super.rhi()
  }

  public loadFailed() {
    super.rhj()
  }

  public loadNoData() {
    super.rhk()
  }

  public resetNoData() {
    super.rhl()
  }
}

export type OnTwoLevel = (isOpen: boolean) => void

export class SmartRefresher extends REFRESH.SmartRefresher {
  constructor(args: {
    key?: Key
    controller: RefreshController
    child?: Widget
    header?: Widget
    footer?: Widget
    enablePullDown?: boolean
    enablePullUp?: boolean
    enableTwoLevel?: boolean
    onRefresh?: VoidCallback
    onLoading?: VoidCallback
    onTwoLevel?: OnTwoLevel
    dragStartBehavior?: DragStartBehavior
    primary?: boolean
    cacheExtent?: number
    semanticChildCount?: number
    reverse?: boolean
    physics?: ScrollPhysics
    scrollDirection?: Axis
    scrollController?: ScrollController
  }) {
    super(
      args.child,
      args.header,
      args.footer,
      args.enablePullUp ?? false,
      args.enableTwoLevel ?? false,
      args.enablePullDown ?? true,
      args.onRefresh,
      args.onLoading,
      args.onTwoLevel,
      args.controller,
      args.scrollDirection,
      args.reverse,
      args.scrollController,
      args.primary ?? (isNullOrUndefined(args.scrollController) ? true : false),
      args.physics,
      args.cacheExtent,
      args.semanticChildCount,
      args.dragStartBehavior,
      args.key?.[octoKey]
    )
  }
}

// SmartRefresher: function SmartRefresher(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
//     var _ = this;
//     _.child = t0;
//     _.header = t1;
//     _.footer = t2;
//     _.enablePullUp = t3;
//     _.enableTwoLevel = t4;
//     _.enablePullDown = t5;
//     _.onRefresh = t6;
//     _.onLoading = t7;
//     _.onTwoLevel = t8;
//     _.controller = t9;
//     _.scrollDirection = t10;
//     _.reverse = t11;
//     _.scrollController = t12;
//     _.primary = t13;
//     _.physics = t14;
//     _.cacheExtent = t15;
//     _.semanticChildCount = t16;
//     _.dragStartBehavior = t17;
//     _.key0 = t18;
//   },

export enum IconPosition {
  left = REFRESH_C.IconPosition_0,
  right = REFRESH_C.IconPosition_1,
  top = REFRESH_C.IconPosition_2,
  bottom = REFRESH_C.IconPosition_3,
}

export type OuterBuilder = (child: Widget) => Widget

export class ClassicHeader extends REFRESH.ClassicHeader {
  constructor(args?: {
    key?: Key
    refreshStyle?: RefreshStyle
    height?: number
    completeDuration?: Duration
    outerBuilder?: OuterBuilder
    textStyle?: TextStyle
    releaseText?: string
    refreshingText?: string
    canTwoLevelIcon?: Widget
    twoLevelView?: Widget
    canTwoLevelText?: string
    completeText?: string
    failedText?: string
    idleText?: string
    iconPos?: IconPosition
    spacing?: number
    refreshingIcon?: Widget
    failedIcon?: Widget
    completeIcon?: Widget
    idleIcon?: Widget
    releaseIcon?: Widget
  }) {
    super(
      args?.outerBuilder,
      args?.releaseText,
      args?.idleText,
      args?.refreshingText,
      args?.completeText,
      args?.failedText,
      args?.canTwoLevelText,
      args?.releaseIcon ?? new Icon(Icons.refresh, {color: Colors.grey}),
      args?.idleIcon ?? new Icon(Icons.arrow_downward, {color: Colors.grey}),
      args?.refreshingIcon,
      args?.completeIcon ?? new Icon(Icons.done, {color: Colors.grey}),
      args?.failedIcon ?? new Icon(Icons.error, {color: Colors.grey}),
      args?.canTwoLevelIcon,
      args?.twoLevelView,
      args?.spacing ?? 15,
      args?.iconPos ?? IconPosition.left,
      args?.textStyle ?? new TextStyle({color: Colors.grey}),
      args?.refreshStyle ?? RefreshStyle.Follow,
      args?.height ?? 60,
      0,
      args?.completeDuration ?? new Duration({milliseconds: 600}),
      args?.key?.[octoKey]
    )
  }
}

// ClassicHeader: function ClassicHeader(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21) {
//     var _ = this;
//     _.outerBuilder = t0;
//     _.releaseText = t1;
//     _.idleText = t2;
//     _.refreshingText = t3;
//     _.completeText = t4;
//     _.failedText = t5;
//     _.canTwoLevelText = t6;
//     _.releaseIcon = t7;
//     _.idleIcon = t8;
//     _.refreshingIcon = t9;
//     _.completeIcon = t10;
//     _.failedIcon = t11;
//     _.canTwoLevelIcon = t12;
//     _.twoLevelView = t13;
//     _.spacing = t14;
//     _.iconPos = t15;
//     _.textStyle = t16;
//     _.refreshStyle = t17;
//     _.height = t18;
//     _.offset = t19;
//     _.completeDuration = t20;
//     _.key0 = t21;
//   },

export class ClassicFooter extends REFRESH.ClassicFooter {
  constructor(args?: {
    key?: Key
    onClick?: VoidCallback
    loadStyle?: LoadStyle
    height?: number
    outerBuilder?: OuterBuilder
    textStyle?: TextStyle
    loadingText?: string
    noDataText?: string
    noMoreIcon?: Widget
    idleText?: string
    failedText?: string
    canLoadingText?: string
    failedIcon?: Widget
    iconPos?: IconPosition
    spacing?: number
    completeDuration?: Duration
    loadingIcon?: Widget
    canLoadingIcon?: Widget
    idleIcon?: Widget
  }) {
    super(
      args?.idleText,
      args?.loadingText,
      args?.noDataText,
      args?.failedText,
      args?.canLoadingText,
      args?.outerBuilder,
      args?.idleIcon ?? new Icon(Icons.arrow_upward, {color: Colors.grey}),
      args?.loadingIcon,
      args?.noMoreIcon,
      args?.failedIcon ?? new Icon(Icons.error, {color: Colors.grey}),
      args?.canLoadingIcon ?? new Icon(Icons.autorenew, {color: Colors.grey}),
      args?.spacing ?? 15,
      args?.iconPos ?? IconPosition.left,
      args?.textStyle ?? new TextStyle({color: Colors.grey}),
      args?.completeDuration ?? new Duration({milliseconds: 300}),
      args?.loadStyle ?? LoadStyle.ShowAlways,
      args?.height ?? 60,
      args?.onClick,
      args?.key?.[octoKey]
    )
  }
}

// ClassicFooter: function ClassicFooter(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
//     var _ = this;
//     _.idleText = t0;
//     _.loadingText = t1;
//     _.noDataText = t2;
//     _.failedText = t3;
//     _.canLoadingText = t4;
//     _.outerBuilder = t5;
//     _.idleIcon = t6;
//     _.loadingIcon = t7;
//     _.noMoreIcon = t8;
//     _.failedIcon = t9;
//     _.canLoadingIcon = t10;
//     _.spacing = t11;
//     _.iconPos = t12;
//     _.textStyle = t13;
//     _.completeDuration = t14;
//     _.loadStyle = t15;
//     _.height = t16;
//     _.onClick = t17;
//     _.key0 = t18;
//   },

export type HeaderBuilder = (
  context: BuildContext,
  mode: RefreshStatus | null | undefined
) => Widget

export type VoidPromiseCallBack = () => Promise<void>

export type OffsetCallBack = (offset: number) => void

export type ModeChangeCallBack<T> = (mode: T | undefined | null) => void

export class CustomHeader extends REFRESH.CustomHeader {
  constructor(args: {
    key?: Key
    builder: HeaderBuilder
    readyToRefresh?: VoidPromiseCallBack
    endRefresh?: VoidPromiseCallBack
    onOffsetChange?: OffsetCallBack
    onModeChange?: ModeChangeCallBack<RefreshStatus | null | undefined>
    onResetValue?: VoidCallback
    height?: number
    completeDuration?: Duration
    refreshStyle?: RefreshStyle
  }) {
    const builderCb = (ctx, mode) => {
      return args.builder(new BuildContext(ctx), mode)
    }
    let readyToRefreshCb = null
    if (!isNullOrUndefined(args.readyToRefresh)) {
      readyToRefreshCb = N.callbackToFutureVoidCallback(() => {
        args
          .readyToRefresh()
          .then((v) => {})
          .catch((e) => {})
      })
    }
    let endRefreshCb = null
    if (!isNullOrUndefined(args.endRefresh)) {
      endRefreshCb = N.callbackToFutureVoidCallback(() => {
        args
          .endRefresh()
          .then((v) => {})
          .catch((e) => {})
      })
    }
    let onOffsetChangeCb = null
    if (!isNullOrUndefined(args.onOffsetChange)) {
      onOffsetChangeCb = (offset) => {
        args.onOffsetChange(offset)
      }
    }
    let onModeChangeCb = null
    if (!isNullOrUndefined(args.onModeChange)) {
      onModeChangeCb = (mode) => {
        args.onModeChange(mode)
      }
    }
    super(
      builderCb,
      readyToRefreshCb,
      endRefreshCb,
      onOffsetChangeCb,
      onModeChangeCb,
      args.refreshStyle ?? RefreshStyle.Follow,
      args.height ?? 60,
      0,
      args.completeDuration ?? new Duration({milliseconds: 600}),
      args.key?.[octoKey]
    )
  }
}

// CustomHeader: function CustomHeader(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//     var _ = this;
//     _.builder = t0;
//     _.readyToRefresh = t1;
//     _.endRefresh = t2;
//     _.onOffsetChange = t3;
//     _.onModeChange = t4;
//     _.refreshStyle = t5;
//     _.height = t6;
//     _.offset = t7;
//     _.completeDuration = t8;
//     _.key0 = t9;
//   },

export type FooterBuilder = (
  context: BuildContext,
  mode: LoadStatus | null | undefined
) => Widget

export class CustomFooter extends REFRESH.CustomFooter {
  constructor(args: {
    key?: Key
    height?: number
    onModeChange?: ModeChangeCallBack<LoadStatus | null | undefined>
    onOffsetChange?: OffsetCallBack
    readyLoading?: VoidPromiseCallBack
    endLoading?: VoidPromiseCallBack
    loadStyle?: LoadStyle
    builder: FooterBuilder
    onClick?: VoidCallback
  }) {
    const builderCb = (ctx, mode) => {
      return args.builder(new BuildContext(ctx), mode)
    }
    let readyLoadingCb = null
    if (!isNullOrUndefined(args.readyLoading)) {
      readyLoadingCb = N.callbackToFutureVoidCallback(() => {
        args
          .readyLoading()
          .then((v) => {})
          .catch((e) => {})
      })
    }
    let endLoadingCb = null
    if (!isNullOrUndefined(args.endLoading)) {
      endLoadingCb = N.callbackToFutureVoidCallback(() => {
        args
          .endLoading()
          .then((v) => {})
          .catch((e) => {})
      })
    }
    let onOffsetChangeCb = null
    if (!isNullOrUndefined(args.onOffsetChange)) {
      onOffsetChangeCb = (offset) => {
        args.onOffsetChange(offset)
      }
    }
    let onModeChangeCb = null
    if (!isNullOrUndefined(args.onModeChange)) {
      onModeChangeCb = (mode) => {
        args.onModeChange(mode)
      }
    }
    super(
      builderCb,
      onOffsetChangeCb,
      onModeChangeCb,
      readyLoadingCb,
      endLoadingCb,
      args.loadStyle ?? LoadStyle.ShowAlways,
      args.height ?? 60,
      args.onClick,
      args.key?.[octoKey]
    )
  }
}

// CustomFooter: function CustomFooter(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//     var _ = this;
//     _.builder = t0;
//     _.onOffsetChange = t1;
//     _.onModeChange = t2;
//     _.readyLoading = t3;
//     _.endLoading = t4;
//     _.loadStyle = t5;
//     _.height = t6;
//     _.onClick = t7;
//     _.key0 = t8;
//   },
