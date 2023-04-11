import {isNullOrUndefined} from '@octoflutter/dartsdk'
import {
  convertDragDownDetails,
  convertDragEndDetails,
  convertDragStartDetails,
  convertDragUpdateDetails,
  convertForcePressDetails,
  convertLongPressDownDetails,
  convertLongPressEndDetails,
  convertLongPressMoveUpdateDetails,
  convertLongPressStartDetails,
  convertScaleEndDetails,
  convertScaleStartDetails,
  convertScaleUpdateDetails,
  convertTapDownDetails,
  convertTapUpDetails,
} from '../../utils'
import {Key, octoKey} from '../foundation/key'
import {
  GestureDragDownCallback,
  GestureDragStartCallback,
  GestureDragUpdateCallback,
} from '../gestures/drag_details'
import {
  GestureForcePressEndCallback,
  GestureForcePressPeakCallback,
  GestureForcePressStartCallback,
  GestureForcePressUpdateCallback,
} from '../gestures/force_press'
import {
  GestureLongPressCallback,
  GestureLongPressCancelCallback,
  GestureLongPressDownCallback,
  GestureLongPressEndCallback,
  GestureLongPressMoveUpdateCallback,
  GestureLongPressStartCallback,
  GestureLongPressUpCallback,
} from '../gestures/long_press'
import {
  GestureDragCancelCallback,
  GestureDragEndCallback,
} from '../gestures/monodrag'
import {DragStartBehavior} from '../gestures/recognizer'
import {
  GestureScaleEndCallback,
  GestureScaleStartCallback,
  GestureScaleUpdateCallback,
} from '../gestures/scale'
import {
  GestureTapDownCallback,
  GestureTapUpCallback,
  GestureTapCallback,
  GestureTapCancelCallback,
} from '../gestures/tap'
import {HitTestBehavior} from '../rendering/proxy_box'
import {Widget} from './framework'

export class GestureDetector extends N.GestureDetector {
  constructor(args?: {
    child?: Widget
    onTapDown?: GestureTapDownCallback
    onTapUp?: GestureTapUpCallback
    onTap?: GestureTapCallback
    onTapCancel?: GestureTapCancelCallback

    onSecondaryTap?: GestureTapCallback
    onSecondaryTapDown?: GestureTapDownCallback
    onSecondaryTapUp?: GestureTapUpCallback
    onSecondaryTapCancel?: GestureTapCancelCallback

    onTertiaryTapDown?: GestureTapDownCallback
    onTertiaryTapUp?: GestureTapUpCallback
    onTertiaryTapCancel?: GestureTapCancelCallback

    onDoubleTapDown?: GestureTapDownCallback
    onDoubleTap?: GestureTapCallback
    onDoubleTapCancel?: GestureTapCancelCallback

    onLongPressDown?: GestureLongPressDownCallback
    onLongPressCancel?: GestureLongPressCancelCallback
    onLongPress?: GestureLongPressCallback
    onLongPressStart?: GestureLongPressStartCallback
    onLongPressMoveUpdate?: GestureLongPressMoveUpdateCallback
    onLongPressUp?: GestureLongPressUpCallback
    onLongPressEnd?: GestureLongPressEndCallback

    onSecondaryLongPressDown?: GestureLongPressDownCallback
    onSecondaryLongPressCancel?: GestureLongPressCancelCallback
    onSecondaryLongPress?: GestureLongPressCallback
    onSecondaryLongPressStart?: GestureLongPressStartCallback
    onSecondaryLongPressMoveUpdate?: GestureLongPressMoveUpdateCallback
    onSecondaryLongPressUp?: GestureLongPressUpCallback
    onSecondaryLongPressEnd?: GestureLongPressEndCallback

    onTertiaryLongPressDown?: GestureLongPressDownCallback
    onTertiaryLongPressCancel?: GestureLongPressCancelCallback
    onTertiaryLongPress?: GestureLongPressCallback
    onTertiaryLongPressStart?: GestureLongPressStartCallback
    onTertiaryLongPressMoveUpdate?: GestureLongPressMoveUpdateCallback
    onTertiaryLongPressUp?: GestureLongPressUpCallback
    onTertiaryLongPressEnd?: GestureLongPressEndCallback

    onVerticalDragDown?: GestureDragDownCallback
    onVerticalDragStart?: GestureDragStartCallback
    onVerticalDragUpdate?: GestureDragUpdateCallback
    onVerticalDragEnd?: GestureDragEndCallback
    onVerticalDragCancel?: GestureDragCancelCallback

    onHorizontalDragDown?: GestureDragDownCallback
    onHorizontalDragStart?: GestureDragStartCallback
    onHorizontalDragUpdate?: GestureDragUpdateCallback
    onHorizontalDragEnd?: GestureDragEndCallback
    onHorizontalDragCancel?: GestureDragCancelCallback

    onPanDown?: GestureDragDownCallback
    onPanStart?: GestureDragStartCallback
    onPanUpdate?: GestureDragUpdateCallback
    onPanEnd?: GestureDragEndCallback
    onPanCancel?: GestureDragCancelCallback

    onScaleStart?: GestureScaleStartCallback
    onScaleUpdate?: GestureScaleUpdateCallback
    onScaleEnd?: GestureScaleEndCallback

    onForcePressStart?: GestureForcePressStartCallback
    onForcePressPeak?: GestureForcePressPeakCallback
    onForcePressUpdate?: GestureForcePressUpdateCallback
    onForcePressEnd?: GestureForcePressEndCallback

    behavior?: HitTestBehavior
    excludeFromSemantics?: boolean
    dragStartBehavior?: DragStartBehavior

    key?: Key
  }) {
    let onTapDownCb = null
    if (!isNullOrUndefined(args?.onTapDown)) {
      onTapDownCb = (d) => {
        args?.onTapDown(convertTapDownDetails(d))
      }
    }

    let onTapUpCb = null
    if (!isNullOrUndefined(args?.onTapUp)) {
      onTapUpCb = (d) => {
        args?.onTapUp(convertTapUpDetails(d))
      }
    }

    let onSecondaryTapDownCb = null
    if (!isNullOrUndefined(args?.onSecondaryTapDown)) {
      onSecondaryTapDownCb = (d) => {
        args?.onSecondaryTapDown(convertTapDownDetails(d))
      }
    }

    let onSecondaryTapUpCb = null
    if (!isNullOrUndefined(args?.onSecondaryTapUp)) {
      onSecondaryTapUpCb = (d) => {
        args?.onSecondaryTapUp(convertTapUpDetails(d))
      }
    }

    let onTertiaryTapDownCb = null
    if (!isNullOrUndefined(args?.onTertiaryTapDown)) {
      onTertiaryTapDownCb = (d) => {
        args?.onTertiaryTapDown(convertTapDownDetails(d))
      }
    }

    let onTertiaryTapUpCb = null
    if (!isNullOrUndefined(args?.onTertiaryTapUp)) {
      onTertiaryTapUpCb = (d) => {
        args?.onTertiaryTapUp(convertTapUpDetails(d))
      }
    }

    let onDoubleTapDownCb = null
    if (!isNullOrUndefined(args?.onDoubleTapDown)) {
      onDoubleTapDownCb = (d) => {
        args?.onDoubleTapDown(convertTapDownDetails(d))
      }
    }

    let onLongPressDownCb = null
    if (!isNullOrUndefined(args?.onLongPressDown)) {
      onLongPressDownCb = (d) => {
        args?.onLongPressDown(convertLongPressDownDetails(d))
      }
    }

    let onLongPressStartCb = null
    if (!isNullOrUndefined(args?.onLongPressStart)) {
      onLongPressStartCb = (d) => {
        args?.onLongPressStart(convertLongPressStartDetails(d))
      }
    }

    let onLongPressMoveUpdateCb = null
    if (!isNullOrUndefined(args?.onLongPressMoveUpdate)) {
      onLongPressMoveUpdateCb = (d) => {
        args?.onLongPressMoveUpdate(convertLongPressMoveUpdateDetails(d))
      }
    }

    let onLongPressEndCb = null
    if (!isNullOrUndefined(args?.onLongPressEnd)) {
      onLongPressEndCb = (d) => {
        args?.onLongPressEnd(convertLongPressEndDetails(d))
      }
    }

    let onSecondaryLongPressDownCb = null
    if (!isNullOrUndefined(args?.onSecondaryLongPressDown)) {
      onSecondaryLongPressDownCb = (d) => {
        args?.onSecondaryLongPressDown(convertLongPressDownDetails(d))
      }
    }

    let onSecondaryLongPressStartCb = null
    if (!isNullOrUndefined(args?.onSecondaryLongPressStart)) {
      onSecondaryLongPressStartCb = (d) => {
        args?.onSecondaryLongPressStart(convertLongPressStartDetails(d))
      }
    }

    let onSecondaryLongPressMoveUpdateCb = null
    if (!isNullOrUndefined(args?.onSecondaryLongPressMoveUpdate)) {
      onSecondaryLongPressMoveUpdateCb = (d) => {
        args?.onSecondaryLongPressMoveUpdate(
          convertLongPressMoveUpdateDetails(d)
        )
      }
    }

    let onSecondaryLongPressEndCb = null
    if (!isNullOrUndefined(args?.onSecondaryLongPressEnd)) {
      onSecondaryLongPressEndCb = (d) => {
        args?.onSecondaryLongPressEnd(convertLongPressEndDetails(d))
      }
    }

    let onTertiaryLongPressDownCb = null
    if (!isNullOrUndefined(args?.onTertiaryLongPressDown)) {
      onTertiaryLongPressDownCb = (d) => {
        args?.onTertiaryLongPressDown(convertLongPressDownDetails(d))
      }
    }

    let onTertiaryLongPressStartCb = null
    if (!isNullOrUndefined(args?.onTertiaryLongPressStart)) {
      onTertiaryLongPressStartCb = (d) => {
        args?.onTertiaryLongPressStart(convertLongPressStartDetails(d))
      }
    }

    let onTertiaryLongPressMoveUpdateCb = null
    if (!isNullOrUndefined(args?.onTertiaryLongPressMoveUpdate)) {
      onTertiaryLongPressMoveUpdateCb = (d) => {
        args?.onTertiaryLongPressMoveUpdate(
          convertLongPressMoveUpdateDetails(d)
        )
      }
    }

    let onTertiaryLongPressEndCb = null
    if (!isNullOrUndefined(args?.onTertiaryLongPressEnd)) {
      onTertiaryLongPressEndCb = (d) => {
        args?.onTertiaryLongPressEnd(convertLongPressEndDetails(d))
      }
    }

    let onVerticalDragDownCb = null
    if (!isNullOrUndefined(args?.onVerticalDragDown)) {
      onVerticalDragDownCb = (d) => {
        args?.onVerticalDragDown(convertDragDownDetails(d))
      }
    }

    let onVerticalDragStartCb = null
    if (!isNullOrUndefined(args?.onVerticalDragStart)) {
      onVerticalDragStartCb = (d) => {
        args?.onVerticalDragStart(convertDragStartDetails(d))
      }
    }

    let onVerticalDragUpdateCb = null
    if (!isNullOrUndefined(args?.onVerticalDragUpdate)) {
      onVerticalDragUpdateCb = (d) => {
        args?.onVerticalDragUpdate(convertDragUpdateDetails(d))
      }
    }

    let onVerticalDragEndCb = null
    if (!isNullOrUndefined(args?.onVerticalDragEnd)) {
      onVerticalDragEndCb = (d) => {
        args?.onVerticalDragEnd(convertDragEndDetails(d))
      }
    }

    let onHorizontalDragDownCb = null
    if (!isNullOrUndefined(args?.onHorizontalDragDown)) {
      onHorizontalDragDownCb = (d) => {
        args?.onHorizontalDragDown(convertDragDownDetails(d))
      }
    }

    let onHorizontalDragStartCb = null
    if (!isNullOrUndefined(args?.onHorizontalDragStart)) {
      onHorizontalDragStartCb = (d) => {
        args?.onHorizontalDragStart(convertDragStartDetails(d))
      }
    }

    let onHorizontalDragUpdateCb = null
    if (!isNullOrUndefined(args?.onHorizontalDragUpdate)) {
      onHorizontalDragUpdateCb = (d) => {
        args?.onHorizontalDragUpdate(convertDragUpdateDetails(d))
      }
    }

    let onHorizontalDragEndCb = null
    if (!isNullOrUndefined(args?.onHorizontalDragEnd)) {
      onHorizontalDragEndCb = (d) => {
        args?.onHorizontalDragEnd(convertDragEndDetails(d))
      }
    }

    let onPanDownCb = null
    if (!isNullOrUndefined(args?.onPanDown)) {
      onPanDownCb = (d) => {
        args?.onPanDown(convertDragDownDetails(d))
      }
    }

    let onPanStartCb = null
    if (!isNullOrUndefined(args?.onPanStart)) {
      onPanStartCb = (d) => {
        args?.onPanStart(convertDragStartDetails(d))
      }
    }

    let onPanUpdateCb = null
    if (!isNullOrUndefined(args?.onPanUpdate)) {
      onPanUpdateCb = (d) => {
        args?.onPanUpdate(convertDragUpdateDetails(d))
      }
    }

    let onPanEndCb = null
    if (!isNullOrUndefined(args?.onPanEnd)) {
      onPanEndCb = (d) => {
        args?.onPanEnd(convertDragEndDetails(d))
      }
    }

    let onScaleStartCb = null
    if (!isNullOrUndefined(args?.onScaleStart)) {
      onScaleStartCb = (s) => {
        return args?.onScaleStart(convertScaleStartDetails(s))
      }
    }

    let onScaleUpdateCb = null
    if (!isNullOrUndefined(args?.onScaleUpdate)) {
      onScaleUpdateCb = (s) => {
        return args?.onScaleUpdate(convertScaleUpdateDetails(s))
      }
    }

    let onScaleEndCb = null
    if (!isNullOrUndefined(args?.onScaleEnd)) {
      onScaleEndCb = (s) => {
        return args?.onScaleEnd(convertScaleEndDetails(s))
      }
    }

    let onForcePressStartCb = null
    if (!isNullOrUndefined(args?.onForcePressStart)) {
      onForcePressStartCb = (s) => {
        return args?.onForcePressStart(convertForcePressDetails(s))
      }
    }

    let onForcePressPeakCb = null
    if (!isNullOrUndefined(args?.onForcePressPeak)) {
      onForcePressPeakCb = (s) => {
        return args?.onForcePressPeak(convertForcePressDetails(s))
      }
    }

    let onForcePressUpdateCb = null
    if (!isNullOrUndefined(args?.onForcePressUpdate)) {
      onForcePressUpdateCb = (s) => {
        return args?.onForcePressUpdate(convertForcePressDetails(s))
      }
    }

    let onForcePressEndCb = null
    if (!isNullOrUndefined(args?.onForcePressEnd)) {
      onForcePressEndCb = (s) => {
        return args?.onForcePressEnd(convertForcePressDetails(s))
      }
    }

    super(
      args?.child,
      onTapDownCb,
      onTapUpCb,
      args?.onTap,
      args?.onTapCancel,

      args?.onSecondaryTap,
      onSecondaryTapDownCb,
      onSecondaryTapUpCb,
      args?.onSecondaryTapCancel,

      onTertiaryTapDownCb,
      onTertiaryTapUpCb,
      args?.onTertiaryTapCancel,

      onDoubleTapDownCb,
      args?.onDoubleTap,
      args?.onDoubleTapCancel,

      onLongPressDownCb,
      args?.onLongPressCancel,
      args?.onLongPress,
      onLongPressStartCb,
      onLongPressMoveUpdateCb,
      args?.onLongPressUp,
      onLongPressEndCb,

      onSecondaryLongPressDownCb,
      args?.onSecondaryLongPressCancel,
      args?.onSecondaryLongPress,
      onSecondaryLongPressStartCb,
      onSecondaryLongPressMoveUpdateCb,
      args?.onSecondaryLongPressUp,
      onSecondaryLongPressEndCb,

      onTertiaryLongPressDownCb,
      args?.onTertiaryLongPressCancel,
      args?.onTertiaryLongPress,
      onTertiaryLongPressStartCb,
      onTertiaryLongPressMoveUpdateCb,
      args?.onTertiaryLongPressUp,
      onTertiaryLongPressEndCb,

      onVerticalDragDownCb,
      onVerticalDragStartCb,
      onVerticalDragUpdateCb,
      onVerticalDragEndCb,
      args?.onVerticalDragCancel,

      onHorizontalDragDownCb,
      onHorizontalDragStartCb,
      onHorizontalDragUpdateCb,
      onHorizontalDragEndCb,
      args?.onHorizontalDragCancel,

      onPanDownCb,
      onPanStartCb,
      onPanUpdateCb,
      onPanEndCb,
      args?.onPanCancel,

      onScaleStartCb,
      onScaleUpdateCb,
      onScaleEndCb,

      onForcePressStartCb,
      onForcePressPeakCb,
      onForcePressUpdateCb,
      onForcePressEndCb,

      args?.behavior,
      args?.excludeFromSemantics ?? false,
      args?.dragStartBehavior ?? DragStartBehavior.start,

      args?.key?.[octoKey]
    )
  }
}

// GestureDetector: function GestureDetector(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61) {
//   var _ = this;
//   _.child = t0;
//   _.onTapDown = t1;
//   _.onTapUp = t2;
//   _.onTap = t3;
//   _.onTapCancel = t4;
//   _.onSecondaryTap = t5;
//   _.onSecondaryTapDown = t6;
//   _.onSecondaryTapUp = t7;
//   _.onSecondaryTapCancel = t8;
//   _.onTertiaryTapDown = t9;
//   _.onTertiaryTapUp = t10;
//   _.onTertiaryTapCancel = t11;
//   _.onDoubleTapDown = t12;
//   _.onDoubleTap = t13;
//   _.onDoubleTapCancel = t14;
//   _.onLongPressDown = t15;
//   _.onLongPressCancel = t16;
//   _.onLongPress = t17;
//   _.onLongPressStart = t18;
//   _.onLongPressMoveUpdate = t19;
//   _.onLongPressUp = t20;
//   _.onLongPressEnd = t21;
//   _.onSecondaryLongPressDown = t22;
//   _.onSecondaryLongPressCancel = t23;
//   _.onSecondaryLongPress = t24;
//   _.onSecondaryLongPressStart = t25;
//   _.onSecondaryLongPressMoveUpdate = t26;
//   _.onSecondaryLongPressUp = t27;
//   _.onSecondaryLongPressEnd = t28;
//   _.onTertiaryLongPressDown = t29;
//   _.onTertiaryLongPressCancel = t30;
//   _.onTertiaryLongPress = t31;
//   _.onTertiaryLongPressStart = t32;
//   _.onTertiaryLongPressMoveUpdate = t33;
//   _.onTertiaryLongPressUp = t34;
//   _.onTertiaryLongPressEnd = t35;
//   _.onVerticalDragDown = t36;
//   _.onVerticalDragStart = t37;
//   _.onVerticalDragUpdate = t38;
//   _.onVerticalDragEnd = t39;
//   _.onVerticalDragCancel = t40;
//   _.onHorizontalDragDown = t41;
//   _.onHorizontalDragStart = t42;
//   _.onHorizontalDragUpdate = t43;
//   _.onHorizontalDragEnd = t44;
//   _.onHorizontalDragCancel = t45;
//   _.onPanDown = t46;
//   _.onPanStart = t47;
//   _.onPanUpdate = t48;
//   _.onPanEnd = t49;
//   _.onPanCancel = t50;
//   _.onScaleStart = t51;
//   _.onScaleUpdate = t52;
//   _.onScaleEnd = t53;
//   _.onForcePressStart = t54;
//   _.onForcePressPeak = t55;
//   _.onForcePressUpdate = t56;
//   _.onForcePressEnd = t57;
//   _.behavior = t58;
//   _.excludeFromSemantics = t59;
//   _.dragStartBehavior = t60;
//   _.key0 = t61;
// },
