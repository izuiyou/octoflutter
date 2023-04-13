import {Duration, FontWeight, Radius, TextAlign} from '@octoflutter/dartsdk'
import {
  Alignment,
  BorderRadius,
  BoxDecoration,
  BuildContext,
  Center,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  FadeTransition,
  GestureDetector,
  HitTestBehavior,
  Icon,
  Icons,
  Key,
  MainAxisAlignment,
  MaterialApp,
  PageRouteBuilder,
  RouteSettings,
  runApp,
  Scaffold,
  SizedBox,
  Stack,
  State,
  StatefulWidget,
  StatelessWidget,
  SystemNavigator,
  TargetPlatform,
  Text,
  TextStyle,
  ThemeData,
  Transform,
  Widget,
  WillPopScope,
} from '@octoflutter/flutter'

class _MyAlertPageState extends State<MyAlertPage> {
  build(context: BuildContext): Widget {
    return new Center({
      child: new Container({
        width: 200,
        height: 200,
        decoration: new BoxDecoration({
          color: Colors.white,
          borderRadius: BorderRadius.all(Radius.circular(10)),
        }),
        child: new GestureDetector({
          child: new Stack({
            alignment: Alignment.topRight,
            children: [
              new Container({
                padding: EdgeInsets.only({left: 20, right: 20}),
                child: new Column({
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    new Text('OctoFlutter', {
                      textAlign: TextAlign.center,
                      style: new TextStyle({
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      }),
                    }),
                    new SizedBox({height: 30}),
                    new Text('This is a transparent test demo.', {
                      textAlign: TextAlign.center,
                      style: new TextStyle({
                        fontSize: 15,
                        color: Colors.black54,
                      }),
                    }),
                    new SizedBox({height: 10}),
                    new Text(
                      'Route Info:' +
                        ' path:' +
                        this.widget.name +
                        ' args:' +
                        this.widget.args,
                      {
                        textAlign: TextAlign.center,
                        style: new TextStyle({
                          fontSize: 15,
                          color: Colors.black54,
                        }),
                      }
                    ),
                  ],
                }),
                alignment: Alignment.center,
              }),
              new Container({
                padding: EdgeInsets.all(10),
                child: new GestureDetector({
                  child: Transform.rotate({
                    child: new Icon(Icons.add, {color: Colors.black}),
                    angle: Math.PI * 0.25,
                  }),
                  onTap: () => {
                    SystemNavigator.pop()
                  },
                }),
              }),
            ],
          }),
          behavior: HitTestBehavior.opaque,
          onTap: () => {},
        }),
      }),
    })
  }
}

class MyAlertPage extends StatefulWidget {
  public readonly name: string
  public readonly args: string

  constructor(name: string, args: string) {
    super()
    this.name = name
    this.args = args
  }

  createState(): State<StatefulWidget> {
    return new _MyAlertPageState()
  }
}

class MyApp extends StatelessWidget {
  constructor(args?: {key?: Key}) {
    super(args)
  }

  build(context: BuildContext): Widget {
    return new MaterialApp({
      title: '',
      theme: new ThemeData({
        primarySwatch: Colors.blue,
        platform: TargetPlatform.android,
      }),
      home: new Container({
        color: Colors.transparent,
      }),
      onGenerateRoute: (settings: RouteSettings) => {
        const name = settings.name
        const args = settings.args

        const route = new PageRouteBuilder({
          fullscreenDialog: true,
          pageBuilder: (ctx) => {
            return new MyAlertPage(name, args)
          },
          transitionDuration: new Duration({milliseconds: 200}),
          transitionsBuilder: (ctx, a1, a2, child) => {
            return new WillPopScope({
              child: new GestureDetector({
                child: new FadeTransition({
                  child: new Scaffold({
                    backgroundColor: Colors.black.withOpacity(0.5),
                    body: child,
                  }),
                  opacity: a1,
                }),
                onPanEnd: () => {
                  SystemNavigator.pop()
                },
              }),
              onWillPop: async () => {
                SystemNavigator.pop()
                return false
              },
            })
          },
        })
        return route
      },
    })
  }
}

function main() {
  runApp(new MyApp())
}
