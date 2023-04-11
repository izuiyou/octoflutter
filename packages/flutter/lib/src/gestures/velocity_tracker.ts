import {Offset} from '@octoflutter/dartsdk'
export class Velocity extends N.Velocity {
  static zero = new Velocity({pixelsPerSecond: Offset.zero})

  public readonly pixelsPerSecond: Offset

  constructor(args: {pixelsPerSecond: Offset}) {
    super(args.pixelsPerSecond)
    this.pixelsPerSecond = args.pixelsPerSecond
  }
}
// Velocity: function Velocity(t0) {
//   this.pixelsPerSecond = t0;
// },
