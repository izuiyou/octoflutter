import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  EdgeInsets,
  FloatingActionButton,
  GestureDetector,
  ListView,
  MaterialApp,
  Navigator,
  PageRouteBuilder,
  RouteSettings,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {getDartsdkRoutes} from '../../dartsdk/dartsdk'

class _PageMaterialAppState extends State<PageMaterialApp> {
  build(context: BuildContext): Widget {
    const keys = Array.from(getDartsdkRoutes().keys())
    return new MaterialApp({
      onGenerateRoute: (settings: RouteSettings) => {
        return new PageRouteBuilder({
          pageBuilder: (ctx, a1, a2) => {
            return new Scaffold({
              backgroundColor: Colors.white,
              appBar: new AppBar({
                title: new Text('MaterialApp'),
              }),
              body: ListView.builder({
                itemBuilder: (ctx, index) => {
                  const c = (index / keys.length) * 255
                  const route = keys[index]
                  return new GestureDetector({
                    child: new Container({
                      padding: EdgeInsets.only({left: 10}),
                      child: new Text(route),
                      color: Color.fromARGB(255, c, 255, 255 - c),
                      height: 50,
                      alignment: Alignment.centerLeft,
                    }),
                    onTap: () => {
                      Navigator.of(ctx).pushNamed(route)
                    },
                  })
                },
                itemCount: keys.length,
              }),

              floatingActionButton: new FloatingActionButton({
                child: new Text('Pop'),
                onPressed: () => {
                  Navigator.of(context).pop()
                },
              }),
            })
          },
        })
      },
      color: Color.fromARGB(255, 255, 255, 0),
      routes: getDartsdkRoutes(),
    })
  }
}

export class PageMaterialApp extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageMaterialAppState()
  }
}
