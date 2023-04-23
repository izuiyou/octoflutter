import {Offset, Radius, TextAlign} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BorderRadius,
  BoxDecoration,
  BuildContext,
  Builder,
  Center,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  GestureDetector,
  MainAxisAlignment,
  Scaffold,
  SizedBox,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'

class TestState extends State<TestWidget> {
  build(context: BuildContext): Widget {
    return new Container({
      alignment: Alignment.center,
      child: new Column({
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          new Text('Test BuildContext', {
            style: new TextStyle({
              color: Colors.black,
              fontSize: 16,
            }),
          }),

          this.widget.child,
        ],
      }),
    })
  }
}

class TestWidget extends StatefulWidget {
  public readonly child: Widget
  constructor(args: {child: Widget}) {
    super()
    this.child = args.child
  }

  createState(): State<TestWidget> {
    return new TestState()
  }

  static of(context: BuildContext): TestState | null {
    return context.findAncestorStateOfType<TestState>(TestState.name)
  }
}

export class PageBuildContext extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageBuildContextState()
  }
}

export class _PageBuildContextState extends State<PageBuildContext> {
  tip = ''

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PageBuildContext'),
      }),
      body: new Center({
        child: new Column({
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            new Container({
              decoration: new BoxDecoration({
                color: Colors.orange,
                borderRadius: BorderRadius.all(Radius.circular(10)),
              }),
              child: new SizedBox({
                width: 200,
                height: 100,
                child: new TestWidget({
                  child: new Builder({
                    builder: (ctx) => {
                      return new GestureDetector({
                        child: new Container({
                          child: new Text('Click To Show Info'),
                          color: Colors.blue,
                        }),
                        onTap: () => {
                          const t =
                            ctx.findAncestorWidgetOfExactType<TestWidget>(
                              TestWidget.name
                            )

                          const s = ctx.findAncestorStateOfType<TestState>(
                            TestState.name
                          )

                          const pb = ctx.findRenderObject().paintBounds
                          const offset = ctx
                            .findRenderObject()
                            .localToGlobal(Offset.zero)

                          this.tip = `TestWidget child instanceof Builder:${
                            t?.child instanceof Builder
                          }\nfindAncestorStateOfType<TestState>:${
                            s instanceof TestState
                          }\npaintBounds:${pb.left}-${pb.top}-${pb.right}-${
                            pb.bottom
                          }\nlocalToGlobal:${offset.dx}-${offset.dy}\nwidth:${
                            ctx.size.width
                          }-height:${ctx.size.height}
                          `

                          this.setState(() => {})
                        },
                      })
                    },
                  }),
                }),
              }),
            }),

            new Container({
              margin: EdgeInsets.only({top: 20}),
              alignment: Alignment.center,
              child: new Text(this.tip, {
                textAlign: TextAlign.center,
                style: new TextStyle({
                  fontSize: 15,
                  color: Colors.black,
                }),
              }),
            }),
          ],
        }),
      }),
    })
  }
}
