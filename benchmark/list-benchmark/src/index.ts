import {Color} from '@octoflutter/dartsdk'
import {
  AppBar,
  BuildContext,
  Center,
  Colors,
  Column,
  CrossAxisAlignment,
  Key,
  MainAxisAlignment,
  MaterialApp,
  runApp,
  Scaffold,
  State,
  StatefulWidget,
  StatelessWidget,
  SystemUiOverlayStyle,
  Text,
  ThemeData,
  Widget,
  Image,
  TextStyle,
  FloatingActionButton,
  Icon,
  Icons,
  WidgetBuilder,
  Alignment,
  Container,
  EdgeInsets,
  RawMaterialButton,
  Navigator,
} from '@octoflutter/flutter'
import {PageListView} from './page_list_view'
import {PageOctoListView} from './page_octo_list'

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
          statusBarColor: Color.fromARGB(255, 103, 78, 167),
        }),
      }),
      body: new Center({
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

            this.btnGo('OctoListView', '/page_octo'),
            this.btnGo('ListView', '/page_list'),
          ],
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

class MyApp extends StatelessWidget {
  constructor(args?: {key?: Key}) {
    super(args)
  }

  build(context: BuildContext): Widget {
    return new MaterialApp({
      title: 'OctoFlutter Demo',
      theme: new ThemeData({
        primarySwatch: Colors.blue,
      }),
      home: new MyHomePage({title: 'OctoFlutter Demo Home Page'}),
      routes: new Map<string, WidgetBuilder>([
        ['/page_octo', (ctx) => new PageOctoListView()],
        ['/page_list', (ctx) => new PageListView()],
      ]),
    })
  }
}

function main() {
  runApp(new MyApp())
}
