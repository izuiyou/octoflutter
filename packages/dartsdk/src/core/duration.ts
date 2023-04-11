export class Duration extends N.Duration {
  private readonly _duration: number

  constructor(args?: {
    days?: number
    hours?: number
    minutes?: number
    seconds?: number
    milliseconds?: number
    microseconds?: number
  }) {
    const days = args?.days ?? 0
    const hours = args?.hours ?? 0
    const minutes = args?.minutes ?? 0
    const seconds = args?.seconds ?? 0
    const milliseconds = args?.milliseconds ?? 0
    const microseconds = args?.microseconds ?? 0

    const _duration =
      Duration.microsecondsPerDay * days +
      Duration.microsecondsPerHour * hours +
      Duration.microsecondsPerMinute * minutes +
      Duration.microsecondsPerSecond * seconds +
      Duration.microsecondsPerMillisecond * milliseconds +
      microseconds
    super(_duration)
    this._duration = _duration
  }

  static get microsecondsPerMillisecond() {
    return 1000
  }
  static get millisecondsPerSecond() {
    return 1000
  }
  static get secondsPerMinute() {
    return 60
  }
  static get minutesPerHour() {
    return 60
  }
  static get hoursPerDay() {
    return 24
  }
  static get microsecondsPerSecond() {
    return 1000000
  }
  static get microsecondsPerMinute() {
    return 60000000
  }
  static get microsecondsPerHour() {
    return 3600000000
  }
  static get microsecondsPerDay() {
    return 86400000000
  }
  static get millisecondsPerMinute() {
    return 60000
  }
  static get millisecondsPerHour() {
    return 3600000
  }
  static get millisecondsPerDay() {
    return 86400000
  }
  static get secondsPerHour() {
    return 3600
  }
  static get secondsPerDay() {
    return 86400
  }
  static get minutesPerDay() {
    return 1440
  }

  public get inDays() {
    return Math.ceil(this._duration / Duration.microsecondsPerDay)
  }

  public get inHours() {
    return Math.ceil(this._duration / Duration.microsecondsPerHour)
  }

  public get inMinutes() {
    return Math.ceil(this._duration / Duration.microsecondsPerMinute)
  }

  public get inSeconds() {
    return Math.ceil(this._duration / Duration.microsecondsPerSecond)
  }

  public get inMilliseconds() {
    return Math.ceil(this._duration / Duration.microsecondsPerMillisecond)
  }

  public get inMicroseconds() {
    return this._duration
  }
}
