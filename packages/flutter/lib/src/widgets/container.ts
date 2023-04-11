import {Widget} from './framework'
import {Key, octoKey} from '../foundation/key'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {BoxConstraints} from '../rendering/box'
import {AlignmentGeometry} from '../painting/alignment'
import {isNullOrUndefined, Clip, Color, Matrix4} from '@octoflutter/dartsdk'
import {BoxDecoration} from '../painting/box_decoration'

export class Container extends N.Container {
  constructor(args?: {
    key?: Key
    child?: Widget
    padding?: EdgeInsetsGeometry
    alignment?: AlignmentGeometry
    color?: Color
    margin?: EdgeInsetsGeometry
    width?: number
    height?: number
    constraints?: BoxConstraints
    decoration?: BoxDecoration
    foregroundDecoration?: BoxDecoration
    transform?: Matrix4
    transformAlignment?: AlignmentGeometry
    clipBehavior?: Clip
  }) {
    let constraints: BoxConstraints = args?.constraints
    if (!isNullOrUndefined(args?.width) || !isNullOrUndefined(args?.height)) {
      constraints =
        args?.constraints?.tighten({
          width: args?.width,
          height: args?.height,
        }) ??
        BoxConstraints.tightFor({width: args?.width, height: args?.height})
    }
    super(
      args?.child,
      args?.alignment,
      args?.padding,
      args?.color,
      args?.decoration,
      args?.foregroundDecoration,
      constraints,
      args?.margin,
      args?.transform,
      args?.transformAlignment,
      args?.clipBehavior ?? Clip.none,
      args?.key?.[octoKey]
    )
  }
}

// Container: function Container(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11) {
//   var _ = this;
//   _.child = t0;
//   _.alignment = t1;
//   _.padding = t2;
//   _.color = t3;
//   _.decoration = t4;
//   _.foregroundDecoration = t5;
//   _.constraints = t6;
//   _.margin = t7;
//   _.transform = t8;
//   _.transformAlignment = t9;
//   _.clipBehavior = t10;
//   _.key0 = t11;
// },
