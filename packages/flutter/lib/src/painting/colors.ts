import {Color} from '@octoflutter/dartsdk'

export class ColorSwatch<T> extends Color {
  constructor(primary: number, swatch: Map<T, Color>) {
    super(primary)
  }
}
