import {Clip, Color, Rect, Size} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Center,
  ClipRect,
  ColoredBox,
  Colors,
  Container,
  CustomClipper,
  DefaultTabController,
  LimitedBox,
  ListView,
  OverflowBox,
  Scaffold,
  SizedBox,
  SizedOverflowBox,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'

class _MyRectClipper extends CustomClipper<Rect> {
  getClip(size: Size): Rect {
    window.console.log('w:' + size.width + ' h:' + size.height)
    return Rect.fromLTWH(0, 0, size.width, size.height)
  }

  shouldReclip(oldClipper: any): boolean {
    return true
  }
}

class _PageBoxState extends State<PageBox> {
  index = 0

  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 5,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Box'),
          bottom: new TabBar({
            tabs: [
              new Tab({text: 'SizedBox'}),
              new Tab({text: 'ColoredBox'}),
              new Tab({text: 'SizedOverflowBox'}),
              new Tab({text: 'OverflowBox'}),
              new Tab({text: 'LimitedBox'}),
            ],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            this.sizedBoxWidget(),
            this.coloredBoxWidget(),
            this.sizedOverflowBoxWidget(),
            this.overflowBoxWidget(),
            this.limitedBoxWidget(),
          ],
        }),
      }),
    })
  }

  sizedBoxWidget = (): Widget => {
    return new Center({
      child: new SizedBox({
        child: new ClipRect({
          clipper: new _MyRectClipper(),
          child: new Container({
            color: Colors.red,
            width: 100,
            height: 100,
          }),
          clipBehavior: Clip.antiAlias,
        }),
        width: 100,
        height: 100,
      }),
    })
  }

  coloredBoxWidget = (): Widget => {
    return new Center({
      child: new SizedBox({
        child: new ClipRect({
          clipper: new _MyRectClipper(),
          child: new ColoredBox({
            color: Colors.blue,
          }),
          clipBehavior: Clip.antiAlias,
        }),
        width: 100,
        height: 100,
      }),
    })
  }

  sizedOverflowBoxWidget = (): Widget => {
    return new Center({
      child: new Container({
        child: new SizedOverflowBox({
          alignment: Alignment.bottomCenter,
          child: new Container({
            width: 150,
            height: 400,
            color: Colors.cyan,
          }),
          size: new Size(300, 200),
        }),
        color: Colors.orange,
      }),
    })
  }

  overflowBoxWidget = (): Widget => {
    return new Center({
      child: new Container({
        width: 100,
        height: 100,
        color: Colors.red,
        child: new OverflowBox({
          child: new Container({
            color: Colors.orange.withOpacity(0.5),
            width: Number.POSITIVE_INFINITY,
            height: Number.POSITIVE_INFINITY,
          }),

          minWidth: 20,
          maxWidth: 200,
          maxHeight: 200,
          minHeight: 20,
        }),
      }),
    })
  }

  limitedBoxWidget = (): Widget => {
    return new Center({
      child: ListView.builder({
        itemCount: 10,
        itemBuilder: (ctx, index) => {
          return new LimitedBox({
            child: new Container({
              color: index % 2 === 0 ? Colors.red : Colors.blue,
              child: new Text('index:' + index, {
                style: new TextStyle({
                  color: Colors.white,
                }),
              }),
              alignment: Alignment.center,
            }),
            maxHeight: 200,
          })
        },
      }),
    })
  }
}

export class PageBox extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageBoxState()
  }
}
