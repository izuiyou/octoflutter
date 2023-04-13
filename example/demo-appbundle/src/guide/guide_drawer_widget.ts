import {Duration, Matrix4, VoidCallback} from '@octoflutter/dartsdk'
import {
  Alignment,
  AnimatedBuilder,
  AnimatedSwitcher,
  AutomaticKeepAlive,
  BuildContext,
  Colors,
  Container,
  Curves,
  CustomScrollView,
  EdgeInsets,
  Expanded,
  GestureDetector,
  Icon,
  Icons,
  InkWell,
  NumberTween,
  Row,
  SliverAppBar,
  State,
  StatefulWidget,
  StatelessWidget,
  Text,
  TextStyle,
  Transform,
  ValueKey,
  Widget,
  Wrap,
} from '@octoflutter/flutter'
import {MultiSliver, SliverAnimatedPaintExtent} from '@octoflutter/octo'
import {kSize14, kSize16} from '../constants'
import {GuideItem} from './guide_data'

type OnGuideClickCallback = (
  ctx: BuildContext,
  item: GuideItem,
  index: number,
  indexInItem: number
) => void

class GuideSection extends StatelessWidget {
  index: number
  item: GuideItem
  onTap: VoidCallback
  callback: OnGuideClickCallback
  constructor(
    index: number,
    item: GuideItem,
    onTap: VoidCallback,
    callback: OnGuideClickCallback
  ) {
    super({key: new ValueKey('' + index)})
    this.index = index
    this.item = item
    this.onTap = onTap
    this.callback = callback
  }

  build(context: BuildContext): Widget {
    return new SliverAnimatedPaintExtent({
      child: new MultiSliver({
        pushPinnedChildren: false,
        children: this.contentWidgets(),
      }),
      duration: new Duration({milliseconds: 100}),
    })
  }

  static tsb = (widget, animation) => {
    const rotateAnim = new NumberTween(Math.PI, 0).animate(animation)
    return new AnimatedBuilder({
      animation: rotateAnim,
      child: widget,
      builder: (ctx, w) => {
        return new Transform({
          alignment: Alignment.center,
          child: w,
          transform: Matrix4.rotationZ(rotateAnim.value),
        })
      },
    })
  }

  contentWidgets = (): Array<Widget> => {
    const widgets = []
    widgets.push(
      new GestureDetector({
        child: new Container({
          color: Colors.blue,
          height: 60,
          padding: EdgeInsets.only({left: 20, right: 20}),
          alignment: Alignment.center,
          child: new Row({
            children: [
              new Text(this.item.title, {
                style: new TextStyle({
                  fontSize: kSize16,
                  color: Colors.white,
                }),
              }),
              new Expanded({
                child: new Wrap({}),
              }),
              new AnimatedSwitcher({
                child: new Container({
                  width: 56,
                  key: new ValueKey('' + this.item.expend),
                  child: new InkWell({
                    child: new Icon(
                      this.item.expend
                        ? Icons.arrow_upward
                        : Icons.arrow_downward,
                      {
                        color: Colors.white,
                      }
                    ),
                    highlightColor: Colors.white,
                    onTap: this.onTap,
                  }),
                }),
                duration: new Duration({milliseconds: 200}),
                switchInCurve: Curves.linear,
                switchOutCurve: Curves.linear,
                transitionBuilder: GuideSection.tsb,
                layoutBuilder: (c, p) => {
                  return c
                },
              }),
            ],
          }),
        }),
        onTap: this.onTap,
      })
    )

    if (this.item.expend) {
      this.item.contents.forEach((v, i, a) => {
        widgets.push(
          new GestureDetector({
            child: new Container({
              color: Colors.white,
              child: new Container({
                height: 40,
                child: new Text(v, {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: Colors.black54,
                  }),
                }),
                alignment: Alignment.centerLeft,
                padding: EdgeInsets.only({left: 20}),
              }),
            }),
            onTap: () => {
              this.callback(this.context, this.item, this.index, i)
            },
          })
        )
      })
    }
    return widgets
  }
}

class GuideDrawerState extends State<GuideDrawerWidget> {
  build(context: BuildContext): Widget {
    return new AutomaticKeepAlive({
      child: new CustomScrollView({
        slivers: this.contentWidgets(),
      }),
    })
  }

  contentWidgets = (): Array<Widget> => {
    const widgets = []

    if (!kIsWeb) {
      widgets.push(
        new SliverAppBar({
          backgroundColor: Colors.blue,
          automaticallyImplyLeading: false,
          toolbarHeight: 0,
        })
      )
    }
    this.widget.data.forEach((v, i, a) => {
      widgets.push(
        new GuideSection(
          i,
          v,
          () => {
            v.expend = !v.expend
            this.setState(() => {})
          },
          this.widget.callback
        )
      )
    })

    return widgets
  }
}

export class GuideDrawerWidget extends StatefulWidget {
  data: Array<GuideItem>
  callback: OnGuideClickCallback

  constructor(data: Array<GuideItem>, callback: OnGuideClickCallback) {
    super()
    this.data = data
    this.callback = callback
  }

  createState(): State<StatefulWidget> {
    return new GuideDrawerState()
  }
}
