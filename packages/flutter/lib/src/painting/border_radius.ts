import {Radius} from '@octoflutter/dartsdk'

export class BorderRadius extends N.BorderRadius {
  constructor(args?: {
    topLeft?: Radius
    topRight?: Radius
    bottomLeft?: Radius
    bottomRight?: Radius
  }) {
    super(
      args?.topLeft ?? Radius.zero,
      args?.topRight ?? Radius.zero,
      args?.bottomLeft ?? Radius.zero,
      args?.bottomRight ?? Radius.zero
    )
  }

  static all(radius: Radius) {
    return new BorderRadius({
      topLeft: radius,
      topRight: radius,
      bottomLeft: radius,
      bottomRight: radius,
    })
  }

  static circular(radius: number) {
    return BorderRadius.all(Radius.circular(radius))
  }

  static only(args?: {
    topLeft?: Radius
    topRight?: Radius
    bottomLeft?: Radius
    bottomRight?: Radius
  }) {
    return new BorderRadius(args)
  }

  static zero = BorderRadius.all(Radius.zero)

  static vertical(args?: {top?: Radius; bottom?: Radius}) {
    return new BorderRadius({
      topRight: args?.top,
      topLeft: args?.top,
      bottomRight: args?.bottom,
      bottomLeft: args?.bottom,
    })
  }

  static horizontal(args?: {left?: Radius; right?: Radius}) {
    return new BorderRadius({
      topLeft: args?.left,
      bottomLeft: args?.left,
      topRight: args?.right,
      bottomRight: args?.right,
    })
  }
}

export class BorderRadiusDirectional extends N.BorderRadiusDirectional {
  constructor(args?: {
    topStart?: Radius
    topEnd?: Radius
    bottomStart?: Radius
    bottomEnd?: Radius
  }) {
    super(
      args?.topStart ?? Radius.zero,
      args?.topEnd ?? Radius.zero,
      args?.bottomStart ?? Radius.zero,
      args?.bottomEnd ?? Radius.zero
    )
  }

  static circular(radius: number) {
    const r = Radius.circular(radius)
    return BorderRadiusDirectional.all(r)
  }

  static all(radius: Radius) {
    return new BorderRadiusDirectional({
      topStart: radius,
      topEnd: radius,
      bottomEnd: radius,
      bottomStart: radius,
    })
  }

  static only(args?: {
    topStart?: Radius
    topEnd?: Radius
    bottomStart?: Radius
    bottomEnd?: Radius
  }) {
    return new BorderRadiusDirectional({
      topStart: args?.topStart ?? Radius.zero,
      topEnd: args?.topEnd ?? Radius.zero,
      bottomStart: args?.bottomStart ?? Radius.zero,
      bottomEnd: args?.bottomEnd ?? Radius.zero,
    })
  }

  static zero = BorderRadiusDirectional.all(Radius.zero)

  static vertical(args?: {top?: Radius; bottom?: Radius}) {
    return new BorderRadiusDirectional({
      topStart: args?.top,
      topEnd: args?.top,
      bottomStart: args?.bottom,
      bottomEnd: args?.bottom,
    })
  }

  static horizontal(args?: {start?: Radius; end?: Radius}) {
    return new BorderRadiusDirectional({
      topStart: args?.start,
      bottomStart: args?.start,
      topEnd: args?.end,
      bottomEnd: args?.end,
    })
  }
}

export type BorderRadiusGeometry = BorderRadiusDirectional | BorderRadius
