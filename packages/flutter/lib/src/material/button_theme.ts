import {Color} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {ShapeBorder} from '../painting/borders'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {Widget} from '../widgets/framework'
import {ColorScheme} from './color_scheme'
import {MaterialTapTargetSize} from './theme_data'

export enum ButtonTextTheme {
  normal = C.ButtonTextTheme_0,
  accent = C.ButtonTextTheme_1,
  primary = C.ButtonTextTheme_2,
}

export enum ButtonBarLayoutBehavior {
  constrained = C.ButtonBarLayoutBehavior_0,
  padded = C.ButtonBarLayoutBehavior_1,
}

export class ButtonThemeData extends N.ButtonThemeData {
  constructor(args?: {
    textTheme?: ButtonTextTheme
    minWidth?: number
    height?: number
    padding?: EdgeInsetsGeometry
    shape?: ShapeBorder
    layoutBehavior?: ButtonBarLayoutBehavior
    alignedDropdown?: boolean
    buttonColor?: Color
    disabledColor?: Color
    focusColor?: Color
    hoverColor?: Color
    highlightColor?: Color
    splashColor?: Color
    colorScheme?: ColorScheme
    materialTapTargetSize?: MaterialTapTargetSize
  }) {
    super(
      args?.minWidth ?? 88,
      args?.height ?? 36,
      args?.textTheme ?? ButtonTextTheme.normal,
      args?.padding,
      args?.shape,
      args?.alignedDropdown ?? false,
      args?.buttonColor,
      args?.disabledColor,
      args?.focusColor,
      args?.hoverColor,
      args?.highlightColor,
      args?.splashColor,
      args?.colorScheme,
      args?.materialTapTargetSize
    )
  }
}

// ButtonThemeData: function ButtonThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) {
//   var _ = this;
//   _.minWidth = t0;
//   _.height = t1;
//   _.textTheme = t2;
//   _._padding = t3;
//   _._shape = t4;
//   _.alignedDropdown = t5;
//   _._buttonColor = t6;
//   _._disabledColor = t7;
//   _._focusColor = t8;
//   _._hoverColor = t9;
//   _._highlightColor = t10;
//   _._splashColor = t11;
//   _.colorScheme = t12;
//   _._materialTapTargetSize = t13;
// },

export class ButtonTheme extends N.ButtonTheme {
  constructor(args: {
    key?: Key
    textTheme?: ButtonTextTheme
    layoutBehavior?: ButtonBarLayoutBehavior
    minWidth?: number
    height?: number
    padding?: EdgeInsetsGeometry
    shape?: ShapeBorder
    alignedDropdown?: boolean
    buttonColor?: Color
    disabledColor?: Color
    focusColor?: Color
    hoverColor?: Color
    highlightColor?: Color
    splashColor?: Color
    colorScheme?: ColorScheme
    materialTapTargetSize?: MaterialTapTargetSize
    child: Widget
  }) {
    super(
      new ButtonThemeData({
        textTheme: args.textTheme ?? ButtonTextTheme.normal,
        layoutBehavior: args.layoutBehavior ?? ButtonBarLayoutBehavior.padded,
        minWidth: args.minWidth ?? 88.0,
        height: args.height ?? 36.0,
        padding: args.padding,
        shape: args.shape,
        alignedDropdown: args.alignedDropdown ?? false,
        buttonColor: args.buttonColor,
        disabledColor: args.disabledColor,
        focusColor: args.focusColor,
        hoverColor: args.hoverColor,
        highlightColor: args.highlightColor,
        splashColor: args.splashColor,
        colorScheme: args.colorScheme,
        materialTapTargetSize: args.materialTapTargetSize,
      }),
      args.child,
      args.key?.[octoKey]
    )
  }
}

// ButtonTheme: function ButtonTheme(t0, t1, t2) {
//   this.data0 = t0;
//   this.child = t1;
//   this.key0 = t2;
// },
