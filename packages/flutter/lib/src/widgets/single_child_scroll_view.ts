import {isNullOrUndefined, Clip} from '@octoflutter/dartsdk'
import {Key} from '../foundation/key'
import {DragStartBehavior} from '../gestures/recognizer'
import {Axis} from '../painting/basic_types'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {Widget} from './framework'
import {ScrollController} from './scroll_controller'
import {ScrollViewKeyboardDismissBehavior} from './scroll_view'

export class SingleChildScrollView extends N.SingleChildScrollView {
  constructor(args?: {
    key?: Key
    scrollDirection?: Axis
    reverse?: boolean
    padding?: EdgeInsetsGeometry
    primary?: boolean
    physics?: any
    controller?: ScrollController
    child?: Widget
    dragStartBehavior?: DragStartBehavior
    clipBehavior?: Clip
    restorationId?: string
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior
  }) {
    super(
      args?.scrollDirection ?? Axis.vertical,
      args?.reverse ?? false,
      args?.padding,
      args?.controller,
      args?.primary ?? (isNullOrUndefined(args?.controller) ? true : false),
      args?.physics,
      args?.child,
      args?.dragStartBehavior ?? DragStartBehavior.start,
      args?.clipBehavior ?? Clip.hardEdge,
      args?.restorationId,
      args?.keyboardDismissBehavior ?? ScrollViewKeyboardDismissBehavior.manual,
      args?.key
    )
  }
}

// SingleChildScrollView: function SingleChildScrollView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11) {
//   var _ = this;
//   _.scrollDirection = t0;
//   _.reverse = t1;
//   _.padding = t2;
//   _.controller = t3;
//   _.primary = t4;
//   _.physics = t5;
//   _.child = t6;
//   _.dragStartBehavior = t7;
//   _.clipBehavior = t8;
//   _.restorationId = t9;
//   _.keyboardDismissBehavior = t10;
//   _.key0 = t11;
// },
