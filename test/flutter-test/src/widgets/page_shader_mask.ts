import {
  FontWeight,
  Gradient,
  Image,
  ImageShader,
  isNullOrUndefined,
  Matrix4,
  Offset,
  Rect,
  TileMode,
} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BoxDecoration,
  BuildContext,
  Colors,
  Container,
  LinearGradient,
  Row,
  Scaffold,
  SchedulerBinding,
  ShaderMask,
  SingleChildScrollView,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {decodeImageFromAsset} from '@octoflutter/octo'

class PageShaderMaskState extends State<StatefulWidget> {
  image: Image

  initState(): void {
    super.initState()
    decodeImageFromAsset(
      'icon.png',
      (img) => {
        this.image = img
        if (this.mounted) {
          SchedulerBinding.instance.scheduleFrameCallback(() => {
            this.setState(() => {})
          })
        }
      },
      (err) => {}
    )
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({title: new Text('PageShaderMask')}),
      body: new Container({
        child: new SingleChildScrollView({
          scrollDirection: Axis.horizontal,
          child: new Row({
            children: [
              new Container({
                alignment: Alignment.center,
                width: 100,
                child: new ShaderMask({
                  shaderCallback: (bounds: Rect) => {
                    return Gradient.linear({
                      from: new Offset(-1, -1),
                      to: new Offset(1, 1),
                      colors: [Colors.yellow, Colors.blue],
                      tileMode: TileMode.mirror,
                    })
                  },
                  child: new Text('123456789', {
                    style: new TextStyle({
                      fontSize: 50,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    }),
                  }),
                }),
              }),
              new Container({
                width: 100,
                height: 100,
                decoration: new BoxDecoration({
                  gradient: new LinearGradient({
                    colors: [Colors.yellow, Colors.blue],
                  }),
                }),
              }),
              new Container({
                alignment: Alignment.center,
                width: 100,
                child: new ShaderMask({
                  shaderCallback: (bounds: Rect) => {
                    return Gradient.radial({
                      center: new Offset(-1, -1),
                      radius: 10.0,
                      colors: [Colors.yellow, Colors.green],
                      tileMode: TileMode.repeated,
                    })
                  },
                  child: new Text('123456789', {
                    style: new TextStyle({
                      fontSize: 50,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    }),
                  }),
                }),
              }),
              new Container({
                alignment: Alignment.center,
                width: 100,
                child: new ShaderMask({
                  shaderCallback: (bounds: Rect) => {
                    return Gradient.sweep({
                      center: new Offset(0, 0),
                      colors: [
                        Colors.cyan,
                        Colors.orange,
                        Colors.black,
                        Colors.red,
                        Colors.blue,
                      ],
                      tileMode: TileMode.repeated,
                      colorStops: [0.0, 0.25, 0.5, 0.75, 1.0],
                    })
                  },
                  child: new Text('123456789', {
                    style: new TextStyle({
                      fontSize: 50,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    }),
                  }),
                }),
              }),
              new Container({
                alignment: Alignment.center,
                width: 400,
                height: 400,
                color: Colors.red,
                child:
                  isNullOrUndefined(this.image) || kHtmlMode
                    ? new Text('123456789', {
                        style: new TextStyle({
                          fontSize: 50,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        }),
                      })
                    : new ShaderMask({
                        shaderCallback: (bounds: Rect) => {
                          const matrix = Matrix4.identity()
                          matrix.scale(0.5, 0.5, 1)
                          return new ImageShader({
                            image: this.image,
                            tmx: TileMode.clamp,
                            tmy: TileMode.clamp,
                            matrix4: matrix.storage,
                          })
                        },
                        child: new Text(
                          '12345678910\n1112131415\n1617181920\n2122232425',
                          {
                            style: new TextStyle({
                              fontSize: 50,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            }),
                          }
                        ),
                      }),
              }),
            ],
          }),
        }),
        alignment: Alignment.center,
      }),
    })
  }
}

export class PageShaderMask extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new PageShaderMaskState()
  }
}
