import {VoidCallback, Clip, Color} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {ShapeBorder} from '../painting/borders'
import {BoxConstraints} from '../rendering/box'
import {Widget} from '../widgets/framework'
import {MaterialTapTargetSize} from './theme_data'

export enum _FloatingActionButtonType {
  regular = C._FloatingActionButtonType_0,
  small = C._FloatingActionButtonType_1,
}

export class FloatingActionButton extends N.FloatingActionButton {
  constructor(args: {
    key?: Key
    child?: Widget
    tooltip?: string
    foregroundColor?: Color
    backgroundColor?: Color
    focusColor?: Color
    hoverColor?: Color
    splashColor?: Color
    heroTag?: any
    elevation?: number
    focusElevation?: number
    hoverElevation?: number
    highlightElevation?: number
    disabledElevation?: number
    onPressed: VoidCallback
    mouseCursor?: any
    mini?: boolean
    shape?: ShapeBorder
    clipBehavior?: Clip
    focusNode?: any
    autofocus?: boolean
    materialTapTargetSize?: MaterialTapTargetSize
    isExtended?: boolean
    enableFeedback?: boolean
  }) {
    const buttonType =
      args.mini ?? false
        ? _FloatingActionButtonType.small
        : _FloatingActionButtonType.regular
    super(
      args.child,
      args.tooltip,
      args.foregroundColor,
      args.backgroundColor,
      args.focusColor,
      args.hoverColor,
      args.splashColor,
      args.heroTag,
      args.onPressed,
      args.mouseCursor,
      args.elevation,
      args.focusElevation,
      args.hoverElevation,
      args.highlightElevation,
      args.disabledElevation,
      args.shape,
      args.clipBehavior ?? Clip.none,
      args.isExtended ?? false,
      args.focusNode,
      args.autofocus ?? false,
      args.materialTapTargetSize,
      args.enableFeedback ?? false,
      buttonType,
      args.key?.[octoKey]
    )
  }
}

// FloatingActionButton: function FloatingActionButton(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22) {
//   var _ = this;
//   _.child = t0;
//   _.tooltip = t1;
//   _.foregroundColor = t2;
//   _.backgroundColor = t3;
//   _.focusColor = t4;
//   _.hoverColor = t5;
//   _.splashColor = t6;
//   _.heroTag = t7;
//   _.onPressed = t8;
//   _.mouseCursor = t9;
//   _.elevation = t10;
//   _.focusElevation = t11;
//   _.hoverElevation = t12;
//   _.highlightElevation = t13;
//   _.disabledElevation = t14;
//   _.shape = t15;
//   _.clipBehavior = t16;
//   _.isExtended = t17;
//   _.focusNode = t18;
//   _.autofocus = t19;
//   _.materialTapTargetSize = t20;
//   _._floatingActionButtonType = t21;
//   _.key0 = t22;
// },
