import {isNullOrUndefined} from '@octoflutter/dartsdk'

export const octoKey = Symbol('octoKey')

export class Key {
  constructor(value: string) {
    if (!isNullOrUndefined(value)) {
      this[octoKey] = N.keyInstance(value)
    }
  }
}

export abstract class LocalKey extends Key {}

export class ValueKey<T> extends LocalKey {
  constructor(value: T) {
    super(null)
    this[octoKey] = N.valueKeyInstance(value)
  }
}
