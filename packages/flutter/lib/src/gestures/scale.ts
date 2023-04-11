import {Offset} from '@octoflutter/dartsdk'
import {Velocity} from './velocity_tracker'

export type GestureScaleStartCallback = (details: ScaleStartDetails) => void
export type GestureScaleUpdateCallback = (details: ScaleUpdateDetails) => void
export type GestureScaleEndCallback = (details: ScaleEndDetails) => void

export class ScaleStartDetails extends N.ScaleStartDetails {
  public readonly focalPoint?: Offset
  public readonly localFocalPoint?: Offset
  public readonly pointerCount?: number

  constructor(args: {
    focalPoint?: Offset
    localFocalPoint?: Offset
    pointerCount?: number
  }) {
    const focalPoint = args.focalPoint ?? Offset.zero
    const localFocalPoint = args.localFocalPoint ?? focalPoint
    const pointerCount = args.pointerCount ?? 0
    super(focalPoint, localFocalPoint, pointerCount)
    this.focalPoint = focalPoint
    this.localFocalPoint = localFocalPoint
    this.pointerCount = pointerCount
  }
}
// ScaleStartDetails: function ScaleStartDetails(t0, t1, t2) {
//   this.focalPoint = t0;
//   this.localFocalPoint = t1;
//   this.pointerCount = t2;
// },

export class ScaleUpdateDetails extends N.ScaleUpdateDetails {
  public readonly focalPoint?: Offset
  public readonly localFocalPoint?: Offset
  public readonly focalPointDelta?: Offset
  public readonly scale?: number
  public readonly horizontalScale?: number
  public readonly verticalScale?: number
  public readonly rotation?: number
  public readonly pointerCount?: number

  constructor(args: {
    focalPoint?: Offset
    localFocalPoint?: Offset
    focalPointDelta?: Offset
    scale?: number
    horizontalScale?: number
    verticalScale?: number
    rotation?: number
    pointerCount?: number
  }) {
    const focalPoint = args.focalPoint ?? Offset.zero
    const localFocalPoint = args.localFocalPoint ?? focalPoint
    const focalPointDelta = args.focalPointDelta ?? Offset.zero
    const scale = args.scale ?? 1.0
    const horizontalScale = args.horizontalScale ?? 1.0
    const verticalScale = args.verticalScale ?? 1.0
    const rotation = args.rotation ?? 0.0
    const pointerCount = args.pointerCount ?? 0.0

    super(
      focalPointDelta,
      focalPoint,
      localFocalPoint,
      scale,
      horizontalScale,
      verticalScale,
      rotation,
      pointerCount
    )
    this.focalPointDelta = focalPointDelta
    this.focalPoint = focalPoint
    this.localFocalPoint = localFocalPoint
    this.scale = scale
    this.horizontalScale = horizontalScale
    this.verticalScale = verticalScale
    this.rotation = rotation
    this.pointerCount = pointerCount
  }
}

// ScaleUpdateDetails: function ScaleUpdateDetails(t0, t1, t2, t3, t4, t5, t6, t7) {
//   var _ = this;
//   _.focalPointDelta = t0;
//   _.focalPoint = t1;
//   _.localFocalPoint = t2;
//   _.scale = t3;
//   _.horizontalScale = t4;
//   _.verticalScale = t5;
//   _.rotation = t6;
//   _.pointerCount = t7;
// },

export class ScaleEndDetails extends N.ScaleEndDetails {
  public readonly velocity?: Velocity
  public readonly pointerCount?: number

  constructor(args: {velocity?: Velocity; pointerCount?: number}) {
    const velocity = args.velocity ?? Velocity.zero
    const pointerCount = args.pointerCount ?? 0
    super(velocity, pointerCount)
    this.velocity = velocity
    this.pointerCount = pointerCount
  }
}
// ScaleEndDetails: function ScaleEndDetails(t0, t1) {
//   this.velocity = t0;
//   this.pointerCount = t1;
// },
