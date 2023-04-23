import {Color} from '@octoflutter/dartsdk'
import {Widget} from './framework'

export class BottomNavigationBarItem extends N.BottomNavigationBarItem {
  constructor(args: {
    icon: Widget
    label?: string
    activeIcon?: Widget
    backgroundColor?: Color
    tooltip?: string
  }) {
    super(
      args.icon,
      args.activeIcon ?? args.icon,
      args.label,
      args.backgroundColor,
      args.tooltip
    )
  }
}

// BottomNavigationBarItem: function BottomNavigationBarItem(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.icon = t0;
//     _.activeIcon = t1;
//     _.label = t2;
//     _.backgroundColor = t3;
//     _.tooltip = t4;
//   },
