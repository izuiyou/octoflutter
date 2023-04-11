import {Duration, Timer} from '@octoflutter/dartsdk'
import {
  BuildContext,
  Container,
  Key,
  SchedulerBinding,
  State,
  StatefulWidget,
  Widget,
} from '@octoflutter/flutter'

export class DelayWidget extends StatefulWidget {
  public readonly delay: number
  public readonly child: Widget
  public readonly placeHolder?: Widget

  constructor(args: {
    delay: number
    child: Widget
    placeHolder?: Widget
    key?: Key
  }) {
    super({key: args.key})
    this.delay = args.delay
    this.child = args.child
    this.placeHolder = args.placeHolder
  }

  createState(): State<StatefulWidget> {
    return new _DelayWidgetState()
  }
}

class _DelayWidgetState extends State<DelayWidget> {
  cid = -1
  timer: Timer
  show = false

  initState = (): void => {
    super.initState()
    this.cid = SchedulerBinding.instance.scheduleFrameCallback(() => {
      this.cid = -1
      this.timer = new Timer(
        new Duration({milliseconds: this.widget.delay}),
        () => {
          if (this.mounted) {
            this.show = true
            this.setState(() => {})
          }
        }
      )
    })
  }

  build(context: BuildContext): Widget {
    return this.show
      ? this.widget.child
      : this.widget.placeHolder ?? new Container()
  }

  dispose(): void {
    super.dispose()
    if (this.cid !== -1) {
      SchedulerBinding.instance.cancelFrameCallbackWithId(this.cid)
    }
    this.timer?.cancel()
  }
}
