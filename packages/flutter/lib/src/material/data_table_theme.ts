import {TextStyle} from '../../painting'
import {Decoration} from '../painting/decoration'

export class DataTableThemeData extends N.DataTableThemeData {
  constructor(args?: {
    decoration?: Decoration
    dataRowColor?: any
    dataRowHeight?: number
    dataTextStyle?: TextStyle
    headingRowColor?: any
    headingRowHeight?: number
    headingTextStyle?: TextStyle
    horizontalMargin?: number
    columnSpacing?: number
    dividerThickness?: number
    checkboxHorizontalMargin?: number
  }) {
    super(
      args?.decoration,
      args?.dataRowColor,
      args?.dataRowHeight,
      args?.dataTextStyle,
      args?.headingRowColor,
      args?.headingRowHeight,
      args?.headingTextStyle,
      args?.horizontalMargin,
      args?.columnSpacing,
      args?.dividerThickness,
      args?.checkboxHorizontalMargin
    )
  }
}

// DataTableThemeData: function DataTableThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) {
//   var _ = this;
//   _.decoration = t0;
//   _.dataRowColor = t1;
//   _.dataRowHeight = t2;
//   _.dataTextStyle = t3;
//   _.headingRowColor = t4;
//   _.headingRowHeight = t5;
//   _.headingTextStyle = t6;
//   _.horizontalMargin = t7;
//   _.columnSpacing = t8;
//   _.dividerThickness = t9;
//   _.checkboxHorizontalMargin = t10;
// },
