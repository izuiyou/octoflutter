import {Color} from '@octoflutter/dartsdk'
import {TextStyle} from '../painting/text_style'

export class SliderThemeData extends N.SliderThemeData {
  constructor(args?: {
    trackHeight?: number
    activeTrackColor?: Color
    inactiveTrackColor?: Color
    disabledActiveTrackColor?: Color
    disabledInactiveTrackColor?: Color
    activeTickMarkColor?: Color
    inactiveTickMarkColor?: Color
    disabledActiveTickMarkColor?: Color
    disabledInactiveTickMarkColor?: Color
    thumbColor?: Color
    overlappingShapeStrokeColor?: Color
    disabledThumbColor?: Color
    overlayColor?: Color
    valueIndicatorColor?: Color
    overlayShape?: any
    tickMarkShape?: any
    thumbShape?: any
    trackShape?: any
    valueIndicatorShape?: any
    rangeTickMarkShape?: any
    rangeThumbShape?: any
    rangeTrackShape?: any
    rangeValueIndicatorShape?: any
    showValueIndicator?: any
    valueIndicatorTextStyle?: TextStyle
    minThumbSeparation?: number
    thumbSelector?: any
  }) {
    super(
      args?.trackHeight,
      args?.activeTrackColor,
      args?.inactiveTrackColor,
      args?.disabledActiveTrackColor,
      args?.disabledInactiveTrackColor,
      args?.activeTickMarkColor,
      args?.inactiveTickMarkColor,
      args?.disabledActiveTickMarkColor,
      args?.disabledInactiveTickMarkColor,
      args?.thumbColor,
      args?.overlappingShapeStrokeColor,
      args?.disabledThumbColor,
      args?.overlayColor,
      args?.valueIndicatorColor,
      args?.overlayShape,
      args?.tickMarkShape,
      args?.thumbShape,
      args?.trackShape,
      args?.valueIndicatorShape,
      args?.rangeTickMarkShape,
      args?.rangeThumbShape,
      args?.rangeTrackShape,
      args?.rangeValueIndicatorShape,
      args?.showValueIndicator,
      args?.valueIndicatorTextStyle,
      args?.minThumbSeparation,
      args?.thumbSelector
    )
  }
}

// SliderThemeData: function SliderThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26) {
//   var _ = this;
//   _.trackHeight = t0;
//   _.activeTrackColor = t1;
//   _.inactiveTrackColor = t2;
//   _.disabledActiveTrackColor = t3;
//   _.disabledInactiveTrackColor = t4;
//   _.activeTickMarkColor = t5;
//   _.inactiveTickMarkColor = t6;
//   _.disabledActiveTickMarkColor = t7;
//   _.disabledInactiveTickMarkColor = t8;
//   _.thumbColor = t9;
//   _.overlappingShapeStrokeColor = t10;
//   _.disabledThumbColor = t11;
//   _.overlayColor = t12;
//   _.valueIndicatorColor = t13;
//   _.overlayShape = t14;
//   _.tickMarkShape = t15;
//   _.thumbShape = t16;
//   _.trackShape = t17;
//   _.valueIndicatorShape = t18;
//   _.rangeTickMarkShape = t19;
//   _.rangeThumbShape = t20;
//   _.rangeTrackShape = t21;
//   _.rangeValueIndicatorShape = t22;
//   _.showValueIndicator = t23;
//   _.valueIndicatorTextStyle = t24;
//   _.minThumbSeparation = t25;
//   _.thumbSelector = t26;
// },
