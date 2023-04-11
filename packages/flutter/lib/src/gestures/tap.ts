import {Offset, PointerDeviceKind} from '@octoflutter/dartsdk'

export type GestureTapDownCallback = (details: TapDownDetails) => void
export type GestureTapUpCallback = (details: TapUpDetails) => void
export type GestureTapCallback = () => void
export type GestureTapCancelCallback = () => void

export class TapDownDetails extends N.TapDownDetails {
  public readonly globalPosition?: Offset
  public readonly localPosition?: Offset
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
// TapDownDetails: function TapDownDetails(t0, t1, t2) {
//   this.globalPosition = t0;
//   this.kind = t1;
//   this.localPosition = t2;
// },

export class TapUpDetails extends N.TapUpDetails {
  public readonly globalPosition?: Offset
  public readonly localPosition?: Offset
  public readonly kind?: PointerDeviceKind

  constructor(args: {
    kind: PointerDeviceKind
    globalPosition?: Offset
    localPosition?: Offset
  }) {
    const globalPosition = args.globalPosition ?? Offset.zero
    const localPosition = args.localPosition ?? globalPosition
    super(globalPosition, localPosition, args.kind)
    this.globalPosition = globalPosition
    this.localPosition = localPosition
    this.kind = args.kind
  }
}

// TapUpDetails: function TapUpDetails(t0, t1, t2) {
//   this.globalPosition = t0;
//   this.localPosition = t1;
//   this.kind = t2;
// },
