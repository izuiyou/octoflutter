import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  CupertinoApp,
  DefaultCupertinoLocalizations,
  DefaultMaterialLocalizations,
  EdgeInsets,
  FloatingActionButton,
  GestureDetector,
  ListView,
  Navigator,
  PageRouteBuilder,
  RouteSettings,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {getDartsdkRoutes} from '../../dartsdk/dartsdk'

class _PageCupertinoAppState extends State<PageCupertinoApp> {
  build(context: BuildContext): Widget {
    const keys = Array.from(getDartsdkRoutes().keys())
    return new CupertinoApp({
      onGenerateRoute: (settings: RouteSettings) => {
        window.console.log(
          'onGenerateRoute:' + settings.name + ' args:' + settings.args
        )

        return new PageRouteBuilder({
          pageBuilder: (ctx, a1, a2) => {
            return new Scaffold({
              backgroundColor: Colors.white,
              appBar: new AppBar({
                title: new Text('CupertinoApp', {
                  style: new TextStyle({fontSize: 18}),
                }),
              }),
              body: new Container({
                child: ListView.builder({
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
                color: Colors.red,
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

      localizationsDelegates: [
        DefaultMaterialLocalizations.delegate,
        DefaultCupertinoLocalizations.delegate,
      ],
      color: Color.fromARGB(255, 255, 255, 0),
      routes: getDartsdkRoutes(),
    })
  }
}

export class PageCupertinoApp extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageCupertinoAppState()
  }
}
