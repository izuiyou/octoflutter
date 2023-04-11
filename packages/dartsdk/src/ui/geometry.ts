import {lerpNumber} from './lerp'

export class Offset extends N.Offset {
  static zero = new Offset(0.0, 0.0)

  public readonly dx: number
  public readonly dy: number
  constructor(dx: number, dy: number) {
    super(dx, dy)
    this.dx = dx
    this.dy = dy
  }

  static fromDirection = (direction: number, distance = 1.0): Offset => {
    return new Offset(
      distance * Math.cos(direction),
      distance * Math.sin(direction)
    )
  }

  get distance(): number {
    return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
  }

  get distanceSquared(): number {
    return this.dx * this.dx + this.dy * this.dy
  }

  get direction(): number {
    return Math.atan2(this.dy, this.dx)
  }

  scale = (scaleX: number, scaleY: number): Offset => {
    return new Offset(this.dx * scaleX, this.dy * scaleY)
  }

  translate = (translateX: number, translateY: number): Offset => {
    return new Offset(this.dx + translateX, this.dy + translateY)
  }

  static lerp(a: Offset, b: Offset, t: number): Offset {
    if (b === null) {
      if (a === null) {
        return null
      } else {
        return new Offset(a.dx * (1.0 - t), a.dy * (1.0 - t))
      }
    } else {
      if (a === null) {
        return new Offset(b.dx * t, b.dy * t)
      } else {
        return new Offset(lerpNumber(a.dx, b.dx, t), lerpNumber(a.dy, b.dy, t))
      }
    }
  }
}

export class Size extends N.Size {
  public readonly width: number
  public readonly height: number
  constructor(width: number, height: number) {
    super(width, height)
    this.width = width
    this.height = height
  }

  static copy(source: Size): Size {
    return new Size(source.width, source.height)
  }

  static square(dimension: number): Size {
    return new Size(dimension, dimension)
  }

  static lerp(a: Size, b: Size, t: number): Size {
    if (b === null) {
      if (a === null) {
        return null
      } else {
        return new Size(a.width * (1.0 - t), a.height * (1.0 - t))
      }
    } else {
      if (a === null) {
        return new Size(b.width * t, b.height * t)
      } else {
        return new Size(
          lerpNumber(a.width, b.width, t),
          lerpNumber(a.height, b.height, t)
        )
      }
    }
  }

  static fromHeight(height: number) {
    return new Size(Number.POSITIVE_INFINITY, height)
  }

  static fromWidth(width: number) {
    return new Size(width, Number.POSITIVE_INFINITY)
  }

  static fromRadius(radius: number) {
    return new Size(radius * 2.0, radius * 2.0)
  }

  static zero = new Size(0, 0)

  get aspectRatio(): number {
    if (this.height !== 0.0) return this.width / this.height
    if (this.width > 0.0) return Number.POSITIVE_INFINITY
    if (this.width < 0.0) return Number.NEGATIVE_INFINITY
    return 0.0
  }

  get isEmpty(): boolean {
    return this.width <= 0.0 || this.height <= 0.0
  }
}

export class Rect extends N.Rect {
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

  static fromLTRB(
    left: number,
    top: number,
    right: number,
    bottom: number
  ): Rect {
    return new Rect(left, top, right, bottom)
  }

  static fromLTWH(
    left: number,
    top: number,
    width: number,
    height: number
  ): Rect {
    return new Rect(left, top, left + width, top + height)
  }

  get width(): number {
    return this.right - this.left
  }

  get height(): number {
    return this.bottom - this.top
  }

  get isEmpty(): boolean {
    return this.left >= this.right || this.top >= this.bottom
  }

  get topLeft(): Offset {
    return new Offset(this.left, this.top)
  }

  get topCenter(): Offset {
    return new Offset(this.left + this.width * 0.5, this.top)
  }

  get topRight(): Offset {
    return new Offset(this.right, this.top)
  }

  get centerLeft(): Offset {
    return new Offset(this.left, this.top + this.height * 0.5)
  }

  get center(): Offset {
    return new Offset(
      this.left + this.width * 0.5,
      this.top + this.height * 0.5
    )
  }

  get centerRight(): Offset {
    return new Offset(this.right, this.top + this.height * 0.5)
  }

  get bottomLeft(): Offset {
    return new Offset(this.left, this.bottom)
  }

  get bottomCenter(): Offset {
    return new Offset(this.left + this.width * 0.5, this.bottom)
  }

  get bottomRight(): Offset {
    return new Offset(this.right, this.bottom)
  }

  shift = (offset: Offset): Rect => {
    return Rect.fromLTRB(
      this.left + offset.dx,
      this.top + offset.dy,
      this.right + offset.dx,
      this.bottom + offset.dy
    )
  }

  translate = (translateX: number, translateY: number): Rect => {
    return Rect.fromLTRB(
      this.left + translateX,
      this.top + translateY,
      this.right + translateX,
      this.bottom + translateY
    )
  }

  inflate = (delta: number): Rect => {
    return Rect.fromLTRB(
      this.left - delta,
      this.top - delta,
      this.right + delta,
      this.bottom + delta
    )
  }

  deflate = (delta: number): Rect => {
    return this.inflate(-delta)
  }

  intersect = (other: Rect): Rect => {
    return Rect.fromLTRB(
      Math.max(this.left, other.left),
      Math.max(this.top, other.top),
      Math.min(this.right, other.right),
      Math.min(this.bottom, other.bottom)
    )
  }

  expandToInclude = (other: Rect): Rect => {
    return Rect.fromLTRB(
      Math.min(this.left, other.left),
      Math.min(this.top, other.top),
      Math.max(this.right, other.right),
      Math.max(this.bottom, other.bottom)
    )
  }

  contains = (offset: Offset): boolean => {
    return (
      offset.dx >= this.left &&
      offset.dx < this.right &&
      offset.dy >= this.top &&
      offset.dy < this.bottom
    )
  }

  static lerp(a: Rect, b: Rect, t: number): Rect {
    if (b === null) {
      if (a === null) {
        return null
      } else {
        const k = 1.0 - t
        return Rect.fromLTRB(a.left * k, a.top * k, a.right * k, a.bottom * k)
      }
    } else {
      if (a === null) {
        return Rect.fromLTRB(b.left * t, b.top * t, b.right * t, b.bottom * t)
      } else {
        return Rect.fromLTRB(
          lerpNumber(a.left, b.left, t),
          lerpNumber(a.top, b.top, t),
          lerpNumber(a.right, b.right, t),
          lerpNumber(a.bottom, b.bottom, t)
        )
      }
    }
  }
}

export class Radius extends N.Radius {
  public readonly x: number
  public readonly y: number

  constructor(x: number, y: number) {
    super(x, y)
    this.x = x
    this.y = y
  }

  static circular(radius: number) {
    return new Radius(radius, radius)
  }

  static elliptical(x: number, y: number) {
    return new Radius(x, y)
  }

  static zero = Radius.circular(0)

  static lerp(a: Radius, b: Radius, t: number): Radius {
    if (b === null) {
      if (a === null) {
        return null
      } else {
        return new Radius(a.x * (1.0 - t), a.y * (1.0 - t))
      }
    } else {
      if (a === null) {
        return new Radius(b.x * t, b.y * t)
      } else {
        return new Radius(lerpNumber(a.x, b.x, t), lerpNumber(a.y, b.y, t))
      }
    }
  }
}

export class RRect extends N.RRect {
  public readonly left: number

  public readonly top: number

  public readonly right: number

  public readonly bottom: number

  public readonly tlRadiusX: number

  public readonly tlRadiusY: number

  public readonly trRadiusX: number

  public readonly trRadiusY: number

  public readonly brRadiusX: number

  public readonly brRadiusY: number

  public readonly blRadiusX: number

  public readonly blRadiusY: number

  constructor(
    left: number,
    top: number,
    right: number,
    bottom: number,
    tlRadiusX: number,
    tlRadiusY: number,
    trRadiusX: number,
    trRadiusY: number,
    brRadiusX: number,
    brRadiusY: number,
    blRadiusX: number,
    blRadiusY: number
  ) {
    super(
      left,
      top,
      right,
      bottom,
      tlRadiusX,
      tlRadiusY,
      trRadiusX,
      trRadiusY,
      brRadiusX,
      brRadiusY,
      blRadiusX,
      blRadiusY
    )
    this.left = left
    this.top = top
    this.right = right
    this.bottom = bottom
    this.tlRadiusX = tlRadiusX
    this.tlRadiusY = tlRadiusY
    this.trRadiusX = trRadiusX
    this.trRadiusY = trRadiusY
    this.brRadiusX = brRadiusX
    this.brRadiusY = brRadiusY
    this.blRadiusX = blRadiusX
    this.blRadiusY = blRadiusY
  }

  static fromLTRBXY(
    left: number,
    top: number,
    right: number,
    bottom: number,
    radiusX: number,
    radiusY: number
  ) {
    return new RRect(
      left,
      top,
      right,
      bottom,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX,
      radiusY
    )
  }

  static fromLTRBR(
    left: number,
    top: number,
    right: number,
    bottom: number,
    radius: Radius
  ) {
    return new RRect(
      left,
      top,
      right,
      bottom,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x,
      radius.y
    )
  }

  static fromRectXY(rect: Rect, radiusX: number, radiusY: number) {
    return new RRect(
      rect.left,
      rect.top,
      rect.right,
      rect.bottom,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX,
      radiusY
    )
  }

  static fromRectAndRadius(rect: Rect, radius: Radius) {
    return new RRect(
      rect.left,
      rect.top,
      rect.right,
      rect.bottom,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x,
      radius.y
    )
  }

  static fromLTRBAndCorners(
    left: number,
    top: number,
    right: number,
    bottom: number,
    args: {
      topLeft?: Radius
      topRight?: Radius
      bottomRight?: Radius
      bottomLeft?: Radius
    } = {}
  ) {
    const p1 = args.topLeft?.x ?? 0
    const p2 = args.topLeft?.y ?? 0
    const p3 = args.topRight?.x ?? 0
    const p4 = args.topRight?.y ?? 0
    const p5 = args.bottomRight?.x ?? 0
    const p6 = args.bottomRight?.y ?? 0
    const p7 = args.bottomLeft?.x ?? 0
    const p8 = args.bottomLeft?.y ?? 0
    return new RRect(left, top, right, bottom, p1, p2, p3, p4, p5, p6, p7, p8)
  }

  static fromRectAndCorners(
    rect: Rect,
    args: {
      topLeft?: Radius
      topRight?: Radius
      bottomRight?: Radius
      bottomLeft?: Radius
    } = {}
  ) {
    const p1 = args.topLeft?.x ?? 0
    const p2 = args.topLeft?.y ?? 0
    const p3 = args.topRight?.x ?? 0
    const p4 = args.topRight?.y ?? 0
    const p5 = args.bottomRight?.x ?? 0
    const p6 = args.bottomRight?.y ?? 0
    const p7 = args.bottomLeft?.x ?? 0
    const p8 = args.bottomLeft?.y ?? 0
    return new RRect(
      rect.left,
      rect.top,
      rect.right,
      rect.bottom,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8
    )
  }

  _getMin = (min, radius1, radius2, limit): number => {
    const sum = radius1 + radius2
    if (sum > limit && sum !== 0.0) return Math.min(min, limit / sum)
    return min
  }

  scaleRadii(): RRect {
    let scale = 1.0
    scale = this._getMin(scale, this.blRadiusY, this.tlRadiusY, this.height)
    scale = this._getMin(scale, this.tlRadiusX, this.trRadiusX, this.width)
    scale = this._getMin(scale, this.trRadiusY, this.brRadiusY, this.height)
    scale = this._getMin(scale, this.brRadiusX, this.blRadiusX, this.width)

    if (scale < 1.0) {
      return new RRect(
        this.top,
        this.left,
        this.right,
        this.bottom,
        this.tlRadiusX * scale,
        this.tlRadiusY * scale,
        this.trRadiusX * scale,
        this.trRadiusY * scale,
        this.blRadiusX * scale,
        this.blRadiusY * scale,
        this.brRadiusX * scale,
        this.brRadiusY * scale
      )
    }

    return new RRect(
      this.top,
      this.left,
      this.right,
      this.bottom,
      this.tlRadiusX,
      this.tlRadiusY,
      this.trRadiusX,
      this.trRadiusY,
      this.blRadiusX,
      this.blRadiusY,
      this.brRadiusX,
      this.brRadiusY
    )
  }

  contains = (point: Offset): boolean => {
    if (
      point.dx < this.left ||
      point.dx >= this.right ||
      point.dy < this.top ||
      point.dy >= this.bottom
    ) {
      return false // outside bounding box
    }

    const scaled = this.scaleRadii()

    let x
    let y
    let radiusX
    let radiusY
    // check whether point is in one of the rounded corner areas
    // x, y -> translate to ellipse center
    if (
      point.dx < this.left + scaled.tlRadiusX &&
      point.dy < this.top + scaled.tlRadiusY
    ) {
      x = point.dx - this.left - scaled.tlRadiusX
      y = point.dy - this.top - scaled.tlRadiusY
      radiusX = scaled.tlRadiusX
      radiusY = scaled.tlRadiusY
    } else if (
      point.dx > this.right - scaled.trRadiusX &&
      point.dy < this.top + scaled.trRadiusY
    ) {
      x = point.dx - this.right + scaled.trRadiusX
      y = point.dy - this.top - scaled.trRadiusY
      radiusX = scaled.trRadiusX
      radiusY = scaled.trRadiusY
    } else if (
      point.dx > this.right - scaled.brRadiusX &&
      point.dy > this.bottom - scaled.brRadiusY
    ) {
      x = point.dx - this.right + scaled.brRadiusX
      y = point.dy - this.bottom + scaled.brRadiusY
      radiusX = scaled.brRadiusX
      radiusY = scaled.brRadiusY
    } else if (
      point.dx < this.left + scaled.blRadiusX &&
      point.dy > this.bottom - scaled.blRadiusY
    ) {
      x = point.dx - this.left - scaled.blRadiusX
      y = point.dy - this.bottom + scaled.blRadiusY
      radiusX = scaled.blRadiusX
      radiusY = scaled.blRadiusY
    } else {
      return true // inside and not within the rounded corner area
    }

    x = x / radiusX
    y = y / radiusY
    // check if the point is outside the unit circle
    if (x * x + y * y > 1.0) {
      return false
    }
    return true
  }
}
