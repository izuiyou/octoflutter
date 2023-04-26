import {Duration} from '@octoflutter/dartsdk'
import {
  Alignment,
  Animation,
  AnimationController,
  AppBar,
  BuildContext,
  Colors,
  Container,
  GestureDetector,
  NumberTween,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  TickerProviderStateMixin,
  TweenSequence,
  TweenSequenceItem,
  Widget,
} from '@octoflutter/flutter'

class _PageTweenSequenceState extends TickerProviderStateMixin<PageTweenSequence> {
  animCtr: AnimationController
  anim: Animation<number>

  initState() {
    super.initState()

    const tween = new TweenSequence<number>([
      new TweenSequenceItem({
        tween: new NumberTween(100, 200),
        weight: 15,
      }),
      new TweenSequenceItem({
        tween: new NumberTween(200, 300),
        weight: 70,
      }),
      new TweenSequenceItem({
        tween: new NumberTween(300, 400),
        weight: 15,
      }),
    ])
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
        title: new Text('TweenSequence'),
      }),
      body: new Container({
        child: new Container({
          alignment: Alignment.center,
          child: new GestureDetector({
            child: new Text('Click to Reset'),
            onTap: () => {
              this.animCtr?.reset()
              this.animCtr?.forward()
            },
          }),
          color: Colors.red,
          width: this.anim.value,
          height: this.anim.value,
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

export class PageTweenSequence extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageTweenSequenceState()
  }
}
