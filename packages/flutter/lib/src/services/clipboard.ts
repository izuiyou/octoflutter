export class ClipboardData {
  public readonly text: string

  constructor(text: string) {
    this.text = text
  }
}

export class ClipBoard {
  static kTextPlain = 'text/plain'

  static setData(data: ClipboardData): Promise<void> {
    return new Promise((resolve, reject) => {
      N.clipBoardSetData(
        data.text ?? '',
        () => {
          resolve()
        },
        (e) => {
          reject(e)
        }
      )
    })
  }

  static getData(format: string): Promise<ClipboardData> {
    return new Promise((resolve, reject) => {
      N.clipBoardGetData(
        format ?? this.kTextPlain,
        (v) => {
          resolve(new ClipboardData(v))
        },
        (e) => {
          reject(e)
        }
      )
    })
  }

  static hasStrings(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      N.clipBoardHasStrings(
        (v) => {
          resolve(v)
        },
        (e) => {
          reject(e)
        }
      )
    })
  }
}
