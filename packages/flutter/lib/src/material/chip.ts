import {Clip, Color, VoidCallback} from '@octoflutter/dartsdk'
import {ValueChanged} from '../foundation/basic_types'
import {Key, octoKey} from '../foundation/key'
import {BorderSide, OutlinedBorder, ShapeBorder} from '../painting/borders'
import {CircleBorder} from '../painting/circle_border'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'
import {Widget} from '../widgets/framework'
import {MaterialTapTargetSize, VisualDensity} from './theme_data'

export class Chip extends N.Chip {
  constructor(args: {
    key?: Key
    avatar?: Widget
    label: Widget
    labelStyle?: TextStyle
    labelPadding?: EdgeInsetsGeometry
    deleteIcon?: Widget
    onDeleted?: VoidCallback
    deleteIconColor?: Color
    useDeleteButtonTooltip?: boolean
    deleteButtonTooltipMessage?: string
    side?: BorderSide
    shape?: OutlinedBorder
    clipBehavior?: Clip
    focusNode?: any
    autofocus?: boolean
    backgroundColor?: Color
    padding?: EdgeInsetsGeometry
    visualDensity?: VisualDensity
    materialTapTargetSize?: MaterialTapTargetSize
    elevation?: number
    shadowColor?: Color
  }) {
    super(
      args.avatar,
      args.label,
      args.labelStyle,
      args.labelPadding,
      args.side,
      args.shape,
      args.clipBehavior ?? Clip.none,
      args.focusNode,
      args.autofocus ?? false,
      args.backgroundColor,
      args.padding,
      args.visualDensity,
      args.deleteIcon,
      args.onDeleted,
      args.deleteIconColor,
      args.useDeleteButtonTooltip ?? true,
      args.deleteButtonTooltipMessage,
      args.materialTapTargetSize,
      args.elevation,
      args.shadowColor,
      args.key?.[octoKey]
    )
  }
}

// Chip: function Chip(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20) {
//     var _ = this;
//     _.avatar = t0;
//     _.label = t1;
//     _.labelStyle = t2;
//     _.labelPadding = t3;
//     _.side = t4;
//     _.shape = t5;
//     _.clipBehavior = t6;
//     _.focusNode = t7;
//     _.autofocus = t8;
//     _.backgroundColor = t9;
//     _.padding = t10;
//     _.visualDensity = t11;
//     _.deleteIcon = t12;
//     _.onDeleted = t13;
//     _.deleteIconColor = t14;
//     _.useDeleteButtonTooltip = t15;
//     _.deleteButtonTooltipMessage = t16;
//     _.materialTapTargetSize = t17;
//     _.elevation = t18;
//     _.shadowColor = t19;
//     _.key0 = t20;
//   },

export class InputChip extends N.InputChip {
  constructor(args: {
    key?: Key
    avatar?: Widget
    label: Widget
    labelStyle?: TextStyle
    labelPadding?: EdgeInsetsGeometry
    selected?: boolean
    isEnabled?: boolean
    onSelected?: ValueChanged<boolean>
    deleteIcon?: Widget
    onDeleted?: VoidCallback
    deleteIconColor?: Color
    useDeleteButtonTooltip?: boolean
    deleteButtonTooltipMessage?: string
    onPressed?: VoidCallback
    pressElevation?: number
    disabledColor?: Color
    selectedColor?: Color
    tooltip?: string
    side?: BorderSide
    shape?: OutlinedBorder
    clipBehavior?: Clip
    focusNode?: any
    autofocus?: boolean
    backgroundColor?: Color
    padding?: EdgeInsetsGeometry
    visualDensity?: VisualDensity
    materialTapTargetSize?: MaterialTapTargetSize
    elevation?: number
    shadowColor?: Color
    selectedShadowColor?: Color
    showCheckmark?: boolean
    checkmarkColor?: Color
    avatarBorder?: ShapeBorder
  }) {
    super(
      args.avatar,
      args.label,
      args.labelStyle,
      args.labelPadding,
      args.selected ?? false,
      args.isEnabled ?? true,
      args.onSelected,
      args.deleteIcon,
      args.onDeleted,
      args.deleteIconColor,
      args.useDeleteButtonTooltip ?? true,
      args.deleteButtonTooltipMessage,
      args.onPressed,
      args.pressElevation,
      args.disabledColor,
      args.selectedColor,
      args.tooltip,
      args.side,
      args.shape,
      args.clipBehavior ?? Clip.none,
      args.focusNode,
      args.autofocus ?? false,
      args.backgroundColor,
      args.padding,
      args.visualDensity,
      args.materialTapTargetSize,
      args.elevation,
      args.shadowColor,
      args.selectedShadowColor,
      args.showCheckmark,
      args.checkmarkColor,
      args.avatarBorder ?? new CircleBorder(),
      args.key?.[octoKey]
    )
  }
}

// InputChip: function InputChip(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32) {
//     var _ = this;
//     _.avatar = t0;
//     _.label = t1;
//     _.labelStyle = t2;
//     _.labelPadding = t3;
//     _.selected = t4;
//     _.isEnabled = t5;
//     _.onSelected = t6;
//     _.deleteIcon = t7;
//     _.onDeleted = t8;
//     _.deleteIconColor = t9;
//     _.useDeleteButtonTooltip = t10;
//     _.deleteButtonTooltipMessage = t11;
//     _.onPressed = t12;
//     _.pressElevation = t13;
//     _.disabledColor = t14;
//     _.selectedColor = t15;
//     _.tooltip = t16;
//     _.side = t17;
//     _.shape = t18;
//     _.clipBehavior = t19;
//     _.focusNode = t20;
//     _.autofocus = t21;
//     _.backgroundColor = t22;
//     _.padding = t23;
//     _.visualDensity = t24;
//     _.materialTapTargetSize = t25;
//     _.elevation = t26;
//     _.shadowColor = t27;
//     _.selectedShadowColor = t28;
//     _.showCheckmark = t29;
//     _.checkmarkColor = t30;
//     _.avatarBorder = t31;
//     _.key0 = t32;
//   },

export class ChoiceChip extends N.ChoiceChip {
  constructor(args: {
    key?: Key
    avatar?: Widget
    label: Widget
    labelStyle?: TextStyle
    labelPadding?: EdgeInsetsGeometry
    onSelected?: ValueChanged<boolean>
    pressElevation?: number
    selected: boolean
    selectedColor?: Color
    disabledColor?: Color
    tooltip?: string
    side?: BorderSide
    shape?: OutlinedBorder
    clipBehavior?: Clip
    focusNode?: any
    autofocus?: boolean
    backgroundColor?: Color
    padding?: EdgeInsetsGeometry
    visualDensity?: VisualDensity
    materialTapTargetSize?: MaterialTapTargetSize
    elevation?: number
    shadowColor?: Color
    selectedShadowColor?: Color
    avatarBorder?: ShapeBorder
  }) {
    super(
      args.avatar,
      args.label,
      args.labelStyle,
      args.labelPadding,
      args.onSelected,
      args.pressElevation,
      args.selected,
      args.disabledColor,
      args.selectedColor,
      args.tooltip,
      args.side,
      args.shape,
      args.clipBehavior ?? Clip.none,
      args.focusNode,
      args.autofocus ?? false,
      args.backgroundColor,
      args.padding,
      args.visualDensity,
      args.materialTapTargetSize,
      args.elevation,
      args.shadowColor,
      args.selectedShadowColor,
      args.avatarBorder,
      args.key?.[octoKey]
    )
  }
}

// ChoiceChip: function ChoiceChip(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23) {
//     var _ = this;
//     _.avatar = t0;
//     _.label = t1;
//     _.labelStyle = t2;
//     _.labelPadding = t3;
//     _.onSelected = t4;
//     _.pressElevation = t5;
//     _.selected = t6;
//     _.disabledColor = t7;
//     _.selectedColor = t8;
//     _.tooltip = t9;
//     _.side = t10;
//     _.shape = t11;
//     _.clipBehavior = t12;
//     _.focusNode = t13;
//     _.autofocus = t14;
//     _.backgroundColor = t15;
//     _.padding = t16;
//     _.visualDensity = t17;
//     _.materialTapTargetSize = t18;
//     _.elevation = t19;
//     _.shadowColor = t20;
//     _.selectedShadowColor = t21;
//     _.avatarBorder = t22;
//     _.key0 = t23;
//   },

export class FilterChip extends N.FilterChip {
  constructor(args: {
    key?: Key
    avatar?: Widget
    label: Widget
    labelStyle?: TextStyle
    labelPadding?: EdgeInsetsGeometry
    selected?: boolean
    onSelected: ValueChanged<boolean>
    pressElevation?: number
    disabledColor?: Color
    selectedColor?: Color
    tooltip?: string
    side?: BorderSide
    shape?: OutlinedBorder
    clipBehavior?: Clip
    focusNode?: any
    autofocus?: boolean
    backgroundColor?: Color
    padding?: EdgeInsetsGeometry
    visualDensity?: VisualDensity
    materialTapTargetSize?: MaterialTapTargetSize
    elevation?: number
    shadowColor?: Color
    selectedShadowColor?: Color
    showCheckmark?: boolean
    checkmarkColor?: Color
    avatarBorder?: ShapeBorder
  }) {
    super(
      args.avatar,
      args.label,
      args.labelStyle,
      args.labelPadding,
      args.selected ?? false,
      args.onSelected,
      args.pressElevation,
      args.disabledColor,
      args.selectedColor,
      args.tooltip,
      args.side,
      args.shape,
      args.clipBehavior ?? Clip.none,
      args.focusNode,
      args.autofocus ?? false,
      args.backgroundColor,
      args.padding,
      args.visualDensity,
      args.materialTapTargetSize,
      args.elevation,
      args.shadowColor,
      args.selectedShadowColor,
      args.showCheckmark,
      args.checkmarkColor,
      args.avatarBorder,
      args.key?.[octoKey]
    )
  }
}

// FilterChip: function FilterChip(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25) {
//     var _ = this;
//     _.avatar = t0;
//     _.label = t1;
//     _.labelStyle = t2;
//     _.labelPadding = t3;
//     _.selected = t4;
//     _.onSelected = t5;
//     _.pressElevation = t6;
//     _.disabledColor = t7;
//     _.selectedColor = t8;
//     _.tooltip = t9;
//     _.side = t10;
//     _.shape = t11;
//     _.clipBehavior = t12;
//     _.focusNode = t13;
//     _.autofocus = t14;
//     _.backgroundColor = t15;
//     _.padding = t16;
//     _.visualDensity = t17;
//     _.materialTapTargetSize = t18;
//     _.elevation = t19;
//     _.shadowColor = t20;
//     _.selectedShadowColor = t21;
//     _.showCheckmark = t22;
//     _.checkmarkColor = t23;
//     _.avatarBorder = t24;
//     _.key0 = t25;
//   },

export class ActionChip extends N.ActionChip {
  constructor(args: {
    key?: Key
    avatar?: Widget
    label: Widget
    labelStyle?: TextStyle
    labelPadding?: EdgeInsetsGeometry
    onPressed: VoidCallback
    pressElevation?: number
    tooltip?: string
    side?: BorderSide
    shape?: OutlinedBorder
    clipBehavior?: Clip
    focusNode?: any
    autofocus?: boolean
    backgroundColor?: Color
    padding?: EdgeInsetsGeometry
    visualDensity?: VisualDensity
    materialTapTargetSize?: MaterialTapTargetSize
    elevation?: number
    shadowColor?: Color
  }) {
    super(
      args.avatar,
      args.label,
      args.labelStyle,
      args.labelPadding,
      args.onPressed,
      args.pressElevation,
      args.tooltip,
      args.side,
      args.shape,
      args.clipBehavior ?? Clip.none,
      args.focusNode,
      args.autofocus ?? false,
      args.backgroundColor,
      args.padding,
      args.visualDensity,
      args.materialTapTargetSize,
      args.elevation,
      args.shadowColor,
      args.key?.[octoKey]
    )
  }
}

// ActionChip: function ActionChip(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
//     var _ = this;
//     _.avatar = t0;
//     _.label = t1;
//     _.labelStyle = t2;
//     _.labelPadding = t3;
//     _.onPressed = t4;
//     _.pressElevation = t5;
//     _.tooltip = t6;
//     _.side = t7;
//     _.shape = t8;
//     _.clipBehavior = t9;
//     _.focusNode = t10;
//     _.autofocus = t11;
//     _.backgroundColor = t12;
//     _.padding = t13;
//     _.visualDensity = t14;
//     _.materialTapTargetSize = t15;
//     _.elevation = t16;
//     _.shadowColor = t17;
//     _.key0 = t18;
//   },

export class RawChip extends N.RawChip {
  constructor(args: {
    key?: Key
    avatar?: Widget
    label: Widget
    labelStyle?: TextStyle
    padding?: EdgeInsetsGeometry
    visualDensity?: VisualDensity
    labelPadding?: EdgeInsetsGeometry
    deleteIcon?: Widget
    onDeleted?: VoidCallback
    deleteIconColor?: Color
    useDeleteButtonTooltip?: boolean
    deleteButtonTooltipMessage?: string
    onPressed?: VoidCallback
    onSelected?: ValueChanged<boolean>
    pressElevation?: number
    tapEnabled?: boolean
    selected?: boolean
    isEnabled?: boolean
    disabledColor?: Color
    selectedColor?: Color
    tooltip?: string
    side?: BorderSide
    shape?: OutlinedBorder
    clipBehavior?: Clip
    focusNode?: any
    autofocus?: boolean
    backgroundColor?: Color
    materialTapTargetSize?: MaterialTapTargetSize
    elevation?: number
    shadowColor?: Color
    selectedShadowColor?: Color
    showCheckmark?: boolean
    checkmarkColor?: Color
    avatarBorder?: ShapeBorder
  }) {
    super(
      args.avatar,
      args.label,
      args.labelStyle,
      args.labelPadding,
      args.deleteIcon,
      args.onDeleted,
      args.deleteIconColor,
      args.useDeleteButtonTooltip ?? true,
      args.deleteButtonTooltipMessage,
      args.onSelected,
      args.onPressed,
      args.pressElevation,
      args.selected ?? false,
      args.isEnabled ?? true,
      args.disabledColor,
      args.selectedColor,
      args.tooltip,
      args.side,
      args.shape,
      args.clipBehavior ?? Clip.none,
      args.focusNode,
      args.autofocus ?? false,
      args.backgroundColor,
      args.padding,
      args.visualDensity,
      args.materialTapTargetSize,
      args.elevation,
      args.shadowColor,
      args.selectedShadowColor,
      args.showCheckmark,
      args.checkmarkColor,
      args.avatarBorder ?? new CircleBorder(),
      args.tapEnabled,
      args.key?.[octoKey]
    )
  }
}

// RawChip: function RawChip(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33) {
//     var _ = this;
//     _.avatar = t0;
//     _.label = t1;
//     _.labelStyle = t2;
//     _.labelPadding = t3;
//     _.deleteIcon = t4;
//     _.onDeleted = t5;
//     _.deleteIconColor = t6;
//     _.useDeleteButtonTooltip = t7;
//     _.deleteButtonTooltipMessage = t8;
//     _.onSelected = t9;
//     _.onPressed = t10;
//     _.pressElevation = t11;
//     _.selected = t12;
//     _.isEnabled = t13;
//     _.disabledColor = t14;
//     _.selectedColor = t15;
//     _.tooltip = t16;
//     _.side = t17;
//     _.shape = t18;
//     _.clipBehavior = t19;
//     _.focusNode = t20;
//     _.autofocus = t21;
//     _.backgroundColor = t22;
//     _.padding = t23;
//     _.visualDensity = t24;
//     _.materialTapTargetSize = t25;
//     _.elevation = t26;
//     _.shadowColor = t27;
//     _.selectedShadowColor = t28;
//     _.showCheckmark = t29;
//     _.checkmarkColor = t30;
//     _.avatarBorder = t31;
//     _.tapEnabled = t32;
//     _.key0 = t33;
//   },
