import {Radius} from '@octoflutter/dartsdk'

export class ScrollbarThemeData extends N.ScrollbarThemeData {
  constructor(args?: {
    thickness?: any
    trackVisibility?: any
    showTrackOnHover?: boolean
    isAlwaysShown?: boolean
    interactive?: boolean
    radius?: Radius
    thumbColor?: any
    trackColor?: any
    trackBorderColor?: any
    crossAxisMargin?: number
    mainAxisMargin?: number
    minThumbLength?: number
  }) {
    super(
      args?.thickness,
      args?.trackVisibility,
      args?.showTrackOnHover,
      args?.isAlwaysShown,
      args?.interactive,
      args?.radius,
      args?.thumbColor,
      args?.trackColor,
      args?.trackBorderColor,
      args?.crossAxisMargin,
      args?.mainAxisMargin,
      args?.minThumbLength
    )
  }
}

// ScrollbarThemeData: function ScrollbarThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11) {
//   var _ = this;
//   _.thickness = t0;
//   _.trackVisibility = t1;
//   _.showTrackOnHover = t2;
//   _.isAlwaysShown = t3;
//   _.interactive = t4;
//   _.radius = t5;
//   _.thumbColor = t6;
//   _.trackColor = t7;
//   _.trackBorderColor = t8;
//   _.crossAxisMargin = t9;
//   _.mainAxisMargin = t10;
//   _.minThumbLength = t11;
// },
