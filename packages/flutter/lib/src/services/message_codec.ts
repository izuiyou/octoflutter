export class MethodCall {
  public readonly method: string
  public readonly args?: any

  constructor(method: string, args?: any) {
    this.method = method
    this.args = args
  }
}

export abstract class MessageCodec<T> {
  abstract encodeMessage(message: T): Uint8Array

  abstract decodeMessage(message: Uint8Array): T
}

export abstract class MethodCodec {
  abstract encodeMethodCall(methodCall: MethodCall): Uint8Array

  abstract decodeMethodCall(methodCall: Uint8Array): MethodCall

  abstract decodeEnvelope(envelope: Uint8Array): any

  abstract encodeSuccessEnvelope(result: any): Uint8Array

  abstract encodeErrorEnvelope(args: {
    code: string
    message?: string
    details?: any
  }): Uint8Array
}
