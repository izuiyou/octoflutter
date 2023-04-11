import {Velocity} from './velocity_tracker'
import {Offset, PointerDeviceKind} from '@octoflutter/dartsdk'

export type GestureLongPressCallback = () => void
export type GestureLongPressCancelCallback = () => void
export type GestureLongPressUpCallback = () => void
export type GestureLongPressStartCallback = (
  details: LongPressStartDetails
) => void
export type GestureLongPressMoveUpdateCallback = (
  details: LongPressMoveUpdateDetails
) => void
export type GestureLongPressEndCallback = (details: LongPressEndDetails) => void
export type GestureLongPressDownCallback = (
  details: LongPressDownDetails
) => void

export class LongPressStartDetails extends N.LongPressStartDetails {
  public readonly globalPosition?: Offset
  public readonly localPosition?: Offset

  constructor(args: {globalPosition?: Offset; localPosition?: Offset}) {
    const globalPosition = args.globalPosition ?? Offset.zero
    const localPosition = args.localPosition ?? globalPosition
    super(globalPosition, localPosition)
    this.globalPosition = globalPosition
    this.localPosition = localPosition
  }
}
// LongPressStartDetails: function LongPressStartDetails(t0, t1) {
//   this.globalPosition = t0;
//   this.localPosition = t1;
// },

export class LongPressMoveUpdateDetails extends N.LongPressMoveUpdateDetails {
  public readonly globalPosition?: Offset
  public readonly localPosition?: Offset
  public readonly offsetFromOrigin?: Offset
  public readonly localOffsetFromOrigin?: Offset

  constructor(args: {
    globalPosition?: Offset
    localPosition?: Offset
    offsetFromOrigin?: Offset
    localOffsetFromOrigin?: Offset
  }) {
    const globalPosition = args.globalPosition ?? Offset.zero
    const offsetFromOrigin = args.offsetFromOrigin ?? Offset.zero
    const localPosition = args.localPosition ?? globalPosition
    const localOffsetFromOrigin = args.localOffsetFromOrigin ?? offsetFromOrigin
    super(
      globalPosition,
      localPosition,
      offsetFromOrigin,
      localOffsetFromOrigin
    )
    this.globalPosition = globalPosition
    this.localPosition = localPosition
    this.offsetFromOrigin = offsetFromOrigin
    this.localOffsetFromOrigin = localOffsetFromOrigin
  }
}
// LongPressMoveUpdateDetails: function LongPressMoveUpdateDetails(t0, t1, t2, t3) {
//   var _ = this;
//   _.globalPosition = t0;
//   _.localPosition = t1;
//   _.offsetFromOrigin = t2;
//   _.localOffsetFromOrigin = t3;
// },

export class LongPressEndDetails extends N.LongPressEndDetails {
  public readonly globalPosition?: Offset
  public readonly localPosition?: Offset
  public readonly velocity?: Velocity

  constructor(args: {
    globalPosition?: Offset
    localPosition?: Offset
    velocity?: Velocity
  }) {
    const globalPosition = args.globalPosition ?? Offset.zero
    const localPosition = args.localPosition ?? globalPosition
    const velocity = args.velocity ?? Velocity.zero

    super(globalPosition, localPosition, velocity)
    this.globalPosition = globalPosition
    this.localPosition = localPosition
    this.velocity = velocity
  }
}
// LongPressEndDetails: function LongPressEndDetails(t0, t1, t2) {
//   this.globalPosition = t0;
//   this.localPosition = t1;
//   this.velocity = t2;
// },

export class LongPressDownDetails extends N.LongPressDownDetails {
  public readonly globalPosition: Offset
  public readonly localPosition: Offset
  public readonly kind?: PointerDeviceKind

  constructor(args: {
    globalPosition?: Offset
    localPosition?: Offset
    kind?: PointerDeviceKind
  }) {
    const globalPosition = args.globalPosition ?? Offset.zero
    const localPosition = args.localPosition ?? globalPosition
    super(globalPosition, args.kind, localPosition)
    this.globalPosition = globalPosition
    this.localPosition = localPosition
    this.kind = args.kind
  }
}
// LongPressDownDetails: function LongPressDownDetails(t0, t1, t2) {
//   this.globalPosition = t0;
//   this.kind0 = t1;
//   this.localPosition = t2;
// },
