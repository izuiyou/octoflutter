import {Clip, Color, VoidCallback} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {
  BuildContext,
  octoScaffoldMessengerState,
  octoScaffoldState,
  Widget,
  WidgetBuilder,
} from '../widgets/framework'
import {DrawerCallback} from './drawer'
import {DragStartBehavior} from '../gestures/recognizer'
import {
  FloatingActionButtonAnimator,
  FloatingActionButtonLocation,
} from './floating_action_button_location'
import {ShapeBorder} from '../painting/borders'
import {BoxConstraints} from '../rendering/box'
import {AnimationController} from '../animation/animation_controller'
import {SnackBar} from './snack_bar'

export class Scaffold extends N.Scaffold {
  constructor(args?: {
    key?: Key
    appBar?: Widget
    body?: Widget
    floatingActionButton?: Widget
    floatingActionButtonLocation?: FloatingActionButtonLocation
    floatingActionButtonAnimator?: FloatingActionButtonAnimator
    persistentFooterButtons?: Array<Widget>
    drawer?: Widget
    onDrawerChanged?: DrawerCallback
    endDrawer?: Widget
    onEndDrawerChanged?: DrawerCallback
    bottomNavigationBar?: Widget
    bottomSheet?: Widget
    backgroundColor?: Color
    resizeToAvoidBottomInset?: boolean
    primary?: boolean
    drawerDragStartBehavior?: DragStartBehavior
    extendBody?: boolean
    extendBodyBehindAppBar?: boolean
    drawerScrimColor?: Color
    drawerEdgeDragWidth?: number
    drawerEnableOpenDragGesture?: boolean
    endDrawerEnableOpenDragGesture?: boolean
    restorationId?: string
  }) {
    super(
      args?.extendBody ?? false,
      args?.extendBodyBehindAppBar ?? false,
      args?.appBar,
      args?.body,
      args?.floatingActionButton,
      args?.floatingActionButtonLocation,
      args?.floatingActionButtonAnimator,
      args?.persistentFooterButtons,
      args?.drawer,
      args?.onDrawerChanged,
      args?.endDrawer,
      args?.onEndDrawerChanged,
      args?.drawerScrimColor,
      args?.backgroundColor,
      args?.bottomNavigationBar,
      args?.bottomSheet,
      args?.resizeToAvoidBottomInset ?? true,
      args?.primary ?? true,
      args?.drawerDragStartBehavior ?? DragStartBehavior.start,
      args?.drawerEdgeDragWidth,
      args?.drawerEnableOpenDragGesture ?? true,
      args?.endDrawerEnableOpenDragGesture ?? true,
      args?.restorationId,
      args?.key?.[octoKey]
    )
  }

  static of(context: BuildContext): ScaffoldState {
    return new ScaffoldState(context[octoScaffoldState]())
  }
}

// Scaffold: function Scaffold(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23) {
//   var _ = this;
//   _.extendBody = t0;
//   _.extendBodyBehindAppBar = t1;
//   _.appBar = t2;
//   _.body0 = t3;
//   _.floatingActionButton = t4;
//   _.floatingActionButtonLocation = t5;
//   _.floatingActionButtonAnimator = t6;
//   _.persistentFooterButtons = t7;
//   _.drawer = t8;
//   _.onDrawerChanged = t9;
//   _.endDrawer = t10;
//   _.onEndDrawerChanged = t11;
//   _.drawerScrimColor = t12;
//   _.backgroundColor = t13;
//   _.bottomNavigationBar = t14;
//   _.bottomSheet = t15;
//   _.resizeToAvoidBottomInset = t16;
//   _.primary = t17;
//   _.drawerDragStartBehavior = t18;
//   _.drawerEdgeDragWidth = t19;
//   _.drawerEnableOpenDragGesture = t20;
//   _.endDrawerEnableOpenDragGesture = t21;
//   _.restorationId = t22;
//   _.key0 = t23;
// }

export class PersistentBottomSheetController<
  T
> extends N.OctoPersistentBottomSheetController {
  constructor(real: any) {
    super(real)
  }

  close(): VoidCallback {
    return super.sca()
  }

  get closed(): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      super.scb(
        (v) => {
          resolve(v)
        },
        (e) => {
          reject(e)
        }
      )
    })
  }
}

// OctoPersistentBottomSheetController: function OctoPersistentBottomSheetController(t0) {
//   this.controller = t0;
// },

export class ScaffoldState extends N.OctoScaffoldState {
  constructor(real: any) {
    super(real)
  }

  get hasAppBar(): boolean {
    return super.scc()
  }

  get hasDrawer(): boolean {
    return super.scd()
  }

  get hasEndDrawer(): boolean {
    return super.sce()
  }

  get hasFloatingActionButton(): boolean {
    return super.scf()
  }

  get appBarMaxHeight(): boolean {
    return super.scg()
  }

  get isDrawerOpen(): boolean {
    return super.sch()
  }

  get isEndDrawerOpen(): boolean {
    return super.sci()
  }

  openDrawer() {
    super.scj()
  }

  openEndDrawer() {
    super.sck()
  }

  showBodyScrim(value: boolean, opacity: number) {
    super.scl(value, opacity)
  }

  showBottomSheet<T>(
    builder: WidgetBuilder,
    args?: {
      backgroundColor?: Color
      elevation?: number
      shape?: ShapeBorder
      clipBehavior?: Clip
      constraints?: BoxConstraints
      enableDrag?: boolean
      transitionAnimationController?: AnimationController
    }
  ): PersistentBottomSheetController<T> {
    const cb = (ctx) => {
      return builder(new BuildContext(ctx))
    }
    const ret = super.scm(
      cb,
      args?.backgroundColor,
      args?.elevation,
      args?.shape,
      args?.clipBehavior,
      args?.constraints,
      args?.enableDrag,
      args?.transitionAnimationController
    )
    return new PersistentBottomSheetController(ret)
  }
}

// OctoScaffoldState: function OctoScaffoldState(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16) {
//   var _ = this;
//   _.state = t0;
//   _._drawerKey = t1;
//   _._endDrawerKey = t2;
//   _._appBarMaxHeight = null;
//   _._drawerOpened = t3;
//   _._endDrawerOpened = t4;
//   _._accessibleNavigation = _._scaffoldMessenger = null;
//   _._snackBars = t5;
//   _._messengerMaterialBanner = _._messengerSnackBar = _._snackBarTimer = null;
//   _._dismissedBottomSheets = t6;
//   _._currentBottomSheet = null;
//   _._currentBottomSheetKey = t7;
//   _.__ScaffoldState__floatingActionButtonAnimator = _.__ScaffoldState__floatingActionButtonMoveController = $;
//   _._floatingActionButtonLocation = _._previousFloatingActionButtonLocation = null;
//   _.__ScaffoldState__geometryNotifier = _.__ScaffoldState__floatingActionButtonVisibilityController = $;
//   _._showBodyScrim = false;
//   _._bodyScrimColor = t8;
//   _.RestorationMixin__bucket = t9;
//   _.RestorationMixin__properties = t10;
//   _.RestorationMixin__debugPropertiesWaitingForReregistration = t11;
//   _.RestorationMixin__firstRestorePending = t12;
//   _.RestorationMixin__currentParent = t13;
//   _.TickerProviderStateMixin__tickers = t14;
//   _.TickerProviderStateMixin__tickerModeNotifier = t15;
//   _._widget = null;
//   _._debugLifecycleState = t16;
//   _._element = null;
// },

export class ScaffoldFeatureController<
  T
> extends N.OctoScaffoldFeatureController {
  constructor(real: any) {
    super(real)
  }

  close(): VoidCallback {
    return super.sca()
  }

  get closed(): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      super.scb(
        (v) => {
          resolve(v)
        },
        (e) => {
          reject(e)
        }
      )
    })
  }
}

// OctoScaffoldFeatureController: function OctoScaffoldFeatureController(t0) {
//   this.controller = t0;
// },

export class ScaffoldMessengerState extends N.OctoScaffoldMessengerState {
  constructor(real: any) {
    super(real)
  }

  showSnackBar(snackBar: SnackBar) {
    const ctrl = super.scn(snackBar)
    return new ScaffoldFeatureController(ctrl)
  }

  removeCurrentSnackBar() {
    super.sco()
  }

  hideCurrentSnackBar() {
    super.scp()
  }

  clearSnackBars() {
    super.scq()
  }

  showMaterialBanner(materialBanner: any) {
    const ctrl = super.scr(materialBanner)
    return new ScaffoldFeatureController(ctrl)
  }

  removeCurrentMaterialBanner() {
    super.scs()
  }

  hideCurrentMaterialBanner() {
    super.sct()
  }

  clearMaterialBanners() {
    super.scu()
  }
}

// OctoScaffoldMessengerState: function OctoScaffoldMessengerState(t0, t1, t2, t3, t4, t5, t6) {
//   var _ = this;
//   _.state = t0;
//   _._scaffolds = t1;
//   _._materialBanners = t2;
//   _._materialBannerController = null;
//   _._snackBars = t3;
//   _._accessibleNavigation = _._snackBarTimer = _._snackBarController = null;
//   _.TickerProviderStateMixin__tickers = t4;
//   _.TickerProviderStateMixin__tickerModeNotifier = t5;
//   _._widget = null;
//   _._debugLifecycleState = t6;
//   _._element = null;
// },

export class ScaffoldMessenger extends N.ScaffoldMessenger {
  constructor(args: {key?: Key; child: Widget}) {
    super(args.child, args.key?.[octoKey])
  }

  static of(context: BuildContext): ScaffoldMessengerState {
    return new ScaffoldMessengerState(context[octoScaffoldMessengerState]())
  }
}

// ScaffoldMessenger: function ScaffoldMessenger(t0, t1) {
//   this.child = t0;
//   this.key0 = t1;
// },
