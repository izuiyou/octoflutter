import {Matrix4} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  FloatingActionButton,
  Opacity,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  Transform,
  Widget,
} from '@octoflutter/flutter'
import {
  AbsPageTransformer,
  TransformerPageController,
  TransformerPageView,
  TransformInfo,
} from '@octoflutter/octo'

export class PageTransformPageView extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageTransformPageViewState()
  }
}

const min_scale = 0.8
const min_fade = 0.3

class TScaleAndFadeTransformer extends AbsPageTransformer {
  transform(child: Widget, info: TransformInfo): Widget {
    const position = info.position
    const scaleFactor = (1 - Math.abs(position)) * (1 - min_scale)
    const fadeFactor = (1 - Math.abs(position)) * (1 - min_fade)
    const opacity = min_fade + fadeFactor
    const scale = min_scale + scaleFactor
    const matrix = Matrix4.diagonal3Values(scale, scale, 1.0)
    const tx = -20 * position
    matrix.translate(tx, 0, 0)
    return new Opacity({
      opacity: opacity,
      child: new Transform({
        child: child,
        alignment: Alignment.center,
        transform: matrix,
      }),
    })
  }
}

export class _PageTransformPageViewState extends State<PageTransformPageView> {
  ctrl: TransformerPageController
  initState(): void {
    super.initState()
    this.ctrl = new TransformerPageController({
      itemCount: 10,
      viewportFraction: 0.8,
    })
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PageTransformPageView'),
      }),
      body: new TransformerPageView({
        itemCount: 10,
        transformer: new TScaleAndFadeTransformer(),
        pageController: this.ctrl,
        itemBuilder: (ctx, index) => {
          return new Container({
            color: index % 2 === 0 ? Colors.red : Colors.blue,
            child: new Text('' + index),
            alignment: Alignment.center,
          })
        },
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Text('jump'),
        onPressed: () => {
          this.ctrl.jumpTo(5)
        },
      }),
    })
  }
}
