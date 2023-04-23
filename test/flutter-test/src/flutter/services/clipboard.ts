import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Column,
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
  ClipBoard,
  ClipboardData,
  RawMaterialButton,
  MainAxisAlignment,
  CrossAxisAlignment,
} from '@octoflutter/flutter'
import {getDartsdkRoutes} from '../../dartsdk/dartsdk'

class _PageClipBoardState extends State<PageClipBoard> {
  text = ''

  build(context: BuildContext): Widget {
    const keys = Array.from(getDartsdkRoutes().keys())
    return new MaterialApp({
      onGenerateRoute: (settings: RouteSettings) => {
        return new PageRouteBuilder({
          pageBuilder: (ctx, a1, a2) => {
            return new Scaffold({
              backgroundColor: Colors.white,
              appBar: new AppBar({
                title: new Text('PageClipBoard'),
              }),
              body: new Column({
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  new RawMaterialButton({
                    fillColor: Colors.orange,
                    child: new Text('Click To Get ClipBoardData'),
                    onPressed: () => {
                      ClipBoard.getData(ClipBoard.kTextPlain).then((v) => {
                        this.text = v.text
                        this.setState(() => {})
                      })
                    },
                  }),

                  new Container({
                    child: new Text('获取到的内容：' + this.text),
                  }),

                  new RawMaterialButton({
                    child: new Text('Click To Set ClipBoardData: XXXKKK'),
                    fillColor: Colors.orange,
                    onPressed: () => {
                      ClipBoard.setData(new ClipboardData('XXXKKK')).then(
                        (v) => {}
                      )
                    },
                  }),
                ],
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

export class PageClipBoard extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageClipBoardState()
  }
}
