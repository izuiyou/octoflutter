import {
  Alignment,
  AspectRatio,
  BuildContext,
  Colors,
  Container,
  Scaffold,
  ScaffoldMessenger,
  SnackBar,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {commAppBar} from '../common_widgets'
import {
  VideoListener,
  VideoPlayer,
  VideoPlayerController,
} from './video_appbundle_plugin'

class MobilePageVideoState
  extends State<MobilePageVideo>
  implements VideoListener
{
  ctrl: VideoPlayerController

  initState(): void {
    super.initState()
    this.ctrl = VideoPlayerController.asset('video/video.mp4')
    this.ctrl.addListener(this)
  }

  onReady(): void {
    ScaffoldMessenger.of(this.context).showSnackBar(
      new SnackBar({content: new Text('onReady')})
    )
  }
  onError(error: string): void {
    ScaffoldMessenger.of(this.context).showSnackBar(
      new SnackBar({content: new Text('onError:' + error)})
    )
  }
  onEnd(): void {
    ScaffoldMessenger.of(this.context).showSnackBar(
      new SnackBar({content: new Text('onEnd')})
    )
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.cyan,
      appBar: commAppBar('PageVideo', false),
      body: new Container({
        alignment: Alignment.center,
        child: new AspectRatio({
          child: new VideoPlayer(
            this.ctrl,
            new Container({
              alignment: Alignment.center,
              child: new Text('loading...', {
                style: new TextStyle({
                  fontSize: 16,
                  color: Colors.white,
                }),
              }),
            })
          ),
          aspectRatio: 16 / 9,
        }),
      }),
    })
  }

  dispose(): void {
    this.ctrl?.dispose()
  }
}

export class MobilePageVideo extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new MobilePageVideoState()
  }
}
