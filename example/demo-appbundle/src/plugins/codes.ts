import {Color, Radius} from '@octoflutter/dartsdk'
import {
  Alignment,
  BorderRadius,
  BoxDecoration,
  Colors,
  Container,
  EdgeInsets,
  GestureDetector,
  Stack,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {kSize14} from '../constants'
import {Lang} from '../lang'
import {RouterPlugin} from './router_plugin'

export const codeWidget = (code, url): Widget => {
  return new Container({
    child: new Stack({
      alignment: Alignment.topRight,
      children: [
        new Container({
          padding: EdgeInsets.only({left: 30, right: 30, top: 40, bottom: 30}),
          child: new Text(code, {
            style: new TextStyle({
              fontSize: kSize14,
              color: Colors.black54,
            }),
          }),
        }),
        new Container({
          padding: EdgeInsets.only({left: 10, right: 10, top: 5, bottom: 5}),
          decoration: new BoxDecoration({
            color: Colors.blue,
            borderRadius: BorderRadius.only({topRight: Radius.circular(10)}),
          }),
          child: new GestureDetector({
            child: new Text(Lang.instance.isZh() ? '查看源码' : 'View Code', {
              style: new TextStyle({
                fontSize: kSize14,
                color: Colors.white,
              }),
            }),
            onTap: () => {
              RouterPlugin.open(url)
            },
          }),
        }),
      ],
    }),
    decoration: new BoxDecoration({
      color: Color.fromARGB(220, 220, 220, 220),
      borderRadius: BorderRadius.all(Radius.circular(10)),
    }),

    margin: EdgeInsets.only({
      top: 0,
      bottom: 10,
      left: 20,
      right: 20,
    }),
  })
}

export const CODE_ANIMATION = `......
class _MyAnimState extends TickerProviderStateMixin<MyAnimWidget> {
  ......

  initState() {
    super.initState()
    const tween = new NumberTween(0, 1)
    const colorTween = new ColorTween(Colors.blue, Colors.white)
    const sizeTween = new SizeTween(new Size(300, 300), new Size(100, 100))
    this.animCtr = new AnimationController({
      vsync: this,
      duration: new Duration({seconds: this.widget.duration}),
    })
    this.anim = this.animCtr.drive(tween)
    this.anim2 = this.animCtr.drive(colorTween)
    this.anim3 = this.animCtr.drive(sizeTween)
    ......
  }

  build(context: BuildContext): Widget {
    return new Container({
      alignment: Alignment.center,
      child: new Directionality({
        textDirection: TextDirection.ltr,
        child: new ClipOval({
          child: new GestureDetector({
            child: new Stack({
              alignment: Alignment.center,
              children: [
                Transform.rotate({
                  child: OctoImage.asset('icon.png', {width: 100, height: 100}),
                  angle: Math.PI * 2 * this.anim.value,
                }),
                new Container({
                  width: this.anim3.value.width,
                  height: this.anim3.value.height,
                  child: new CircularProgressIndicator({
                    value: this.animCtr.value ?? 0,
                    color: Colors.black,
                    backgroundColor: Colors.white,
                  }),
                }),
              ],
            }),
            onTap: () => {
             ......
            },
          }),
          clipper: new MyClipper(),
          clipBehavior: Clip.antiAlias,
        }),
      }),
      color: this.anim2.value,
      transformAlignment: Alignment.center,
    })
  }
......
}
`

export const CODE_CUSTOM_PAINT = `......
export class ProgressPainter extends CustomPainter {
  ......

  paint(canvas: Canvas, size: Size) {
    const radius = this.value * 0.8
    const indicatorRadius = this.value * 0.6

    const tickFundamentalRRect = RRect.fromLTRBXY(
      -radius / indicatorRadius,
      -radius / 3.0,
      radius / indicatorRadius,
      -radius,
      radius / indicatorRadius,
      radius / indicatorRadius
    )

    const tickCount = 12

    canvas.save()
    canvas.translate(size.width / 2.0, size.height / 2.0)

    const activeTick = Math.floor(tickCount * this.value)

    for (let i = 0; i < tickCount; ++i) {
      const t = (tickCount + i - activeTick) / tickCount
      this.setAlpha(t * 255)
      canvas.drawRRect(tickFundamentalRRect, this.mPaint)
      canvas.rotate((Math.PI * 2) / tickCount)
    }

    canvas.restore()
  }

  shouldRepaint(oldDelegate: CustomPainter) {
    return true
  }
}`

export const CODE_LOTTIE = `......
class _MobilePageLottieState extends State<MobilePageLottie> {
  arrow: AssetLottie
  airbnb: AssetLottie

  initState(): void {
    super.initState()
    this.arrow = new AssetLottie('lottie/hamburger_arrow.json')
    this.airbnb = new AssetLottie('lottie/airbnb/data.json')
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      ......
      body: new Center({
        child: new DelayWidget({
          delay: 300,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              new Container({
                width: 100,
                height: 100,
                child: new LottieBuilder({
                  lottie: this.arrow,
                }),
              }),
              new Container({
                width: 100,
                height: 100,
                child: new LottieBuilder({
                  lottie: this.airbnb,
                }),
              }),
            ],
          }),
        }),
      }),
    })
  }

  dispose(): void {
    super.dispose()
    this.arrow?.dispose()
    this.airbnb?.dispose()
  }
}
`

export const CODE_PAGE_VIEW = `......
export class _MobilePageTransformPageViewState extends State<MobilePageTransformPageView> {
  ctrl: TransformerPageController
  initState(): void {
    super.initState()
    this.ctrl = new TransformerPageController({
      itemCount: 10,
      viewportFraction: 0.8,
    })
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      ......
      body: new TransformerPageView({
        itemCount: 10,
        transformer: new TScaleAndFadeTransformer(),
        pageController: this.ctrl,
        itemBuilder: (ctx, index) => {
          return new Container({
            color: Colors.blue,
            child: new Text('' + index, {
              style: new TextStyle({
                fontSize: kSize18,
                color: Colors.white,
              }),
            }),
            alignment: Alignment.center,
          })
        },
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Text('jump'),
        onPressed: () => {
          this.ctrl.jumpTo(5)
        },
      }),
    })
  }
}
`

export const CODE_NESTED_REFRESH = `......
export class MobilePageNestedRefreshState extends State<MobilePageNestedRefresh> {
  ctrl: RefreshController
  length = 10

  initState(): void {
    super.initState()
    this.ctrl = new RefreshController()
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      ......
      body: new DefaultTabController({
        length: 3,
        initialIndex: 2,
        child: new Builder({
          builder: (ctx) => {
            DefaultTabController.of(ctx)?.addListener(() => {
              window.console.log('index:' + DefaultTabController.of(ctx).index)
            })
            return new OctoNestedScrollView({
              headerSliverBuilder: (ctx, inner) => {
                return [
                  new SliverPersistentHeader({
                    delegate: new MyHeaderDelegate(),
                    pinned: true,
                  }),
                ]
              },
              body: new TabBarView({
                children: [
                  new OctoVisibilityDetector({
                    child: new AutomaticKeepAlive({
                      child: new ItemPageContent(0),
                    }),
                    uniqueKey: new Key('0'),
                    inPageView: true,
                    pageIndex: 0,
                  }),

                  new OctoVisibilityDetector({
                    child: new AutomaticKeepAlive({
                      child: new ItemPageContent(1),
                    }),
                    uniqueKey: new Key('1'),
                    inPageView: true,
                    pageIndex: 1,
                  }),

                  new OctoVisibilityDetector({
                    child: new AutomaticKeepAlive({
                      child: new ItemPageContent(2),
                    }),
                    uniqueKey: new Key('2'),
                    inPageView: true,
                    pageIndex: 2,
                  }),
                ],
              }),
            })
          },
        }),
      }),
    })
  }
}
`

export const CODE_PLUGIN_TS = `const httpChannel = new MethodChannel('example.plugins/http')

export class HttpPlugin {

  ......

  static get = (url: string, params?: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      httpChannel
        .invokeMethod('get', this.createParams(url, params))
        .then((v) => resolve(v))
        .catch((e) => reject(e))
    })
  }
}`

export const CODE_PLUGIN_ANDROID = `class HttpPlugin : FlutterPlugin, MethodCallHandler {

    private val channel: String = "example.plugins/http"
    private var methodChannel: MethodChannel? = null
    private val okHttpClient: OkHttpClient = OkHttpClient()

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        when (call.method) {
            "get" -> {
                val url: String? = call.argument<String>("url");
                val params: String? = call.argument<String>("params")
                if (TextUtils.isEmpty(url)) {
                    result.error("-1", "url is empty", null)
                    return
                }
                val builder = Request.Builder()
                val httpUrl = url!!.toHttpUrl()
                val httpUrlBuilder = httpUrl.newBuilder()
                if (!TextUtils.isEmpty(params)) {
                    val jsonObject = JSONObject(params!!)
                    val names = jsonObject.names()
                    if (names != null && names.length() > 0) {
                        for (i in 0 until names.length()) {
                            val key = names.optString(i)
                            val value = jsonObject.opt(key)?.toString() ?: ""
                            httpUrlBuilder.addQueryParameter(key, value)
                        }
                    }
                }
                builder.get()
                builder.url(httpUrlBuilder.build())
                okHttpClient.newCall(builder.build()).enqueue(object : Callback {
                    override fun onFailure(call: Call, e: IOException) {
                        result.error("-2", "request onFailure", e.message)
                    }

                    @Throws(IOException::class)
                    override fun onResponse(call: Call, response: Response) {
                        if (response.code == 200) {
                            result.success(response.body!!.string())
                        } else {
                            result.error("\${response.code}", "", null)
                        }
                    }
                })
            }
            else -> result.notImplemented()
        }
    }

    override fun onAttachedToEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        if (methodChannel == null) {
            methodChannel = MethodChannel(binding.binaryMessenger, channel)
            methodChannel?.setMethodCallHandler(this)
        }
    }

    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        methodChannel?.setMethodCallHandler(null)
        methodChannel = null
    }
}`

export const CODE_PLUGIN_ANDROID_REGISTER = `fun plugins4Engine(engine: FlutterEngine) {
    if (!engine.plugins.has(HttpPlugin::class.java)) {
        engine.plugins.add(HttpPlugin())
    }
}`

export const CODE_APPBUNDLE_PLUGIN_TS = `
const channel = new AppBundleMethodChannel('example.plugins/video')

......

export class VideoPlayerController {
 
  ......

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

  ......
}`

export const CODE_TEXTURE = `
class VideoPlayerState
  extends State<VideoPlayer>
  implements VideoListener, WidgetsBindingObserver
{

  ......

  build(context: BuildContext): Widget {
    return this._textureId === -1 || !this.widget.controller.ready
      ? this.widget.loadingWidget ?? new Container()
      : new Stack({
          children: [
            new Texture({
              textureId: this._textureId,
            }),
            ......
          ],
        })
  }

}`

export const CODE_APPBUNDLE_PLUGIN_ANDROID = `class VideoAppBundlePlugin : AppBundlePlugin {
  companion object {
      const val methodChannelName = "example.plugins/video"
      const val eventChannelName = "example.plugins/video_event"
  }

  private val bundleChannelMap: MutableMap<Int, VideoBundleChannel> = mutableMapOf()

  override fun onAttachAppBundle(
      bid: Int,
      binding: FlutterPlugin.FlutterPluginBinding?,
      host: FlutterActivityAndFragmentDelegate.Host?
  ) {
      bundleChannelMap[bid] = VideoBundleChannel(bid, binding, host)
  }

  override fun onDetachAppBundle(
      bid: Int,
      binding: FlutterPlugin.FlutterPluginBinding?,
      host: FlutterActivityAndFragmentDelegate.Host?
  ) {
      if (bundleChannelMap.containsKey(bid)) {
          bundleChannelMap.remove(bid)?.destroy()
      }
  }

  private class VideoBundleChannel(
      private val bid: Int,
      flutterPluginBinding: FlutterPluginBinding?,
      host: Host?
  ) :
      MethodCallHandler {
      private var flutterPluginBinding: FlutterPluginBinding?
      private var host: Host?
      private var channel: AppBundleMethodChannel?
      private val playerMap: MutableMap<Int, ExamplePlayer> = mutableMapOf()
      private val channelMap: MutableMap<Int, AppBundleMethodChannel> = mutableMapOf()

      init {
          this.flutterPluginBinding = flutterPluginBinding
          this.host = host
          channel = AppBundleMethodChannel(
              flutterPluginBinding!!.binaryMessenger,
              methodChannelName,
              bid
          )
          channel?.setMethodCallHandler(this)
      }

      override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
          when (call.method) {
              "create" -> {
                  var dataSource = call.argument<String>("asset")
                  val local = call.argument<Boolean>("local") ?: false
                  if (!TextUtils.isEmpty(dataSource)) {
                      if (local) {
                          val file = flutterPluginBinding!!.flutterAssets.getAssetFilePathByName(
                              bid, dataSource!!
                          )
                          dataSource = file.toURI().toString()
                      }
                      val entry = flutterPluginBinding!!.textureRegistry.createSurfaceTexture()
                      val name: String =
                          eventChannelName + "_" + entry.id() + "_"
                      val methodChannel = AppBundleMethodChannel(
                          flutterPluginBinding!!.binaryMessenger, name,
                          bid
                      )
                      val player = ExamplePlayer(
                          flutterPluginBinding!!.applicationContext,
                          entry,
                          dataSource,
                          local,
                          object : ExamplePlayer.VideoCallback {
                              override fun onReady() {
                                  methodChannel.invokeMethod("onReady", null)
                              }

                              override fun onEnd() {
                                  methodChannel.invokeMethod("onEnd", null)
                              }

                              override fun onError(msg: String?) {
                                  methodChannel.invokeMethod("onError", msg)
                              }
                          })
                      playerMap[entry.id()] = player
                      channelMap[entry.id()] = methodChannel
                      result.success(entry.id())
                  } else {
                      result.success(-1)
                  }
              }
              
              ......
      }

      ......
  }

}`

export const CODE_APPBUNDLE_PLUGIN_REGISTER = `fun plugins4AppBundle(appBundle: AppBundle) {
  if (!appBundle.has(VideoAppBundlePlugin::class.java)) {
      appBundle.add(VideoAppBundlePlugin())
  }
}`

export const CODE_PLATFORM_VIEW_TS = `new Container({
  margin: EdgeInsets.only({left: 30, top: 30}),
  width: 200,
  height: 200,
  child:
    defaultTargetPlatform === TargetPlatform.android
      ? new AppbundleAndroidView({
          viewType: 'my_platform_view',
          creationParams: JSON.stringify({
            text: 'this is AndroidView',
            color: 'white',
          }),
          creationParamsCodec: new JSONMessageCodec(),
          onPlatformViewCreated: (id) => {
            this.platformViewId = id
            window.console.log('onPlatformViewCreated:' + id)
          },
        })
      : new AppbundleUiKitView({
          viewType: 'my_platform_view',
          creationParams: JSON.stringify({
            text: 'this is UiKitView',
            color: 'white',
          }),
          creationParamsCodec: new JSONMessageCodec(),
          onPlatformViewCreated: (id) => {
            window.console.log('onPlatformViewCreated:' + id)
            this.platformViewId = id
          },
        }),
})`

export const CODE_PLATFORM_VIEW_ANDROID = `
class ExamplePlatformViewAppBundlePlugin : AppBundlePlugin {

    private val bundleMap: MutableMap<Int, ExamplePlatformViewChannel> = mutableMapOf()

    override fun onAttachAppBundle(
        bid: Int,
        binding: FlutterPlugin.FlutterPluginBinding?,
        host: FlutterActivityAndFragmentDelegate.Host?
    ) {
        bundleMap[bid] = ExamplePlatformViewChannel(bid, binding!!, host)
    }

    override fun onDetachAppBundle(
        bid: Int,
        binding: FlutterPlugin.FlutterPluginBinding?,
        host: FlutterActivityAndFragmentDelegate.Host?
    ) {
        if (bundleMap.containsKey(bid)) {
            bundleMap.remove(bid)?.destroy()
        }
    }


    private class ExamplePlatformViewChannel(
        private val bid: Int,
        private val binding: FlutterPluginBinding,
        private var host: Host?
    ) {
        init {
            binding.platformViewRegistry().registerAppBundleViewFactory(
                bid, "my_platform_view", ExamplePlatformViewFactory(
                    bid,
                    binding.binaryMessenger
                )
            )
        }

        fun destroy() {
            binding.platformViewRegistry().unRegisterAppBundleViewFactory(bid, "my_platform_view")
            host = null
        }
    }

}


class ExamplePlatformViewFactory(private val bid: Int, private val messenger: BinaryMessenger) :
    PlatformViewFactory(JSONMessageCodec.INSTANCE) {

    override fun create(p0: Context?, p1: Int, p2: Any?): PlatformView {
        return ExamplePlatformView(p0, messenger, bid, p1, p2)
    }
}`

export const CODE_PLATFORM_VIEW_ANDROID_REGISTER = `fun plugins4AppBundle(appBundle: AppBundle) {
  if (!appBundle.has(ExamplePlatformViewAppBundlePlugin::class.java)) {
      appBundle.add(ExamplePlatformViewAppBundlePlugin())
  }
}`
