import {ImageProvider} from './image_provider'
import {Alignment, AlignmentGeometry} from '../painting/alignment'
import {Rect, ColorFilter} from '@octoflutter/dartsdk'
import {BoxFit} from './box_fit'

export class DecorationImage extends N.DecorationImage {
  constructor(args: {
    image: ImageProvider
    onError?: any
    colorFilter?: ColorFilter
    fit?: BoxFit
    alignment?: AlignmentGeometry
    centerSlice?: Rect
    repeat?: ImageRepeat
    matchTextDirection?: boolean
    scale?: number
  }) {
    super(
      args.image,
      args.onError,
      args.colorFilter,
      args.fit,
      args.alignment ?? Alignment.center,
      args.centerSlice,
      args.repeat,
      args.matchTextDirection ?? false,
      args.scale ?? 1.0
    )
  }
}

export enum ImageRepeat {
  repeat = C.ImageRepeat_0,
  repeatX = C.ImageRepeat_1,
  repeatY = C.ImageRepeat_2,
  noRepeat = C.ImageRepeat_3,
}
