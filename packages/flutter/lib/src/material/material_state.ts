export abstract class MaterialStateProperty<T> {
  static all<T>(value: T): MaterialStateProperty<T> {
    return N.materialStatePropertyAll(value)
  }
}

export enum MaterialState {
  hovered = C.MaterialState_0,
  focused = C.MaterialState_1,
  pressed = C.MaterialState_2,
  dragged = C.MaterialState_3,
  selected = C.MaterialState_4,
  scrolledUnder = C.MaterialState_5,
  disabled = C.MaterialState_6,
  error = C.MaterialState_7,
}
