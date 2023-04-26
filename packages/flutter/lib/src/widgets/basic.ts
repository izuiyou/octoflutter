import {
  BlendMode,
  Clip,
  Color,
  FilterQuality,
  ImageFilter,
  Locale,
  Matrix4,
  Offset,
  Path,
  RRect,
  Rect,
  Shader,
  Size,
  TextAlign,
  TextBaseline,
  TextDirection,
  TextHeightBehavior,
} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {Colors} from '../material/colors'
import {Alignment, AlignmentDirectional} from '../painting/alignment'
import {Axis, VerticalDirection} from '../painting/basic_types'
import {BorderRadius} from '../painting/border_radius'
import {BoxShape} from '../painting/box_border'
import {BoxFit} from '../painting/box_fit'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {InlineSpan} from '../painting/inline_span'
import {StrutStyle} from '../painting/strut_style'
import {TextWidthBasis} from '../painting/text_painter'
import {BoxConstraints} from '../rendering/box'
import {CustomPainter} from '../rendering/custom_paint'
import {
  CrossAxisAlignment,
  FlexFit,
  MainAxisAlignment,
  MainAxisSize,
} from '../rendering/flex'
import {TextOverflow} from '../rendering/paragraph'
import {CustomClipper} from '../rendering/proxy_box'
import {StackFit} from '../rendering/stack'
import {WrapAlignment, WrapCrossAlignment} from '../rendering/wrap'
import {BuildContext, Widget, WidgetBuilder} from './framework'

export class Opacity extends N.Opacity {
  constructor(args: {
    key?: Key
    opacity: number
    alwaysIncludeSemantics?: boolean
    child?: Widget
  }) {
    super(
      args.opacity,
      args.alwaysIncludeSemantics ?? false,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// Opacity: function Opacity(t0, t1, t2, t3) {
//   var _ = this;
//   _.opacity = t0;
//   _.alwaysIncludeSemantics = t1;
//   _.child = t2;
//   _.key = t3;
// }

export class Directionality extends N.Directionality {
  constructor(args: {key?: Key; textDirection: TextDirection; child?: Widget}) {
    super(args.textDirection, args.child, args.key?.[octoKey])
  }
}

// Directionality: function Directionality(t0, t1, t2) {
//   this.textDirection = t0;
//   this.child = t1;
//   this.key = t2;
// },

type ShaderCallback = (bounds: Rect) => Shader

export class ShaderMask extends N.ShaderMask {
  constructor(args: {
    key?: Key
    shaderCallback: ShaderCallback
    blendMode?: BlendMode
    child?: Widget
  }) {
    super(
      args.shaderCallback,
      args.blendMode ?? BlendMode.modulate,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// ShaderMask: function ShaderMask(t0, t1, t2, t3) {
//   var _ = this;
//   _.shaderCallback = t0;
//   _.blendMode = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class BackdropFilter extends N.BackdropFilter {
  constructor(args: {
    key?: Key
    filter: ImageFilter
    child?: Widget
    blendMode?: BlendMode
  }) {
    super(
      args.filter,
      args.blendMode ?? BlendMode.srcOver,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// BackdropFilter: function BackdropFilter(t0, t1, t2, t3) {
//   var _ = this;
//   _.filter = t0;
//   _.blendMode = t1;
//   _.child = t2;
//   _.key0 = t3;
// },

export class Align extends N.Align {
  constructor(args?: {
    key?: Key
    alignment?: Alignment
    widthFactor?: number
    heightFactor?: number
    child?: Widget
  }) {
    const alignment = args?.alignment ?? Alignment.center
    super(
      alignment,
      args?.widthFactor,
      args?.heightFactor,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}
// Align: function Align(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.alignment = t0;
//   _.widthFactor = t1;
//   _.heightFactor = t2;
//   _.child = t3;
//   _.key = t4;
// },

export class Row extends N.Row {
  constructor(args?: {
    key?: Key
    mainAxisAlignment?: MainAxisAlignment
    mainAxisSize?: MainAxisSize
    crossAxisAlignment?: CrossAxisAlignment
    textDirection?: TextDirection
    verticalDirection?: VerticalDirection
    textBaseline?: TextBaseline
    children?: Array<Widget>
  }) {
    super(
      Axis.horizontal,
      args?.mainAxisAlignment ?? MainAxisAlignment.start,
      args?.mainAxisSize ?? MainAxisSize.max,
      args?.crossAxisAlignment ?? CrossAxisAlignment.center,
      args?.textDirection,
      args?.verticalDirection ?? VerticalDirection.down,
      args?.textBaseline ?? TextBaseline.alphabetic,
      Clip.none,
      args?.children ?? [],
      args?.key?.[octoKey]
    )
  }
}

// Row: function Row(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//   var _ = this;
//   _.direction = t0;
//   _.mainAxisAlignment = t1;
//   _.mainAxisSize = t2;
//   _.crossAxisAlignment = t3;
//   _.textDirection = t4;
//   _.verticalDirection = t5;
//   _.textBaseline = t6;
//   _.clipBehavior = t7;
//   _.children = t8;
//   _.key = t9;
// },

export class Column extends N.Column {
  constructor(args?: {
    key?: Key
    mainAxisAlignment?: MainAxisAlignment
    mainAxisSize?: MainAxisSize
    crossAxisAlignment?: CrossAxisAlignment
    textDirection?: TextDirection
    verticalDirection?: VerticalDirection
    textBaseline?: TextBaseline
    children?: Array<Widget>
  }) {
    super(
      Axis.vertical,
      args?.mainAxisAlignment ?? MainAxisAlignment.start,
      args?.mainAxisSize ?? MainAxisSize.max,
      args?.crossAxisAlignment ?? CrossAxisAlignment.center,
      args?.textDirection,
      args?.verticalDirection ?? VerticalDirection.down,
      args?.textBaseline ?? TextBaseline.alphabetic,
      Clip.none,
      args?.children ?? [],
      args?.key?.[octoKey]
    )
  }
}

// Column: function Column(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//   var _ = this;
//   _.direction = t0;
//   _.mainAxisAlignment = t1;
//   _.mainAxisSize = t2;
//   _.crossAxisAlignment = t3;
//   _.textDirection = t4;
//   _.verticalDirection = t5;
//   _.textBaseline = t6;
//   _.clipBehavior = t7;
//   _.children = t8;
//   _.key = t9;
// },

export class Flex extends N.Flex {
  constructor(args: {
    key?: Key
    direction: Axis
    mainAxisAlignment?: MainAxisAlignment
    mainAxisSize?: MainAxisSize
    crossAxisAlignment?: CrossAxisAlignment
    textDirection?: TextDirection
    verticalDirection?: VerticalDirection
    textBaseline?: TextBaseline
    children?: Array<Widget>
  }) {
    super(
      args.direction,
      args.mainAxisAlignment ?? MainAxisAlignment.start,
      args.mainAxisSize ?? MainAxisSize.max,
      args.crossAxisAlignment ?? CrossAxisAlignment.center,
      args.textDirection,
      args.verticalDirection ?? VerticalDirection.down,
      args.textBaseline ?? TextBaseline.alphabetic,
      Clip.none,
      args.children ?? [],
      args.key?.[octoKey]
    )
  }
}

// Flex: function Flex(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
//   var _ = this;
//   _.direction = t0;
//   _.mainAxisAlignment = t1;
//   _.mainAxisSize = t2;
//   _.crossAxisAlignment = t3;
//   _.textDirection = t4;
//   _.verticalDirection = t5;
//   _.textBaseline = t6;
//   _.clipBehavior = t7;
//   _.children = t8;
//   _.key = t9;
// },

export class Stack extends N.Stack {
  constructor(args?: {
    key?: Key
    alignment?: Alignment
    textDirection?: TextDirection
    fit?: StackFit
    clipBehavior?: Clip
    children?: Array<Widget>
  }) {
    super(
      args?.alignment ?? new AlignmentDirectional(-1.0, -1.0),
      args?.textDirection,
      args?.fit ?? StackFit.loose,
      args?.clipBehavior ?? Clip.hardEdge,
      args?.children ?? [],
      args?.key?.[octoKey]
    )
  }
}

// Stack: function Stack(t0, t1, t2, t3, t4, t5) {
//   var _ = this;
//   _.alignment = t0;
//   _.textDirection = t1;
//   _.fit = t2;
//   _.clipBehavior = t3;
//   _.children = t4;
//   _.key = t5;
// },

export class IndexedStack extends N.IndexedStack {
  constructor(args?: {
    key?: Key
    index?: number
    alignment?: Alignment
    textDirection?: TextDirection
    sizing?: StackFit
    children?: Array<Widget>
  }) {
    super(
      args?.index ?? 0,
      args?.alignment ?? new AlignmentDirectional(-1.0, -1.0),
      args?.textDirection,
      args?.sizing ?? StackFit.loose,
      Clip.hardEdge,
      args?.children ?? [],
      args?.key?.[octoKey]
    )
  }
}

// IndexedStack: function IndexedStack(t0, t1, t2, t3, t4, t5, t6) {
//   var _ = this;
//   _.index = t0;
//   _.alignment = t1;
//   _.textDirection = t2;
//   _.fit = t3;
//   _.clipBehavior = t4;
//   _.children = t5;
//   _.key = t6;
// },

export class ClipRect extends N.ClipRect {
  constructor(args?: {
    key?: Key
    child?: Widget
    clipBehavior?: Clip
    clipper?: CustomClipper<Rect>
  }) {
    super(
      args?.clipper,
      args?.clipBehavior ?? Clip.hardEdge,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// ClipRect: function ClipRect(t0, t1, t2, t3) {
//   var _ = this;
//   _.clipper = t0;
//   _.clipBehavior = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class ClipRRect extends N.ClipRRect {
  constructor(args?: {
    key?: Key
    child?: Widget
    borderRadius?: BorderRadius
    clipBehavior?: Clip
    clipper?: CustomClipper<RRect>
  }) {
    super(
      args?.borderRadius,
      args?.clipper,
      args?.clipBehavior ?? Clip.hardEdge,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// ClipRRect: function ClipRRect(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.borderRadius = t0;
//   _.clipper = t1;
//   _.clipBehavior = t2;
//   _.child = t3;
//   _.key = t4;
// },

export class ClipOval extends N.ClipOval {
  constructor(args?: {
    key?: Key
    child?: Widget
    clipBehavior?: Clip
    clipper?: CustomClipper<Rect>
  }) {
    super(
      args?.clipper,
      args?.clipBehavior ?? Clip.antiAlias,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// ClipOval: function ClipOval(t0, t1, t2, t3) {
//   var _ = this;
//   _.clipper = t0;
//   _.clipBehavior = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class ClipPath extends N.ClipPath {
  constructor(args?: {
    key?: Key
    clipper?: CustomClipper<Path>
    clipBehavior?: Clip
    child?: Widget
  }) {
    super(
      N.octoPath2ClipperWrapper(args?.clipper),
      args?.clipBehavior ?? Clip.antiAlias,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// ClipPath: function ClipPath(t0, t1, t2, t3) {
//   var _ = this;
//   _.clipper = t0;
//   _.clipBehavior = t1;
//   _.child = t2;
//   _.key0 = t3;
// },

export class PhysicalModel extends N.PhysicalModel {
  constructor(args: {
    key?: Key
    shape?: BoxShape
    clipBehavior?: Clip
    borderRadius?: BorderRadius
    elevation?: number
    color: Color
    shadowColor?: Color
    child?: Widget
  }) {
    super(
      args.shape ?? BoxShape.rectangle,
      args.clipBehavior ?? Clip.none,
      args.borderRadius,
      args.elevation ?? 0,
      args.color,
      args.shadowColor ?? Colors.black,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// PhysicalModel: function PhysicalModel(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.shape = t0;
//   _.clipBehavior = t1;
//   _.borderRadius = t2;
//   _.elevation = t3;
//   _.color = t4;
//   _.shadowColor = t5;
//   _.child = t6;
//   _.key0 = t7;
// },

export class PhysicalShape extends N.PhysicalShape {
  constructor(args: {
    key?: Key
    clipper: CustomClipper<Path>
    clipBehavior?: Clip
    elevation?: number
    color: Color
    shadowColor?: Color
    child?: Widget
  }) {
    super(
      N.octoPath2ClipperWrapper(args.clipper),
      args.clipBehavior ?? Clip.none,
      args.elevation ?? 0,
      args.color,
      args.shadowColor ?? Colors.black,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// PhysicalShape: function PhysicalShape(t0, t1, t2, t3, t4, t5, t6) {
//   var _ = this;
//   _.clipper = t0;
//   _.clipBehavior = t1;
//   _.elevation = t2;
//   _.color = t3;
//   _.shadowColor = t4;
//   _.child = t5;
//   _.key0 = t6;
// },

export class FittedBox extends N.FittedBox {
  constructor(args?: {
    key?: Key
    child?: Widget
    fit?: BoxFit
    alignment?: Alignment
    clipBehavior?: Clip
  }) {
    super(
      args?.fit ?? BoxFit.contain,
      args?.alignment ?? Alignment.center,
      args?.clipBehavior ?? Clip.none,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// FittedBox: function FittedBox(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.fit = t0;
//   _.alignment = t1;
//   _.clipBehavior = t2;
//   _.child = t3;
//   _.key = t4;
// },

export class Padding extends N.Padding {
  constructor(args: {key?: Key; child?: Widget; padding: EdgeInsetsGeometry}) {
    super(args.padding, args.child, args.key?.[octoKey])
  }
}

// Padding: function Padding(t0, t1, t2) {
//   this.padding = t0;
//   this.child = t1;
//   this.key = t2;
// },

export class Center extends Align {
  constructor(args?: {
    key?: Key
    widthFactor?: number
    heightFactor?: number
    child?: Widget
  }) {
    super({
      key: args?.key,
      widthFactor: args?.widthFactor,
      heightFactor: args?.heightFactor,
      child: args?.child,
      alignment: Alignment.center,
    })
  }
}

export class SizedBox extends N.SizedBox {
  constructor(args?: {
    key?: Key
    width?: number
    height?: number
    child?: Widget
  }) {
    super(args?.width, args?.height, args?.child, args?.key?.[octoKey])
  }

  static shrink = (args?: {key?: Key; child?: Widget}): SizedBox => {
    return new SizedBox({
      key: args?.key,
      child: args?.child,
      width: 0,
      height: 0,
    })
  }
}

// SizedBox: function SizedBox(t0, t1, t2, t3) {
//   var _ = this;
//   _.width = t0;
//   _.height = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class FractionallySizedBox extends N.FractionallySizedBox {
  constructor(args?: {
    key?: Key
    alignment?: Alignment
    widthFactor?: number
    heightFactor?: number
    child?: Widget
  }) {
    super(
      args?.widthFactor,
      args?.heightFactor,
      args?.alignment ?? Alignment.center,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// FractionallySizedBox: function FractionallySizedBox(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.widthFactor = t0;
//   _.heightFactor = t1;
//   _.alignment = t2;
//   _.child = t3;
//   _.key0 = t4;
// },

export class AspectRatio extends N.AspectRatio {
  constructor(args: {key?: Key; aspectRatio: number; child?: Widget}) {
    super(args.aspectRatio, args.child, args.key?.[octoKey])
  }
}

// AspectRatio: function AspectRatio(t0, t1, t2) {
//   this.aspectRatio = t0;
//   this.child = t1;
//   this.key = t2;
// },

export class Flexible extends N.Flexible {
  constructor(args: {key?: Key; flex?: number; fit?: FlexFit; child: Widget}) {
    super(
      args.flex ?? 1.0,
      args.fit ?? FlexFit.loose,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// Flexible: function Flexible(t0, t1, t2, t3) {
//   var _ = this;
//   _.flex = t0;
//   _.fit = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class Expanded extends N.Expanded {
  constructor(args: {key?: Key; flex?: number; child: Widget}) {
    super(args.flex ?? 1.0, FlexFit.tight, args.child, args.key?.[octoKey])
  }
}

// Expanded: function Expanded(t0, t1, t2, t3) {
//   var _ = this;
//   _.flex = t0;
//   _.fit = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class Wrap extends N.Wrap {
  constructor(args: {
    key?: Key
    direction?: Axis
    alignment?: WrapAlignment
    spacing?: number
    runAlignment?: WrapAlignment
    runSpacing?: number
    crossAxisAlignment?: WrapCrossAlignment
    textDirection?: TextDirection
    verticalDirection?: VerticalDirection
    clipBehavior?: Clip
    children?: Array<Widget>
  }) {
    super(
      args?.direction ?? Axis.horizontal,
      args?.alignment ?? WrapAlignment.start,
      args?.spacing ?? 0,
      args?.runAlignment ?? WrapAlignment.start,
      args?.runSpacing ?? 0,
      args?.crossAxisAlignment ?? WrapCrossAlignment.start,
      args?.textDirection,
      args?.verticalDirection ?? VerticalDirection.down,
      args?.clipBehavior ?? Clip.none,
      args?.children ?? [],
      args?.key?.[octoKey]
    )
  }
}

// Wrap: function Wrap(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) {
//   var _ = this;
//   _.direction = t0;
//   _.alignment = t1;
//   _.spacing = t2;
//   _.runAlignment = t3;
//   _.runSpacing = t4;
//   _.crossAxisAlignment = t5;
//   _.textDirection = t6;
//   _.verticalDirection = t7;
//   _.clipBehavior = t8;
//   _.children = t9;
//   _.key = t10;
// },

export class LayoutId extends N.LayoutId {
  constructor(args: {key?: Key; id: number; child: Widget}) {
    super(args.id, args.child, args.key?.[octoKey])
  }
}

// LayoutId: function LayoutId(t0, t1, t2) {
//   this.id = t0;
//   this.child = t1;
//   this.key = t2;
// },

export class Positioned extends N.Positioned {
  public readonly left?: number
  public readonly top?: number
  public readonly right?: number
  public readonly bottom?: number
  public readonly width?: number
  public readonly height?: number

  constructor(args: {
    key?: Key
    left?: number
    top?: number
    right?: number
    bottom?: number
    width?: number
    height?: number
    child: Widget
  }) {
    super(
      args.left,
      args.top,
      args.right,
      args.bottom,
      args.width,
      args.height,
      args.child,
      args.key?.[octoKey]
    )
    this.left = args.left
    this.top = args.top
    this.right = args.right
    this.bottom = args.bottom
    this.width = args.width
    this.height = args.height
  }
}

// Positioned: function Positioned(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.left = t0;
//   _.top = t1;
//   _.right = t2;
//   _.bottom = t3;
//   _.width = t4;
//   _.height = t5;
//   _.child = t6;
//   _.key = t7;
// },

export class IgnorePointer extends N.IgnorePointer {
  constructor(args?: {
    key?: Key
    ignoring?: boolean
    ignoringSemantics?: boolean
    child?: Widget
  }) {
    super(
      args?.ignoring ?? true,
      args?.ignoringSemantics,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// IgnorePointer: function IgnorePointer(t0, t1, t2, t3) {
//   var _ = this;
//   _.ignoring = t0;
//   _.ignoringSemantics = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class AbsorbPointer extends N.AbsorbPointer {
  constructor(args?: {
    key?: Key
    absorbing?: boolean
    ignoringSemantics?: boolean
    child?: Widget
  }) {
    super(
      args?.absorbing ?? true,
      args?.ignoringSemantics,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// AbsorbPointer: function AbsorbPointer(t0, t1, t2, t3) {
//   var _ = this;
//   _.absorbing = t0;
//   _.ignoringSemantics = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class ColoredBox extends N.ColoredBox {
  constructor(args: {key?: Key; color: Color; child?: Widget}) {
    super(args.color, args.child, args.key?.[octoKey])
  }
}

// ColoredBox: function ColoredBox(t0, t1, t2) {
//   this.color = t0;
//   this.child = t1;
//   this.key = t2;
// },

export class LimitedBox extends N.LimitedBox {
  constructor(args?: {
    key?: Key
    maxWidth?: number
    maxHeight?: number
    child?: Widget
  }) {
    super(
      args?.maxWidth ?? Number.POSITIVE_INFINITY,
      args?.maxHeight ?? Number.POSITIVE_INFINITY,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// LimitedBox: function LimitedBox(t0, t1, t2, t3) {
//   var _ = this;
//   _.maxWidth = t0;
//   _.maxHeight = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class OverflowBox extends N.OverflowBox {
  constructor(args?: {
    key?: Key
    alignment?: Alignment
    maxWidth?: number
    maxHeight?: number
    minWidth?: number
    minHeight?: number
    child?: Widget
  }) {
    super(
      args?.alignment ?? Alignment.center,
      args?.minWidth,
      args?.maxWidth,
      args?.minHeight,
      args?.maxHeight,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// OverflowBox: function OverflowBox(t0, t1, t2, t3, t4, t5, t6) {
//   var _ = this;
//   _.alignment = t0;
//   _.minWidth = t1;
//   _.maxWidth = t2;
//   _.minHeight = t3;
//   _.maxHeight = t4;
//   _.child = t5;
//   _.key = t6;
// },

export class SizedOverflowBox extends N.SizedOverflowBox {
  constructor(args: {
    key?: Key
    alignment?: Alignment
    size: Size
    child?: Widget
  }) {
    super(
      args.alignment ?? Alignment.center,
      args.size,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// SizedOverflowBox: function SizedOverflowBox(t0, t1, t2, t3) {
//   var _ = this;
//   _.alignment = t0;
//   _.size = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class Offstage extends N.Offstage {
  constructor(args?: {key?: Key; offstage?: boolean; child?: Widget}) {
    super(args?.offstage ?? true, args?.child, args?.key?.[octoKey])
  }
}

// Offstage: function Offstage(t0, t1, t2) {
//   this.offstage = t0;
//   this.child = t1;
//   this.key = t2;
// },

export class ConstrainedBox extends N.ConstrainedBox {
  constructor(args: {key?: Key; constraints: BoxConstraints; child?: Widget}) {
    super(args.constraints, args.child, args.key?.[octoKey])
  }
}

// ConstrainedBox: function ConstrainedBox(t0, t1, t2) {
//   this.constraints = t0;
//   this.child = t1;
//   this.key = t2;
// },

export class UnconstrainedBox extends N.UnconstrainedBox {
  constructor(args?: {
    key?: Key
    child?: Widget
    textDirection?: TextDirection
    alignment?: Alignment
    constrainedAxis?: Axis
    clipBehavior?: Clip
  }) {
    super(
      args?.textDirection,
      args?.alignment ?? Alignment.center,
      args?.constrainedAxis,
      args?.clipBehavior ?? Clip.none,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// UnconstrainedBox: function UnconstrainedBox(t0, t1, t2, t3, t4, t5) {
//   var _ = this;
//   _.textDirection = t0;
//   _.alignment = t1;
//   _.constrainedAxis = t2;
//   _.clipBehavior = t3;
//   _.child = t4;
//   _.key = t5;
// },

export class IntrinsicWidth extends N.IntrinsicWidth {
  constructor(args?: {
    key?: Key
    stepWidth?: number
    stepHeight?: number
    child?: Widget
  }) {
    super(args?.stepWidth, args?.stepHeight, args?.child, args?.key?.[octoKey])
  }
}

// IntrinsicWidth: function IntrinsicWidth(t0, t1, t2, t3) {
//   var _ = this;
//   _.stepWidth = t0;
//   _.stepHeight = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class IntrinsicHeight extends N.IntrinsicHeight {
  constructor(args?: {key?: Key; child?: Widget}) {
    super(args?.child, args?.key?.[octoKey])
  }
}

// IntrinsicHeight: function IntrinsicHeight(t0, t1) {
//   this.child = t0;
//   this.key = t1;
// },

export class Baseline extends N.Baseline {
  constructor(args: {
    key?: Key
    baseline: number
    baselineType: TextBaseline
    child?: Widget
  }) {
    super(args.baseline, args.baselineType, args.child, args.key?.[octoKey])
  }
}

// Baseline: function Baseline(t0, t1, t2, t3) {
//   var _ = this;
//   _.baseline = t0;
//   _.baselineType = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class SliverToBoxAdapter extends N.SliverToBoxAdapter {
  constructor(args?: {key?: Key; child?: Widget}) {
    super(args?.child, args?.key?.[octoKey])
  }
}

// SliverToBoxAdapter: function SliverToBoxAdapter(t0, t1) {
//   this.child = t0;
//   this.key = t1;
// },

export class SliverPadding extends N.SliverPadding {
  constructor(args: {key?: Key; sliver?: Widget; padding: EdgeInsetsGeometry}) {
    super(args.padding, args.sliver, args.key?.[octoKey])
  }
}

// SliverPadding: function SliverPadding(t0, t1, t2) {
//   this.padding = t0;
//   this.child = t1;
//   this.key = t2;
// },

export class ListBody extends N.ListBody {
  constructor(args?: {
    key?: Key
    mainAxis?: Axis
    reverse?: boolean
    children?: Array<Widget>
  }) {
    super(
      args?.mainAxis ?? Axis.vertical,
      args?.reverse ?? false,
      args?.children ?? [],
      args?.key?.[octoKey]
    )
  }
}

// ListBody: function ListBody(t0, t1, t2, t3) {
//   var _ = this;
//   _.mainAxis = t0;
//   _.reverse = t1;
//   _.children = t2;
//   _.key = t3;
// },

export class KeyedSubtree extends N.KeyedSubtree {
  constructor(args: {key?: Key; child: Widget}) {
    super(args.child, args.key?.[octoKey])
  }
}

// KeyedSubtree: function KeyedSubtree(t0, t1) {
//   this.child = t0;
//   this.key = t1;
// },

export class Builder extends N.Builder {
  builder: WidgetBuilder

  constructor(args: {key?: Key; builder: WidgetBuilder}) {
    super(args.builder, args.key?.[octoKey])
    this.builder = args.builder
  }

  private wgb = (_, context) => {
    return this.builder(new BuildContext(context))
  }
}

// Builder: function Builder(t0, t1) {
//   this.builder = t0;
//   this.key = t1;
// },
// N.Builder.prototype = {
//   wgb: function(_, context) {
//     return this.builder.call$1(context);
//   }
// };

export class RichText extends N.RichText {
  constructor(args: {
    key?: Key
    text: InlineSpan
    textAlign?: TextAlign
    textDirection?: TextDirection
    softWrap?: boolean
    overflow?: TextOverflow
    textScaleFactor?: number
    maxLines?: number
    locale?: Locale
    strutStyle?: StrutStyle
    textWidthBasis?: TextWidthBasis
    textHeightBehavior?: TextHeightBehavior
  }) {
    super(
      args.text,
      args.textAlign ?? TextAlign.start,
      args.textDirection,
      args.softWrap,
      args.overflow ?? TextOverflow.clip,
      args.textScaleFactor ?? 1,
      args.maxLines,
      args.locale,
      args.strutStyle,
      args.textWidthBasis ?? TextWidthBasis.parent,
      args.textHeightBehavior,
      N.richTextExtractChildren(args.text),
      args.key?.[octoKey]
    )
  }
}

// RichText: function RichText(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12) {
//   var _ = this;
//   _.text = t0;
//   _.textAlign = t1;
//   _.textDirection = t2;
//   _.softWrap = t3;
//   _.overflow = t4;
//   _.textScaleFactor = t5;
//   _.maxLines = t6;
//   _.locale = t7;
//   _.strutStyle = t8;
//   _.textWidthBasis = t9;
//   _.textHeightBehavior = t10;
//   _.children = t11;
//   _.key = t12;
// },

export class Transform extends N.Transform {
  constructor(args: {
    key?: Key
    transform: Matrix4
    origin?: Offset
    alignment?: Alignment
    transformHitTests?: boolean
    filterQuality?: FilterQuality
    child?: Widget
  }) {
    super(
      args.transform,
      args.origin,
      args.alignment,
      args.transformHitTests ?? true,
      args.filterQuality ?? FilterQuality.low,
      args.child,
      args.key?.[octoKey]
    )
  }

  static rotate = (args: {
    key?: Key
    angle: number
    origin?: Offset
    alignment?: Alignment
    transformHitTests?: boolean
    filterQuality?: FilterQuality
    child?: Widget
  }): Transform => {
    return new Transform({
      key: args.key,
      origin: args.origin,
      alignment: args.alignment ?? Alignment.center,
      transformHitTests: args.transformHitTests,
      filterQuality: args.filterQuality,
      child: args.child,
      transform: Matrix4.rotationZ(args.angle),
    })
  }

  static translate = (args: {
    key?: Key
    offset: Offset
    transformHitTests?: boolean
    filterQuality?: FilterQuality
    child?: Widget
  }): Transform => {
    return new Transform({
      key: args.key,
      transformHitTests: args.transformHitTests,
      filterQuality: args.filterQuality,
      child: args.child,
      transform: Matrix4.translationValues(args.offset.dx, args.offset.dy, 0.0),
    })
  }

  static scale = (args: {
    key?: Key
    scale?: number
    scaleX?: number
    scaleY?: number
    origin?: Offset
    alignment?: Alignment
    transformHitTests?: boolean
    filterQuality?: FilterQuality
    child?: Widget
  }): Transform => {
    return new Transform({
      key: args.key,
      origin: args.origin,
      alignment: args.alignment ?? Alignment.center,
      transformHitTests: args.transformHitTests,
      filterQuality: args.filterQuality,
      child: args.child,
      transform: Matrix4.diagonal3Values(
        args.scale ?? args.scaleX ?? 1.0,
        args.scale ?? args.scaleY ?? 1.0,
        1.0
      ),
    })
  }
}

// Transform: function Transform(t0, t1, t2, t3, t4, t5, t6) {
//   var _ = this;
//   _.transform = t0;
//   _.origin = t1;
//   _.alignment = t2;
//   _.transformHitTests = t3;
//   _.filterQuality = t4;
//   _.child = t5;
//   _.key0 = t6;
// },

export class FractionalTranslation extends N.FractionalTranslation {
  constructor(args: {
    key?: Key
    translation: Offset
    transformHitTests?: boolean
    child?: Widget
  }) {
    super(
      args.translation,
      args.transformHitTests ?? true,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// FractionalTranslation: function FractionalTranslation(t0, t1, t2, t3) {
//   var _ = this;
//   _.translation = t0;
//   _.transformHitTests = t1;
//   _.child = t2;
//   _.key = t3;
// },

export class CustomPaint extends N.CustomPaint {
  constructor(args?: {
    key?: Key
    painter?: CustomPainter
    foregroundPainter?: CustomPainter
    size?: Size
    isComplex?: boolean
    willChange?: boolean
    child?: Widget
  }) {
    super(
      args?.painter,
      args?.foregroundPainter,
      args?.size ?? Size.zero,
      args?.isComplex ?? false,
      args?.willChange ?? false,
      args?.child,
      args?.key?.[octoKey]
    )
  }
}

// CustomPaint: function CustomPaint(t0, t1, t2, t3, t4, t5, t6) {
//   var _ = this;
//   _.painter = t0;
//   _.foregroundPainter = t1;
//   _.size = t2;
//   _.isComplex = t3;
//   _.willChange = t4;
//   _.child = t5;
//   _.key = t6;
// },

export class RepaintBoundary extends N.RepaintBoundary {
  constructor(args?: {key?: Key; child?: Widget}) {
    super(args?.child, args?.key?.[octoKey])
  }
}

// RepaintBoundary: function RepaintBoundary(t0, t1) {
//   this.child = t0;
//   this.key = t1;
// },
