import {Axis, AxisDirection} from '../painting/basic_types'

export class ScrollMetrics {
  private readonly real: any
  public readonly minScrollExtent: number
  public readonly maxScrollExtent: number
  public readonly pixels: number
  public readonly viewportDimension: number
  public readonly axisDirection: AxisDirection

  constructor(real: any) {
    this.real = real
    const arr = N.attrOfScrollMetrics(real)
    this.minScrollExtent = arr[0]
    this.maxScrollExtent = arr[1]
    this.pixels = arr[2]
    this.viewportDimension = arr[3]
    this.axisDirection = arr[4]
  }
}
