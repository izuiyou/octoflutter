export type ValueChanged<T> = (value: T) => void

export type ValueSetter<T> = (value: T) => void

export type ValueGetter<T> = () => T

export type AsyncCallback = () => Promise<void>

export type AsyncValueSetter<T> = (value: T) => Promise<void>

export type AsyncValueGetter<T> = () => Promise<T>
