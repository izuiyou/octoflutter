import {Color, Matrix4, Radius} from '@octoflutter/dartsdk'
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
  FloatingActionButton,
  GestureDetector,
  InheritedWidget,
  MainAxisAlignment,
  Scaffold,
  SizedBox,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'

class Config {
  title = 'OctoFlutter'
  color: Color = Colors.black
  size = 18

  static random(): Config {
    const config = new Config()
    config.color = Color.fromARGB(
      255,
      255 * Math.random(),
      255 * Math.random(),
      255 * Math.random()
    )
    config.size = 10 + 20 * Math.random()
    return config
  }
}

class ConfigInheritedWidget extends InheritedWidget {
  config: Config

  constructor(args: {child: Widget; config: Config}) {
    super({child: args.child})
    this.config = args.config
  }

  updateShouldNotify(oldWidget: ConfigInheritedWidget): boolean {
    return oldWidget.config !== this.config
  }

  static of(context: BuildContext): ConfigInheritedWidget | null {
    return context.dependOnInheritedWidgetOfExactType<ConfigInheritedWidget>(
      ConfigInheritedWidget.name
    )
  }
}

class ConfigTestState extends State<ConfigTestWidget> {
  z = 0

  build(context: BuildContext): Widget {
    // return new Builder({
    //   builder: (ctx) => {
    //     const config: Config =
    //       ConfigInheritedWidget.of(ctx)?.config ?? new Config()
    //     return new Container({
    //       alignment: Alignment.center,
    //       child: new Text(config.title, {
    //         style: new TextStyle({
    //           color: config.color,
    //           fontSize: config.size,
    //         }),
    //       }),
    //     })
    //   },
    // })

    const config: Config =
      ConfigInheritedWidget.of(context)?.config ?? new Config()
    return new Container({
      alignment: Alignment.center,
      child: new Column({
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          new Text(config.title, {
            style: new TextStyle({
              color: config.color,
              fontSize: config.size,
            }),
          }),

          this.widget.child,
        ],
      }),
      transform: Matrix4.rotationZ(this.z),
      transformAlignment: Alignment.center,
    })
  }

  didChangeDependencies(): void {
    super.didChangeDependencies()
    console.log('didChangeDependencies')
  }

  didUpdateWidget(oldWidget: ConfigTestWidget): void {
    super.didUpdateWidget(oldWidget)
    console.log('didUpdateWidget')
  }

  addZ(z: number) {
    this.z += z
    this.setState(() => {})
  }
}

class ConfigTestWidget extends StatefulWidget {
  public readonly child: Widget
  constructor(args: {child: Widget}) {
    super()
    this.child = args.child
  }

  createState(): State<ConfigTestWidget> {
    return new ConfigTestState()
  }

  static of(context: BuildContext): ConfigTestState | null {
    return context.findAncestorStateOfType<ConfigTestState>(
      ConfigTestState.name
    )
  }
}

export class PageInheritedWidget extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageInheritedWidgetState()
  }
}

export class _PageInheritedWidgetState extends State<PageInheritedWidget> {
  config: Config = new Config()

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PageInheritedWidget'),
      }),
      body: new Center({
        child: new ConfigInheritedWidget({
          config: this.config,
          child: new Container({
            decoration: new BoxDecoration({
              color: Colors.orange,
              borderRadius: BorderRadius.all(Radius.circular(10)),
            }),
            child: new SizedBox({
              width: 200,
              height: 100,
              child: new ConfigTestWidget({
                child: new Builder({
                  builder: (ctx) => {
                    return new GestureDetector({
                      child: new Container({
                        child: new Text('Click To RotateZ'),
                        color: Colors.blue,
                      }),
                      onTap: () => {
                        ConfigTestWidget.of(ctx)?.addZ(0.5)
                      },
                    })
                  },
                }),
              }),
            }),
          }),
        }),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Text('update'),
        onPressed: () => {
          this.config = Config.random()
          this.setState(() => {})
        },
      }),
    })
  }
}
