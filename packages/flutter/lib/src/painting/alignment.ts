import {Offset, Size} from '@octoflutter/dartsdk'

export class Alignment extends N.Alignment {
  public readonly x: number
  public readonly y: number

  constructor(x: number, y: number) {
    super(x, y)
    this.x = x
    this.y = y
  }

  /// The top left corner.
  static topLeft = new Alignment(-1.0, -1.0)

  /// The center point along the top edge.
  static topCenter = new Alignment(0.0, -1.0)

  /// The top right corner.
  static topRight = new Alignment(1.0, -1.0)

  /// The center point along the left edge.
  static centerLeft = new Alignment(-1.0, 0.0)

  /// The center point, both horizontally and vertically.
  static center = new Alignment(0.0, 0.0)

  /// The center point along the right edge.
  static centerRight = new Alignment(1.0, 0.0)

  /// The bottom left corner.
  static bottomLeft = new Alignment(-1.0, 1.0)

  /// The center point along the bottom edge.
  static bottomCenter = new Alignment(0.0, 1.0)

  /// The bottom right corner.
  static bottomRight = new Alignment(1.0, 1.0)

  alongSize(other: Size): Offset {
    const centerX = other.width / 2
    const centerY = other.height / 2
    return new Offset(centerX + this.x * centerX, centerY + this.y * centerY)
  }
}

export class AlignmentDirectional extends N.AlignmentDirectional {
  public readonly start: number
  public readonly y: number

  constructor(start: number, y: number) {
    super(start, y)
    this.start = start
    this.y = y
  }
}

export type AlignmentGeometry = Alignment | AlignmentDirectional
