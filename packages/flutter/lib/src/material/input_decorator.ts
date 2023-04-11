import {Color, TextDirection} from '@octoflutter/dartsdk'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'
import {BoxConstraints} from '../rendering/box'
import {Widget} from '../widgets/framework'
import {InputBorder} from './input_border'

export enum FloatingLabelBehavior {
  never = C.FloatingLabelBehavior_0,
  auto = C.FloatingLabelBehavior_1,
  always = C.FloatingLabelBehavior_2,
}

export class InputDecoration extends N.InputDecoration {
  constructor(args?: {
    icon?: Widget
    iconColor?: Color
    label?: Widget
    labelText?: string
    labelStyle?: TextStyle
    floatingLabelStyle?: TextStyle
    helperText?: string
    helperStyle?: TextStyle
    helperMaxLines?: number
    hintText?: string
    hintStyle?: TextStyle
    hintTextDirection?: TextDirection
    hintMaxLines?: number
    errorText?: string
    errorStyle?: TextStyle
    errorMaxLines?: number
    floatingLabelBehavior?: FloatingLabelBehavior
    floatingLabelAlignment?: any
    isCollapsed?: boolean
    isDense?: boolean
    contentPadding?: EdgeInsetsGeometry
    prefixIcon?: Widget
    prefixIconConstraints?: BoxConstraints
    prefix?: Widget
    prefixText?: string
    prefixStyle?: TextStyle
    prefixIconColor?: Color
    suffixIcon?: Widget
    suffix?: Widget
    suffixText?: string
    suffixStyle?: TextStyle
    suffixIconColor?: Color
    suffixIconConstraints?: BoxConstraints
    counter?: Widget
    counterText?: string
    counterStyle?: TextStyle
    filled?: boolean
    fillColor?: Color
    focusColor?: Color
    hoverColor?: Color
    errorBorder?: InputBorder
    focusedBorder?: InputBorder
    focusedErrorBorder?: InputBorder
    disabledBorder?: InputBorder
    enabledBorder?: InputBorder
    border?: InputBorder
    enabled?: boolean
    semanticCounterText?: string
    alignLabelWithHint?: boolean
    constraints?: BoxConstraints
  }) {
    super(
      args?.icon,
      args?.iconColor,
      args?.label,
      args?.labelText,
      args?.labelStyle,
      args?.floatingLabelStyle,
      args?.helperText,
      args?.helperStyle,
      args?.helperMaxLines,
      args?.hintText,
      args?.hintStyle,
      args?.hintTextDirection,
      args?.hintMaxLines,
      args?.errorText,
      args?.errorStyle,
      args?.errorMaxLines,
      args?.floatingLabelBehavior,
      args?.floatingLabelAlignment,
      args?.isDense,
      args?.contentPadding,
      args?.isCollapsed ?? false,
      args?.prefixIcon,
      args?.prefixIconConstraints,
      args?.prefix,
      args?.prefixText,
      args?.prefixStyle,
      args?.prefixIconColor,
      args?.suffixIcon,
      args?.suffix,
      args?.suffixText,
      args?.suffixStyle,
      args?.suffixIconColor,
      args?.suffixIconConstraints,
      args?.counterText,
      args?.counter,
      args?.counterStyle,
      args?.filled,
      args?.fillColor,
      args?.focusColor,
      args?.hoverColor,
      args?.errorBorder,
      args?.focusedBorder,
      args?.focusedErrorBorder,
      args?.disabledBorder,
      args?.enabledBorder,
      args?.border,
      args?.enabled ?? true,
      args?.semanticCounterText,
      args?.alignLabelWithHint,
      args?.constraints
    )
  }
}

// InputDecoration: function InputDecoration(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49) {
//   var _ = this;
//   _.icon = t0;
//   _.iconColor = t1;
//   _.label = t2;
//   _.labelText = t3;
//   _.labelStyle = t4;
//   _.floatingLabelStyle = t5;
//   _.helperText = t6;
//   _.helperStyle = t7;
//   _.helperMaxLines = t8;
//   _.hintText = t9;
//   _.hintStyle = t10;
//   _.hintTextDirection = t11;
//   _.hintMaxLines = t12;
//   _.errorText = t13;
//   _.errorStyle = t14;
//   _.errorMaxLines = t15;
//   _.floatingLabelBehavior = t16;
//   _.floatingLabelAlignment = t17;
//   _.isDense = t18;
//   _.contentPadding = t19;
//   _.isCollapsed = t20;
//   _.prefixIcon = t21;
//   _.prefixIconConstraints = t22;
//   _.prefix = t23;
//   _.prefixText = t24;
//   _.prefixStyle = t25;
//   _.prefixIconColor = t26;
//   _.suffixIcon = t27;
//   _.suffix = t28;
//   _.suffixText = t29;
//   _.suffixStyle = t30;
//   _.suffixIconColor = t31;
//   _.suffixIconConstraints = t32;
//   _.counterText = t33;
//   _.counter = t34;
//   _.counterStyle = t35;
//   _.filled = t36;
//   _.fillColor = t37;
//   _.focusColor = t38;
//   _.hoverColor = t39;
//   _.errorBorder = t40;
//   _.focusedBorder = t41;
//   _.focusedErrorBorder = t42;
//   _.disabledBorder = t43;
//   _.enabledBorder = t44;
//   _.border = t45;
//   _.enabled = t46;
//   _.semanticCounterText = t47;
//   _.alignLabelWithHint = t48;
//   _.constraints = t49;
// },

export class InputDecorationTheme extends N.InputDecorationTheme {
  constructor(args?: {
    labelStyle?: TextStyle
    helperStyle?: TextStyle
    helperMaxLines?: number
    hintStyle?: TextStyle
    errorStyle?: TextStyle
    errorMaxLines?: number
    floatingLabelBehavior?: FloatingLabelBehavior
    isDense?: boolean
    contentPadding?: EdgeInsetsGeometry
    isCollapsed?: boolean
    prefixStyle?: TextStyle
    suffixStyle?: TextStyle
    counterStyle?: TextStyle
    filled?: boolean
    fillColor?: Color
    focusColor?: Color
    hoverColor?: Color
    errorBorder?: InputBorder
    focusedBorder?: InputBorder
    focusedErrorBorder?: InputBorder
    disabledBorder?: InputBorder
    enabledBorder?: InputBorder
    border?: InputBorder
    alignLabelWithHint?: boolean
  }) {
    super(
      args?.labelStyle,
      args?.helperStyle,
      args?.helperMaxLines,
      args?.hintStyle,
      args?.errorStyle,
      args?.errorMaxLines,
      args?.floatingLabelBehavior ?? FloatingLabelBehavior.auto,
      args?.isDense ?? false,
      args?.contentPadding,
      args?.isCollapsed ?? false,
      args?.prefixStyle,
      args?.suffixStyle,
      args?.counterStyle,
      args?.filled ?? false,
      args?.fillColor,
      args?.focusColor,
      args?.hoverColor,
      args?.errorBorder,
      args?.focusedBorder,
      args?.focusedErrorBorder,
      args?.disabledBorder,
      args?.enabledBorder,
      args?.border,
      args?.alignLabelWithHint ?? false
    )
  }
}

// InputDecorationTheme: function InputDecorationTheme(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23) {
//   var _ = this;
//   _.labelStyle = t0;
//   _.helperStyle = t1;
//   _.helperMaxLines = t2;
//   _.hintStyle = t3;
//   _.errorStyle = t4;
//   _.errorMaxLines = t5;
//   _.floatingLabelBehavior = t6;
//   _.isDense = t7;
//   _.contentPadding = t8;
//   _.isCollapsed = t9;
//   _.prefixStyle = t10;
//   _.suffixStyle = t11;
//   _.counterStyle = t12;
//   _.filled = t13;
//   _.fillColor = t14;
//   _.focusColor = t15;
//   _.hoverColor = t16;
//   _.errorBorder = t17;
//   _.focusedBorder = t18;
//   _.focusedErrorBorder = t19;
//   _.disabledBorder = t20;
//   _.enabledBorder = t21;
//   _.border = t22;
//   _.alignLabelWithHint = t23;
// },
