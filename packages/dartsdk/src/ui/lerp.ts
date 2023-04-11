export const lerpNumber = (a: number, b: number, t: number): number => {
  return a * (1.0 - t) + b * t
}

export const clampNumber = (
  value: number,
  min: number,
  max: number
): number => {
  if (value < min) {
    return min
  } else if (value > max) {
    return max
  } else {
    return value
  }
}

export const floor = (value: number): number => {
  return Math.floor(value)
}
