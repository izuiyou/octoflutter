export class Vector2 extends N.Vector2 {
  public x: number
  public y: number
  private arr: Float64Array

  constructor(x: number, y: number) {
    const arr: Float64Array = new Float64Array(2)
    arr[0] = x
    arr[1] = y
    super(arr)
    this.x = x
    this.y = y
    this.arr = arr
  }

  setValues(x: number, y: number): void {
    this.x = x
    this.y = y
    this.arr[0] = x
    this.arr[1] = y
  }

  setZero() {
    this.setValues(0, 0)
  }

  setFrom(other: Vector2) {
    this.setValues(other.x, other.y)
  }

  splat(arg: number) {
    this.setValues(arg, arg)
  }

  static min(a: Vector2, b: Vector2, result: Vector2) {
    result.setValues(Math.min(a.x, b.x), Math.min(a.y, b.y))
  }

  static max(a: Vector2, b: Vector2, result: Vector2) {
    result.setValues(Math.max(a.x, b.x), Math.max(a.y, b.y))
  }

  static mix(min: Vector2, max: Vector2, a: number, result: Vector2) {
    result.setValues(min.x + a * (max.x - min.x), min.y + a * (max.y - min.y))
  }

  static array(array: Array<number>, offset?: number): Vector2 {
    const px = array[offset ?? 0]
    const py = array[(offset ?? 0) + 1]
    return new Vector2(px, py)
  }

  static all(value: number): Vector2 {
    return new Vector2(value, value)
  }

  static copy(other: Vector2): Vector2 {
    return new Vector2(other.x, other.y)
  }

  static random(): Vector2 {
    return new Vector2(Math.random(), Math.random())
  }
}

export class Vector3 extends N.Vector3 {
  public x: number
  public y: number
  public z: number

  private arr: Float64Array
  constructor(x: number, y: number, z: number) {
    const arr: Float64Array = new Float64Array(3)
    arr[0] = x
    arr[1] = y
    arr[2] = z
    super(arr)
    this.x = x
    this.y = y
    this.z = z
    this.arr = arr
  }

  setValues(x: number, y: number, z: number): void {
    this.x = x
    this.y = y
    this.z = z
    this.arr[0] = x
    this.arr[1] = y
    this.arr[2] = z
  }

  setZero() {
    this.setValues(0, 0, 0)
  }

  setFrom(other: Vector3) {
    this.setValues(other.x, other.y, other.z)
  }

  splat(arg: number) {
    this.setValues(arg, arg, arg)
  }

  static min(a: Vector3, b: Vector3, result: Vector3) {
    result.setValues(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z))
  }

  static max(a: Vector3, b: Vector3, result: Vector3) {
    result.setValues(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z))
  }

  static mix(min: Vector3, max: Vector3, a: number, result: Vector3) {
    result.setValues(
      min.x + a * (max.x - min.x),
      min.y + a * (max.y - min.y),
      min.z + a * (max.z - min.z)
    )
  }

  static array(array: Array<number>, offset?: number): Vector3 {
    const px = array[offset ?? 0]
    const py = array[(offset ?? 0) + 1]
    const pz = array[(offset ?? 0) + 2]
    return new Vector3(px, py, pz)
  }

  static all(value: number): Vector3 {
    return new Vector3(value, value, value)
  }

  static copy(other: Vector3): Vector3 {
    return new Vector3(other.x, other.y, other.z)
  }

  static random(): Vector3 {
    return new Vector3(Math.random(), Math.random(), Math.random())
  }
}

export class Vector4 extends N.Vector4 {
  public x: number
  public y: number
  public z: number
  public w: number

  private arr: Float64Array

  constructor(x: number, y: number, z: number, w: number) {
    const arr: Float64Array = new Float64Array(4)
    arr[0] = x
    arr[1] = y
    arr[2] = z
    arr[3] = w
    super(arr)
    this.x = x
    this.y = y
    this.z = z
    this.w = w
    this.arr = arr
  }

  setValues(x: number, y: number, z: number, w: number): void {
    this.x = x
    this.y = y
    this.z = z
    this.arr[0] = x
    this.arr[1] = y
    this.arr[2] = z
    this.arr[3] = w
  }

  setZero() {
    this.setValues(0, 0, 0, 0)
  }

  setFrom(other: Vector4) {
    this.setValues(other.x, other.y, other.z, other.w)
  }

  splat(arg: number) {
    this.setValues(arg, arg, arg, arg)
  }

  static min(a: Vector4, b: Vector4, result: Vector4) {
    result.setValues(
      Math.min(a.x, b.x),
      Math.min(a.y, b.y),
      Math.min(a.z, b.z),
      Math.min(a.w, b.w)
    )
  }

  static max(a: Vector4, b: Vector4, result: Vector4) {
    result.setValues(
      Math.max(a.x, b.x),
      Math.max(a.y, b.y),
      Math.max(a.z, b.z),
      Math.max(a.w, b.w)
    )
  }

  static mix(min: Vector4, max: Vector4, a: number, result: Vector4) {
    result.setValues(
      min.x + a * (max.x - min.x),
      min.y + a * (max.y - min.y),
      min.z + a * (max.z - min.z),
      min.w + a * (max.w - min.w)
    )
  }

  static array(array: Array<number>, offset?: number): Vector4 {
    const px = array[offset ?? 0]
    const py = array[(offset ?? 0) + 1]
    const pz = array[(offset ?? 0) + 2]
    const pw = array[(offset ?? 0) + 3]
    return new Vector4(px, py, pz, pw)
  }

  static all(value: number): Vector4 {
    return new Vector4(value, value, value, value)
  }

  static copy(other: Vector4): Vector4 {
    return new Vector4(other.x, other.y, other.z, other.w)
  }

  static random(): Vector4 {
    return new Vector4(
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random()
    )
  }
}
