import {Color} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {DragStartBehavior} from '../gestures/recognizer'
import {ShapeBorder} from '../painting/borders'
import {Widget} from '../widgets/framework'

export type DrawerCallback = (isOpened: boolean) => void

export enum DrawerAlignment {
  start = C.DrawerAlignment_0,
  end = C.DrawerAlignment_1,
}

export class Drawer extends N.Drawer {
  constructor(args?: {
    key?: Key
    backgroundColor?: Color
    elevation?: number
    shape?: ShapeBorder
    child?: Widget
    semanticLabel?: string
  }) {
    super(
      args?.backgroundColor,
      args?.elevation ?? 0,
      args?.shape,
      args?.child,
      args?.semanticLabel,
      args?.key?.[octoKey]
    )
  }
}

// Drawer: function Drawer(t0, t1, t2, t3, t4, t5) {
//     var _ = this;
//     _.backgroundColor = t0;
//     _.elevation = t1;
//     _.shape = t2;
//     _.child = t3;
//     _.semanticLabel = t4;
//     _.key0 = t5;
//   },

export class DrawerController extends N.DrawerController {
  constructor(args: {
    key: Key
    child: Widget
    alignment: DrawerAlignment
    isDrawerOpen?: boolean
    drawerCallback?: DrawerCallback
    dragStartBehavior?: DragStartBehavior
    scrimColor?: Color
    edgeDragWidth?: number
    enableOpenDragGesture?: boolean
  }) {
    super(
      args.child,
      args.alignment,
      args.drawerCallback,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.scrimColor,
      args.enableOpenDragGesture ?? true,
      args.edgeDragWidth,
      args.isDrawerOpen ?? false,
      args.key?.[octoKey]
    )
  }
}

// DrawerController: function DrawerController(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//     var _ = this;
//     _.child = t0;
//     _.alignment = t1;
//     _.drawerCallback = t2;
//     _.dragStartBehavior = t3;
//     _.scrimColor = t4;
//     _.enableOpenDragGesture = t5;
//     _.edgeDragWidth = t6;
//     _.isDrawerOpen = t7;
//     _.key0 = t8;
//   },
