import {
  Clip,
  Offset,
  VoidCallback,
  isNullOrUndefined,
  Matrix4,
} from '@octoflutter/dartsdk'
import {
  convertScaleEndDetails,
  convertScaleStartDetails,
  convertScaleUpdateDetails,
} from '../../utils'
import {
  GestureScaleEndCallback,
  GestureScaleStartCallback,
  GestureScaleUpdateCallback,
} from '../../gestures'
import {Key} from '../foundation/key'
import {EdgeInsets} from '../painting/edge_insets'
import {Widget} from './framework'

export class TransformationController extends N.OctoTransformationController {
  constructor(value?: Matrix4) {
    super(N.transformationControllerInstance(value))
  }

  toScene(viewportPoint: Offset): Offset {
    const arr = super.tcra(viewportPoint)
    return new Offset(arr[0], arr[1])
  }

  dispose() {
    super.dispose()
  }

  addListener(listener: VoidCallback) {
    N.octoChangeNotifierAdd(this, listener)
  }

  removeListener(listener: VoidCallback) {
    N.octoChangeNotifierRemove(this, listener)
  }
}

export class InteractiveViewer extends N.InteractiveViewer {
  constructor(args: {
    key?: Key
    clipBehavior?: Clip
    alignPanAxis?: boolean
    boundaryMargin?: EdgeInsets
    constrained?: boolean
    maxScale?: number
    minScale?: number
    onInteractionEnd?: GestureScaleEndCallback
    onInteractionStart?: GestureScaleStartCallback
    onInteractionUpdate?: GestureScaleUpdateCallback
    panEnabled?: boolean
    scaleEnabled?: boolean
    transformationController?: TransformationController
    child: Widget
  }) {
    let endCb = null
    if (!isNullOrUndefined(args.onInteractionEnd)) {
      endCb = (s) => {
        return args.onInteractionEnd(convertScaleEndDetails(s))
      }
    }

    let startCb = null
    if (!isNullOrUndefined(args.onInteractionStart)) {
      startCb = (s) => {
        return args.onInteractionStart(convertScaleStartDetails(s))
      }
    }

    let updateCb = null
    if (!isNullOrUndefined(args.onInteractionUpdate)) {
      updateCb = (s) => {
        return args.onInteractionUpdate(convertScaleUpdateDetails(s))
      }
    }

    super(
      args.clipBehavior ?? Clip.hardEdge,
      args.alignPanAxis ?? false,
      args.boundaryMargin ?? EdgeInsets.zero,
      args.constrained ?? true,
      args.maxScale ?? 2.5,
      args.minScale ?? 0.8,
      endCb,
      startCb,
      updateCb,
      args.panEnabled ?? true,
      args.scaleEnabled ?? true,
      args.transformationController,
      args.child
    )
  }
}

// InteractiveViewer: function InteractiveViewer(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) {
//     var _ = this;
//     _.clipBehavior = t0;
//     _.alignPanAxis = t1;
//     _.boundaryMargin = t2;
//     _.child = t3;
//     _.constrained = t4;
//     _.panEnabled = t5;
//     _.scaleEnabled = t6;
//     _.maxScale = t7;
//     _.minScale = t8;
//     _.onInteractionEnd = t9;
//     _.onInteractionStart = t10;
//     _.onInteractionUpdate = t11;
//     _.transformationController = t12;
//     _.key0 = t13;
//   },
