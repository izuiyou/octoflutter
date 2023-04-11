import {
  BoxHeightStyle,
  BoxWidthStyle,
  Color,
  isNullOrUndefined,
  Radius,
  TextAlign,
  TextDirection,
  TextHeightBehavior,
} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {DragStartBehavior} from '../gestures/recognizer'
import {GestureTapCallback} from '../gestures/tap'
import {StrutStyle} from '../painting/strut_style'
import {TextWidthBasis} from '../painting/text_painter'
import {TextSpan} from '../painting/text_span'
import {TextStyle} from '../painting/text_style'
import {TextSelection} from '../services/text_editing'
import {
  SelectionChangedCallback,
  ToolbarOptions,
} from '../widgets/editable_text'
import {ScrollPhysics} from '../widgets/scroll_physics'

export class SelectableText extends N.SelectableText {
  constructor(
    data: string,
    args: {
      key?: Key
      focusNode?: any
      style?: TextStyle
      strutStyle?: StrutStyle
      textAlign?: TextAlign
      textDirection?: TextDirection
      textScaleFactor?: number
      showCursor?: boolean
      autofocus?: boolean
      toolbarOptions?: ToolbarOptions
      minLines?: number
      maxLines?: number
      cursorWidth?: number
      cursorHeight?: number
      cursorRadius?: Radius
      cursorColor?: Color
      selectionHeightStyle?: BoxHeightStyle
      selectionWidthStyle?: BoxWidthStyle
      dragStartBehavior?: DragStartBehavior
      enableInteractiveSelection?: boolean
      selectionControls?: any
      onTap?: GestureTapCallback
      scrollPhysics?: ScrollPhysics
      semanticsLabel?: string
      textHeightBehavior?: TextHeightBehavior
      textWidthBasis?: TextWidthBasis
      onSelectionChanged?: SelectionChangedCallback
      textSpan?: TextSpan
    }
  ) {
    let cb = null
    if (!isNullOrUndefined(args.onSelectionChanged)) {
      cb = N.octoSelectionChangedCallback((list, cause) => {
        return args.onSelectionChanged?.(
          new TextSelection({
            baseOffset: list[0],
            extentOffset: list[1],
            affinity: list[2],
            isDirectional: list[3],
          }),
          cause
        )
      })
    }

    super(
      data,
      args.textSpan,
      args.focusNode,
      args.style,
      args.strutStyle,
      args.textAlign,
      args.textDirection,
      args.textScaleFactor,
      args.autofocus ?? false,
      args.minLines,
      args.maxLines,
      args.showCursor ?? false,
      args.cursorWidth ?? 2.0,
      args.cursorHeight,
      args.cursorRadius,
      args.cursorColor,
      args.selectionHeightStyle ?? BoxHeightStyle.tight,
      args.selectionWidthStyle ?? BoxWidthStyle.tight,
      args.enableInteractiveSelection ?? true,
      args.selectionControls,
      args.dragStartBehavior ?? DragStartBehavior.start,
      args.toolbarOptions ?? new ToolbarOptions({selectAll: true, copy: true}),
      args.onTap,
      args.scrollPhysics,
      args.semanticsLabel,
      args.textHeightBehavior,
      args.textWidthBasis,
      cb,
      args.key?.[octoKey]
    )
  }

  static rich(
    text: TextSpan,
    args: {
      key?: Key
      focusNode?: any
      style?: TextStyle
      strutStyle?: StrutStyle
      textAlign?: TextAlign
      textDirection?: TextDirection
      textScaleFactor?: number
      showCursor?: boolean
      autofocus?: boolean
      toolbarOptions?: ToolbarOptions
      minLines?: number
      maxLines?: number
      cursorWidth?: number
      cursorHeight?: number
      cursorRadius?: Radius
      cursorColor?: Color
      selectionHeightStyle?: BoxHeightStyle
      selectionWidthStyle?: BoxWidthStyle
      dragStartBehavior?: DragStartBehavior
      enableInteractiveSelection?: boolean
      selectionControls?: any
      onTap?: GestureTapCallback
      scrollPhysics?: ScrollPhysics
      semanticsLabel?: string
      textHeightBehavior?: TextHeightBehavior
      textWidthBasis?: TextWidthBasis
      onSelectionChanged?: SelectionChangedCallback
    }
  ): SelectableText {
    return new SelectableText(null, {
      key: args.key,
      focusNode: args.focusNode,
      style: args.style,
      strutStyle: args.strutStyle,
      textAlign: args.textAlign,
      textDirection: args.textDirection,
      textScaleFactor: args.textScaleFactor,
      showCursor: args.showCursor,
      autofocus: args.autofocus,
      toolbarOptions: args.toolbarOptions,
      minLines: args.minLines,
      maxLines: args.maxLines,
      cursorWidth: args.cursorWidth,
      cursorHeight: args.cursorHeight,
      cursorRadius: args.cursorRadius,
      cursorColor: args.cursorColor,
      selectionHeightStyle: args.selectionHeightStyle,
      selectionWidthStyle: args.selectionWidthStyle,
      dragStartBehavior: args.dragStartBehavior,
      enableInteractiveSelection: args.enableInteractiveSelection,
      selectionControls: args.selectionControls,
      onTap: args.onTap,
      scrollPhysics: args.scrollPhysics,
      semanticsLabel: args.semanticsLabel,
      textHeightBehavior: args.textHeightBehavior,
      textWidthBasis: args.textWidthBasis,
      onSelectionChanged: args.onSelectionChanged,
      textSpan: text,
    })
  }
}

// SelectableText: function SelectableText(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28) {
//   var _ = this;
//   _.data0 = t0;
//   _.textSpan = t1;
//   _.focusNode = t2;
//   _.style = t3;
//   _.strutStyle = t4;
//   _.textAlign = t5;
//   _.textDirection = t6;
//   _.textScaleFactor = t7;
//   _.autofocus = t8;
//   _.minLines = t9;
//   _.maxLines = t10;
//   _.showCursor = t11;
//   _.cursorWidth = t12;
//   _.cursorHeight = t13;
//   _.cursorRadius = t14;
//   _.cursorColor = t15;
//   _.selectionHeightStyle = t16;
//   _.selectionWidthStyle = t17;
//   _.enableInteractiveSelection = t18;
//   _.selectionControls = t19;
//   _.dragStartBehavior = t20;
//   _.toolbarOptions = t21;
//   _.onTap = t22;
//   _.scrollPhysics = t23;
//   _.semanticsLabel = t24;
//   _.textHeightBehavior = t25;
//   _.textWidthBasis = t26;
//   _.onSelectionChanged = t27;
//   _.key0 = t28;
// },
