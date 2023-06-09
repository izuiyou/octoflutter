import {Color, Radius} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BorderRadius,
  BuildContext,
  Center,
  ClipRRect,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  FloatingActionButton,
  Icon,
  Icons,
  Image,
  Key,
  MainAxisAlignment,
  MaterialApp,
  Navigator,
  RawMaterialButton,
  Scaffold,
  SingleChildScrollView,
  State,
  StatefulWidget,
  StatelessWidget,
  TargetPlatform,
  Text,
  TextStyle,
  ThemeData,
  Widget,
  WidgetBuilder,
  runApp,
} from '@octoflutter/flutter'
import {PageFlare} from './page_flare'
import {PageLottie} from './page_lottie'
import {PagePhoto} from './page_photo'
import {PagePicker} from './page_picker'
import {PageRefresh} from './page_refresh'
import {PageStaggered} from './page_staggered'

function main() {
  runApp(new MyApp())
}

class MyApp extends StatelessWidget {
  constructor(args?: {key?: Key}) {
    super(args)
  }

  build(context: BuildContext): Widget {
    return new MaterialApp({
      title: 'OctoFlutter Demo',
      theme: new ThemeData({
        primarySwatch: Colors.blue,
        platform: TargetPlatform.android,
      }),
      home: new MyHomePage({title: 'Octopack Test'}),
      routes: new Map<string, WidgetBuilder>([
        ['/page_flare', (ctx) => new PageFlare()],
        ['/page_lottie', (ctx) => new PageLottie()],
        ['/page_photo', (ctx) => new PagePhoto()],
        ['/page_picker', (ctx) => new PagePicker()],
        ['/page_refresh', (ctx) => new PageRefresh()],
        ['/page_staggered', (ctx) => new PageStaggered()],
      ]),
    })
  }
}

class MyHomePage extends StatefulWidget {
  public readonly title: string

  constructor(args: {title: string; key?: Key}) {
    super({key: args.key})
    this.title = args.title
  }

  createState(): State<StatefulWidget> {
    return new _MyHomePageState()
  }
}

class _MyHomePageState extends State<MyHomePage> {
  _counter = 0

  _incrementCounter = () => {
    this.setState(() => {
      this._counter++
    })
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text(this.widget.title),
      }),
      body: new Center({
        child: new SingleChildScrollView({
          scrollDirection: Axis.vertical,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Image.asset('icon.png', {width: 100, height: 100}),
              new Text('You have pushed the button this many times:', {
                style: new TextStyle({
                  fontSize: 14,
                  color: Colors.black87,
                }),
              }),
              new Text(`${this._counter}`, {
                style: new TextStyle({
                  fontSize: 14,
                  color: Colors.black87,
                }),
              }),

              this.btnGo('GoToPageFlare', '/page_flare'),
              this.btnGo('GoToPageLottie', '/page_lottie'),
              this.btnGo('GoToPagePhoto', '/page_photo'),
              this.btnGo('GoToPagePicker', '/page_picker'),
              this.btnGo('GoToPageRefresh', '/page_refresh'),
              this.btnGo('GoToPageStaggered', '/page_staggered'),
            ],
          }),
        }),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: this._incrementCounter,
      }),
    })
  }

  btnGo = (name: string, page: string): Widget => {
    return new Container({
      margin: EdgeInsets.only({top: 10, bottom: 10, right: 50, left: 50}),
      child: new ClipRRect({
        child: new RawMaterialButton({
          child: new Container({
            alignment: Alignment.center,
            child: new Text(name, {
              style: new TextStyle({
                fontSize: 14,
                color: Colors.white,
              }),
            }),
            height: 50,
          }),
          fillColor: Colors.blue,
          splashColor: Color.fromARGB(255, 17, 80, 129),
          onPressed: () => {
            Navigator.of(this.context).pushNamed(page)
          },
        }),
        borderRadius: BorderRadius.all(Radius.circular(8)),
      }),
    })
  }
}
