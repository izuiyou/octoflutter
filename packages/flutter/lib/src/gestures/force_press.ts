import {Offset} from '@octoflutter/dartsdk'

export type GestureForcePressStartCallback = (
  details: ForcePressDetails
) => void
export type GestureForcePressPeakCallback = (details: ForcePressDetails) => void
export type GestureForcePressUpdateCallback = (
  details: ForcePressDetails
) => void
export type GestureForcePressEndCallback = (details: ForcePressDetails) => void

export class ForcePressDetails extends N.ForcePressDetails {
  public readonly globalPosition: Offset
  public readonly localPosition?: Offset
  public readonly pressure: number

  constructor(args: {
    globalPosition: Offset
    localPosition?: Offset
    pressure: number
  }) {
    const localPosition = args.localPosition ?? args.globalPosition

    super(args.globalPosition, localPosition, args.pressure)
    this.globalPosition = args.globalPosition
    this.localPosition = localPosition
    this.pressure = args.pressure
  }
}
// ForcePressDetails: function ForcePressDetails(t0, t1, t2) {
//   this.globalPosition = t0;
//   this.localPosition = t1;
//   this.pressure = t2;
// },
