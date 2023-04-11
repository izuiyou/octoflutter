import {Rect} from '@octoflutter/dartsdk'

export class EdgeInsets extends N.EdgeInsets {
  public readonly left: number
  public readonly top: number
  public readonly right: number
  public readonly bottom: number

  constructor(left: number, top: number, right: number, bottom: number) {
    super(left, top, right, bottom)
    this.left = left
    this.top = top
    this.right = right
    this.bottom = bottom
  }

  inflateRect = (rect: Rect): Rect => {
    return new Rect(
      rect.left - this.left,
      rect.top - this.top,
      rect.right + this.right,
      rect.bottom + this.bottom
    )
  }

  deflateRect = (rect: Rect): Rect => {
    return new Rect(
      rect.left + this.left,
      rect.top + this.top,
      rect.right - this.right,
      rect.bottom - this.bottom
    )
  }

  static zero = new EdgeInsets(0, 0, 0, 0)

  static fromLTRB(left: number, top: number, right: number, bottom: number) {
    return new EdgeInsets(left, top, right, bottom)
  }

  static all(value: number) {
    return new EdgeInsets(value, value, value, value)
  }

  static only(args?: {
    left?: number
    top?: number
    right?: number
    bottom?: number
  }) {
    return new EdgeInsets(
      args?.left ?? 0,
      args?.top ?? 0,
      args?.right ?? 0,
      args?.bottom ?? 0
    )
  }

  static symmetric(args?: {vertical?: number; horizontal?: number}) {
    return new EdgeInsets(
      args?.horizontal ?? 0,
      args?.vertical ?? 0,
      args?.horizontal ?? 0,
      args?.vertical ?? 0
    )
  }
}

export class EdgeInsetsDirectional extends N.EdgeInsetsDirectional {
  public readonly start: number
  public readonly top: number
  public readonly end: number
  public readonly bottom: number

  constructor(start: number, top: number, end: number, bottom: number) {
    super(start, top, end, bottom)
    this.start = start
    this.top = top
    this.end = end
    this.bottom = bottom
  }

  static get zero() {
    return new EdgeInsetsDirectional(0, 0, 0, 0)
  }

  static fromSTEB(start: number, top: number, end: number, bottom: number) {
    return new EdgeInsetsDirectional(start, top, end, bottom)
  }

  static only(args?: {
    start?: number
    top?: number
    end?: number
    bottom?: number
  }) {
    return new EdgeInsetsDirectional(
      args?.start ?? 0,
      args?.top ?? 0,
      args?.end ?? 0,
      args?.bottom ?? 0
    )
  }
}

export type EdgeInsetsGeometry = EdgeInsetsDirectional | EdgeInsets
