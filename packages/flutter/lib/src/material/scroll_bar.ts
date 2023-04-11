import {Key, octoKey} from '../foundation/key'
import {Widget} from '../widgets/framework'
import {ScrollbarOrientation} from '../widgets/scroll_bar'
import {ScrollController} from '../widgets/scroll_controller'

export class Scrollbar extends N.Scrollbar {
  constructor(args: {
    key?: Key
    child: Widget
    controller?: ScrollController
    isAlwaysShown?: boolean
    trackVisibility?: boolean
    showTrackOnHover?: boolean
    hoverThickness?: boolean
    thickness?: boolean
    radius?: boolean
    interactive?: boolean
    notificationPredicate?: any
    scrollbarOrientation?: ScrollbarOrientation
  }) {
    super(
      args.child,
      args.controller,
      args.isAlwaysShown,
      args.trackVisibility,
      args.showTrackOnHover,
      args.hoverThickness,
      args.thickness,
      args.radius,
      args.interactive,
      args.notificationPredicate,
      args.scrollbarOrientation,
      args.key?.[octoKey]
    )
  }
}

// Scrollbar: function Scrollbar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11) {
//     var _ = this;
//     _.child = t0;
//     _.controller = t1;
//     _.isAlwaysShown = t2;
//     _.trackVisibility = t3;
//     _.showTrackOnHover = t4;
//     _.hoverThickness = t5;
//     _.thickness = t6;
//     _.radius = t7;
//     _.interactive = t8;
//     _.notificationPredicate = t9;
//     _.scrollbarOrientation = t10;
//     _.key0 = t11;
//   },
