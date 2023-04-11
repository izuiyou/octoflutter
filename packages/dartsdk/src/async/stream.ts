export class Stream extends N.OctoStream {
  constructor(real: any) {
    super(real)
  }

  asBroadcastStream(args?: {onCancel?: any; onListen?: any}): Stream {
    return new Stream(super.sta(args?.onCancel, args?.onListen))
  }

  listen<T>(
    onData: (event: T) => void,
    args?: {
      onError?: () => void
      onDone?: () => void
      cancelOnError?: boolean
    }
  ): StreamSubscription<T> {
    return new StreamSubscription(
      super.stb(
        onData,
        args?.cancelOnError ?? false,
        args?.onDone,
        args?.onError
      )
    )
  }
}

export class StreamSubscription<T> extends N.OctoStreamSubscription {
  constructor(real: any) {
    super(real)
  }

  onData(handleData: (data: any) => void): void {
    super.stf(handleData)
  }

  cancel(): void {
    super.stc()
  }

  pause(): void {
    super.std()
  }

  resume(): void {
    super.ste()
  }

  onError(handleError: () => void): void {
    super.stg(handleError)
  }

  onDone(handleDone: () => void): void {
    super.sth(handleDone)
  }
}
