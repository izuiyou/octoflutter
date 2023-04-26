import {Duration} from '@octoflutter/dartsdk'
import {convertDuration} from '../../utils'
export type TickerCallback = (elapsed: Duration) => void

export class Ticker extends N.OctoTicker {
  constructor(_onTick: TickerCallback, debugLabel?: string) {
    super((t) => {
      _onTick(convertDuration(t))
    }, debugLabel)
  }

  set muted(value: boolean) {
    super.tra(value)
  }

  get muted(): boolean {
    return super.trb()
  }

  get isTicking(): boolean {
    return super.trc()
  }

  start() {
    return super.trd()
  }

  stop(canceled?: boolean) {
    super.tre(canceled ?? false)
  }

  dispose() {
    super.dispose()
  }
}

export abstract class TickerProvider {}
