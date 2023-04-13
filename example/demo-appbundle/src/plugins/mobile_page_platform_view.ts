import {
  AppbundleAndroidView,
  AppbundleUiKitView,
  BuildContext,
  Colors,
  Container,
  defaultTargetPlatform,
  EdgeInsets,
  FloatingActionButton,
  GestureDetector,
  Icon,
  Icons,
  JSONMessageCodec,
  SafeArea,
  Scaffold,
  ScaffoldMessenger,
  SnackBar,
  Stack,
  State,
  StatefulWidget,
  TargetPlatform,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {AppBundleMethodChannel} from '@octoflutter/octo'
import {commAppBar} from '../common_widgets'
import {kSize14, kSubTitleColor} from '../constants'
import {Lang} from '../lang'
import {LoopTick} from './video_appbundle_plugin'

export class MobilePagePlatformView extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _MobilePagePlatformViewState()
  }
}

class _MobilePagePlatformViewState extends State<MobilePagePlatformView> {
  tappedCount = 0
  loopTick: LoopTick
  channel: AppBundleMethodChannel
  platformViewId: number

  initState(): void {
    super.initState()
    this.loopTick = new LoopTick(this.loopCallback)
    this.loopTick.start()
    this.channel = new AppBundleMethodChannel('my_platform_view')
  }

  loopCallback = (dt: number) => {
    if (!this.mounted) {
      return
    }
    this.setState(() => {})
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: commAppBar('PagePlatformView', false),
      body: new SafeArea({
        child: new Stack({
          children: [
            new Container({
              width: 300,
              height: 300,
              color: Colors.redAccent,
            }),
            new Container({
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
            }),
            new Container({
              margin: EdgeInsets.only({left: 100, top: 100}),
              child: new GestureDetector({
                onTap: () => {
                  this.tappedCount++

                  console.log('tapped: ' + this.tappedCount)

                  this.setState(() => {})
                },
                child: new Container({
                  width: 60,
                  height: 60,
                  color: Colors.yellow,
                  child: new Text(`tapped: ${this.tappedCount}`, {
                    style: new TextStyle({
                      color: Colors.black,
                      fontSize: 15,
                    }),
                  }),
                }),
              }),
            }),
            new Container({
              margin: EdgeInsets.only({top: 300}),
              padding: EdgeInsets.only({left: 20, right: 20}),
              child: new Text(
                Lang.instance.res().platform_view_tip +
                  '\n' +
                  '1.https://github.com/flutter/flutter/issues/38375\n' +
                  '2.https://github.com/flutter/flutter/issues/55046\n' +
                  '3.https://github.com/flutter/flutter/issues/57589\n' +
                  '4.https://github.com/flutter/flutter/issues/65548\n' +
                  '5.https://github.com/flutter/flutter/issues/102505\n' +
                  '6.https://github.com/flutter/flutter/issues/118309',
                {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: kSubTitleColor,
                  }),
                }
              ),
            }),
          ],
        }),
      }),

      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: () => {
          this.channel
            .invokeMethod('getText', {
              viewId: this.platformViewId,
            })
            .then((v) => {
              ScaffoldMessenger.of(context).showSnackBar(
                new SnackBar({
                  content: new Text('' + v),
                })
              )
            })
        },
      }),
    })
  }

  dispose(): void {
    super.dispose()
    this.loopTick?.stop()
    this.loopTick?.dispose()
  }
}
