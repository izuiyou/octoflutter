import {Offset, Canvas, Size, AppLifecycleState} from '@octoflutter/dartsdk'
import {Component} from './components'
import {AbsGame} from './game_widget'

export class ComponentGame extends AbsGame implements Component {
  onTouchDown(point: Offset) {}

  onTouchMove(point: Offset) {}

  onTouchEnd() {}

  onAngleChanged(angle: number) {}

  update(dt: number): void {
    this.children.forEach((v, index, arr) => {
      v.update(dt)
    })
  }

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

  onGameResize(size: Size): void {
    this.sizeOfWorld(size)
  }

  onAttach() {}

  onDetach() {}

  onAppLifecycleState(state: AppLifecycleState) {}

  children: Array<Component> = []

  onGameUpdate(dt: number): void {
    this.update(dt)
  }

  onGameRender(canvas: Canvas) {
    this.renderTree(canvas)
  }

  onAdd() {}
  onRemove() {}

  add(component: Component) {
    this.children.push(component)
    this.sort()
    component.onAdd()
  }

  remove(component: Component) {
    const index = this.children.indexOf(component, 0)
    if (index > -1) {
      this.children.splice(index, 1)
    }
    component?.onRemove()
  }

  sort = () => {
    this.children.sort((a, b) => {
      return a.index() - b.index()
    })
  }

  index() {
    return 0
  }
}
