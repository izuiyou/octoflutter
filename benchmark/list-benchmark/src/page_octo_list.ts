import {Duration} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  Colors,
  Container,
  Curves,
  DefaultTextStyle,
  Expanded,
  Row,
  Scaffold,
  SchedulerBinding,
  ScrollController,
  Stack,
  State,
  StatefulWidget,
  StatelessWidget,
  Text,
  TextStyle,
  Widget,
  Wrap,
} from '@octoflutter/flutter'
import {OctoImage, OctoListView} from '@octoflutter/octo'

export const kListLength = 4000

class _IndicatorWidgetState extends State<StatefulWidget> {
  data = []
  jank = []
  max = 0
  count = 0
  total = 0

  initState(): void {
    super.initState()
    this.widget.ctrl.addListener(this.schedule)
    this.widget.ctrl.animateTo(kListLength * 0.5 * (60 + 90), {
      duration: new Duration({seconds: 10}),
      curve: Curves.linear,
    })
  }

  schedule = () => {
    const t1 = window.performance.now()
    SchedulerBinding.instance.scheduleFrameCallback(() => {
      const t2 = window.performance.now()
      const duration = t2 - t1
      if (this.data.length >= 10) {
        this.data.splice(0, 1)
      }
      this.data.push(duration)
      if (duration > 18) {
        if (this.jank.length >= 10) {
          this.jank.splice(0, 1)
        }
        this.max = Math.max(this.max, duration)
        this.count++
        this.jank.push(duration)
        console.log(duration)
      }
      this.total += 1
      this.setState(() => {})
    })
  }

  build(context: BuildContext): Widget {
    return new Container({
      color: Colors.yellow,
      child: new DefaultTextStyle({
        style: new TextStyle({
          fontSize: 16,
          color: Colors.black,
        }),
        child: new Row({
          children: [
            new Text('last 10：'),
            new Text(this.data.join('\n')),
            new Expanded({child: new Wrap({})}),
            new Text(
              'total：' +
                this.total +
                ' \n' +
                'max：' +
                this.max +
                ' \n' +
                'count：' +
                this.count +
                ' '
            ),
            new Text('jank：'),
            new Text(this.jank.join('\n')),
          ],
        }),
      }),
    })
  }
}

export class IndicatorWidget extends StatefulWidget {
  ctrl: ScrollController

  constructor(ctrl: ScrollController) {
    super()
    this.ctrl = ctrl
  }

  createState(): State<StatefulWidget> {
    return new _IndicatorWidgetState()
  }
}

export class PageOctoListView extends StatelessWidget {
  ctrl: ScrollController = new ScrollController()

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('OctoListView'),
      }),
      body: new Stack({
        children: [
          OctoListView.builder({
            scrollDirection: Axis.vertical,
            controller: this.ctrl,
            itemBuilder: (ctx, index) => {
              return new Container({
                height: index % 2 === 0 ? 60 : 90,
                color: index % 2 === 0 ? Colors.yellow : Colors.red,
                child:
                  index % 2 === 0
                    ? new Text('index:' + index, {
                        style: new TextStyle({
                          color: Colors.black,
                        }),
                      })
                    : OctoImage.asset('icon.png'),
                alignment: Alignment.center,
              })
            },
            sizeDelegate: (index) => {
              return index % 2 === 0 ? 60 : 90
            },
            itemCount: kListLength,
          }),
          new IndicatorWidget(this.ctrl),
        ],
      }),
    })
  }
}
