import {BlurStyle, Matrix4, Offset, Radius} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  AssetImage,
  Border,
  BorderRadius,
  BorderStyle,
  BoxDecoration,
  BoxFit,
  BoxShadow,
  BuildContext,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  DecorationImage,
  EdgeInsets,
  Expanded,
  LinearGradient,
  MainAxisAlignment,
  Row,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
  Wrap,
} from '@octoflutter/flutter'

export class PageContainer extends StatelessWidget {
  build(context: BuildContext): Widget {
    const matrix = Matrix4.identity()
    matrix.translate(0, 150, 0)
    matrix.rotateZ(5)
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Container'),
      }),
      body: new Column({
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          new Container({
            child: new Text('Decoration'),
          }),
          new Container({
            alignment: Alignment.center,
            decoration: new BoxDecoration({
              color: Colors.blue,
              borderRadius: BorderRadius.all(Radius.circular(10)),
            }),
            height: 50,
            padding: EdgeInsets.all(10),
            child: new Row({
              children: [
                new Container({
                  width: 50,
                  height: 50,
                  decoration: new BoxDecoration({
                    color: Colors.red,
                    borderRadius: BorderRadius.all(Radius.circular(10)),
                  }),
                }),
                new Container({
                  width: 100,
                  height: 50,
                  decoration: new BoxDecoration({
                    image: new DecorationImage({
                      image: new AssetImage('icon.png'),
                      fit: BoxFit.cover,
                    }),
                  }),
                  alignment: Alignment.center,
                  child: new Text('DecorationImage'),
                }),
                new Expanded({child: new Wrap({})}),
                new Container({
                  width: 50,
                  height: 50,
                  decoration: new BoxDecoration({
                    color: Colors.red,
                    borderRadius: BorderRadius.all(Radius.circular(10)),
                    border: Border.all({
                      color: Colors.black,
                      width: 2,
                      style: BorderStyle.solid,
                    }),
                  }),
                  margin: EdgeInsets.only({right: 20}),
                }),
              ],
            }),
          }),
          new Container({
            margin: EdgeInsets.all(20),
            alignment: Alignment.center,
            decoration: new BoxDecoration({
              color: Colors.grey,
              borderRadius: BorderRadius.all(Radius.circular(10)),
              boxShadow: [
                new BoxShadow({
                  color: Colors.blue,
                  offset: new Offset(2, 5),
                  blurRadius: 10,
                  blurStyle: BlurStyle.normal,
                }),
                new BoxShadow({
                  color: Colors.red,
                  offset: new Offset(-2, -5),
                  blurRadius: 10,
                  blurStyle: BlurStyle.inner,
                }),
              ],
            }),
            height: 50,
            child: new Text('BoxShadow'),
          }),
          new Container({
            padding: EdgeInsets.all(10),
            margin: EdgeInsets.all(10),
            alignment: Alignment.center,
            decoration: new BoxDecoration({
              color: Colors.grey,
              borderRadius: BorderRadius.all(Radius.circular(10)),
              boxShadow: [
                new BoxShadow({
                  color: Colors.blue,
                  offset: new Offset(2, 5),
                  blurRadius: 10,
                  blurStyle: BlurStyle.normal,
                }),
                new BoxShadow({
                  color: Colors.red,
                  offset: new Offset(-2, -5),
                  blurRadius: 10,
                  blurStyle: BlurStyle.inner,
                }),
              ],
              gradient: new LinearGradient({
                begin: Alignment.centerLeft,
                end: Alignment.bottomRight,
                colors: [Colors.red, Colors.blue],
                stops: [0.5, 0.9],
              }),
            }),
            height: 50,
            child: new Text('BoxShadow + LinearGradient'),
          }),
          new Container({
            alignment: Alignment.center,
            decoration: new BoxDecoration({
              color: Colors.grey,
              borderRadius: BorderRadius.all(Radius.circular(10)),
              boxShadow: [
                new BoxShadow({
                  color: Colors.blue,
                  offset: new Offset(2, 5),
                  blurRadius: 10,
                  blurStyle: BlurStyle.normal,
                }),
                new BoxShadow({
                  color: Colors.red,
                  offset: new Offset(-2, -5),
                  blurRadius: 10,
                  blurStyle: BlurStyle.inner,
                }),
              ],
              gradient: new LinearGradient({
                begin: Alignment.centerLeft,
                end: Alignment.bottomRight,
                colors: [Colors.red, Colors.blue],
                stops: [0.5, 0.9],
              }),
            }),
            height: 50,
            child: new Text('BoxShadow + LinearGradient + Transform'),
            transform: matrix,
            transformAlignment: Alignment.center,
          }),
        ],
      }),
    })
  }
}
