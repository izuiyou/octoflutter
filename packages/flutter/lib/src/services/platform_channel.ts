import {Stream, isNullOrUndefined} from '@octoflutter/dartsdk'
import {MessageCodec, MethodCall, MethodCodec} from './message_codec'
import {
  BinaryCodec,
  JSONMessageCodec,
  JSONMethodCodec,
  StandardMessageCodec,
  StandardMethodCodec,
  StringCodec,
} from './message_codecs'

const METHOD_CODEC_TYPE_STANDARD = 1
const METHOD_CODEC_TYPE_JSON = 2

const MESSAGE_CODEC_TYPE_BINARY = 1
const MESSAGE_CODEC_TYPE_STRING = 2
const MESSAGE_CODEC_TYPE_STANDARD = 3
const MESSAGE_CODEC_TYPE_JSON = 4

export class MethodChannel {
  public readonly name: string
  private codecType: number = METHOD_CODEC_TYPE_STANDARD
  public readonly codec: MethodCodec
  constructor(name: string, codec?: MethodCodec) {
    this.name = name
    this.codec = codec ?? new StandardMethodCodec()
    this.codecType =
      this.codec instanceof JSONMethodCodec
        ? METHOD_CODEC_TYPE_JSON
        : METHOD_CODEC_TYPE_STANDARD
  }

  public invokeMethod = (method: string, args?: any): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      N.invokeMethod(
        this.codecType,
        this.name,
        method,
        isNullOrUndefined(args) ? null : JSON.stringify(args),
        (value) => {
          if (!isNullOrUndefined(value)) {
            try {
              const ret = this.codec.decodeEnvelope(value)
              resolve(ret)
            } catch (error) {
              reject(error)
            }
          } else {
            resolve(null)
          }
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  setMethodCallHandler = (handler: (call: MethodCall) => Promise<any>) => {
    if (!isNullOrUndefined(handler)) {
      N.setMethodCallHandler(this.name, (id, value) => {
        if (!isNullOrUndefined(value)) {
          const methodCall = this.codec.decodeMethodCall(value)
          if (isNullOrUndefined(methodCall)) {
            const bytes = this.codec.encodeErrorEnvelope({
              code: 'error',
              message: 'method_channel:' + this.name,
            })
            N.sendMethodCallResult(this.name, id, bytes)
          } else {
            handler(methodCall)
              .then((ret) => {
                const bytes = this.codec.encodeSuccessEnvelope(ret)
                N.sendMethodCallResult(this.name, id, bytes)
              })
              .catch((err) => {
                const bytes = this.codec.encodeErrorEnvelope({
                  code: 'error',
                  message:
                    'method_channel:' +
                    this.name +
                    ' method:' +
                    methodCall.method,
                  details: err,
                })
                N.sendMethodCallResult(this.name, id, bytes)
              })
          }
        }
      })
    }
  }
}

export class EventChannel {
  public readonly name: string
  private codecType: number = METHOD_CODEC_TYPE_STANDARD
  public readonly codec: MethodCodec
  constructor(name: string, codec?: MethodCodec) {
    this.name = name
    this.codec = codec ?? new StandardMethodCodec()
    this.codecType =
      this.codec instanceof JSONMethodCodec
        ? METHOD_CODEC_TYPE_JSON
        : METHOD_CODEC_TYPE_STANDARD
  }

  receiveBroadcastStream(args?: any): Stream {
    return new Stream(
      N.receiveBroadcastStream(
        this.codecType,
        this.name,
        args === null ? null : JSON.stringify(args)
      )
    )
  }
}

export class BasicMessageChannel<T> {
  public readonly name: string
  public readonly codec: MessageCodec<T>
  private codecType: number = MESSAGE_CODEC_TYPE_STANDARD
  constructor(name: string, codec: MessageCodec<T>) {
    this.name = name
    this.codec = codec
    if (codec instanceof BinaryCodec) {
      this.codecType = MESSAGE_CODEC_TYPE_BINARY
    } else if (codec instanceof StringCodec) {
      this.codecType = MESSAGE_CODEC_TYPE_STRING
    } else if (codec instanceof StandardMessageCodec) {
      this.codecType = MESSAGE_CODEC_TYPE_STANDARD
    } else if (codec instanceof JSONMessageCodec) {
      this.codecType = MESSAGE_CODEC_TYPE_JSON
    }
  }

  send = (message: T): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      N.octoBasicChannelSend(
        this.name,
        this.codecType,
        message,
        (value) => {
          const ret = this.codec.decodeMessage(value)
          resolve(ret)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  setMessageHandler = (handler: (message: T) => Promise<any>) => {
    if (!isNullOrUndefined(handler)) {
      N.octoBasicChannelHandler(this.name, (id, value) => {
        if (!isNullOrUndefined(value)) {
          const msg = this.codec.decodeMessage(value)
          if (isNullOrUndefined(msg)) {
            N.sendMethodCallResult(this.name, id, null)
          } else {
            handler(msg)
              .then((ret) => {
                const bytes = this.codec.encodeMessage(ret)
                N.sendMethodCallResult(this.name, id, bytes)
              })
              .catch((err) => {
                N.sendMethodCallResult(this.name, id, null)
              })
          }
        }
      })
    }
  }
}
