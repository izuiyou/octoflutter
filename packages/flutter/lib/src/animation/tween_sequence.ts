import {Animatable} from './tween'
export class TweenSequenceItem<T> {
  public readonly tween: Animatable<T>
  public readonly weight: number

  constructor(args: {tween: Animatable<T>; weight: number}) {
    this.tween = args.tween
    this.weight = args.weight
  }
}

class _Interval {
  public readonly start: number
  public readonly end: number

  constructor(start: number, end: number) {
    this.start = start
    this.end = end
  }

  contains = (t: number): boolean => {
    return t >= this.start && t < this.end
  }

  value = (t: number): number => {
    return (t - this.start) / (this.end - this.start)
  }
}

export class TweenSequence<T> extends Animatable<T> {
  _items: Array<TweenSequenceItem<T>> = []
  _intervals: Array<_Interval> = []

  constructor(items: Array<TweenSequenceItem<T>>) {
    super()
    this._items = items
    let totalWeight = 0
    this._items.forEach((v) => {
      totalWeight += v.weight
    })

    let start = 0
    for (let i = 0; i < this._items.length; i += 1) {
      const end =
        i === this._items.length - 1
          ? 1.0
          : start + this._items[i].weight / totalWeight

      this._intervals.push(new _Interval(start, end))
      start = end
    }
  }

  _evaluateAt = (t: number, index: number): T => {
    const element = this._items[index]
    const tInterval = this._intervals[index].value(t)
    return element.tween.transform(tInterval)
  }

  transform(t: number): T {
    if (t === 1.0) {
      return this._evaluateAt(t, this._items.length - 1)
    }

    for (let index = 0; index < this._items.length; index++) {
      if (this._intervals[index].contains(t)) {
        return this._evaluateAt(t, index)
      }
    }

    throw new Error(
      'TweenSequence.evaluate() could not find an interval for ' + t
    )
  }
}

export class FlippedTweenSequence extends TweenSequence<number> {
  constructor(items: Array<TweenSequenceItem<number>>) {
    super(items)
  }

  transform = (t: number): number => 1 - super.transform(1 - t)
}
