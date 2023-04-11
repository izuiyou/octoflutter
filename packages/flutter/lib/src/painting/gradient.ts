import {Color, TileMode} from '@octoflutter/dartsdk'
import {Alignment, AlignmentGeometry} from './alignment'
export class GradientRotation extends N.GradientRotation {
  constructor(radians: number) {
    super(radians)
  }
}

export type GradientTransform = GradientRotation

export class LinearGradient extends N.LinearGradient {
  constructor(args: {
    begin?: AlignmentGeometry
    end?: AlignmentGeometry
    colors: Array<Color>
    stops?: Float64Array
    tileMode?: TileMode
    transform?: GradientTransform
  }) {
    super(
      args.begin ?? Alignment.centerLeft,
      args.end ?? Alignment.centerRight,
      args.tileMode ?? TileMode.clamp,
      args.colors,
      args.stops,
      args.transform
    )
  }
}

export type Gradient = LinearGradient
