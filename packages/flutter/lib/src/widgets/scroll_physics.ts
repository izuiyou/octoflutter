export class AlwaysScrollableScrollPhysics extends N.AlwaysScrollableScrollPhysics {
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class NeverScrollableScrollPhysics extends N.NeverScrollableScrollPhysics {
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class BouncingScrollPhysics extends N.BouncingScrollPhysics {
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class ClampingScrollPhysics extends N.ClampingScrollPhysics {
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export class RangeMaintainingScrollPhysics extends N.RangeMaintainingScrollPhysics {
  constructor(parent?: ScrollPhysics) {
    super(parent)
  }
}

export type ScrollPhysics =
  | AlwaysScrollableScrollPhysics
  | NeverScrollableScrollPhysics
  | RangeMaintainingScrollPhysics
  | BouncingScrollPhysics
  | ClampingScrollPhysics
