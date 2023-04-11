import {Duration} from './duration'

export class DateTime extends N.OctoDateTime {
  private real: any
  constructor(real: any) {
    super(real)
    this.real = real
  }

  static from = (args: {
    year: number
    month?: number
    day?: number
    hour?: number
    minute?: number
    second?: number
    millisecond?: number
    microsecond?: number
    utc?: boolean
  }): DateTime => {
    return new DateTime(
      N.octoDateTimeNewInstance(
        args.year,
        args.month ?? 1,
        args.day ?? 1,
        args.hour ?? 0,
        args.minute ?? 0,
        args.second ?? 0,
        args.millisecond ?? 0,
        args.microsecond ?? 0,
        args.utc ?? false
      )
    )
  }

  static now = (): DateTime => {
    return new DateTime(N.octoDateTimeNow())
  }

  static fromMillisecondsSinceEpoch = (
    millisecondsSinceEpoch: number,
    isUtc?: boolean
  ): DateTime => {
    return new DateTime(
      N.octoDateTimeFromEpoch(millisecondsSinceEpoch, isUtc ?? false)
    )
  }

  public add = (duration: Duration): DateTime => {
    return new DateTime(super.dta())
  }

  public difference = (other: DateTime): Duration => {
    return new Duration({
      milliseconds: super.dtb(),
    })
  }

  public isBefore = (other: DateTime): boolean => {
    return super.dtc(other)
  }

  public isAfter = (other: DateTime): boolean => {
    return super.dtd(other)
  }

  public isAtSameMomentAs = (other: DateTime): boolean => {
    return super.dte(other)
  }

  public get year() {
    return super.dtf()
  }

  public get month() {
    return super.dtg()
  }

  public get day() {
    return super.dth()
  }

  public get hour() {
    return super.dti()
  }

  public get minute() {
    return super.dtj()
  }

  public get second() {
    return super.dtk()
  }

  public get millisecond() {
    return super.dtl()
  }

  public get microsecond() {
    return super.dtm()
  }

  public get weekday() {
    return super.dtn()
  }

  public get millisecondsSinceEpoch() {
    return super.dto()
  }
}

// OctoDateTime: function OctoDateTime(t0) {
//     this.dateTime = t0;
//   },
