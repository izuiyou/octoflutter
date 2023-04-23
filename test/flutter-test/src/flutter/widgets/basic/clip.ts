import {Clip, Radius, Rect, RRect, Size} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BorderRadius,
  BuildContext,
  ClipOval,
  ClipRect,
  ClipRRect,
  Colors,
  Container,
  CustomClipper,
  DefaultTabController,
  Scaffold,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
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

class _MyRRectClipper extends CustomClipper<RRect> {
  getClip(size: Size): RRect {
    return RRect.fromRectAndRadius(
      Rect.fromLTWH(0, 0, size.width, size.height),
      Radius.circular(10)
    )
  }

  shouldReclip(oldClipper: any): boolean {
    return true
  }
}

class _PageClipState extends State<PageClip> {
  index = 0

  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 3,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Clip'),
          bottom: new TabBar({
            tabs: [
              new Tab({text: 'ClipRect'}),
              new Tab({text: 'ClipRRect'}),
              new Tab({text: 'ClipOval'}),
            ],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            this.clipRectWidget(),
            this.clipRRectWidget(),
            this.clipOvalWidget(),
          ],
        }),
      }),
    })
  }

  clipRectWidget = (): Widget => {
    return new Container({
      child: new ClipRect({
        clipper: new _MyRectClipper(),
        child: new Container({
          color: Colors.red,
          width: 100,
          height: 100,
        }),
        clipBehavior: Clip.antiAlias,
      }),
      alignment: Alignment.center,
    })
  }

  clipRRectWidget = (): Widget => {
    return new Container({
      child: new ClipRRect({
        clipper: new _MyRRectClipper(),
        child: new Container({
          color: Colors.red,
          width: 100,
          height: 100,
        }),
        borderRadius: BorderRadius.all(Radius.circular(10)),
        clipBehavior: Clip.antiAlias,
      }),
      alignment: Alignment.center,
    })
  }

  clipOvalWidget = (): Widget => {
    return new Container({
      child: new ClipOval({
        clipper: new _MyRectClipper(),
        child: new Container({
          color: Colors.red,
          width: 100,
          height: 100,
        }),
        clipBehavior: Clip.antiAlias,
      }),
      alignment: Alignment.center,
    })
  }
}

export class PageClip extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageClipState()
  }
}
