import {TextAffinity, TextPosition, TextRange} from '@octoflutter/dartsdk'

export class TextSelection extends TextRange {
  public readonly baseOffset: number
  public readonly extentOffset: number
  public readonly affinity: TextAffinity
  public readonly isDirectional: boolean

  constructor(args: {
    baseOffset: number
    extentOffset: number
    affinity?: TextAffinity
    isDirectional?: boolean
  }) {
    super({
      start:
        args.baseOffset < args.extentOffset
          ? args.baseOffset
          : args.extentOffset,
      end:
        args.baseOffset < args.extentOffset
          ? args.extentOffset
          : args.baseOffset,
    })

    this.baseOffset = args.baseOffset
    this.extentOffset = args.extentOffset
    this.affinity = args.affinity ?? TextAffinity.downstream
    this.isDirectional = args.isDirectional ?? false
  }

  static fromCollapsed(args: {
    offset: number
    affinity?: TextAffinity
  }): TextSelection {
    return new TextSelection({
      baseOffset: args.offset,
      extentOffset: args.offset,
      affinity: args.affinity,
    })
  }

  static fromPosition(position: TextPosition) {
    return new TextSelection({
      baseOffset: position.offset,
      extentOffset: position.offset,
      affinity: position.affinity,
    })
  }
}
