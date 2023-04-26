import {Offset, Radius, Rect, RRect} from './geometry'
import {clampNumber, floor, lerpNumber} from './lerp'
export type ImageDecoderCallback = (image: Image) => void

export class Color extends N.Color {
  private readonly hex: number

  constructor(hex: number) {
    const v = hex
    super(v >>> 0)
    this.hex = hex
  }

  static fromARGB(a: number, r: number, g: number, b: number) {
    const hex =
      (((a & 0xff) << 24) |
        ((r & 0xff) << 16) |
        ((g & 0xff) << 8) |
        (b & 0xff)) &
      0xffffffff
    return new Color(hex)
  }

  static fromRGBO(r: number, g: number, b: number, opacity: number) {
    const hex =
      (((((opacity * 0xff) / 1) & 0xff) << 24) |
        ((r & 0xff) << 16) |
        ((g & 0xff) << 8) |
        ((b & 0xff) << 0)) &
      0xffffffff

    return new Color(hex)
  }

  withAlpha(a: number): Color {
    return Color.fromARGB(floor(a), this.red, this.green, this.blue)
  }

  withOpacity(opacity: number): Color {
    if (opacity >= 0.0 && opacity <= 1.0) {
      return this.withAlpha(255.0 * opacity)
    }
    return this
  }

  get alpha(): number {
    return (0xff000000 & this.hex) >> 24
  }

  get red(): number {
    return (0x00ff0000 & this.hex) >> 16
  }

  get green(): number {
    return (0x0000ff00 & this.hex) >> 8
  }

  get blue(): number {
    return (0x000000ff & this.hex) >> 0
  }

  get value(): number {
    return this.hex >>> 0
  }

  static lerp(a: Color, b: Color, t: number): Color {
    if (b === null) {
      if (a === null) {
        return null
      } else {
        return _scaleAlpha(a, 1.0 - t)
      }
    } else {
      if (a === null) {
        return _scaleAlpha(b, t)
      } else {
        return Color.fromARGB(
          floor(clampNumber(lerpNumber(a.alpha, b.alpha, t) & 0xff, 0, 255)),
          floor(clampNumber(lerpNumber(a.red, b.red, t) & 0xff, 0, 255)),
          floor(clampNumber(lerpNumber(a.green, b.green, t) & 0xff, 0, 255)),
          floor(clampNumber(lerpNumber(a.blue, b.blue, t) & 0xff, 0, 255))
        )
      }
    }
  }

  static linearizeColorComponent = (component: number): number => {
    if (component <= 0.03928) return component / 12.92
    return Math.pow((component + 0.055) / 1.055, 2.4)
  }

  computeLuminance(): number {
    const R = Color.linearizeColorComponent(this.red / 0xff)
    const G = Color.linearizeColorComponent(this.green / 0xff)
    const B = Color.linearizeColorComponent(this.blue / 0xff)
    return 0.2126 * R + 0.7152 * G + 0.0722 * B
  }
}

function _scaleAlpha(a: Color, factor: number): Color {
  return a.withAlpha(clampNumber(a.alpha * factor, 0, 255))
}

export enum BlendMode {
  clear = C.BlendMode_0,
  src = C.BlendMode_1,
  dst = C.BlendMode_2,
  srcOver = C.BlendMode_3,
  dstOver = C.BlendMode_4,
  srcIn = C.BlendMode_5,
  dstIn = C.BlendMode_6,
  srcOut = C.BlendMode_7,
  dstOut = C.BlendMode_8,
  srcATop = C.BlendMode_9,
  dstATop = C.BlendMode_10,
  xor = C.BlendMode_11,
  plus = C.BlendMode_12,
  modulate = C.BlendMode_13,
  screen = C.BlendMode_14,
  overlay = C.BlendMode_15,
  darken = C.BlendMode_16,
  lighten = C.BlendMode_17,
  colorDodge = C.BlendMode_18,
  colorBurn = C.BlendMode_19,
  hardLight = C.BlendMode_20,
  softLight = C.BlendMode_21,
  difference = C.BlendMode_22,
  exclusion = C.BlendMode_23,
  multiply = C.BlendMode_24,
  hue = C.BlendMode_25,
  saturation = C.BlendMode_26,
  color = C.BlendMode_27,
  luminosity = C.BlendMode_28,
}

export class MaskFilter {
  static blur = (style: BlurStyle, sigma: number): MaskFilter => {
    return N.maskFilterInstance(style, sigma)
  }
}

export class ImageFilter {
  static blur(args?: {sigmaX?: number; sigmaY?: number; tileMode?: TileMode}) {
    return N.imageFilterBlurInstance(
      args?.sigmaX ?? 0,
      args?.sigmaX ?? 0,
      args?.tileMode ?? TileMode.clamp
    ) as ImageFilter
  }

  static matrix(matrix4: Float64Array, filterQuality: FilterQuality) {
    return N.imageFilterMatrixInstance(
      matrix4,
      filterQuality ?? FilterQuality.low
    )
  }

  static compose(args: {outer: ImageFilter; inner: ImageFilter}) {
    return N.imageFilterComposeInstance(args.outer, args.inner)
  }
}

export class ColorFilter {
  static mode(color: Color, mode: BlendMode) {
    return N.colorFilterModeInstance(color, mode) as ColorFilter
  }

  static matrix(matrix: Float32Array) {
    return N.colorFilterMatrixInstance(matrix) as ColorFilter
  }

  static linearToSrgbGamma() {
    return N.colorFilterLtsInstance() as ColorFilter
  }

  static srgbToLinearGamma() {
    return N.colorFilterStlInstance() as ColorFilter
  }
}

export enum TileMode {
  clamp = C.TileMode_0,
  repeated = C.TileMode_1,
  mirror = C.TileMode_2,
  decal = C.TileMode_3,
}

export abstract class Shader {}

export type ImageDecodeCallback = (image: Image) => void

export const decodeImageFromList = (
  list: Uint8Array,
  callback: ImageDecodeCallback
) => {
  N.decodeImageFromList(list, callback)
}

//=====FixBegin
export class Image extends N.CkImage {
  get width() {
    return N.octoGetImageWidth(this)
  }
  get height() {
    return N.octoGetImageHeight(this)
  }
}

if (!Object.prototype.hasOwnProperty.call(N.CkImage.prototype, 'width')) {
  Object.defineProperty(N.CkImage.prototype, 'width', {
    get: function () {
      return N.octoGetImageWidth(this)
    },
    enumerable: false,
    configurable: true,
  })
}

if (!Object.prototype.hasOwnProperty.call(N.CkImage.prototype, 'height')) {
  Object.defineProperty(N.CkImage.prototype, 'height', {
    get: function () {
      return N.octoGetImageHeight(this)
    },
    enumerable: false,
    configurable: true,
  })
}

export class ImageShader extends N.CkImageShader implements Shader {
  constructor(args: {
    image: Image
    tmx: TileMode
    tmy: TileMode
    matrix4: Float64Array
    filterQuality?: FilterQuality
  }) {
    super(
      args.tmx,
      args.tmy,
      args.matrix4,
      args?.filterQuality ?? FilterQuality.low,
      args.image
    )
  }
}
//=====FixEnd

// export class Image extends N.CkImage {
//   get width() {
//     return N.octoGetImageWidth(this)
//   }
//   get height() {
//     return N.octoGetImageHeight(this)
//   }
// }

// export class ImageShader extends N.CkImageShader implements Shader {
//   constructor(args: {
//     image: Image
//     tmx: TileMode
//     tmy: TileMode
//     matrix4: Float64Array
//     filterQuality?: FilterQuality
//   }) {
//     super(
//       args.tmx,
//       args.tmy,
//       args.matrix4,
//       args?.filterQuality ?? FilterQuality.low,
//       args.image
//     )
//   }
// }

// CkImageShader: function CkImageShader(t0, t1, t2, t3, t4) {
//   var _ = this;
//   _.tileModeX = t0;
//   _.tileModeY = t1;
//   _.matrix4 = t2;
//   _.filterQuality = t3;
//   _._image = t4;
//   _.rawSkiaObject = _._cachedQuality = null;
// },

export class Gradient implements Shader {
  // linearInstance: function(from, to, colors, colorStops, tileMode, matrix4) {
  //     return N.Gradient_Gradient$linear(from, to, colors, colorStops, tileMode, matrix4);
  //   },
  static linear = (args: {
    from: Offset
    to: Offset
    colors: Array<Color>
    colorStops?: Array<number>
    tileMode?: TileMode
    matrix4?: Float64Array
  }) => {
    return N.linearInstance(
      args.from,
      args.to,
      args.colors,
      args.colorStops,
      args.tileMode ?? TileMode.clamp,
      args.matrix4
    ) as Gradient
  }

  // radialInstance: function(center, radius, colors, colorStops, tileMode, matrix4, focal, focalRadius) {
  //     return N.Gradient_Gradient$radial(center, radius, colors, colorStops, tileMode, matrix4, focal, focalRadius);
  //   },
  static radial = (args: {
    center: Offset
    radius: number
    colors: Array<Color>
    colorStops?: Array<number>
    tileMode?: TileMode
    matrix4?: Float64Array
    focal?: Offset
    focalRadius?: number
  }) => {
    const defaultTileMode = TileMode.clamp
    const defaultFocalRadius = 0.0

    const tileMode = args.tileMode ?? defaultTileMode
    const focalRadius = args.focalRadius ?? defaultFocalRadius

    return N.radialInstance(
      args.center,
      args.radius,
      args.colors,
      args.colorStops,
      tileMode,
      args.matrix4,
      args.focal,
      focalRadius
    ) as Gradient
  }

  //   sweepInstance: function(center, colors, colorStops, tileMode, startAngle, endAngle, matrix4) {
  //     var t1 = new N.CkGradientSweep(center, colors, colorStops, tileMode, startAngle, endAngle, matrix4 != null ? N.toMatrix32(matrix4) : null);
  //     t1.ManagedSkiaObject$1(null);
  //     N._validateColorStops(colors, colorStops);
  //     return t1;
  //   },
  static sweep = (args: {
    center: Offset
    colors: Array<Color>
    colorStops?: Array<number>
    tileMode?: TileMode
    startAngle?: number
    endAngle?: number
    matrix4?: Float64Array
  }) => {
    const tileMode = args.tileMode ?? TileMode.clamp
    const startAngle = args.startAngle ?? 0.0
    const endAngle = args.endAngle ?? Math.PI * 2

    return N.sweepInstance(
      args.center,
      args.colors,
      args.colorStops,
      tileMode,
      startAngle,
      endAngle,
      args.matrix4
    ) as Gradient
  }
}

export enum FilterQuality {
  none = C.FilterQuality_0,
  low = C.FilterQuality_1,
  medium = C.FilterQuality_2,
  high = C.FilterQuality_3,
}

export enum Clip {
  none = C.Clip_0,
  hardEdge = C.Clip_1,
  antiAlias = C.Clip_2,
  antiAliasWithSaveLayer = C.Clip_3,
}

export enum PaintingStyle {
  fill = C.PaintingStyle_0,
  stroke = C.PaintingStyle_1,
}

export enum BlurStyle {
  normal = C.BlurStyle_0,
  solid = C.BlurStyle_1,
  outer = C.BlurStyle_2,
  inner = C.BlurStyle_3,
}

export enum StrokeCap {
  butt = C.StrokeCap_0,
  round = C.StrokeCap_1,
  square = C.StrokeCap_2,
}

export enum StrokeJoin {
  miter = C.StrokeJoin_0,
  round = C.StrokeJoin_1,
  bevel = C.StrokeJoin_2,
}

export enum PathFillType {
  nonZero = C.PathFillType_0,
  evenOdd = C.PathFillType_1,
}

export enum ClipOp {
  difference = C.ClipOp_0,
  intersect = C.ClipOp_1,
}

export class Paint extends N.OctoPaint {
  private real: any

  constructor() {
    const p = N.octoPaintInstance()
    super(p)
    this.real = p
  }

  set isAntiAlias(value: boolean) {
    super.pta(value)
  }

  set color(value: Color) {
    super.ptb(value)
  }

  set blendMode(value: BlendMode) {
    super.ptc(value)
  }

  set style(value: PaintingStyle) {
    super.ptd(value)
  }

  set strokeWidth(value: number) {
    super.pte(value)
  }

  set strokeCap(value: StrokeCap) {
    super.ptf(value)
  }

  set strokeJoin(value: StrokeJoin) {
    super.ptg(value)
  }

  set strokeMiterLimit(value: number) {
    super.pth(value)
  }

  set filterQuality(value: FilterQuality) {
    super.pti(value)
  }

  set maskFilter(value: MaskFilter | null) {
    super.pti(value)
  }

  set shader(value: Shader | null) {
    super.ptk(value)
  }

  set colorFilter(value: ColorFilter | null) {
    super.ptl(value)
  }

  set imageFilter(value: ImageFilter | null) {
    super.ptm(value)
  }

  set invertColors(value: boolean) {
    super.ptn(value)
  }

  paint() {
    return this.real
  }
}

export class Path extends N.OctoPath {
  constructor() {
    super(N.octoPathInstance())
  }

  set fillType(value: PathFillType) {
    super.pha(value)
  }

  moveTo = (x: number, y: number): void => {
    super.phb(x, y)
  }

  relativeMoveTo = (dx: number, dy: number): void => {
    super.phc(dx, dy)
  }

  lineTo = (x: number, y: number): void => {
    super.phd(x, y)
  }

  relativeLineTo = (dx: number, dy: number): void => {
    super.phe(dx, dy)
  }

  quadraticBezierTo = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): void => {
    super.phf(x1, y1, x2, y2)
  }

  relativeQuadraticBezierTo = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): void => {
    super.phg(x1, y1, x2, y2)
  }

  cubicTo = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ): void => {
    super.phh(x1, y1, x2, y2, x3, y3)
  }

  relativeCubicTo = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ): void => {
    super.phi(x1, y1, x2, y2, x3, y3)
  }

  conicTo = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    w: number
  ): void => {
    super.phj(x1, y1, x2, y2, w)
  }

  relativeConicTo = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    w: number
  ): void => {
    super.phk(x1, y1, x2, y2, w)
  }

  arcTo = (
    rect: Rect,
    startAngle: number,
    sweepAngle: number,
    forceMoveTo: boolean
  ): void => {
    super.phl(rect, startAngle, sweepAngle, forceMoveTo)
  }

  arcToPoint = (
    arcEnd: Offset,
    radius: Radius,
    rotation: number,
    largeArc: boolean,
    clockwise: boolean
  ): void => {
    super.phm(arcEnd, radius, rotation, largeArc, clockwise)
  }

  relativeArcToPoint = (
    arcEndDelta: Offset,
    radius: Radius,
    rotation: number,
    largeArc: boolean,
    clockwise: boolean
  ): void => {
    super.phn(arcEndDelta, radius, rotation, largeArc, clockwise)
  }

  addRect = (rect: Rect): void => {
    super.pho(rect)
  }

  addOval = (oval: Rect): void => {
    super.php(oval)
  }

  addArc = (oval: Rect, startAngle: number, sweepAngle: number): void => {
    super.phq(oval, startAngle, sweepAngle)
  }

  addPolygon = (points: Array<Offset>, close: boolean): void => {
    super.phr(points, close)
  }

  addRRect = (rrect: RRect): void => {
    super.phs(rrect)
  }

  addPath = (path: Path, offset: Offset, matrix4?: Float64Array): void => {
    super.pht(path, offset, matrix4)
  }

  extendWithPath = (
    path: Path,
    offset: Offset,
    matrix4?: Float64Array
  ): void => {
    super.phu(path, offset, matrix4)
  }

  close = (): void => {
    super.phv()
  }

  reset = (): void => {
    super.phw()
  }

  contains = (): boolean => {
    return super.phx()
  }

  shift = (offset: Offset): Path => {
    return super.phy(offset)
  }

  transform = (matrix4: Float64Array): Path => {
    return super.phz(matrix4)
  }

  getBounds = (): Rect => {
    const arr = super.pza()
    return Rect.fromLTRB(arr[0], arr[1], arr[2], arr[3])
  }
}

export class Canvas extends N.OctoCanvas {
  constructor(real: any) {
    super(real)
  }

  save = (): void => {
    super.csa()
  }

  saveLayer = (bounds: Rect, paint: Paint): void => {
    super.csb(bounds, paint)
  }

  restore = (): void => {
    super.csc()
  }

  getSaveCount = (): number => {
    return super.csd()
  }

  translate = (dx: number, dy: number): void => {
    super.cse(dx, dy)
  }

  scale = (sx: number, sy: number): void => {
    super.csf(sx, sy)
  }

  rotate = (radians: number): void => {
    super.csg(radians)
  }

  skew = (sx: number, sy: number): void => {
    super.csh(sx, sy)
  }

  transform = (matrix4: Float64Array): void => {
    super.csi(matrix4)
  }

  clipRect = (rect: Rect, clipOp: ClipOp, doAntiAlias: boolean): void => {
    super.csj(rect, clipOp, doAntiAlias)
  }

  clipRRect = (rrect: RRect, doAntiAlias: boolean): void => {
    super.csk(rrect, doAntiAlias)
  }

  clipPath = (path: Path, doAntiAlias: boolean): void => {
    super.csl(path, doAntiAlias)
  }

  drawColor = (color: Color, blendMode: BlendMode): void => {
    super.csm(color, blendMode)
  }

  drawLine = (p1: Offset, p2: Offset, paint: Paint): void => {
    super.csn(p1, p2, paint)
  }

  drawPaint = (paint: Paint): void => {
    super.cso(paint)
  }

  drawRect = (rect: Rect, paint: Paint): void => {
    super.csp(rect, paint)
  }

  drawRRect = (rrect: RRect, paint: Paint): void => {
    super.csq(rrect, paint)
  }

  drawDRRect = (outer: RRect, inner: RRect, paint: Paint): void => {
    super.csr(outer, inner, paint)
  }

  drawOval = (rect: Rect, paint: Paint): void => {
    super.cst(rect, paint)
  }

  drawCircle = (c: Offset, radius: number, paint: Paint): void => {
    super.csu(c, radius, paint)
  }

  drawArc = (
    rect: Rect,
    startAngle: number,
    sweepAngle: number,
    useCenter: boolean,
    paint: Paint
  ): void => {
    super.csv(rect, startAngle, sweepAngle, useCenter, paint)
  }

  drawPath = (path: Path, paint: Paint): void => {
    super.csw(path, paint)
  }

  drawImage = (image: Image, offset: Offset, paint: Paint): void => {
    super.csx(image, offset, paint)
  }

  drawImageRect = (image: Image, src: Rect, dst: Rect, paint: Paint): void => {
    super.csy(image, src, dst, paint)
  }

  drawImageNine = (
    image: Image,
    center: Rect,
    dst: Rect,
    paint: Paint
  ): void => {
    super.csz(image, center, dst, paint)
  }

  drawShadow = (
    path: Path,
    color: Color,
    elevation: number,
    transparentOccluder: boolean
  ): void => {
    super.cva(path, color, elevation, transparentOccluder)
  }
}
