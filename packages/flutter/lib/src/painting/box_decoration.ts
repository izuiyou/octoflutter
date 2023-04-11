import {Color, BlendMode} from '@octoflutter/dartsdk'
import {BoxBorder, BoxShape} from './box_border'
import {DecorationImage} from './decoration_image'
import {BorderRadiusGeometry} from './border_radius'
import {Gradient} from './gradient'
import {BoxShadow} from './box_shadow'
import {Decoration} from './decoration'

export class BoxDecoration extends N.BoxDecoration implements Decoration {
  constructor(args?: {
    color?: Color
    image?: DecorationImage
    border?: BoxBorder
    borderRadius?: BorderRadiusGeometry
    boxShadow?: Array<BoxShadow>
    gradient?: Gradient
    backgroundBlendMode?: BlendMode
    shape?: BoxShape
  }) {
    super(
      args?.color,
      args?.image,
      args?.border,
      args?.borderRadius,
      args?.boxShadow,
      args?.gradient,
      args?.backgroundBlendMode,
      args?.shape ?? BoxShape.rectangle
    )
  }
}
