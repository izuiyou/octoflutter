import {VerticalDirection} from '../../painting'
import {MainAxisAlignment, MainAxisSize} from '../../rendering'
import {EdgeInsetsGeometry} from '../painting/edge_insets'

export class ButtonBarThemeData extends N.ButtonBarThemeData {
  constructor(args?: {
    alignment?: MainAxisAlignment
    mainAxisSize?: MainAxisSize
    buttonTextTheme?: any
    buttonMinWidth?: number
    buttonHeight?: number
    buttonPadding?: EdgeInsetsGeometry
    buttonAlignedDropdown?: boolean
    layoutBehavior?: any
    overflowDirection?: VerticalDirection
  }) {
    super(
      args?.alignment,
      args?.mainAxisSize,
      args?.buttonTextTheme,
      args?.buttonMinWidth,
      args?.buttonHeight,
      args?.buttonPadding,
      args?.buttonAlignedDropdown,
      args?.layoutBehavior,
      args?.overflowDirection
    )
  }
}

// ButtonBarThemeData: function ButtonBarThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//   var _ = this;
//   _.alignment = t0;
//   _.mainAxisSize = t1;
//   _.buttonTextTheme = t2;
//   _.buttonMinWidth = t3;
//   _.buttonHeight = t4;
//   _.buttonPadding = t5;
//   _.buttonAlignedDropdown = t6;
//   _.layoutBehavior = t7;
//   _.overflowDirection = t8;
// },
