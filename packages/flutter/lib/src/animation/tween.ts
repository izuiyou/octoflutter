import {Color, Offset, Rect, Size} from '@octoflutter/dartsdk'
import {Animation} from './animation'
import {Curve} from './curves'

export abstract class Animatable<T> extends N.Animatable {
  constructor() {
    super()
  }

  abstract transform(t: number): T

  evaluate(animation: Animation<number>): T {
    return this.transform(animation.value)
  }

  animate(parent: any): _AnimatedEvaluation<T> {
    return new _AnimatedEvaluation(parent, this)
  }

  chain(parent: Animatable<number>): Animatable<T> {
    return new _ChainedEvaluation(parent, this)
  }
}

class _AnimatedEvaluation<T> extends Animation<T> {
  evaluatable: Animatable<T>
  parent: any
  constructor(parent: any, evaluatable: Animatable<T>) {
    super(parent)
    this.parent = parent
    this.evaluatable = evaluatable
  }

  get value(): T {
    return this.evaluatable.evaluate(new Animation<number>(this.parent))
  }
}

class _ChainedEvaluation<T> extends Animatable<T> {
  parent: Animatable<number>
  evaluatable: Animatable<T>
  constructor(parent: Animatable<number>, evaluatable: Animatable<T>) {
    super()
    this.parent = parent
    this.evaluatable = evaluatable
  }

  transform(t: number): T {
    return this.evaluatable.transform(this.parent.transform(t))
  }
}

export abstract class Tween<T> extends Animatable<T> {
  begin: T
  end: T

  constructor(begin: T, end: T) {
    super()
    this.begin = begin
    this.end = end
  }

  transform(t: number): T {
    if (t === 0.0) {
      return this.begin
    } else if (t === 1.0) {
      return this.end
    }
    return this.lerp(t)
  }

  abstract lerp(t: number): T
}

export class ReverseTween<T> extends Tween<T> {
  parent: Tween<T>
  constructor(parent: Tween<T>) {
    super(parent.end, parent.begin)
    this.parent = parent
  }

  lerp(t: number): T {
    return this.parent.lerp(t)
  }
}

export class ColorTween extends Tween<Color> {
  constructor(begin: Color, end: Color) {
    super(begin, end)
  }

  lerp(t: number): Color {
    return Color.lerp(this.begin, this.end, t)
  }
}

export class SizeTween extends Tween<Size> {
  constructor(begin: Size, end: Size) {
    super(begin, end)
  }

  lerp(t: number): Size {
    return Size.lerp(this.begin, this.end, t)
  }
}

export class OffsetTween extends Tween<Offset> {
  constructor(begin: Offset, end: Offset) {
    super(begin, end)
  }

  lerp(t: number): Offset {
    return Offset.lerp(this.begin, this.end, t)
  }
}

export class RectTween extends Tween<Rect> {
  constructor(begin: Rect, end: Rect) {
    super(begin, end)
  }

  lerp(t: number): Rect {
    return Rect.lerp(this.begin, this.end, t)
  }
}

export class NumberTween extends Tween<number> {
  constructor(begin: number, end: number) {
    super(begin, end)
  }

  lerp(t: number): number {
    return this.begin + (this.end - this.begin) * t
  }
}

export class StepTween extends NumberTween {
  constructor(begin: number, end: number) {
    super(begin, end)
  }

  lerp(t: number): number {
    return Math.floor(super.lerp(t))
  }
}

export class ConstantTween<T> extends Tween<T> {
  value: T
  constructor(value: T) {
    super(value, value)
    this.value = value
  }

  lerp(t: number): T {
    return this.value
  }
}

export class CurveTween extends Animatable<number> {
  curve: Curve
  constructor(curve: Curve) {
    super()
    this.curve = curve
  }

  transform(t: number): number {
    if (t === 0.0 || t === 1.0) {
      return t
    }
    return this.curve.transform(t)
  }
}
