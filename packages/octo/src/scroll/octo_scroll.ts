import {
  Alignment,
  Axis,
  BoxDecoration,
  ScrollController,
  Colors,
  Decoration,
} from '@octoflutter/flutter'

export class OctoScrollIndicator extends N.OctoScrollIndicator {
  constructor(args: {
    scrollController: ScrollController
    width?: number
    height?: number
    indicatorSize?: number
    decoration?: Decoration
    indicatorDecoration?: Decoration
    alignment?: Alignment
    scrollDirection?: Axis
  }) {
    super(
      args.scrollController,
      args.width ?? 100,
      args.height ?? 10,
      args.indicatorSize ?? 20,
      args.decoration ?? new BoxDecoration({color: Colors.black26}),
      args.indicatorDecoration ?? new BoxDecoration({color: Colors.black}),
      args.alignment ?? Alignment.center,
      args.scrollDirection ?? Axis.horizontal
    )
  }
}

// OctoScrollIndicator: function OctoScrollIndicator(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//     var _ = this;
//     _.scrollController = t0;
//     _.width = t1;
//     _.height = t2;
//     _.indicatorSize = t3;
//     _.decoration = t4;
//     _.indicatorDecoration = t5;
//     _.alignment = t6;
//     _.scrollDirection = t7;
//     _.key0 = t8;
//   },
