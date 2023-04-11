import {Vector3} from './vector'

export class Matrix2 extends N.Matrix2 {
  constructor(arg0: number, arg1: number, arg2: number, arg3: number) {
    const arr: Float64Array = new Float64Array(4)
    arr[0] = arg0
    arr[1] = arg1
    arr[2] = arg2
    arr[3] = arg3
    super(arr)
  }
}

export class Matrix3 extends N.Matrix3 {
  constructor(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number
  ) {
    const arr: Float64Array = new Float64Array(9)
    arr[0] = arg0
    arr[1] = arg1
    arr[2] = arg2
    arr[3] = arg3
    arr[4] = arg4
    arr[5] = arg5
    arr[6] = arg6
    arr[7] = arg7
    arr[8] = arg8
    super(arr)
  }
}

export class Matrix4 extends N.Matrix4 {
  private _m4storage: Float64Array

  constructor(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
    arg9: number,
    arg10: number,
    arg11: number,
    arg12: number,
    arg13: number,
    arg14: number,
    arg15: number
  ) {
    const arr: Float64Array = new Float64Array(16)
    arr[0] = arg0
    arr[1] = arg1
    arr[2] = arg2
    arr[3] = arg3
    arr[4] = arg4
    arr[5] = arg5
    arr[6] = arg6
    arr[7] = arg7
    arr[8] = arg8
    arr[9] = arg9
    arr[10] = arg10
    arr[11] = arg11
    arr[12] = arg12
    arr[13] = arg13
    arr[14] = arg14
    arr[15] = arg15
    super(arr)
    this._m4storage = arr
  }

  setZero() {
    this._m4storage[0] = 0.0
    this._m4storage[1] = 0.0
    this._m4storage[2] = 0.0
    this._m4storage[3] = 0.0
    this._m4storage[4] = 0.0
    this._m4storage[5] = 0.0
    this._m4storage[6] = 0.0
    this._m4storage[7] = 0.0
    this._m4storage[8] = 0.0
    this._m4storage[9] = 0.0
    this._m4storage[10] = 0.0
    this._m4storage[11] = 0.0
    this._m4storage[12] = 0.0
    this._m4storage[13] = 0.0
    this._m4storage[14] = 0.0
    this._m4storage[15] = 0.0
  }

  setIdentity() {
    this._m4storage[0] = 1.0
    this._m4storage[1] = 0.0
    this._m4storage[2] = 0.0
    this._m4storage[3] = 0.0
    this._m4storage[4] = 0.0
    this._m4storage[5] = 1.0
    this._m4storage[6] = 0.0
    this._m4storage[7] = 0.0
    this._m4storage[8] = 0.0
    this._m4storage[9] = 0.0
    this._m4storage[10] = 1.0
    this._m4storage[11] = 0.0
    this._m4storage[12] = 0.0
    this._m4storage[13] = 0.0
    this._m4storage[14] = 0.0
    this._m4storage[15] = 1.0
  }

  setValues(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
    arg9: number,
    arg10: number,
    arg11: number,
    arg12: number,
    arg13: number,
    arg14: number,
    arg15: number
  ) {
    this._m4storage[15] = arg15
    this._m4storage[14] = arg14
    this._m4storage[13] = arg13
    this._m4storage[12] = arg12
    this._m4storage[11] = arg11
    this._m4storage[10] = arg10
    this._m4storage[9] = arg9
    this._m4storage[8] = arg8
    this._m4storage[7] = arg7
    this._m4storage[6] = arg6
    this._m4storage[5] = arg5
    this._m4storage[4] = arg4
    this._m4storage[3] = arg3
    this._m4storage[2] = arg2
    this._m4storage[1] = arg1
    this._m4storage[0] = arg0
  }

  setFrom(arg: Matrix4) {
    const argStorage = arg._m4storage
    this._m4storage[15] = argStorage[15]
    this._m4storage[14] = argStorage[14]
    this._m4storage[13] = argStorage[13]
    this._m4storage[12] = argStorage[12]
    this._m4storage[11] = argStorage[11]
    this._m4storage[10] = argStorage[10]
    this._m4storage[9] = argStorage[9]
    this._m4storage[8] = argStorage[8]
    this._m4storage[7] = argStorage[7]
    this._m4storage[6] = argStorage[6]
    this._m4storage[5] = argStorage[5]
    this._m4storage[4] = argStorage[4]
    this._m4storage[3] = argStorage[3]
    this._m4storage[2] = argStorage[2]
    this._m4storage[1] = argStorage[1]
    this._m4storage[0] = argStorage[0]
  }

  setRotationX(radians: number) {
    const c = Math.cos(radians)
    const s = Math.sin(radians)
    this._m4storage[0] = 1.0
    this._m4storage[1] = 0.0
    this._m4storage[2] = 0.0
    this._m4storage[4] = 0.0
    this._m4storage[5] = c
    this._m4storage[6] = s
    this._m4storage[8] = 0.0
    this._m4storage[9] = -s
    this._m4storage[10] = c
    this._m4storage[3] = 0.0
    this._m4storage[7] = 0.0
    this._m4storage[11] = 0.0
  }

  setRotationY(radians: number) {
    const c = Math.cos(radians)
    const s = Math.sin(radians)
    this._m4storage[0] = c
    this._m4storage[1] = 0.0
    this._m4storage[2] = -s
    this._m4storage[4] = 0.0
    this._m4storage[5] = 1.0
    this._m4storage[6] = 0.0
    this._m4storage[8] = s
    this._m4storage[9] = 0.0
    this._m4storage[10] = c
    this._m4storage[3] = 0.0
    this._m4storage[7] = 0.0
    this._m4storage[11] = 0.0
  }

  setRotationZ(radians: number) {
    const c = Math.cos(radians)
    const s = Math.sin(radians)
    this._m4storage[0] = c
    this._m4storage[1] = s
    this._m4storage[2] = 0.0
    this._m4storage[4] = -s
    this._m4storage[5] = c
    this._m4storage[6] = 0.0
    this._m4storage[8] = 0.0
    this._m4storage[9] = 0.0
    this._m4storage[10] = 1.0
    this._m4storage[3] = 0.0
    this._m4storage[7] = 0.0
    this._m4storage[11] = 0.0
  }

  setTranslation(t: Vector3) {
    const tStorage = t._v3storage
    const z = tStorage[2]
    const y = tStorage[1]
    const x = tStorage[0]
    this._m4storage[14] = z
    this._m4storage[13] = y
    this._m4storage[12] = x
  }

  setTranslationRaw(x: number, y: number, z: number) {
    this._m4storage[14] = z
    this._m4storage[13] = y
    this._m4storage[12] = x
  }

  scale(x: number, y?: number, z?: number) {
    const sx = x
    const sy = y ?? x
    const sz = z ?? x
    const sw = 1

    this._m4storage[0] *= sx
    this._m4storage[1] *= sx
    this._m4storage[2] *= sx
    this._m4storage[3] *= sx
    this._m4storage[4] *= sy
    this._m4storage[5] *= sy
    this._m4storage[6] *= sy
    this._m4storage[7] *= sy
    this._m4storage[8] *= sz
    this._m4storage[9] *= sz
    this._m4storage[10] *= sz
    this._m4storage[11] *= sz
    this._m4storage[12] *= sw
    this._m4storage[13] *= sw
    this._m4storage[14] *= sw
    this._m4storage[15] *= sw
  }

  rotateX(angle: number) {
    const cosAngle = Math.cos(angle)
    const sinAngle = Math.sin(angle)
    const t1 = this._m4storage[4] * cosAngle + this._m4storage[8] * sinAngle
    const t2 = this._m4storage[5] * cosAngle + this._m4storage[9] * sinAngle
    const t3 = this._m4storage[6] * cosAngle + this._m4storage[10] * sinAngle
    const t4 = this._m4storage[7] * cosAngle + this._m4storage[11] * sinAngle
    const t5 = this._m4storage[4] * -sinAngle + this._m4storage[8] * cosAngle
    const t6 = this._m4storage[5] * -sinAngle + this._m4storage[9] * cosAngle
    const t7 = this._m4storage[6] * -sinAngle + this._m4storage[10] * cosAngle
    const t8 = this._m4storage[7] * -sinAngle + this._m4storage[11] * cosAngle
    this._m4storage[4] = t1
    this._m4storage[5] = t2
    this._m4storage[6] = t3
    this._m4storage[7] = t4
    this._m4storage[8] = t5
    this._m4storage[9] = t6
    this._m4storage[10] = t7
    this._m4storage[11] = t8
  }

  rotateY(angle: number) {
    const cosAngle = Math.cos(angle)
    const sinAngle = Math.sin(angle)
    const t1 = this._m4storage[0] * cosAngle + this._m4storage[8] * -sinAngle
    const t2 = this._m4storage[1] * cosAngle + this._m4storage[9] * -sinAngle
    const t3 = this._m4storage[2] * cosAngle + this._m4storage[10] * -sinAngle
    const t4 = this._m4storage[3] * cosAngle + this._m4storage[11] * -sinAngle
    const t5 = this._m4storage[0] * sinAngle + this._m4storage[8] * cosAngle
    const t6 = this._m4storage[1] * sinAngle + this._m4storage[9] * cosAngle
    const t7 = this._m4storage[2] * sinAngle + this._m4storage[10] * cosAngle
    const t8 = this._m4storage[3] * sinAngle + this._m4storage[11] * cosAngle
    this._m4storage[0] = t1
    this._m4storage[1] = t2
    this._m4storage[2] = t3
    this._m4storage[3] = t4
    this._m4storage[8] = t5
    this._m4storage[9] = t6
    this._m4storage[10] = t7
    this._m4storage[11] = t8
  }

  rotateZ(angle: number) {
    const cosAngle = Math.cos(angle)
    const sinAngle = Math.sin(angle)
    const t1 = this._m4storage[0] * cosAngle + this._m4storage[4] * sinAngle
    const t2 = this._m4storage[1] * cosAngle + this._m4storage[5] * sinAngle
    const t3 = this._m4storage[2] * cosAngle + this._m4storage[6] * sinAngle
    const t4 = this._m4storage[3] * cosAngle + this._m4storage[7] * sinAngle
    const t5 = this._m4storage[0] * -sinAngle + this._m4storage[4] * cosAngle
    const t6 = this._m4storage[1] * -sinAngle + this._m4storage[5] * cosAngle
    const t7 = this._m4storage[2] * -sinAngle + this._m4storage[6] * cosAngle
    const t8 = this._m4storage[3] * -sinAngle + this._m4storage[7] * cosAngle
    this._m4storage[0] = t1
    this._m4storage[1] = t2
    this._m4storage[2] = t3
    this._m4storage[3] = t4
    this._m4storage[4] = t5
    this._m4storage[5] = t6
    this._m4storage[6] = t7
    this._m4storage[7] = t8
  }

  translate(tx: number, ty: number, tz: number) {
    const tw = 1
    const t1 =
      this._m4storage[0] * tx +
      this._m4storage[4] * ty +
      this._m4storage[8] * tz +
      this._m4storage[12] * tw
    const t2 =
      this._m4storage[1] * tx +
      this._m4storage[5] * ty +
      this._m4storage[9] * tz +
      this._m4storage[13] * tw
    const t3 =
      this._m4storage[2] * tx +
      this._m4storage[6] * ty +
      this._m4storage[10] * tz +
      this._m4storage[14] * tw
    const t4 =
      this._m4storage[3] * tx +
      this._m4storage[7] * ty +
      this._m4storage[11] * tz +
      this._m4storage[15] * tw
    this._m4storage[12] = t1
    this._m4storage[13] = t2
    this._m4storage[14] = t3
    this._m4storage[15] = t4
  }

  multiply(arg: Matrix4) {
    const m00 = this._m4storage[0]
    const m01 = this._m4storage[4]
    const m02 = this._m4storage[8]
    const m03 = this._m4storage[12]
    const m10 = this._m4storage[1]
    const m11 = this._m4storage[5]
    const m12 = this._m4storage[9]
    const m13 = this._m4storage[13]
    const m20 = this._m4storage[2]
    const m21 = this._m4storage[6]
    const m22 = this._m4storage[10]
    const m23 = this._m4storage[14]
    const m30 = this._m4storage[3]
    const m31 = this._m4storage[7]
    const m32 = this._m4storage[11]
    const m33 = this._m4storage[15]
    const argStorage = arg._m4storage
    const n00 = argStorage[0]
    const n01 = argStorage[4]
    const n02 = argStorage[8]
    const n03 = argStorage[12]
    const n10 = argStorage[1]
    const n11 = argStorage[5]
    const n12 = argStorage[9]
    const n13 = argStorage[13]
    const n20 = argStorage[2]
    const n21 = argStorage[6]
    const n22 = argStorage[10]
    const n23 = argStorage[14]
    const n30 = argStorage[3]
    const n31 = argStorage[7]
    const n32 = argStorage[11]
    const n33 = argStorage[15]
    this._m4storage[0] = m00 * n00 + m01 * n10 + m02 * n20 + m03 * n30
    this._m4storage[4] = m00 * n01 + m01 * n11 + m02 * n21 + m03 * n31
    this._m4storage[8] = m00 * n02 + m01 * n12 + m02 * n22 + m03 * n32
    this._m4storage[12] = m00 * n03 + m01 * n13 + m02 * n23 + m03 * n33
    this._m4storage[1] = m10 * n00 + m11 * n10 + m12 * n20 + m13 * n30
    this._m4storage[5] = m10 * n01 + m11 * n11 + m12 * n21 + m13 * n31
    this._m4storage[9] = m10 * n02 + m11 * n12 + m12 * n22 + m13 * n32
    this._m4storage[13] = m10 * n03 + m11 * n13 + m12 * n23 + m13 * n33
    this._m4storage[2] = m20 * n00 + m21 * n10 + m22 * n20 + m23 * n30
    this._m4storage[6] = m20 * n01 + m21 * n11 + m22 * n21 + m23 * n31
    this._m4storage[10] = m20 * n02 + m21 * n12 + m22 * n22 + m23 * n32
    this._m4storage[14] = m20 * n03 + m21 * n13 + m22 * n23 + m23 * n33
    this._m4storage[3] = m30 * n00 + m31 * n10 + m32 * n20 + m33 * n30
    this._m4storage[7] = m30 * n01 + m31 * n11 + m32 * n21 + m33 * n31
    this._m4storage[11] = m30 * n02 + m31 * n12 + m32 * n22 + m33 * n32
    this._m4storage[15] = m30 * n03 + m31 * n13 + m32 * n23 + m33 * n33
  }

  static zero() {
    return new Matrix4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  }

  static identity() {
    return new Matrix4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }

  static rotationX(radians: number) {
    const m4 = Matrix4.zero()
    m4._m4storage[15] = 1
    m4.setRotationX(radians)
    return m4
  }

  static rotationY(radians: number) {
    const m4 = Matrix4.zero()
    m4._m4storage[15] = 1
    m4.setRotationY(radians)
    return m4
  }

  static rotationZ(radians: number) {
    const m4 = Matrix4.zero()
    m4._m4storage[15] = 1
    m4.setRotationZ(radians)
    return m4
  }

  static translation(translation: Vector3) {
    const m4 = Matrix4.identity()
    m4.setTranslation(translation)
    return m4
  }

  static translationValues(x: number, y: number, z: number) {
    const m4 = Matrix4.identity()
    m4.setTranslationRaw(x, y, z)
    return m4
  }

  static diagonal3(scale: Vector3) {
    const m = Matrix4.zero()
    const mStorage = m._m4storage
    const scaleStorage = scale._v3storage
    mStorage[15] = 1.0
    mStorage[10] = scaleStorage[2]
    mStorage[5] = scaleStorage[1]
    mStorage[0] = scaleStorage[0]
    return m
  }

  static diagonal3Values(x: number, y: number, z: number) {
    const m = Matrix4.zero()
    const mStorage = m._m4storage
    mStorage[15] = 1.0
    mStorage[10] = z
    mStorage[5] = y
    mStorage[0] = x
    return m
  }

  static skewX(alpha: number) {
    const m = Matrix4.identity()
    m._m4storage[4] = Math.tan(alpha)
    return m
  }

  static skewY(beta: number) {
    const m = Matrix4.identity()
    m._m4storage[1] = Math.tan(beta)
    return m
  }

  static skew(alpha: number, beta: number) {
    const m = Matrix4.identity()
    m._m4storage[4] = Math.tan(alpha)
    m._m4storage[1] = Math.tan(beta)
    return m
  }

  get storage(): Float64Array {
    return this._m4storage
  }
}
