import {
  Canvas,
  FilterQuality,
  Image,
  Paint,
  Rect,
  Size,
} from '@octoflutter/dartsdk'
import {decodeImageFromAsset} from '../../../packages/octo'
import {TransformComponent} from './components'

export class Sprite {
  image: Image
  size: Size
  paint: Paint = new Paint()
  constructor(image: Image) {
    this.image = image
    this.size = new Size(image.width, image.height)
    this.paint.isAntiAlias = true
    this.paint.filterQuality = FilterQuality.high
  }

  static load = (src: string): Promise<Sprite> => {
    return new Promise<Sprite>((resolve, reject) => {
      decodeImageFromAsset(
        src,
        (img) => {
          resolve(new Sprite(img))
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  renderSprite = (canvas: Canvas, src: Rect, dst: Rect) => {
    canvas.drawImageRect(this.image, src, dst, this.paint)
  }
}

export abstract class SpriteComponent extends TransformComponent {
  sprite: Sprite
  constructor(sprite: Sprite) {
    super()
    this.sprite = sprite
  }

  render(canvas: Canvas) {
    super.render(canvas)
    this.sprite.renderSprite(canvas, this.srcRect(), this.dstRect())
  }

  srcRect = () => {
    const viewport = this.size()
    return Rect.fromLTRB(0, 0, viewport.width, viewport.height)
  }

  dstRect = () => {
    const viewport = this.size()
    return Rect.fromLTRB(0, 0, viewport.width, viewport.height)
  }
}
