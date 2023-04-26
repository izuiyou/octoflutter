export abstract class ScrollPhysics {}

export class AlwaysScrollableScrollPhysics
  extends N.AlwaysScrollableScrollPhysics
  implements ScrollPhysics
{
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class NeverScrollableScrollPhysics
  extends N.NeverScrollableScrollPhysics
  implements ScrollPhysics
{
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class BouncingScrollPhysics
  extends N.BouncingScrollPhysics
  implements ScrollPhysics
{
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class ClampingScrollPhysics
  extends N.ClampingScrollPhysics
  implements ScrollPhysics
{
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class RangeMaintainingScrollPhysics
  extends N.RangeMaintainingScrollPhysics
  implements ScrollPhysics
{
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}
