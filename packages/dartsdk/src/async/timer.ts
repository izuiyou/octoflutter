import {Duration} from '../core'
import {isNullOrUndefined} from '../dartsdk'
import {VoidCallback} from '../ui'

export type TimerTickCallback = (t: Timer) => void

export class Timer {
  private real: any
  constructor(duration: Duration, callback: VoidCallback) {
    if (!isNullOrUndefined(duration)) {
      this.real = N.octoTimerInstance(duration, callback)
    }
  }

  static periodic = (
    duration: Duration,
    callback: TimerTickCallback
  ): Timer => {
    const timer = new Timer(null, null)
    timer.real = N.octoTimerPeriodicInstance(duration, (t) => {
      if (!isNullOrUndefined(callback)) {
        callback(timer)
      }
    })
    return timer
  }

  cancel = () => {
    this.real?.tma()
  }

  get isActive(): boolean {
    return this.real?.tmb()
  }

  get tick(): number {
    return this.real?.tmc()
  }
}
