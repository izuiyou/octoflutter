import {isNullOrUndefined, Size} from '@octoflutter/dartsdk'

export class BoxConstraints extends N.BoxConstraints {
  public readonly minWidth: number
  public readonly maxWidth: number
  public readonly minHeight: number
  public readonly maxHeight: number

  constructor(args?: {
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
  }) {
    const minW = args?.minWidth ?? 0
    const maxW = args?.maxWidth ?? Number.POSITIVE_INFINITY
    const minH = args?.minHeight ?? 0
    const maxH = args?.maxHeight ?? Number.POSITIVE_INFINITY
    super(minW, maxW, minH, maxH)
    this.minWidth = minW
    this.maxWidth = maxW
    this.minHeight = minH
    this.maxHeight = maxH
  }

  static tight(size: Size) {
    return new BoxConstraints({
      minWidth: size.width,
      maxWidth: size.width,
      minHeight: size.height,
      maxHeight: size.height,
    })
  }

  static tightFor(args?: {width?: number; height?: number}) {
    return new BoxConstraints({
      minWidth: args?.width ?? 0,
      maxWidth: args?.width ?? Number.POSITIVE_INFINITY,
      minHeight: args?.height ?? 0,
      maxHeight: args?.height ?? Number.POSITIVE_INFINITY,
    })
  }

  clamp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max)
  }

  tighten(args?: {width?: number; height?: number}): BoxConstraints {
    return new BoxConstraints({
      minWidth: isNullOrUndefined(args?.width)
        ? this.minWidth
        : this.clamp(args?.width, this.minWidth, this.maxWidth),
      maxWidth: isNullOrUndefined(args?.width)
        ? this.maxWidth
        : this.clamp(args?.width, this.minWidth, this.maxWidth),
      minHeight: isNullOrUndefined(args?.height)
        ? this.minHeight
        : this.clamp(args?.height, this.minHeight, this.maxHeight),
      maxHeight: isNullOrUndefined(args?.height)
        ? this.maxHeight
        : this.clamp(args?.height, this.minHeight, this.maxHeight),
    })
  }

  static tightForFinite(args?: {width?: number; height?: number}) {
    const p = Number.POSITIVE_INFINITY
    return new BoxConstraints({
      minWidth: args?.width !== p ? args?.width : 0,
      maxWidth: args?.width !== p ? args?.width : p,
      minHeight: args?.height !== p ? args?.height : 0,
      maxHeight: args?.height !== p ? args?.height : p,
    })
  }

  static loose(size: Size) {
    return new BoxConstraints({
      minWidth: 0,
      maxWidth: size.width,
      minHeight: 0,
      maxHeight: size.height,
    })
  }

  static expand(args?: {width?: number; height?: number}) {
    const p = Number.POSITIVE_INFINITY
    return new BoxConstraints({
      minWidth: args?.width ?? p,
      maxWidth: args?.width ?? p,
      minHeight: args?.height ?? p,
      maxHeight: args?.height ?? p,
    })
  }
}
