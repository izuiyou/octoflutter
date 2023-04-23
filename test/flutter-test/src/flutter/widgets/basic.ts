import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Container,
  EdgeInsets,
  GestureDetector,
  ListView,
  Navigator,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
  WidgetBuilder,
} from '@octoflutter/flutter'
import {PageAlign} from './basic/align'
import {PageAspectRatio} from './basic/aspect_ratio'
import {PageBox} from './basic/box'
import {PageClip} from './basic/clip'
import {PageCustomPaint} from './basic/custom_paint'
import {PageDirectionality} from './basic/directionality'
import {PageFlex} from './basic/flex'
import {PageFlexible} from './basic/flexible'
import {PageOpacity} from './basic/opacity'
import {PageRichText} from './basic/rich_text'
import {PageShaderMask} from './basic/shader_mask'
import {PageStack} from './basic/stack'
import {PageTransform} from './basic/transform'
import {PageWrap} from './basic/wrap'
import {PageBackdropFilter} from './basic/backdrop_filter'

export function getBasicRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    ['/widgets/basic/align', (context: BuildContext) => new PageAlign()],
    [
      '/widgets/basic/aspect_ratio',
      (context: BuildContext) => new PageAspectRatio(),
    ],
    [
      '/widgets/basic/backdrop_filter',
      (context: BuildContext) => new PageBackdropFilter(),
    ],
    ['/widgets/basic/box', (context: BuildContext) => new PageBox()],
    ['/widgets/basic/clip', (context: BuildContext) => new PageClip()],
    [
      '/widgets/basic/custom_paint',
      (context: BuildContext) => new PageCustomPaint(),
    ],
    [
      '/widgets/basic/directionality',
      (context: BuildContext) => new PageDirectionality(),
    ],
    ['/widgets/basic/flex', (context: BuildContext) => new PageFlex()],
    ['/widgets/basic/flexible', (context: BuildContext) => new PageFlexible()],
    ['/widgets/basic/opacity', (context: BuildContext) => new PageOpacity()],
    ['/widgets/basic/rich_text', (context: BuildContext) => new PageRichText()],
    [
      '/widgets/basic/shadermask',
      (context: BuildContext) => new PageShaderMask(),
    ],
    ['/widgets/basic/stack', (context: BuildContext) => new PageStack()],
    [
      '/widgets/basic/transform',
      (context: BuildContext) => new PageTransform(),
    ],
    ['/widgets/basic/wrap', (context: BuildContext) => new PageWrap()],
  ])
}

export class PageBasic extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getBasicRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Basic'),
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
              Navigator.of(context).pushNamed(route)
            },
          })
        },
        itemCount: keys.length,
      }),
    })
  }
}
