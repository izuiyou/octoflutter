import {Color, Duration, Size} from '@octoflutter/dartsdk'
import {
  Alignment,
  Animation,
  AnimationController,
  AnimationStatus,
  BoxDecoration,
  BuildContext,
  Builder,
  CollapseMode,
  ColoredBox,
  Colors,
  ColorTween,
  Container,
  FlexibleSpaceBar,
  GestureDetector,
  kToolbarHeight,
  LinearGradient,
  ListView,
  NestedScrollView,
  Scaffold,
  SizeTween,
  SliverAppBar,
  Stack,
  State,
  StatefulWidget,
  StretchMode,
  Text,
  TextStyle,
  Visibility,
  Widget,
} from '@octoflutter/flutter'

export class PageNestedScrollView extends StatefulWidget {
  createState(): State<PageNestedScrollView> {
    return new PageNestedScrollViewState()
  }
}

export class PageNestedScrollViewState extends State<PageNestedScrollView> {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      body: new NestedScrollView({
        headerSliverBuilder: (ctx, inner) => {
          window.console.log('inner:' + inner)
          return [
            new SliverAppBar({
              titleSpacing: 0,
              title: new Container({
                alignment: Alignment.center,
                child: new Text('PageNestedScrollView'),
              }),
              pinned: true,
              expandedHeight: 180,
              collapsedHeight: kToolbarHeight,
              flexibleSpace: new Container({
                decoration: new BoxDecoration({
                  gradient: new LinearGradient({
                    colors: [
                      new Color(0xff0068b1),
                      new Color(0xff0078c1),
                      new Color(0xff008cd7),
                    ],
                  }),
                }),
                child: new FlexibleSpaceBar({
                  collapseMode: CollapseMode.pin,
                  stretchModes: [StretchMode.fadeTitle],
                  background: new Container({
                    child: new Text('subtitle'),
                    alignment: Alignment.center,
                  }),
                }),
              }),
            }),
          ]
        },
        body: ListView.builder({
          primary: true,
          itemBuilder: (ctx, index) => {
            return new Container({
              height: 50,
              alignment: Alignment.center,
              child: new Text('index:' + index),
            })
          },
          itemCount: 50,
        }),
      }),
    })
  }
}
