import {Size} from '@octoflutter/dartsdk'

export enum HitTestBehavior {
  deferToChild = C.HitTestBehavior_0,
  opaque = C.HitTestBehavior_1,
  translucent = C.HitTestBehavior_2,
}

export abstract class CustomClipper<T> extends N.OctoCustomClipper {
  constructor() {
    super()
  }

  abstract getClip(size: Size): T

  abstract shouldReclip(oldClipper: any): boolean

  private rea(width: any, height: any): T {
    return this.getClip(new Size(width, height))
  }

  private reb(oldClipper: any): boolean {
    return this.shouldReclip(oldClipper)
  }
}
