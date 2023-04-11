import {Key, octoKey} from '../foundation/key'
import {TickerProvider} from '../scheduler/ticker'
import {BuildContext, Widget} from './framework'

export abstract class SliverPersistentHeaderDelegate extends N.OctoSliverPersistentHeaderDelegate {
  private spa(context, shrinkOffset, overlapsContent) {
    return this.build(new BuildContext(context), shrinkOffset, overlapsContent)
  }

  private spb() {
    return this.maxExtent
  }

  private spc() {
    return this.minExtent
  }

  private spd() {
    return this.vsync
  }

  private spe(delegate) {
    return this.shouldRebuild(delegate)
  }

  public abstract build(
    context: BuildContext,
    shrinkOffset: number,
    overlapsContent: boolean
  ): Widget

  public abstract get maxExtent(): number

  public abstract get minExtent(): number

  public abstract get vsync(): TickerProvider | null | undefined

  public abstract shouldRebuild(
    oldDelegate: SliverPersistentHeaderDelegate
  ): boolean
}

export class SliverPersistentHeader extends N.SliverPersistentHeader {
  constructor(args: {
    key?: Key
    delegate: SliverPersistentHeaderDelegate
    pinned?: boolean
    floating?: boolean
  }) {
    super(
      args.delegate,
      args.pinned ?? false,
      args.floating ?? false,
      args.key?.[octoKey]
    )
  }
}

// SliverPersistentHeader: function SliverPersistentHeader(t0, t1, t2, t3) {
//     var _ = this;
//     _.delegate = t0;
//     _.pinned = t1;
//     _.floating = t2;
//     _.key0 = t3;
//   },
