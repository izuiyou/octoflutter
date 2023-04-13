import {
  Canvas,
  Color,
  Duration,
  isNullOrUndefined,
  Paint,
  Path,
  Radius,
  Rect,
  RRect,
  Size,
  TextAlign,
} from '@octoflutter/dartsdk'
import {
  Alignment,
  Animation,
  AnimationController,
  AnimationStatus,
  BorderRadius,
  BoxDecoration,
  BuildContext,
  ChangeNotifier,
  Colors,
  Container,
  CustomPaint,
  CustomPainter,
  EdgeInsets,
  FittedBox,
  FloatingActionButton,
  Icon,
  Icons,
  NumberTween,
  Row,
  Scaffold,
  SizedBox,
  Stack,
  State,
  StatefulWidget,
  StatelessWidget,
  Text,
  TextStyle,
  Transform,
  Visibility,
  Widget,
} from '@octoflutter/flutter'
import {commAppBar} from '../common_widgets'
import {kSize16, kSize18} from '../constants'
import {Lang} from '../lang'

export class ProgressPainter extends CustomPainter {
  mPath = new Path()
  mPaint = new Paint()
  mColor: Color
  value: number

  constructor(value: number, color?: Color) {
    super()
    this.value = value
    this.mColor = color ?? Color.fromARGB(255, 102, 102, 102)
    this.mPaint.color = this.mColor
  }

  setAlpha(alpha: number) {
    const color = this.mColor.withAlpha(alpha)
    this.mPaint.color = color
  }

  addCircle(cx: number, cy: number, radius: number, path: Path) {
    const rect = Rect.fromLTRB(
      cx - radius,
      cy - radius,
      cx + radius,
      cy + radius
    )
    path.addOval(rect)
  }

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
}

export class ProgressDrawable extends StatelessWidget {
  value: number
  color?: Color
  constructor(value: number, color?: Color) {
    super()
    this.value = value
    this.color = color
  }
  build(context: BuildContext): Widget {
    return new Container({
      child: new CustomPaint({
        painter: new ProgressPainter(this.value, this.color),
        size: new Size(this.value * 2, this.value * 2),
      }),
    })
  }
}

export class LoadingCtrl extends ChangeNotifier {
  loading = false
  msg = ''

  show = (msg: string) => {
    this.loading = true
    this.msg = msg
    this.notifyListeners()
  }

  cancel = () => {
    this.loading = false
    this.notifyListeners()
  }
}

export class LoadingWidget extends StatefulWidget {
  ctrl: LoadingCtrl
  icon: Widget
  color: Color
  raduis: number
  textStyle: TextStyle
  padding: EdgeInsets
  iconTextSpace: number

  constructor(args: {
    ctrl: LoadingCtrl
    icon?: Widget
    color?: Color
    radius?: number
    textStyle?: TextStyle
    padding?: EdgeInsets
    iconTextSpace?: number
  }) {
    super()
    this.ctrl = args.ctrl
    this.icon = args.icon
    this.color = args.color
    this.raduis = args.radius
    this.textStyle = args.textStyle
    this.padding = args.padding
    this.iconTextSpace = args.iconTextSpace
  }

  createState(): State<StatefulWidget> {
    return new _LoadingWidgetState()
  }
}

class _LoadingWidgetState extends State<LoadingWidget> {
  animCtrl: AnimationController
  anim: Animation<number>

  initState() {
    super.initState()
    this.animCtrl = new AnimationController({
      vsync: this,
      duration: new Duration({milliseconds: 2000}),
    })
    this.animCtrl.addListener(() => {
      this.setState(() => {})
    })
    this.animCtrl.addStatusListener((s) => {
      if (s === AnimationStatus.completed) {
        this.animCtrl?.reset()
        this.animCtrl?.forward()
      }
    })
    const tween = new NumberTween(0, 2 * Math.PI)
    this.anim = this.animCtrl.drive(tween)

    this.widget.ctrl.addListener(this.onShowLoading)
  }

  onShowLoading = () => {
    if (this.widget.ctrl.loading) {
      this.animCtrl?.reset()
      this.animCtrl?.forward()
    } else {
      this.animCtrl?.stop()
      this.setState(() => {})
    }
  }

  didUpdateWidget(oldWidget: LoadingWidget) {
    super.didUpdateWidget(oldWidget)
    if (!isNullOrUndefined(oldWidget)) {
      oldWidget?.ctrl?.removeListener(this.onShowLoading)
      this.widget.ctrl.addListener(this.onShowLoading)
    }
  }

  build(context: BuildContext): Widget {
    return new Visibility({
      child: new FittedBox({
        child: new Container({
          padding: this.widget.padding ?? EdgeInsets.all(30),
          decoration: new BoxDecoration({
            borderRadius: BorderRadius.all(
              Radius.circular(this.widget.raduis ?? 4)
            ),
            color: this.widget.color ?? Color.fromRGBO(0, 0, 0, 0.5),
          }),
          alignment: Alignment.center,
          child: new Row({
            children: [
              Transform.rotate({
                angle: this.anim.value,
                child:
                  this.widget.icon ??
                  new ProgressDrawable(kSize18, Colors.white),
              }),
              new SizedBox({
                width: this.widget.iconTextSpace ?? 20,
              }),
              new Text(this.widget.ctrl.msg ?? '', {
                style:
                  this.widget.textStyle ??
                  new TextStyle({
                    fontSize: kSize16,
                    color: Colors.white,
                  }),
              }),
            ],
          }),
        }),
      }),
      visible: this.widget.ctrl.loading,
    })
  }

  dispose(): void {
    super.dispose()
    this.widget.ctrl.removeListener(this.onShowLoading)
    this.animCtrl?.stop()
    this.animCtrl?.dispose()
  }
}

class _MobilePageCustomPaintState extends State<MobilePageCustomPaint> {
  ctrl: LoadingCtrl = new LoadingCtrl()

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: commAppBar('PageCustomPaint', this.widget.showMobileStyleInWeb),
      backgroundColor: Colors.white,
      body: new Stack({
        alignment: Alignment.center,
        children: [
          new Container({
            alignment: Alignment.center,
            child: new Text(Lang.instance.res().custom_paint_tip, {
              textAlign: TextAlign.center,
              style: new TextStyle({
                fontSize: kSize16,
                color: Colors.black,
              }),
            }),
          }),
          new Container({
            child: new LoadingWidget({
              ctrl: this.ctrl,
            }),
            alignment: Alignment.center,
          }),
        ],
      }),

      floatingActionButton: new FloatingActionButton({
        child: Transform.rotate({
          child: new Icon(Icons.add),
          angle: this.ctrl.loading ? Math.PI * 0.25 : 0,
        }),
        onPressed: () => {
          if (this.ctrl.loading) {
            this.ctrl.cancel()
          } else {
            this.ctrl.show('Loading...')
          }
          this.setState(() => {})
        },
      }),
    })
  }
}

export class MobilePageCustomPaint extends StatefulWidget {
  showMobileStyleInWeb: boolean
  constructor(showMobileStyleInWeb?: boolean) {
    super()
    this.showMobileStyleInWeb = showMobileStyleInWeb ?? false
  }

  createState(): State<StatefulWidget> {
    return new _MobilePageCustomPaintState()
  }
}
