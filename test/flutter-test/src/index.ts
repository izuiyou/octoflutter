import {FontWeight, isNullOrUndefined} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BoxConstraints,
  BuildContext,
  Builder,
  Center,
  CircleBorder,
  Colors,
  Column,
  ConstrainedBox,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  FittedBox,
  MainAxisAlignment,
  MaterialApp,
  Navigator,
  RawMaterialButton,
  Row,
  Scaffold,
  SingleChildScrollView,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
  WidgetBuilder,
  runApp,
} from '@octoflutter/flutter'
import {PageDartSdk, getDartsdkRoutes} from './dartsdk/dartsdk'
import {PageFlutter, getFlutterRoutes} from './flutter/flutter'
import {PageOcto, getOctoRoutes} from './octo/octo'

function getRoutes(): Map<string, WidgetBuilder> {
  const dartsdkRoutes = getDartsdkRoutes()
  const flutterRoutes = getFlutterRoutes()
  const octoRoutes = getOctoRoutes()
  return new Map<string, WidgetBuilder>([
    ...dartsdkRoutes,
    ...flutterRoutes,
    ...octoRoutes,
    ['/dartsdk', (context: BuildContext) => new PageDartSdk()],
    ['/flutter', (context: BuildContext) => new PageFlutter()],
    ['/octo', (context: BuildContext) => new PageOcto()],
  ])
}

class PageHomeState extends State<PageHome> {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('OctoFlutter', {
          style: new TextStyle({
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          }),
        }),
      }),
      body: new Builder({
        builder: (ctx) => {
          return this.contentWidget(ctx)
        },
      }),
    })
  }

  contentWidget = (context: BuildContext): Widget => {
    if (!isNullOrUndefined(this.item)) {
      return new SingleChildScrollView({
        child: new ConstrainedBox({
          constraints: new BoxConstraints({
            minHeight: 500,
            minWidth: Number.POSITIVE_INFINITY,
          }),
          child: new Container({
            child: new Column({
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                new FittedBox({
                  child: new Container({
                    height: 50,
                    padding: EdgeInsets.only({left: 20, right: 20}),
                    alignment: Alignment.centerLeft,
                    child: new Text(
                      this.item.contents[this.indexInItem] + ':',
                      {
                        style: new TextStyle({
                          fontSize: 18,
                          color: Colors.black87,
                          fontWeight: FontWeight.bold,
                        }),
                      }
                    ),
                    color: Colors.orange,
                  }),
                }),
              ],
            }),
          }),
        }),
        scrollDirection: Axis.vertical,
      })
    } else {
      return new Center({
        child: new Row({
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            new RawMaterialButton({
              child: new Container({
                child: new Text('DartSdk'),
                alignment: Alignment.center,
                width: 80,
                height: 80,
              }),
              shape: new CircleBorder(),
              fillColor: Colors.orange,
              highlightColor: Colors.green,
              onPressed: () => {
                Navigator.of(context).pushNamed('/dartsdk')
              },
            }),
            new RawMaterialButton({
              child: new Container({
                child: new Text('Flutter'),
                alignment: Alignment.center,
                width: 80,
                height: 80,
              }),
              shape: new CircleBorder(),
              fillColor: Colors.blue,
              highlightColor: Colors.yellow,
              onPressed: () => {
                Navigator.of(context).pushNamed('/flutter')
              },
            }),
            new RawMaterialButton({
              child: new Container({
                child: new Text('Octo'),
                alignment: Alignment.center,
                width: 80,
                height: 80,
              }),
              shape: new CircleBorder(),
              fillColor: Colors.red,
              highlightColor: Colors.cyan,
              onPressed: () => {
                Navigator.of(context).pushNamed('/octo')
              },
            }),
          ],
        }),
      })
    }
  }
}

class PageHome extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new PageHomeState()
  }
}

function main() {
  runApp(
    new MaterialApp({
      home: new PageHome(),
      routes: getRoutes(),
    })
  )
}
