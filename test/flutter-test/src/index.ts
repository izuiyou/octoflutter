import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  Center,
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
  runApp,
  Scaffold,
  SingleChildScrollView,
  State,
  StatefulWidget,
  StatelessWidget,
  SystemUiOverlayStyle,
  TargetPlatform,
  Text,
  TextStyle,
  ThemeData,
  Widget,
  WidgetBuilder,
} from '@octoflutter/flutter'
import {PageAnimation} from './animation/page_animation'
import {PageOctoList} from './octolist/page_octolist'
import {PageTransformPageView} from './pageview/page_pageview'
import {PageNestedRefresh} from './refresh/page_nested_refresh'
import {PageColorFilter} from './widgets/page_color_filter'
import {PageImageFilter} from './widgets/page_image_filter'
import {PageShaderMask} from './widgets/page_shader_mask'

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
      home: new MyHomePage({title: 'OctoFlutter Test'}),
      routes: new Map<string, WidgetBuilder>([
        ['/page_animation', (ctx) => new PageAnimation()],
        ['/page_octolist', (ctx) => new PageOctoList()],
        ['/page_nested_refresh', (ctx) => new PageNestedRefresh()],
        ['/page_transform_pv', (ctx) => new PageTransformPageView()],
        ['/page_image_filter', (ctx) => new PageImageFilter()],
        ['/page_color_filter', (ctx) => new PageColorFilter()],
        ['/page_shader_mask', (ctx) => new PageShaderMask()],
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
        systemOverlayStyle: new SystemUiOverlayStyle({
          statusBarColor: Colors.transparent,
        }),
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

              this.btnGo('PageAnimation', '/page_animation'),
              this.btnGo('PageOctoList', '/page_octolist'),
              this.btnGo('PageNestedRefresh', '/page_nested_refresh'),
              this.btnGo('TransformPageView', '/page_transform_pv'),
              this.btnGo('PageImageFilter', '/page_image_filter'),
              this.btnGo('PageColorFilter', '/page_color_filter'),
              this.btnGo('PageShaderMask', '/page_shader_mask'),
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
      margin: EdgeInsets.only({top: 10, bottom: 10}),
      child: new RawMaterialButton({
        child: new Container({
          alignment: Alignment.center,
          child: new Text(name, {
            style: new TextStyle({
              fontSize: 14,
              color: Colors.black,
            }),
          }),
          width: 150,
          height: 50,
        }),
        fillColor: Colors.yellow,
        onPressed: () => {
          Navigator.of(this.context).pushNamed(page)
        },
      }),
    })
  }
}
