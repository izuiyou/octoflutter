import {Color} from '@octoflutter/dartsdk'
import {
  AppBar,
  BuildContext,
  Center,
  FloatingActionButton,
  GestureDetector,
  GlobalKey,
  Icon,
  Icons,
  Key,
  LocalKey,
  MaterialApp,
  MaterialPageRoute,
  ModalRoute,
  Navigator,
  NavigatorState,
  Page,
  Route,
  Scaffold,
  State,
  StatefulWidget,
  StatelessWidget,
  Text,
  ValueKey,
  Widget,
  WidgetBuilder,
} from '@octoflutter/flutter'

class ItemScreen extends StatelessWidget {
  id: number

  constructor(args: {id: number; key?: Key}) {
    super()
    this.id = args.id
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar(),
      backgroundColor: Color.fromARGB(255, 255, 0, 0),
      body: new Center({
        child: new Text(
          'Item:' + this.id + ' ' + ModalRoute.of(context).settings.name
        ),
      }),
    })
  }
}

class CategoryScreen extends StatelessWidget {
  id: number

  constructor(args: {id: number; key?: Key}) {
    super()
    this.id = args.id
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar(),
      backgroundColor: Color.fromARGB(255, 0, 255, 0),
      body: new Center({
        child: new Text(
          'Category:' + this.id + ' ' + ModalRoute.of(context).settings.name
        ),
      }),
    })
  }
}

class HomeScreen extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Color.fromARGB(255, 0, 0, 255),
      body: new Center({
        child: new Text('Home'),
      }),
    })
  }
}

class MyPage<T> extends Page<T> {
  builder: WidgetBuilder
  constructor(args: {key: LocalKey; name: string; builder: WidgetBuilder}) {
    super(args)
    this.builder = args.builder
  }

  createRoute<T>(context: BuildContext): Route<T> {
    window.console.log('KKK createRoute')
    return new MaterialPageRoute({
      builder: this.builder,
      settings: this,
    })
  }
}

export class MyApp extends StatefulWidget {
  constructor(key?: Key) {
    super({key: key})
  }

  createState(): State<any> {
    return new MyAppState()
  }
}

class MyAppState extends State<MyApp> {
  pages = [
    new MyPage({
      key: new Key('/'),
      name: '/',
      builder: (ctx) => {
        window.console.log('KKK builder HomeScreen')
        return new HomeScreen()
      },
    }),
    new MyPage({
      key: new Key('/category/5'),
      name: '/category/5',
      builder: (ctx) => new CategoryScreen({id: 5}),
    }),
    new MyPage({
      key: new Key('/item/15'),
      name: '/item/15',
      builder: (ctx) => new ItemScreen({id: 15}),
    }),
  ]

  initState() {
    console.log('KKK initState:')
  }

  addPage = (page: MyPage<any>) => {
    this.pages.push(page)
    this.pages = Array.from(this.pages)
    this.setState(() => {})
  }

  onPopPage = (route: Route<any>, result: any): boolean => {
    const index = this.pages.indexOf(route.settings as MyPage<any>)
    this.setState(() => {
      this.pages.splice(index, 1)
      console.log('KKK index:' + index + ' len:' + this.pages.length)
    })
    return route.didPop(result)
  }

  onButtonPress = () => {
    const id = ++this._counter
    this.addPage(
      new MyPage({
        key: new ValueKey('/item/' + id),
        name: '/item/' + id,
        builder: (ctx) => new ItemScreen({id: id}),
      })
    )
  }

  _counter = 15

  build = (context: BuildContext): Widget => {
    window.console.log('build:' + this.pages.length)
    this.pages.forEach((v, index, arr) => {
      window.console.log('build:' + v.name)
    })
    return new MaterialApp({
      navigatorKey: navigatorKey,
      home: new Scaffold({
        appBar: new AppBar({
          title: new Text('Navigator'),
          actions: [
            new GestureDetector({
              onTap: this.onButtonPress,
              child: new Icon(Icons.add),
            }),
          ],
        }),
        body: new Navigator({
          pages: this.pages,
          onPopPage: this.onPopPage,
        }),
      }),
    })
  }
}

const navigatorKey = new GlobalKey<NavigatorState>()

export class PageNavigatorPage extends StatelessWidget {
  appKey = new GlobalKey<MyAppState>()

  build(context: BuildContext): Widget {
    return new Scaffold({
      body: new MyApp(this.appKey),
      floatingActionButton: new FloatingActionButton({
        onPressed: () => {
          window.console.log(this.appKey.currentState)
          window.console.log(this.appKey.currentContext)
          window.console.log(this.appKey.currentWidget)
        },
        child: new Icon(Icons.add),
      }),
    })
  }
}
