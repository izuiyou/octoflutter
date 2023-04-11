import {Offset, Rect} from '@octoflutter/dartsdk'

export class RenderObject extends N.OctoRenderObject {
  constructor(real: any) {
    super(real)
  }

  get paintBounds(): Rect {
    const arr = super.rej()
    return new Rect(arr[0], arr[1], arr[2], arr[3])
  }

  get semanticBounds(): Rect {
    const arr = super.rek()
    return new Rect(arr[0], arr[1], arr[2], arr[3])
  }

  localToGlobal(point: Offset, ancestor?: RenderObject): Offset {
    const arr = super.rel(point, ancestor)
    return new Offset(arr[0], arr[1])
  }

  globalToLocal(point: Offset, ancestor?: RenderObject): Offset {
    const arr = super.rem(point, ancestor)
    return new Offset(arr[0], arr[1])
  }
}
