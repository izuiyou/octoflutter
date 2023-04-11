import {Duration, isNullOrUndefined} from '@octoflutter/dartsdk'

export type FrameCallback = (d: Duration) => void

export class SchedulerBinding {
  static instance: SchedulerBinding = new SchedulerBinding()

  addPostFrameCallback = (callback: FrameCallback) => {
    N.octoAddPostFrameCallback((t) => {
      if (!isNullOrUndefined(callback)) {
        callback(new Duration({milliseconds: t}))
      }
    })
  }

  addPersistentFrameCallback = (callback: FrameCallback) => {
    N.octoAddPersistentFrameCallback((t) => {
      if (!isNullOrUndefined(callback)) {
        callback(new Duration({milliseconds: t}))
      }
    })
  }

  scheduleFrameCallback = (
    callback: FrameCallback,
    rescheduling?: boolean
  ): number => {
    return N.octoScheduleFrameCallback((t) => {
      if (!isNullOrUndefined(callback)) {
        callback(new Duration({milliseconds: t}))
      }
    }, rescheduling ?? false)
  }

  cancelFrameCallbackWithId = (id: number) => {
    N.octoCancelFrameCallbackWithId(id)
  }
}
