import {Color, Duration, Radius, Rect, Size} from '@octoflutter/dartsdk'
import {
  Alignment,
  Animation,
  AnimationController,
  AppBar,
  BorderRadius,
  BoxDecoration,
  BuildContext,
  Colors,
  Container,
  EdgeInsets,
  GestureDetector,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  TickerProviderStateMixin,
  Tween,
  Widget,
} from '@octoflutter/flutter'

class DataBean {
  radius: number
  color: Color
  size: Size
  rect: Rect

  constructor(radius: number, color: Color, size: Size, rect: Rect) {
    this.radius = radius
    this.color = color
    this.size = size
    this.rect = rect
  }

  static lerp(a: DataBean, b: DataBean, t: number) {
    const radius = a.radius * (1.0 - t) + b.radius * t
    const color = Color.lerp(a.color, b.color, t)
    const size = Size.lerp(a.size, b.size, t)
    const rect = Rect.lerp(a.rect, b.rect, t)
    return new DataBean(radius, color, size, rect)
  }
}

class DataTween extends Tween<DataBean> {
  lerp(t: number): DataBean {
    return DataBean.lerp(this.begin, this.end, t)
  }
}

class _PageTweenState extends TickerProviderStateMixin<PageTween> {
  animCtr: AnimationController
  anim: Animation<DataBean>

  initState() {
    super.initState()
    const from = new DataBean(
      0,
      Colors.red,
      new Size(300, 300),
      Rect.fromLTRB(0, 0, 0, 0)
    )
    const to = new DataBean(
      60,
      Colors.orange,
      new Size(100, 100),
      Rect.fromLTRB(50, 50, 50, 50)
    )

    const tween = new DataTween(from, to)
    this.animCtr = new AnimationController({
      vsync: this,
      duration: new Duration({seconds: 3}),
    })
    this.anim = this.animCtr.drive(tween)

    this.animCtr.addListener(() => {
      this.setState(() => {
        // console.log('----:' + this.anim.value + ' :' + this.animCtr.value + ' mounted:' + this.mounted);
      })
    })
    window.setTimeout(() => {
      this.animCtr.forward()
    }, 100)
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Tween'),
      }),
      body: new Container({
        margin: EdgeInsets.only({
          left: this.anim.value.rect.left,
          top: this.anim.value.rect.top,
          right: this.anim.value.rect.right,
          bottom: this.anim.value.rect.bottom,
        }),
        decoration: new BoxDecoration({
          color: this.anim.value.color,
          borderRadius: BorderRadius.all(
            Radius.circular(this.anim.value.radius)
          ),
        }),
        child: new Container({
          alignment: Alignment.center,
          child: new GestureDetector({
            child: new Text('Click to Reset'),
            onTap: () => {
              this.animCtr?.reset()
              this.animCtr?.forward()
            },
          }),
          width: this.anim.value.size.width,
          height: this.anim.value.size.height,
        }),
      }),
    })
  }

  dispose(): void {
    super.dispose()
    this.animCtr?.stop()
    this.animCtr?.dispose()
  }
}

export class PageTween extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageTweenState()
  }
}
