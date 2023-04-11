import {Clip, Color} from '@octoflutter/dartsdk'
import {ShapeBorder} from '../painting/borders'
import {BoxConstraints} from '../rendering/box'

export class BottomSheetThemeData extends N.BottomSheetThemeData {
  constructor(args?: {
    backgroundColor?: Color
    elevation?: number
    modalBackgroundColor?: Color
    modalElevation?: number
    shape?: ShapeBorder
    clipBehavior?: Clip
    constraints?: BoxConstraints
  }) {
    super(
      args?.backgroundColor,
      args?.elevation,
      args?.modalBackgroundColor,
      args?.modalElevation,
      args?.shape,
      args?.clipBehavior,
      args?.constraints
    )
  }
}

// BottomSheetThemeData: function BottomSheetThemeData(t0, t1, t2, t3, t4, t5, t6) {
//   var _ = this;
//   _.backgroundColor = t0;
//   _.elevation = t1;
//   _.modalBackgroundColor = t2;
//   _.modalElevation = t3;
//   _.shape = t4;
//   _.clipBehavior = t5;
//   _.constraints = t6;
// },
