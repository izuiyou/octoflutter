import {VoidCallback} from '@octoflutter/dartsdk'
import {Listenable} from '../foundation/change_notifier'
import {Animatable} from './tween'

export class Animation<T> extends N.OctoAnimation implements Listenable {
  constructor(real: any) {
    super(real)
  }

  addListener(listener: VoidCallback): void {
    super.ana(listener)
  }

  removeListener(listener: VoidCallback): void {
    super.anb(listener)
  }

  addStatusListener(listener: AnimationStatusListener): void {
    super.anc(listener)
  }

  removeStatusListener(listener: AnimationStatusListener): void {
    super.and(listener)
  }

  get status(): AnimationStatus {
    return super.anf()
  }

  get value(): T {
    return super.ane()
  }

  drive<U>(child: Animatable<U>): Animation<U> {
    return child.animate(super.ang())
  }

  private ane() {
    return this.value
  }
}

export enum AnimationStatus {
  dismissed = C.AnimationStatus_0,
  forward = C.AnimationStatus_1,
  reverse = C.AnimationStatus_2,
  completed = C.AnimationStatus_3,
}

export type AnimationStatusListener = (status: AnimationStatus) => void
