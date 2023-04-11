import {Matrix4} from '@octoflutter/dartsdk'
import {
  Alignment,
  BuildContext,
  Colors,
  Container,
  FloatingActionButton,
  Opacity,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Transform,
  Widget,
} from '@octoflutter/flutter'
import {
  AbsPageTransformer,
  TransformerPageController,
  TransformerPageView,
  TransformInfo,
} from '@octoflutter/octo'
import {commAppBar} from '../common_widgets'
import {kSize18} from '../constants'

export class MobilePageTransformPageView extends StatefulWidget {
  showMobileStyleInWeb: boolean
  constructor(showMobileStyleInWeb?: boolean) {
    super()
    this.showMobileStyleInWeb = showMobileStyleInWeb ?? false
  }

  createState(): State<StatefulWidget> {
    return new _MobilePageTransformPageViewState()
  }
}

const min_scale = 0.8
const min_fade = 0.3

export class TScaleAndFadeTransformer extends AbsPageTransformer {
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

export class _MobilePageTransformPageViewState extends State<MobilePageTransformPageView> {
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
      appBar: commAppBar(
        'PageTransformPageView',
        this.widget.showMobileStyleInWeb
      ),
      body: new TransformerPageView({
        itemCount: 10,
        transformer: new TScaleAndFadeTransformer(),
        pageController: this.ctrl,
        itemBuilder: (ctx, index) => {
          return new Container({
            color: Colors.blue,
            child: new Text('' + index, {
              style: new TextStyle({
                fontSize: kSize18,
                color: Colors.white,
              }),
            }),
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
