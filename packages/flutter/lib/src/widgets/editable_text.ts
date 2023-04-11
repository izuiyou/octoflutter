import {TextSelection} from '../services/text_editing'
import {SelectionChangedCause} from '../services/text_input'

export const textEditingController = Symbol('textEditingController')

export class TextEditingController {
  private real: any

  constructor(text?: string) {
    this.real = N.textEditingControllerInstance(text ?? '')
    this[textEditingController] = this.real
  }

  private [textEditingController]() {
    return this.real
  }

  get text(): string {
    return N.textEditingControllerGetText(this.real)
  }

  set text(text: string) {
    N.textEditingControllerSetText(this.real, text)
  }
}

export class ToolbarOptions extends N.ToolbarOptions {
  constructor(args?: {
    copy?: boolean
    cut?: boolean
    paste?: boolean
    selectAll?: boolean
  }) {
    super(
      args?.copy ?? false,
      args?.cut ?? false,
      args?.paste ?? false,
      args?.selectAll ?? false
    )
  }
}

export type SelectionChangedCallback = (
  selection: TextSelection,
  cause: SelectionChangedCause | undefined
) => void
