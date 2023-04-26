import {
  Alignment,
  Animation,
  AnimationController,
  AppBar,
  BuildContext,
  Container,
  DefaultTabController,
  GestureDetector,
  NumberTween,
  Opacity,
  Scaffold,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  TickerProviderStateMixin,
  Widget,
} from '@octoflutter/flutter'

class _PageOpacityState extends TickerProviderStateMixin<PageOpacity> {
  animation: Animation<number>
  ctrl: AnimationController

  initState(): void {
    super.initState()
    this.ctrl = new AnimationController({vsync: this})
    const tween = new NumberTween(1, 0)
    this.animation = this.ctrl.drive(tween)
    this.ctrl.addListener(() => {
      this.setState(() => {})
    })
  }

  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 2,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Opacity'),
          bottom: new TabBar({
            tabs: [
              new Tab({text: 'Opacity'}),
              new Tab({text: 'Opacity With Animation'}),
            ],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            new Container({
              alignment: Alignment.center,
              child: new Opacity({
                child: new Text('Opacity 0.5 '),
                opacity: 0.5,
              }),
            }),
            new Container({
              alignment: Alignment.center,
              child: new GestureDetector({
                child: new Opacity({
                  child: new Text('Click Do Opacity'),
                  opacity: this.animation.value,
                }),
                onTap: () => {
                  this.ctrl.forward()
                },
              }),
            }),
          ],
        }),
      }),
    })
  }

  dispose(): void {
    super.dispose()
    this.ctrl?.dispose()
  }
}

export class PageOpacity extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageOpacityState()
  }
}
