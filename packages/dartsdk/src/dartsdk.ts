export const isNullOrUndefined = (value: any): boolean => {
  return value === null || value === undefined
}

export const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message)
  }
}

export * from './async'
export * from './collection'
export * from './core'
export * from './ui'
export * from './vector_math'
