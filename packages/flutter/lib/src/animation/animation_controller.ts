import {VoidCallback, Duration} from '@octoflutter/dartsdk'
import {TickerProvider} from '../scheduler/ticker'
import {Animation, AnimationStatusListener, AnimationStatus} from './animation'
import {Curve, Curves} from './curves'
import {Animatable} from './tween'

const _kAnimDuration = new Duration({milliseconds: 800})

export class AnimationController extends Animation<number> {
  upperBound: number
  lowerBound: number
  private real: any

  constructor(args: {
    animationBehavior?: AnimationBehavior
    lowerBound?: number
    upperBound?: number
    debugLabel?: string
    duration?: Duration
    reverseDuration?: Duration
    value?: number
    vsync: TickerProvider
  }) {
    const duration = args.duration ?? _kAnimDuration
    const local_real = N.animationControllerInstance(
      args.value,
      duration,
      args.reverseDuration ?? duration,
      args.debugLabel,
      args.lowerBound ?? 0,
      args.upperBound ?? 1,
      args.animationBehavior ?? AnimationBehavior.normal,
      args.vsync
    )
    super(local_real)
    this.real = local_real
    this.upperBound = args.upperBound ?? 1
    this.lowerBound = args.lowerBound ?? 0
  }

  addListener(listener: VoidCallback): void {
    this.real.ana(listener)
  }

  removeListener(listener: VoidCallback): void {
    this.real.anb(listener)
  }

  addStatusListener(listener: AnimationStatusListener): void {
    this.real.anc(listener)
  }

  removeStatusListener(listener: AnimationStatusListener): void {
    this.real.and(listener)
  }

  get status(): AnimationStatus {
    return this.real.anf()
  }

  get value(): number {
    return this.real.ane()
  }

  drive<U>(child: Animatable<U>): Animation<U> {
    return child.animate(this)
  }

  forward(from?: number) {
    this.real.anh(from)
  }

  reverse(from?: number) {
    this.real.ani(from ?? 1)
  }

  stop(canceled?: boolean) {
    this.real.anj(canceled ?? true)
  }

  dispose() {
    this.real.dispose()
  }

  get view(): Animation<number> {
    return this.real.ang()
  }

  get isAnimating(): boolean {
    return this.real.ank()
  }

  reset() {
    this.real.anq()
  }

  animateTo(target: number, args?: {duration?: Duration; curve?: Curve}) {
    this.real.anl(
      target,
      args?.curve ?? Curves.linear,
      args?.duration ?? _kAnimDuration
    )
  }

  animateBack(target: number, args?: {duration?: Duration; curve?: Curve}) {
    this.real.anm(
      target,
      args?.curve ?? Curves.linear,
      args?.duration ?? _kAnimDuration
    )
  }

  animateWith(simulation: any) {
    this.real.ann(simulation)
  }

  repeat(args?: {
    period?: Duration
    reverse?: boolean
    min?: number
    max?: number
  }) {
    this.real.ano(
      args?.max ?? this.upperBound,
      args?.min ?? this.lowerBound,
      args?.period ?? _kAnimDuration,
      args?.reverse ?? false
    )
  }
}

export enum AnimationBehavior {
  normal = C.AnimationBehavior_0,
  preserve = C.AnimationBehavior_1,
}
