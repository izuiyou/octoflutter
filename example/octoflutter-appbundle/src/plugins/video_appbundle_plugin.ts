import {
  AppLifecycleState,
  Duration,
  isNullOrUndefined,
} from '@octoflutter/dartsdk'
import {
  Alignment,
  BuildContext,
  Center,
  Colors,
  Container,
  GestureDetector,
  LinearProgressIndicator,
  MethodCall,
  Opacity,
  Stack,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Texture,
  Ticker,
  Widget,
  WidgetsBinding,
  WidgetsBindingObserver,
} from '@octoflutter/flutter'
import {AppBundleMethodChannel} from '@octoflutter/octo'
import {Lang} from '../lang'

const channel = new AppBundleMethodChannel('example.plugins/video')

export class VideoValue {
  public readonly duration: Duration
  public readonly position: Duration
  public readonly width: number
  public readonly height: number
  public readonly playing: boolean
  public readonly loop: boolean
  public readonly volume: number

  constructor(
    duration: Duration,
    position: Duration,
    width: number,
    height: number,
    playing: boolean,
    loop: boolean,
    volume: number
  ) {
    this.duration = duration
    this.position = position
    this.width = width
    this.height = height
    this.playing = playing
    this.loop = loop
    this.volume = volume
  }

  static fromJson(json): VideoValue {
    window.console.log(json)
    const d = new Duration({milliseconds: json['duration']})
    const p = new Duration({milliseconds: json['position']})
    const w = json['width']
    const h = json['height']
    const playing = json['playing']
    const loop = json['loop']
    const volume = json['volume']
    return new VideoValue(d, p, w, h, playing, loop, volume)
  }
}

export class VideoPlayerController {
  dataSource: string
  local: boolean
  textureId = -1
  ready = false
  private eventChannel: AppBundleMethodChannel
  private listeners: Array<VideoListener> = []
  playing = false
  looping = false

  static asset = (dataSource: string): VideoPlayerController => {
    const ctl = new VideoPlayerController()
    ctl.dataSource = dataSource
    ctl.local = true
    return ctl
  }

  static network = (dataSource: string): VideoPlayerController => {
    const ctl = new VideoPlayerController()
    ctl.dataSource = dataSource
    ctl.local = false
    return ctl
  }

  initialize = (): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      channel
        .invokeMethod('create', {
          asset: this.dataSource,
          local: this.local ?? true,
        })
        .then((v) => {
          this.textureId = v
          if (!isNullOrUndefined(this.textureId)) {
            const name =
              'example.plugins/video_event' + '_' + this.textureId + '_'
            this.eventChannel = new AppBundleMethodChannel(name)
            this.eventChannel.setMethodCallHandler(this.onEvent)
          }
          resolve(v)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  onEvent = (call: MethodCall): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      window.console.log('onEvent :' + call.method)
      if ('onReady' === call.method) {
        this.ready = true
        this.listeners.forEach((v) => {
          v.onReady()
        })
      } else if ('onEnd' === call.method) {
        if (!this.looping) {
          this.playing = false
        }
        this.listeners.forEach((v) => {
          v.onEnd()
        })
      } else if ('onError' === call.method) {
        this.listeners.forEach((v) => {
          v.onError(call.args)
        })
      }
      resolve(null)
    })
  }

  play = async () => {
    this.playing = true
    return channel.invokeMethod('play', {textureId: this.textureId})
  }

  pause = async () => {
    this.playing = false
    return await channel.invokeMethod('pause', {textureId: this.textureId})
  }

  dispose = async () => {
    return await channel.invokeMethod('dispose', {
      textureId: this.textureId,
    })
  }

  loop = async (loop: boolean) => {
    this.looping = loop
    return await channel.invokeMethod('loop', {
      textureId: this.textureId,
      loop: loop ?? false,
    })
  }

  volume = async (volume: number) => {
    return await channel.invokeMethod('volume', {
      textureId: this.textureId,
      volume: volume ?? 0.5,
    })
  }

  seekTo = async (position: Duration) => {
    return await channel.invokeMethod('seekTo', {
      textureId: this.textureId,
      position: position.inMilliseconds ?? 0,
    })
  }

  value = (): Promise<VideoValue> => {
    return new Promise<VideoValue>((resolve, reject) => {
      channel
        .invokeMethod('value', {textureId: this.textureId})
        .then((v) => {
          if (!isNullOrUndefined(v)) {
            resolve(VideoValue.fromJson(JSON.parse(v)))
          } else {
            reject(null)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  addListener = (l: VideoListener) => {
    this.listeners.push(l)
  }

  removeListener = (l: VideoListener) => {
    const index = this.listeners.indexOf(l)
    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }
}

export abstract class VideoListener {
  abstract onReady(): void

  abstract onError(error: string): void

  abstract onEnd(): void
}

export type LoopTickCallback = (dt: number) => void

export class LoopTick {
  ticker: Ticker
  previous: Duration
  callback: LoopTickCallback
  constructor(callback: LoopTickCallback) {
    this.callback = callback
    this.ticker = new Ticker(this.tick)
  }

  tick = (now: Duration) => {
    const delta = isNullOrUndefined(this.previous)
      ? 0
      : now.inMicroseconds - this.previous.inMicroseconds
    this.previous = now
    const dt = delta / Duration.microsecondsPerSecond
    this.callback(dt)
  }

  start() {
    this.ticker.start()
  }

  stop() {
    this.ticker.stop()
  }

  dispose() {
    this.ticker.dispose()
  }

  pause() {
    this.ticker.muted = true
    this.previous = null
  }

  resume() {
    this.ticker.muted = false
  }
}

class VideoPlayerState
  extends State<VideoPlayer>
  implements VideoListener, WidgetsBindingObserver
{
  _textureId = -1
  videoLoop: LoopTick
  value: VideoValue
  progress = 0

  total = 1
  current = 0
  isEnd = false

  initState() {
    super.initState()
    WidgetsBinding.instance.addObserver(this)

    this.widget.controller.addListener(this)
    this.widget.controller.initialize().then((v) => {
      this._textureId = v
      if (this.mounted) {
        this.setState(() => {})
      }
      this.widget.controller.play()
    })
    this.videoLoop = new LoopTick(this.loopCallback)
    this.videoLoop.start()
  }

  didChangeAppLifecycleState(state) {
    if (state == AppLifecycleState.resumed) {
      //BecameActive
      this.videoLoop.resume()
    } else if (state == AppLifecycleState.paused) {
      //EnterBackground
      this.videoLoop.pause()
      this.widget.controller.pause()
    }
  }

  didChangeMetrics() {}

  didChangeTextScaleFactor() {}

  didChangePlatformBrightness() {}

  onReady(): void {
    this.requestDuration()
  }
  onError(error: string): void {}
  onEnd(): void {
    this.isEnd = true
  }

  loopCallback = (dt: number) => {
    if (!this.mounted || this._textureId === -1) {
      return
    }

    if (this.widget.controller.playing && !isNullOrUndefined(this.value)) {
      this.current += dt * 1000
      this.progress = this.current / this.total
      if (this.progress < 0) {
        this.progress = 0
      } else if (this.progress > 1) {
        this.progress = 1
      }
    }

    if (this.isEnd) {
      this.progress = 1
    }

    this.setState(() => {})
  }

  requesting = false

  requestDuration = () => {
    if (this.requesting) {
      return
    }
    this.requesting = true
    this.widget.controller
      .value()
      .then((v) => {
        this.requesting = false
        if (v.duration.inMilliseconds > 0) {
          this.value = v
          this.total = v.duration.inMilliseconds
          this.current = v.position.inMilliseconds
        }
      })
      .catch((e) => {
        this.requesting = false
      })
  }

  build(context: BuildContext): Widget {
    return this._textureId === -1 || !this.widget.controller.ready
      ? this.widget.loadingWidget ?? new Container()
      : new Stack({
          children: [
            new Texture({
              textureId: this._textureId,
            }),
            new Container({
              alignment: Alignment.bottomCenter,
              child: new Container({
                height: 5,
                child: new LinearProgressIndicator({
                  value: this.progress,
                  backgroundColor: Colors.white,
                }),
              }),
            }),
            new Center({
              child: new GestureDetector({
                child: new Opacity({
                  child: new Container({
                    width: 50,
                    height: 50,
                    alignment: Alignment.center,
                    child: new Text(this.text(), {
                      style: new TextStyle({
                        fontSize: 14,
                        color: Colors.white,
                      }),
                    }),
                    color: Colors.yellow,
                  }),
                  opacity: 0.8,
                }),
                onTap: () => {
                  if (this.isEnd) {
                    this.widget.controller
                      .seekTo(new Duration({milliseconds: 0}))
                      .then((v) => {
                        this.isEnd = false
                        this.widget.controller.play()
                        this.requestDuration()
                      })
                  } else {
                    if (this.widget.controller.playing) {
                      this.widget.controller.pause()
                    } else {
                      this.widget.controller.play()
                      this.requestDuration()
                    }
                  }
                },
              }),
            }),
          ],
        })
  }

  text = () => {
    if (this.isEnd) {
      return Lang.instance.res().video_replay
    }
    if (this.widget.controller.playing) {
      return Lang.instance.res().video_pause
    }
    return Lang.instance.res().video_play
  }

  dispose() {
    super.dispose()
    this.videoLoop?.stop()
    this.videoLoop?.dispose()
    this.videoLoop = null

    WidgetsBinding.instance.removeObserver(this)
  }
}

export class VideoPlayer extends StatefulWidget {
  controller: VideoPlayerController
  loadingWidget?: Widget
  constructor(controller: VideoPlayerController, loadingWidget?: Widget) {
    super()
    this.controller = controller
    this.loadingWidget = loadingWidget
  }

  createState(): State<VideoPlayer> {
    return new VideoPlayerState()
  }
}
