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
import {PageAnimationTest} from './animation/animation'
import {PageTween} from './animation/tween'
import {PageTweenSequence} from './animation/tween_sequence'

export function getAnimationRoutes(): Map<string, WidgetBuilder> {
  return new Map<string, WidgetBuilder>([
    [
      '/animation/animation',
      (context: BuildContext) => new PageAnimationTest(),
    ],
    ['/animation/tween', (context: BuildContext) => new PageTween()],
    [
      '/animation/tween_squence',
      (context: BuildContext) => new PageTweenSequence(),
    ],
  ])
}

export class PageAnimation extends StatelessWidget {
  build(context: BuildContext): Widget {
    const keys = Array.from(getAnimationRoutes().keys())

    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Animation'),
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
