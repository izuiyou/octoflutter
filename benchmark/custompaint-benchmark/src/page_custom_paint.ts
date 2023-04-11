import {
  Canvas,
  clampNumber,
  isNullOrUndefined,
  Paint,
  Rect,
  Size,
} from '@octoflutter/dartsdk'
import {
  AppBar,
  AspectRatio,
  BuildContext,
  Center,
  Colors,
  Container,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {TransformComponent} from './components'
import {ComponentGame} from './component_game'
import {GameWidget} from './game_widget'
import {Sprite, SpriteComponent} from './sprite'

const kIconNum = 100
const kOctopusNum = 100
const kBoxNum = 100

abstract class MoveSpriteComponent extends SpriteComponent {
  factor = 1
  mx = 0
  my = 0

  onAdd(): void {
    this.factor = Math.random() * Math.PI * 2
    this.mx = 1 * Math.cos(this.factor)
    this.my = 1 * Math.sin(this.factor)
  }

  moveSelf = (viewport: Size) => {
    const bounds = this.offsetBounds()
    if (
      bounds[0] <= 0 ||
      bounds[1] <= 0 ||
      bounds[2] >= viewport.width ||
      bounds[3] >= viewport.height
    ) {
      this.factor = Math.random() * Math.PI * 2
      this.mx = 1 * Math.cos(this.factor)
      this.my = 1 * Math.sin(this.factor)

      if (
        bounds[0] + this.mx <= 0 ||
        bounds[1] + this.my <= 0 ||
        bounds[2] + this.mx >= viewport.width ||
        bounds[3] + this.my >= viewport.height
      ) {
        return
      }
    }
    this.move(this.mx, this.my)
  }
}

class IconComponent extends MoveSpriteComponent {
  size(): Size {
    return new Size(50, 50)
  }

  srcRect = () => {
    return Rect.fromLTRB(0, 0, 512, 512)
  }
}

class OctopusComponent extends MoveSpriteComponent {
  size(): Size {
    return new Size(50, 50)
  }

  srcRect = () => {
    return Rect.fromLTRB(0, 0, 165, 165)
  }
}

class BoxComponent extends TransformComponent {
  size(): Size {
    return new Size(20, 20)
  }
  factor = 1
  mx = 0
  my = 0

  rect: Rect
  paint: Paint

  onAdd(): void {
    this.rect = Rect.fromLTRB(0, 0, 20, 20)
    this.paint = new Paint()
    this.paint.color = Colors.red
    this.factor = Math.random() * Math.PI * 2
    this.mx = 1 * Math.cos(this.factor)
    this.my = 1 * Math.sin(this.factor)
  }

  moveSelf = (viewport: Size) => {
    const bounds = this.offsetBounds()
    if (
      bounds[0] <= 0 ||
      bounds[1] <= 0 ||
      bounds[2] >= viewport.width ||
      bounds[3] >= viewport.height
    ) {
      this.factor = Math.random() * Math.PI * 2
      this.mx = 1 * Math.cos(this.factor)
      this.my = 1 * Math.sin(this.factor)

      if (
        bounds[0] + this.mx <= 0 ||
        bounds[1] + this.my <= 0 ||
        bounds[2] + this.mx >= viewport.width ||
        bounds[3] + this.my >= viewport.height
      ) {
        return
      }
    }
    this.move(this.mx, this.my)
  }

  render(canvas: Canvas): void {
    super.render(canvas)
    canvas.drawRect(this.rect, this.paint)
  }
}

class GameData {
  spriteIcon: Sprite
  spriteOctopus: Sprite

  preload = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const promiseArr = []
      promiseArr.push(Sprite.load('icon.png'))
      promiseArr.push(Sprite.load('octopus.png'))
      Promise.all(promiseArr)
        .then((values) => {
          this.spriteIcon = values[0]
          this.spriteOctopus = values[1]

          resolve(true)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

class MyGame extends ComponentGame {
  data: GameData = new GameData()
  iconComponents: Array<IconComponent> = []
  octopusComponents: Array<OctopusComponent> = []
  boxComponents: Array<BoxComponent> = []
  loaded = false

  onAttach(): void {
    this.data.preload().then((v) => {
      this.loaded = true
      this.checkPrepareComponents()
    })
  }

  checkPrepareComponents = () => {
    if (
      isNullOrUndefined(this.viewport) ||
      !this.loaded ||
      this.iconComponents.length > 0 ||
      this.octopusComponents.length > 0 ||
      this.boxComponents.length > 0
    ) {
      return
    }

    this.prepareIconComponents()
    this.prepareOctopusComponents()
    this.prepareBoxComponents()
  }

  onGameResize(size: Size): void {
    this.checkPrepareComponents()
  }

  prepareIconComponents = () => {
    for (let i = 0; i < kIconNum; i++) {
      const comp = new IconComponent(this.data.spriteIcon)
      this.iconComponents.push(comp)
      this.add(comp)
      comp.offset(this.viewport.width * 0.5, this.viewport.height * 0.5)
    }
  }

  updateIconComponents = () => {
    this.iconComponents.forEach((v, i, a) => {
      v.moveSelf(this.viewport)
    })
  }

  prepareOctopusComponents = () => {
    for (let i = 0; i < kOctopusNum; i++) {
      const comp = new OctopusComponent(this.data.spriteOctopus)
      this.octopusComponents.push(comp)
      this.add(comp)
      comp.offset(
        this.viewport.width * clampNumber(Math.random(), 0.2, 0.8),
        this.viewport.height * clampNumber(Math.random(), 0.2, 0.8)
      )
    }
  }

  updateOctopusComponents = () => {
    this.octopusComponents.forEach((v, i, a) => {
      v.moveSelf(this.viewport)
    })
  }

  prepareBoxComponents = () => {
    for (let i = 0; i < kBoxNum; i++) {
      const comp = new BoxComponent()
      this.boxComponents.push(comp)
      this.add(comp)
      comp.offset(
        this.viewport.width * clampNumber(Math.random(), 0.2, 0.8),
        this.viewport.height * clampNumber(Math.random(), 0.2, 0.8)
      )
    }
  }

  updateBoxComponents = () => {
    this.boxComponents.forEach((v, i, a) => {
      v.moveSelf(this.viewport)
    })
  }

  update(dt: number): void {
    super.update(dt)
    this.updateIconComponents()
    this.updateOctopusComponents()
    this.updateBoxComponents()
  }

  onDetach(): void {}
}

export class PageCustomPaint extends StatelessWidget {
  game: MyGame = new MyGame()

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({title: new Text('PageCustomPaint')}),
      body: new Center({
        child: new AspectRatio({
          child: new Container({
            color: Colors.yellow,
            child: new GameWidget(this.game),
          }),
          aspectRatio: 1.0,
        }),
      }),
    })
  }
}
