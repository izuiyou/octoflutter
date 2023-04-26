import {
  Color,
  Rect,
  Shader,
  TextDirection,
  TileMode,
  isNullOrUndefined,
} from '@octoflutter/dartsdk'
import {Alignment, AlignmentGeometry} from './alignment'

export abstract class GradientTransform {}

export class GradientRotation
  extends N.GradientRotation
  implements GradientTransform
{
  constructor(radians: number) {
    super(radians)
  }
}

export abstract class Gradient {
  abstract createShader(
    rect: Rect,
    args?: {textDirection?: TextDirection}
  ): Shader
}

export class LinearGradient extends N.LinearGradient implements Gradient {
  constructor(args: {
    begin?: AlignmentGeometry
    end?: AlignmentGeometry
    colors: Array<Color>
    stops?: Array<number>
    tileMode?: TileMode
    transform?: GradientTransform
  }) {
    const stops = isNullOrUndefined(args.stops)
      ? null
      : Float64Array.from(args.stops)
    super(
      args.begin ?? Alignment.centerLeft,
      args.end ?? Alignment.centerRight,
      args.tileMode ?? TileMode.clamp,
      args.colors,
      stops,
      args.transform
    )
  }

  createShader(rect: Rect, args?: {textDirection?: TextDirection}): Shader {
    return N.gradientCreateShader(this, rect, args?.textDirection)
  }
}

// LinearGradient: function LinearGradient(t0, t1, t2, t3, t4, t5) {
//   var _ = this;
//   _.begin = t0;
//   _.end0 = t1;
//   _.tileMode = t2;
//   _.colors = t3;
//   _.stops = t4;
//   _.transform = t5;
// },

export class RadialGradient extends N.RadialGradient implements Gradient {
  constructor(args: {
    center?: Alignment
    radius?: number
    colors: Array<Color>
    stops?: Array<number>
    tileMode?: TileMode
    focal?: AlignmentGeometry
    focalRadius?: number
    transform?: GradientTransform
  }) {
    const stops = isNullOrUndefined(args.stops)
      ? null
      : Float64Array.from(args.stops)
    super(
      args.center ?? Alignment.center,
      args.radius ?? 0.5,
      args.tileMode ?? TileMode.clamp,
      args.focal,
      args.colors,
      stops,
      args.transform
    )
  }

  createShader(rect: Rect, args?: {textDirection?: TextDirection}): Shader {
    return N.gradientCreateShader(this, rect, args?.textDirection)
  }
}

// RadialGradient: function RadialGradient(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.center = t0;
//   _.radius = t1;
//   _.tileMode = t2;
//   _.focal = t3;
//   _.focalRadius = t4;
//   _.colors = t5;
//   _.stops = t6;
//   _.transform = t7;
// },

export class SweepGradient extends N.SweepGradient {
  constructor(args: {
    center?: Alignment
    startAngle?: number
    endAngle?: number
    colors: Array<Color>
    stops?: Array<number>
    tileMode?: TileMode
    transform?: GradientTransform
  }) {
    const stops = isNullOrUndefined(args.stops)
      ? null
      : Float64Array.from(args.stops)
    super(
      args.center ?? Alignment.center,
      args.startAngle ?? 0,
      args.endAngle ?? Math.PI * 2,
      args.tileMode ?? TileMode.clamp,
      args.colors,
      stops,
      args.transform
    )
  }
}

// SweepGradient: function SweepGradient(t0, t1, t2, t3, t4, t5, t6) {
//   var _ = this;
//   _.center = t0;
//   _.startAngle = t1;
//   _.endAngle = t2;
//   _.tileMode = t3;
//   _.colors = t4;
//   _.stops = t5;
//   _.transform = t6;
// },
