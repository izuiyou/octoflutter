import {
  BoxHeightStyle,
  BoxWidthStyle,
  Brightness,
  Clip,
  Color,
  Radius,
  TextAlign,
  TextDirection,
  VoidCallback,
  isNullOrUndefined,
} from '@octoflutter/dartsdk'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {DragStartBehavior} from '../gestures/recognizer'
import {EdgeInsets, EdgeInsetsGeometry} from '../painting/edge_insets'
import {StrutStyle} from '../painting/strut_style'
import {TextStyle} from '../painting/text_style'
import {
  SmartDashesType,
  SmartQuotesType,
  TextCapitalization,
  TextInputAction,
  TextInputType,
} from '../services/text_input'
import {
  textEditingController,
  TextEditingController,
  ToolbarOptions,
} from '../widgets/editable_text'
import {InputDecoration} from './input_decorator'

export class TextField extends N.TextField {
  constructor(args?: {
    key?: Key
    controller?: TextEditingController
    focusNode?: any
    decoration?: InputDecoration
    keyboardType?: TextInputType
    textInputAction?: TextInputAction
    textCapitalization?: TextCapitalization
    style?: TextStyle
    strutStyle?: StrutStyle
    textAlign?: TextAlign
    textAlignVertical?: any
    textDirection?: TextDirection
    readOnly?: boolean
    toolbarOptions?: ToolbarOptions
    showCursor?: boolean
    autofocus?: boolean
    obscuringCharacter?: string
    obscureText?: boolean
    autocorrect?: boolean
    smartDashesType?: SmartDashesType
    smartQuotesType?: SmartQuotesType
    enableSuggestions?: boolean
    maxLines?: number
    minLines?: number
    expands?: boolean
    maxLength?: number
    maxLengthEnforcement?: any
    onChanged?: ValueChanged<string>
    onEditingComplete?: VoidCallback
    onSubmitted?: ValueChanged<string>
    onAppPrivateCommand?: any
    inputFormatters?: any
    enabled?: boolean
    cursorWidth?: number
    cursorHeight?: number
    cursorRadius?: Radius
    cursorColor?: Color
    selectionHeightStyle?: BoxHeightStyle
    selectionWidthStyle?: BoxWidthStyle
    keyboardAppearance?: Brightness
    scrollPadding?: EdgeInsetsGeometry
    dragStartBehavior?: DragStartBehavior
    enableInteractiveSelection?: boolean
    selectionControls?: any
    onTap?: VoidCallback
    mouseCursor?: any
    buildCounter?: any
    scrollController?: any
    scrollPhysics?: any
    autofillHints?: any
    clipBehavior?: Clip
    restorationId?: string
    enableIMEPersonalizedLearning?: boolean
  }) {
    const smartDashesType =
      args?.smartDashesType ??
      (args?.obscureText ?? false
        ? SmartDashesType.disabled
        : SmartDashesType.enabled)

    const smartQuotesType =
      args?.smartQuotesType ??
      (args?.obscureText ?? false
        ? SmartQuotesType.disabled
        : SmartQuotesType.enabled)

    const keyboardType =
      args?.keyboardType ??
      (args?.maxLines == 1 || isNullOrUndefined(args?.maxLines)
        ? TextInputType.text
        : TextInputType.multiline)

    const toolbarOptions =
      args?.toolbarOptions ??
      (args?.obscureText
        ? new ToolbarOptions({
            selectAll: true,
            paste: true,
          })
        : new ToolbarOptions({
            copy: true,
            cut: true,
            selectAll: true,
            paste: true,
          }))
    super(
      args?.controller?.[textEditingController],
      args?.focusNode,
      args?.decoration ?? new InputDecoration(),
      keyboardType,
      args?.textInputAction,
      args?.textCapitalization ?? TextCapitalization.none,
      args?.style,
      args?.strutStyle,
      args?.textAlign ?? TextAlign.start,
      args?.textAlignVertical,
      args?.textDirection,
      args?.autofocus ?? false,
      args?.obscuringCharacter ?? '•',
      args?.obscureText ?? false,
      args?.autocorrect ?? true,
      smartDashesType,
      smartQuotesType,
      args?.enableSuggestions ?? true,
      args?.maxLines ?? 1,
      args?.minLines,
      args?.expands ?? false,
      args?.readOnly ?? false,
      toolbarOptions,
      args?.showCursor,
      args?.maxLength,
      args?.maxLengthEnforcement,
      args?.onChanged,
      args?.onEditingComplete,
      args?.onSubmitted,
      args?.onAppPrivateCommand,
      args?.inputFormatters,
      args?.enabled,
      args?.cursorWidth ?? 2.0,
      args?.cursorHeight,
      args?.cursorRadius,
      args?.cursorColor,
      args?.selectionHeightStyle ?? BoxHeightStyle.tight,
      args?.selectionWidthStyle ?? BoxWidthStyle.tight,
      args?.keyboardAppearance,
      args?.scrollPadding ?? EdgeInsets.all(20),
      args?.enableInteractiveSelection ?? true,
      args?.selectionControls,
      args?.dragStartBehavior ?? DragStartBehavior.start,
      args?.onTap,
      args?.mouseCursor,
      args?.buildCounter,
      args?.scrollPhysics,
      args?.scrollController,
      args?.autofillHints,
      args?.clipBehavior ?? Clip.hardEdge,
      args?.restorationId,
      args?.enableIMEPersonalizedLearning ?? true,
      args?.key?.[octoKey]
    )
  }
}

// TextField: function TextField(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52) {
//   var _ = this;
//   _.controller = t0;
//   _.focusNode = t1;
//   _.decoration = t2;
//   _.keyboardType = t3;
//   _.textInputAction = t4;
//   _.textCapitalization = t5;
//   _.style = t6;
//   _.strutStyle = t7;
//   _.textAlign = t8;
//   _.textAlignVertical = t9;
//   _.textDirection = t10;
//   _.autofocus = t11;
//   _.obscuringCharacter = t12;
//   _.obscureText = t13;
//   _.autocorrect = t14;
//   _.smartDashesType = t15;
//   _.smartQuotesType = t16;
//   _.enableSuggestions = t17;
//   _.maxLines = t18;
//   _.minLines = t19;
//   _.expands = t20;
//   _.readOnly = t21;
//   _.toolbarOptions = t22;
//   _.showCursor = t23;
//   _.maxLength = t24;
//   _.maxLengthEnforcement = t25;
//   _.onChanged = t26;
//   _.onEditingComplete = t27;
//   _.onSubmitted = t28;
//   _.onAppPrivateCommand = t29;
//   _.inputFormatters = t30;
//   _.enabled = t31;
//   _.cursorWidth = t32;
//   _.cursorHeight = t33;
//   _.cursorRadius = t34;
//   _.cursorColor = t35;
//   _.selectionHeightStyle = t36;
//   _.selectionWidthStyle = t37;
//   _.keyboardAppearance = t38;
//   _.scrollPadding = t39;
//   _.enableInteractiveSelection = t40;
//   _.selectionControls = t41;
//   _.dragStartBehavior = t42;
//   _.onTap = t43;
//   _.mouseCursor = t44;
//   _.buildCounter = t45;
//   _.scrollPhysics = t46;
//   _.scrollController = t47;
//   _.autofillHints = t48;
//   _.clipBehavior = t49;
//   _.restorationId = t50;
//   _.enableIMEPersonalizedLearning = t51;
//   _.key0 = t52;
// },
