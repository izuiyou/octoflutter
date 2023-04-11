import {isNullOrUndefined} from '@octoflutter/dartsdk'
import {MessageCodec, MethodCodec, MethodCall} from './message_codec'

export class BinaryCodec
  extends N.BinaryCodec
  implements MessageCodec<Uint8Array>
{
  constructor() {
    super()
  }

  encodeMessage(message: Uint8Array): Uint8Array {
    return message
  }

  decodeMessage(message: Uint8Array): Uint8Array {
    return message
  }
}

export class StringCodec extends N.StringCodec implements MessageCodec<string> {
  constructor() {
    super()
  }

  encodeMessage(message: string): Uint8Array {
    return N.octoEncodeMessage(this, message)
  }

  decodeMessage(message: Uint8Array): string {
    return N.octoDecodeMessage(this, message)
  }
}

export class JSONMessageCodec
  extends N.JSONMessageCodec
  implements MessageCodec<any>
{
  constructor() {
    super()
  }

  encodeMessage(message: any): Uint8Array {
    return N.octoEncodeMessage(this, message)
  }

  decodeMessage(message: Uint8Array) {
    return N.octoDecodeMessage(this, message)
  }
}

export class StandardMessageCodec
  extends N.StandardMessageCodec
  implements MessageCodec<any>
{
  constructor() {
    super()
  }

  encodeMessage(message: any): Uint8Array {
    return N.octoEncodeMessage(this, message)
  }

  decodeMessage(message: Uint8Array) {
    return N.octoDecodeMessage(this, message)
  }
}

export class StandardMethodCodec
  extends N.StandardMethodCodec
  implements MethodCodec
{
  constructor() {
    super()
  }

  encodeMethodCall(methodCall: MethodCall): Uint8Array {
    return N.octoEncodeMethodCall(this, methodCall.method, methodCall.args)
  }

  decodeMethodCall(methodCall: Uint8Array): MethodCall {
    const ret = N.octoDecodeMethodCall(this, methodCall)
    if (isNullOrUndefined(ret)) {
      return null
    }
    return new MethodCall(ret[0], ret[1])
  }

  decodeEnvelope(envelope: Uint8Array): any {
    return N.octoDecodeEnvelope(this, envelope)
  }

  encodeSuccessEnvelope(result: any): Uint8Array {
    return N.octoEncodeSuccessEnvelope(this, result)
  }

  encodeErrorEnvelope(args: {
    code: string
    message?: string
    details?: any
  }): Uint8Array {
    return N.octoEncodeErrorEnvelope(
      this,
      args.code,
      args.message ?? null,
      args.details ?? null
    )
  }
}

export class JSONMethodCodec extends N.JSONMethodCodec implements MethodCodec {
  constructor() {
    super()
  }

  encodeMethodCall(methodCall: MethodCall): Uint8Array {
    return N.octoEncodeMethodCall(this, methodCall.method, methodCall.args)
  }

  decodeMethodCall(methodCall: Uint8Array): MethodCall {
    const ret = N.octoDecodeMethodCall(this, methodCall)
    if (isNullOrUndefined(ret)) {
      return null
    }
    return new MethodCall(ret[0], ret[1])
  }

  decodeEnvelope(envelope: Uint8Array): any {
    return N.octoDecodeEnvelope(this, envelope)
  }

  encodeSuccessEnvelope(result: any): Uint8Array {
    return N.octoEncodeSuccessEnvelope(this, result)
  }

  encodeErrorEnvelope(args: {
    code: string
    message?: string
    details?: any
  }): Uint8Array {
    return N.octoEncodeErrorEnvelope(
      this,
      args.code,
      args.message ?? null,
      args.details ?? null
    )
  }
}
