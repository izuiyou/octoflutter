import {Duration, Offset, PointerDeviceKind} from '@octoflutter/dartsdk'
import {Velocity} from './velocity_tracker'

export type GestureDragDownCallback = (details: DragDownDetails) => void
export type GestureDragStartCallback = (details: DragStartDetails) => void
export type GestureDragUpdateCallback = (details: DragUpdateDetails) => void

export class DragDownDetails extends N.DragDownDetails {
  public readonly globalPosition?: Offset
  public readonly localPosition?: Offset

  constructor(args: {globalPosition?: Offset; localPosition?: Offset}) {
    const globalPosition = args.globalPosition ?? Offset.zero
    const localPosition = args.localPosition ?? globalPosition

    super(globalPosition, localPosition)
    this.globalPosition = globalPosition
  }
}
// DragDownDetails: function DragDownDetails(t0, t1) {
//   this.globalPosition = t0;
//   this.localPosition = t1;
// },

export class DragStartDetails extends N.DragStartDetails {
  public readonly sourceTimeStamp?: Duration
  public readonly globalPosition?: Offset
  public readonly localPosition?: Offset
  public readonly kind?: PointerDeviceKind

  constructor(args: {
    sourceTimeStamp?: Duration
    globalPosition?: Offset
    localPosition?: Offset
    kind?: PointerDeviceKind
  }) {
    const globalPosition = args.globalPosition ?? Offset.zero
    const localPosition = args.localPosition ?? globalPosition

    super(args.sourceTimeStamp, globalPosition, localPosition, args.kind)
    this.sourceTimeStamp = args.sourceTimeStamp
    this.globalPosition = globalPosition
    this.localPosition = localPosition
    this.kind = args.kind
  }
}

// DragStartDetails: function DragStartDetails(t0, t1, t2, t3) {
//   var _ = this;
//   _.sourceTimeStamp = t0;
//   _.globalPosition = t1;
//   _.localPosition = t2;
//   _.kind = t3;
// },

export class DragUpdateDetails extends N.DragUpdateDetails {
  public readonly globalPosition: Offset
  public readonly sourceTimeStamp?: Duration
  public readonly delta?: Offset
  public readonly primaryDelta?: number
  public readonly localPosition?: Offset

  constructor(args: {
    globalPosition: Offset
    sourceTimeStamp?: Duration
    delta?: Offset
    primaryDelta?: number
    localPosition?: Offset
  }) {
    const globalPosition = args.globalPosition ?? Offset.zero
    const localPosition = args.localPosition ?? globalPosition
    super(
      args.sourceTimeStamp,
      args.delta,
      args.primaryDelta,
      globalPosition,
      localPosition
    )
    this.sourceTimeStamp = args.sourceTimeStamp
    this.globalPosition = globalPosition
    this.localPosition = localPosition
    this.delta = args.delta
    this.primaryDelta = args.primaryDelta
  }
}
// DragUpdateDetails: function DragUpdateDetails(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.sourceTimeStamp = t0;
//   _.delta = t1;
//   _.primaryDelta = t2;
//   _.globalPosition = t3;
//   _.localPosition = t4;
// },

export class DragEndDetails extends N.DragEndDetails {
  public readonly velocity?: Velocity
  public readonly primaryVelocity?: number

  constructor(args: {velocity?: Velocity; primaryVelocity?: number}) {
    const velocity = args.velocity ?? Velocity.zero
    super(velocity, args.primaryVelocity)
    this.velocity = velocity
    this.primaryVelocity = args.primaryVelocity
  }
}
// DragEndDetails: function DragEndDetails(t0, t1) {
//   this.velocity = t0;
//   this.primaryVelocity = t1;
// },
