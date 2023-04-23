import {
  BlendMode,
  FontWeight,
  Gradient,
  ImageShader,
  Matrix4,
  Offset,
  Rect,
  TileMode,
  isNullOrUndefined,
} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  DefaultTabController,
  Scaffold,
  SchedulerBinding,
  ShaderMask,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {decodeImageFromAsset} from '@octoflutter/octo'
import {Image} from '@octoflutter/dartsdk'

class _PageShaderMaskState extends State<PageShaderMask> {
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
    return new DefaultTabController({
      length: 4,
      initialIndex: 1,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('ShaderMask'),
          bottom: new TabBar({
            tabs: [
              new Tab({text: 'linear'}),
              new Tab({text: 'radial'}),
              new Tab({text: 'sweep'}),
              new Tab({text: 'image'}),
            ],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            new Container({
              alignment: Alignment.center,
              child: new Container({
                child: new ShaderMask({
                  shaderCallback: (bounds) => {
                    return Gradient.linear({
                      from: new Offset(100, 0),
                      to: new Offset(100, 200),
                      colors: [
                        Colors.red,
                        Colors.blue,
                        Colors.grey,
                        Colors.white,
                        Colors.red,
                      ],
                      colorStops: [0, 0.4, 0.41, 0.6, 0.61, 1],
                    })
                  },
                  blendMode: BlendMode.color,
                  child: new Container({
                    child: new Text('Gradient.linear'),
                    alignment: Alignment.center,
                  }),
                }),
                width: 200,
                height: 200,
              }),
            }),
            new Container({
              alignment: Alignment.center,
              child: new Container({
                child: new ShaderMask({
                  shaderCallback: (bounds) => {
                    return Gradient.radial({
                      center: new Offset(100, 100),
                      radius: 100,
                      colors: [
                        Colors.red,
                        Colors.blue,
                        Colors.grey,
                        Colors.white,
                        Colors.red,
                        Colors.black,
                      ],
                      colorStops: [0, 0.4, 0.41, 0.6, 0.61, 1],
                    })
                  },
                  blendMode: BlendMode.color,
                  child: new Container({
                    child: new Text('Gradient.radial'),
                    alignment: Alignment.center,
                  }),
                }),
                width: 200,
                height: 200,
              }),
            }),
            new Container({
              alignment: Alignment.center,
              child: new Container({
                child: new ShaderMask({
                  shaderCallback: (bounds) => {
                    return Gradient.sweep({
                      center: new Offset(100, 100),
                      colors: [Colors.red, Colors.blue],
                      startAngle: Math.PI * 2 * (1.0 / 6.0),
                      endAngle: Math.PI * 2 * (1.0 / 3.0),
                    })
                  },
                  blendMode: BlendMode.color,
                  child: new Container({
                    child: new Text('Gradient.sweep'),
                    alignment: Alignment.center,
                  }),
                }),
                width: 200,
                height: 200,
              }),
            }),

            new Container({
              alignment: Alignment.center,
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
    })
  }
}

export class PageShaderMask extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageShaderMaskState()
  }
}
