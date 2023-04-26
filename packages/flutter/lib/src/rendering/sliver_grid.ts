export abstract class SliverGridDelegate {}

export class SliverGridDelegateWithFixedCrossAxisCount
  extends N.SliverGridDelegateWithFixedCrossAxisCount
  implements SliverGridDelegate
{
  constructor(args: {
    crossAxisCount: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    childAspectRatio?: number
    mainAxisExtent?: number
  }) {
    super(
      args.crossAxisCount,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      args.childAspectRatio ?? 1,
      args.mainAxisExtent
    )
  }
}

// SliverGridDelegateWithFixedCrossAxisCount: function SliverGridDelegateWithFixedCrossAxisCount(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.crossAxisCount = t0;
//     _.mainAxisSpacing = t1;
//     _.crossAxisSpacing = t2;
//     _.childAspectRatio = t3;
//     _.mainAxisExtent = t4;
//   },

export class SliverGridDelegateWithMaxCrossAxisExtent
  extends N.SliverGridDelegateWithMaxCrossAxisExtent
  implements SliverGridDelegate
{
  constructor(args: {
    maxCrossAxisExtent: number
    mainAxisSpacing?: number
    crossAxisSpacing?: number
    childAspectRatio?: number
    mainAxisExtent?: number
  }) {
    super(
      args.maxCrossAxisExtent,
      args.mainAxisSpacing ?? 0,
      args.crossAxisSpacing ?? 0,
      args.childAspectRatio ?? 1,
      args.mainAxisExtent
    )
  }
}

// SliverGridDelegateWithMaxCrossAxisExtent: function SliverGridDelegateWithMaxCrossAxisExtent(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.maxCrossAxisExtent = t0;
//     _.mainAxisSpacing = t1;
//     _.crossAxisSpacing = t2;
//     _.childAspectRatio = t3;
//     _.mainAxisExtent = t4;
//   },
