import {
  Canvas,
  Size,
  isNullOrUndefined,
  Matrix4,
  Offset,
} from '@octoflutter/dartsdk'
import {Alignment} from '@octoflutter/flutter'

export abstract class Component {
  abstract update(dt: number): void

  abstract preRender(canvas: Canvas)

  abstract render(canvas: Canvas)

  abstract renderTree(canvas: Canvas)

  abstract postRender(canvas: Canvas)

  abstract sizeOfWorld(size: Size)

  abstract onAdd()

  abstract onRemove()

  abstract index(): number
}

export abstract class ContainerComponent extends Component {
  update(dt: number): void {
    this.children.forEach((v, index, arr) => {
      v.update(dt)
    })
  }

  abstract size(): Size

  preRender(canvas: Canvas) {}

  render(canvas: Canvas) {
    this.preRender(canvas)
  }

  renderTree(canvas: Canvas) {
    this.render(canvas)
    this.postRender(canvas)
    this.children.forEach((v, index, arr) => {
      canvas.save()
      v.renderTree(canvas)
      canvas.restore()
    })
  }

  postRender(canvas: Canvas) {}

  sizeOfWorld(size: Size) {
    this.children.forEach((v, index, arr) => {
      v.sizeOfWorld(size)
    })
  }

  children: Array<Component> = []

  onAdd() {}
  onRemove() {}

  add(component: Component) {
    if (!isNullOrUndefined(component)) {
      this.children.push(component)
      this.sort()
      component.onAdd()
    }
  }

  remove(component: Component) {
    if (!isNullOrUndefined(component)) {
      const index = this.children.indexOf(component, 0)
      if (index > -1) {
        this.children.splice(index, 1)
      }
      component.onRemove()
    }
  }

  index() {
    return 0
  }

  sort = () => {
    this.children.sort((a, b) => {
      return a.index() - b.index()
    })
  }
}

export const isGoodNumber = (value) => {
  return typeof value === 'number' && isFinite(value)
}

export abstract class TransformComponent extends ContainerComponent {
  public readonly transform = Matrix4.identity()

  alignment: Alignment = Alignment.center

  effectiveTransform() {
    const result = Matrix4.identity()
    const translation = this.alignment.alongSize(this.size())
    result.translate(translation.dx, translation.dy, 0)
    result.multiply(this.transform)
    result.translate(-translation.dx, -translation.dy, 0)
    result.translate(this.actorDx(), this.actorDy(), 0)
    return result
  }

  preRender(canvas: Canvas) {
    super.preRender(canvas)
    canvas.transform(this.effectiveTransform().storage)
  }

  px = 0
  py = 0

  offset(x: number, y: number) {
    if (isGoodNumber(x) && isGoodNumber(y)) {
      this.px = x
      this.py = y
      const translation = this.alignment.alongSize(this.size())
      this.transform.setTranslationRaw(
        x - translation.dx,
        y - translation.dy,
        0
      )
      // window.console.log("px:" + this.px + "py:" + this.py);
    } else {
      window.console.log('bad offset x:' + x + ' y:' + y)
    }
  }

  move(dx: number, dy: number) {
    if (isGoodNumber(dx) && isGoodNumber(dy)) {
      this.offset(this.px + dx, this.py + dy)
    } else {
      window.console.log('bad move dx:' + dx + ' dy:' + dy)
    }
  }

  rotation(radians: number) {
    this.transform.rotateZ(radians)
  }

  scale(x: number, y: number) {
    this.transform.scale(x, y, 1)
  }

  actor = (): Offset => {
    return this.alignment.alongSize(this.size())
  }

  offsetBounds = () => {
    const translation = this.alignment.alongSize(this.size())
    return [
      this.px - translation.dx,
      this.py - translation.dy,
      this.px + translation.dx,
      this.py + translation.dy,
    ]
  }

  offsetBoundsAt = (px: number, py: number) => {
    const translation = this.alignment.alongSize(this.size())
    return [
      px - translation.dx,
      py - translation.dy,
      px + translation.dx,
      py + translation.dy,
    ]
  }

  actorDx = () => {
    return 0
  }

  actorDy = () => {
    return 0
  }
}
