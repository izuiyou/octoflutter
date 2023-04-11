import {
  Clip,
  Color,
  Duration,
  Rect,
  Size,
  TextDirection,
} from '@octoflutter/dartsdk'
import {
  Alignment,
  Animation,
  AnimationController,
  BuildContext,
  CircularProgressIndicator,
  ClipOval,
  Colors,
  ColorTween,
  Container,
  CustomClipper,
  Directionality,
  GestureDetector,
  NumberTween,
  Scaffold,
  SchedulerBinding,
  SizeTween,
  Stack,
  StatefulWidget,
  StatelessWidget,
  TickerProviderStateMixin,
  Transform,
  Widget,
} from '@octoflutter/flutter'
import {OctoImage} from '@octoflutter/octo'
import {commAppBar} from '../common_widgets'

class MyClipper extends CustomClipper<Rect> {
  getClip(size: Size): Rect {
    return Rect.fromLTRB(0, 0, size.width, size.height)
  }

  shouldReclip(oldClipper: any): boolean {
    return true
  }
}

export class MyAnimWidget extends StatefulWidget {
  public readonly duration: number

  constructor(duration?: number) {
    super()
    this.duration = duration ?? 10
  }

  createState(): TickerProviderStateMixin<MyAnimWidget> {
    return new _MyAnimState()
  }
}

class _MyAnimState extends TickerProviderStateMixin<MyAnimWidget> {
  anim: Animation<number>
  animCtr: AnimationController

  anim2: Animation<Color>
  anim3: Animation<Size>

  constructor() {
    super()
  }

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
    this.animCtr.addListener(() => {
      this.setState(() => {
        // console.log('----:' + this.anim.value + ' :' + this.animCtr.value + ' mounted:' + this.mounted);
      })
    })

    SchedulerBinding.instance.scheduleFrameCallback(() => {
      this.animCtr.forward()
    })
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
              if (this.animCtr.isAnimating) {
                this.animCtr?.stop()
              } else {
                this.animCtr?.forward()
              }
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

  dispose() {
    super.dispose()
    this.animCtr?.stop()
    this.animCtr?.dispose()
  }
}

export class MobilePageAnimation extends StatelessWidget {
  showMobileStyleInWeb: boolean
  constructor(showMobileStyleInWeb?: boolean) {
    super()
    this.showMobileStyleInWeb = showMobileStyleInWeb ?? false
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: commAppBar('PageAnimation', this.showMobileStyleInWeb),
      body: new Container({
        child: new MyAnimWidget(),
        alignment: Alignment.center,
      }),
    })
  }
}
